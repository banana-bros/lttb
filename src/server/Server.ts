import { Subject } from 'rxjs';
import { first } from 'rxjs/operators';
import * as express from 'express';
import { Controller } from '../controller/Controller';
import bodyParser = require('body-parser');
import { Authenticator, NoAuthenticator } from '../authenticator';
import * as winston from 'winston';

const defaultLogger: winston.Logger = winston.createLogger({
    format: winston.format.cli(),
    transports: [
        new winston.transports.Console()
    ]
});

export abstract class Server<T> {
    public onClose: Subject<null> = new Subject();
    public onConnection: Subject<null> = new Subject();
    public onError: Subject<Error> = new Subject();
    public onListen: Subject<null> = new Subject();

    protected _running = false;
    get running(): boolean {
        return this._running;
    }

    protected _port: number;
    get port(): number {
        return this._port;
    }
    set port(port: number) {
        if (this._running) {
            throw Error('Unable to set port as server is still running');
        }
        this._port = port;
    }

    protected _logger: winston.Logger;
    get logger(): winston.Logger {
        return this._logger;
    }
    set logger(logger: winston.Logger) {
        this._logger = logger;
    }

    protected _authenticator: Authenticator;
    get authenticator(): Authenticator {
        return this._authenticator;
    }
    set authenticator(authenticator: Authenticator) {
        this._authenticator = authenticator;
    }

    protected _express: express.Express;
    get express(): express.Express {
        return this._express;
    }

    protected _server: T;
    get server(): T {
        return this._server;
    }

    protected controllers: Controller<any>[] = [];

    constructor(port: number, authenticator: Authenticator = new NoAuthenticator(), logger: winston.Logger = defaultLogger) {
        this._port = port;
        this._authenticator = authenticator;
        this._logger = logger;

        this._express = express();
        this._express.use(bodyParser.json());
        this._express.use(bodyParser.urlencoded({ extended: true }));

        this.onError.subscribe((error: Error) => {
            this._logger.error(error);
        });

        this.createServer();
        this.registerAuthorization();
        this.startListening();
    }

    public abstract start(): void;
    public abstract stop(): void;
    protected abstract createServer(): void;

    protected startListening(): void {
        this.onListen.subscribe(() => this._running = true);
        this.onClose.subscribe(() => this._running = false);

        this.onListen.pipe(
            first()
        )
        .subscribe(_ => this._logger.info(`${this.constructor.name}: Listening on port ${this.port}`));
        this.onClose.pipe(
            first()
        )
        .subscribe(_ => this._logger.info(`${this.constructor.name}: Server closed`));
    }

    protected registerAuthorization(): void {
        this._authenticator.registerServer(this);
    }

    public isAuthenticated(request: express.Request, response: express.Response): boolean {
        return this._authenticator.isAuthenticated(request, response);
    }

    public registerController(controller: Controller<any>): Server<T> {
        this.controllers.push(controller);
        controller.registerActions(this);

        this.logger.info(`${this.constructor.name}: ${controller.constructor.name} registered`);
        return this;
    }
}
