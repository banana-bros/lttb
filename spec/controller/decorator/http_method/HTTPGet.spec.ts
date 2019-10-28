import { expect } from 'chai';
import { HTTPGet } from '../../../../src';

class MockHTTPMethod {
    @HTTPGet('some/path')
    public test() {

    }
}

describe('HTTPGet', () => {
    let mockHTTPMethod: MockHTTPMethod;

    beforeEach(() => {
        mockHTTPMethod = new MockHTTPMethod();
    });

    it('should be created', () => {
        expect(mockHTTPMethod).to.be.ok;
    });
});
