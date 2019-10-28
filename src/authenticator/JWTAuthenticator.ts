import { Authenticator } from './Authenticator';
import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import * as bcrypt from 'bcrypt';
import { Repository } from '../repository/Repository';
import { HTTPResponse } from '../controller/helper/HTTPResponse';

export interface JWTAuthenticatorOptions<T> {
    repository: Repository<T[]>;
    identificationKey: keyof T;
    passwordKey: keyof T;
    secret: string;
    expiresIn: number;
}

export class JWTAuthenticator<T> extends Authenticator {
    private options: JWTAuthenticatorOptions<T>;

    constructor(path: string, options: JWTAuthenticatorOptions<T>) {
        super(path);

        this.options = options;
    }

    public isAuthenticated(request: Request, response: Response): boolean {
        const authorizationHeader = request.headers['authorization'] as string;
        let isAuthenticated = false;

        if (authorizationHeader) {
            isAuthenticated = this.parseAuthorizationHeader(authorizationHeader);
        }

        return isAuthenticated;
    }

    private parseAuthorizationHeader(authorizationHeader: string): boolean {
        try {
            const authorization = authorizationHeader.split(' ');
            return this.checkAuthorizationBearer(authorization);
        } catch (err) {
            return false;
        }
    }

    private checkAuthorizationBearer(authorization: string[]): boolean {
        if (authorization[0] === 'Bearer') {
            jwt.verify(authorization[1], this.options.secret);
            return true;
        } else {
            return false;
        }
    }

    public authenticate(request: Request, response: Response): HTTPResponse {
        const loginToken = this.getLoginToken(request, response);
        const result = {
            auth: (loginToken != null),
            token: loginToken
        };

        if (result.auth) {
            return new HTTPResponse(result);
        } else {
            return new HTTPResponse(result, 401);
        }
    }

    private getLoginToken(request: Request, response: Response): string {
        const identification = request.body[this.options.identificationKey];
        const password = request.body[this.options.passwordKey];
        const foundUser = this.options.repository.getData().find(user => user[this.options.identificationKey] === identification);

        if (!foundUser) {
            return null;
        }

        const passwordIsValid = bcrypt.compareSync(password, foundUser[this.options.passwordKey].toString());

        if (!passwordIsValid) {
            return null;
        }

        const token = jwt.sign({ identification: identification }, this.options.secret, {
            expiresIn: this.options.expiresIn
        });

        return token;
    }

    public unauthenticate(request: Request, response: Response): void {

    }
}
