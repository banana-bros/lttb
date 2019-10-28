import { expect } from 'chai';
import { HTTPError } from '../../../src';

class MockHTTPError extends HTTPError {

}

describe('HTTPError', () => {
    let httpError: MockHTTPError;

    beforeEach(() => {
        httpError = new MockHTTPError(null, null, null);
    });

    it('should be created', () => {
        expect(httpError).to.be.ok;
    });
});
