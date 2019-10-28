import { Authenticator } from './Authenticator';
import { HTTPResponse } from '../controller/helper/HTTPResponse';
import { Request, Response } from 'express';
import { Server } from '../server/Server';

export class NoAuthenticator extends Authenticator {
    constructor() {
        super('');
    }

    public isAuthenticated(request: Request, response: Response): boolean {
        return true;
    }

    public authenticate(request: Request, response: Response): HTTPResponse {
        return new HTTPResponse();
    }

    public unauthenticate(request: Request, response: Response): void {

    }

    public registerServer(server: Server<any>): void {
        server.logger.info(`${server.constructor.name}: ${this.constructor.name} skipped registration`);
    }
}
