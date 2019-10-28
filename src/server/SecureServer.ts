import { Server } from './Server';
import { Authenticator, NoAuthenticator } from '../authenticator';
import * as winston from 'winston';

export abstract class SecureServer<T> extends Server<T> {
    protected _certificate: string | Buffer | (string | Buffer)[];
    get certificate(): string | Buffer | (string | Buffer)[] {
        return this._certificate;
    }
    set certificate(certificate: string | Buffer | (string | Buffer)[]) {
        if (this._running) {
            throw Error('Unable to set port as server is still running');
        }
        this._certificate = certificate;
    }

    protected _key: string | Buffer | (string | Buffer)[];
    get key(): string | Buffer | (string | Buffer)[] {
        if (this._running) {
            throw Error('Unable to set port as server is still running');
        }
        return this._key;
    }
    set key(key: string | Buffer | (string | Buffer)[]) {
        this._key = key;
    }

    constructor(port: number,
        certificate: string | Buffer | (string | Buffer)[],
        key: string | Buffer | (string | Buffer)[],
        authenticator: Authenticator = new NoAuthenticator(),
        logger?: winston.Logger) {

        super(port, authenticator, logger);
        this._certificate = certificate;
        this._key = key;
    }
}
