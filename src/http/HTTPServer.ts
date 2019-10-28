import * as http from 'http';
import { Server } from '../server/Server';
import { Authenticator, NoAuthenticator } from '../authenticator';
import winston = require('winston');

export class HTTPServer extends Server<http.Server> {
    constructor(port: number = 80,
        authenticator: Authenticator = new NoAuthenticator(),
        logger?: winston.Logger) {
        super(port, authenticator, logger);
    }

    protected createServer() {
        this._server = http.createServer(this.express);

        this._server.on('close', () => this.onClose.next());
        this._server.on('connection', () => this.onConnection.next());
        this._server.on('error', (error: Error) => this.onError.next(error));
        this._server.on('listening', () => this.onListen.next());

        this.logger.info(`${this.constructor.name}: Server created`);
    }

    public start(): void {
        this._server.listen(this.port);
    }

    public stop(): void {
        this._server.close();
    }
}
