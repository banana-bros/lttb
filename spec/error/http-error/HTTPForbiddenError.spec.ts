import { expect } from 'chai';
import { HTTPForbiddenError } from '../../../src';

describe('HTTPForbiddenError', () => {
    let httpForbiddenError: HTTPForbiddenError;

    beforeEach(() => {
        httpForbiddenError = new HTTPForbiddenError(null);
    });

    it('should be created', () => {
        expect(httpForbiddenError).to.be.ok;
    });
});
