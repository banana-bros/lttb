import { expect } from 'chai';
import { HTTPResponse } from '../../../src';

describe('HTTPResponse', () => {
    let httpResponse: HTTPResponse;

    beforeEach(() => {
        httpResponse = new HTTPResponse(null, null);
    });

    it('should be created', () => {
        expect(httpResponse).to.be.ok;
    });
});
