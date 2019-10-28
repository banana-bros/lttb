import { expect } from 'chai';
import { HTTPInternalServerError } from '../../../src';

describe('HTTPInternalServerError', () => {
    let httpInternalServerError: HTTPInternalServerError;

    beforeEach(() => {
        httpInternalServerError = new HTTPInternalServerError(null);
    });

    it('should be created', () => {
        expect(httpInternalServerError).to.be.ok;
    });
});
