import * as https from 'https';
import { SecureServer } from '../server/SecureServer';
import { Authenticator, NoAuthenticator } from '../authenticator';
import * as winston from 'winston';

export class HTTPSServer extends SecureServer<https.Server> {
    protected httpsServer: https.Server;

    constructor(port: number = 443,
        certificate: string | Buffer | (string | Buffer)[],
        key: string | Buffer | (string | Buffer)[],
        authenticator: Authenticator = new NoAuthenticator(),
        logger?: winston.Logger) {

        super(port, certificate, key, authenticator, logger);
    }

    protected createServer(): void {
        this._server = https.createServer({
            cert: this.certificate,
            key: this.key,
            rejectUnauthorized: false,
        }, this.express);

        this.logger.info(`${this.constructor.name}: Server created`);
    }

    public start(): void {
        this._server.listen(this.port);
    }

    public stop(): void {
        this._server.close();
    }
}
