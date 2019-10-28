import { expect } from 'chai';
import { HTTPPatch } from '../../../../src';

class MockHTTPMethod {
    @HTTPPatch('some/path')
    public test() {

    }
}

describe('HTTPPatch', () => {
    let mockHTTPMethod: MockHTTPMethod;

    beforeEach(() => {
        mockHTTPMethod = new MockHTTPMethod();
    });

    it('should be created', () => {
        expect(mockHTTPMethod).to.be.ok;
    });
});
