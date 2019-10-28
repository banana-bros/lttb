import { expect } from 'chai';
import { HTTPPut } from '../../../../src';

class MockHTTPMethod {
    @HTTPPut('some/path')
    public test() {

    }
}

describe('HTTPPut', () => {
    let mockHTTPMethod: MockHTTPMethod;

    beforeEach(() => {
        mockHTTPMethod = new MockHTTPMethod();
    });

    it('should be created', () => {
        expect(mockHTTPMethod).to.be.ok;
    });
});
