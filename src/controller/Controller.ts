import { HTTPAction } from './helper/http_method/HTTPAction';
import { Server } from '../server/Server';
import { Request, Response, RequestHandler } from 'express';
import { HTTPError } from '../error/http-error/HTTPError';
import { HTTPInternalServerError } from '../error/http-error/HTTPInternalServerError';
import { HTTPUnauthorizedError } from '../error/http-error/HTTPUnauthorizedError';
import { HTTPResponse } from './helper/HTTPResponse';
import { BodyParser } from '../body-parser/BodyParser';

export abstract class Controller<T> {
    public actions: HTTPAction[];
    public authenticatedActions: Set<string>;
    public dataPassing: Map<string, BodyParser>;

    protected repository: T;

    constructor(repository: T) {
        this.repository = repository;
        if (!this.actions) {
            this.actions = [];
        }
        if (!this.authenticatedActions) {
            this.authenticatedActions = new Set<string>();
        }
    }

    public registerActions(server: Server<any>) {
        for (const action of this.actions) {
            const serverMethod = action.getServerMethod(server);

            this.registerAction(action, server, serverMethod);
        }
    }

    protected registerAction(action: HTTPAction, server: Server<any>,
        serverMethod: (path: string, ...handlers: RequestHandler[]) => void): void {
        let method: (request: Request, response: Response) => void;
        let data: any;

        console.log(this.dataPassing);

        if (this.authenticatedActions.has(action.method)) {
            method = (request: Request, response: Response) => {
                if (this.dataPassing.has(action.method)) {
                    data = this.dataPassing.get(action.method).transform(request);
                }
                this.handleAuthenticatedRequest(action, server, request, response, data);
            };
        } else {
            method = (request: Request, response: Response) => {
                if (this.dataPassing.has(action.method)) {
                    data = this.dataPassing.get(action.method).transform(request);
                }
                this.handleUnauthenticatedRequest(action, server, request, response, data);
            };
        }

        serverMethod(action.path, method);
    }

    private handleAuthenticatedRequest(action: HTTPAction, server: Server<any>, request: Request, response: Response, data?: any): void {
        this.handleRequest(server, response, () => {
            if (server.isAuthenticated(request, response)) {
                return this[action.method](request, response, data);
            } else {
                throw new HTTPUnauthorizedError();
            }
        });
    }

    private handleUnauthenticatedRequest(action: HTTPAction, server: Server<any>, request: Request, response: Response, data?: any): void {
        this.handleRequest(server, response, () => {
            return this[action.method](request, response, data);
        });
    }

    private async handleRequest(server: Server<any>, response: Response, requestFn: () => any): Promise<void> {
        let httpResponse: HTTPResponse;

        try {
            let res = requestFn();

            if (res instanceof Promise) {
                res = await res;
            }

            if (res instanceof HTTPResponse) {
                httpResponse = res;
            } else {
                httpResponse = new HTTPResponse(res);
            }
        } catch (error) {
            httpResponse = this.handleRequestError(server, error);
        } finally {
            if (httpResponse) {
                httpResponse.sendResponse(response);
            }
        }
    }

    private handleRequestError(server: Server<any>, error: Error): HTTPResponse {
        server.logger.error(error.name);

        if (!(error instanceof HTTPError)) {
            server.logger.error(error.stack);
            const stack = error.stack;
            error = new HTTPInternalServerError();
            error.stack = stack;
        }

        return new HTTPResponse(null, (error as HTTPError).code);
    }
}
