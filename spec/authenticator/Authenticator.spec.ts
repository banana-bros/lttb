import { expect } from 'chai';
import { Authenticator } from '../../src';
import { HTTPResponse } from '../../src/controller/helper/HTTPResponse';
import { Request, Response } from 'express';

class MockAuthenticator extends Authenticator {
    public isAuthenticated(request: Request, response: Response): boolean {
        return true;
    }

    public authenticate(request: Request, response: Response): HTTPResponse {
        return new HTTPResponse();
    }

    public unauthenticate(request: Request, response: Response): void {

    }
}

describe('Authenticator', () => {
    let authenticator: Authenticator;

    beforeEach(() => {
        authenticator = new MockAuthenticator();
    });

    it('should be created', () => {
        expect(authenticator).to.be.ok;
    });
});
