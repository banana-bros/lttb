import { Response, Request } from 'express';
import { HTTPResponse } from '../controller/helper/HTTPResponse';
import { Server } from '../server/Server';

export abstract class Authenticator {
    protected _path: string;
    get path(): string {
        return this._path;
    }

    constructor(path?: string) {
        this._path = path;
    }

    public abstract isAuthenticated(request: Request, response: Response): boolean;
    public abstract authenticate(request: Request, response: Response): HTTPResponse;
    public abstract unauthenticate(request: Request, response: Response): void;

    public registerServer(server: Server<any>): void {
        const message = `${server.constructor.name}: ${this.constructor.name}`;

        if (!this._path) {
            server.logger.warn(`${message} could not be registered (no path)`);
            return;
        }

        server.express.post(this._path, (request: Request, response: Response) => {
            const httpResponse = this.authenticate(request, response);
            httpResponse.sendResponse(response);
        });

        server.logger.info(`${message} registered`);
    }
}
