import { expect } from 'chai';
import { HTTPUnauthorizedError } from '../../../src';

describe('HTTPUnauthorizedError', () => {
    let httpUnauthorizedError: HTTPUnauthorizedError;

    beforeEach(() => {
        httpUnauthorizedError = new HTTPUnauthorizedError(null);
    });

    it('should be created', () => {
        expect(httpUnauthorizedError).to.be.ok;
    });
});
