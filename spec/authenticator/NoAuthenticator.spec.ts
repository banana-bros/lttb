import { expect } from 'chai';
import { NoAuthenticator, Repository } from '../../src';

interface User {
    id?: number;
    password?: string;
}

describe('NoAuthenticator', () => {
    let noAuthenticator: NoAuthenticator;

    beforeEach(() => {
        noAuthenticator = new NoAuthenticator();
    });

    it('should be created', () => {
        expect(noAuthenticator).to.be.ok;
    });
});
