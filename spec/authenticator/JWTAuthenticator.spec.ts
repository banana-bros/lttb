import { expect } from 'chai';
import { JWTAuthenticator, Repository } from '../../src';

interface User {
    id?: number;
    password?: string;
}

describe('JWTAuthenticator', () => {
    let jwtAuthenticator: JWTAuthenticator<User>;

    beforeEach(() => {
        jwtAuthenticator = new JWTAuthenticator('/authenticate', {
            identificationKey: 'id',
            passwordKey: 'password',
            repository: new Repository<User[]>([]),
            secret: 'some-secret',
            expiresIn: 86400
        });
    });

    it('should be created', () => {
        expect(jwtAuthenticator).to.be.ok;
    });
});
