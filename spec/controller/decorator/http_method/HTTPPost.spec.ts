import { expect } from 'chai';
import { HTTPPost } from '../../../../src';

class MockHTTPMethod {
    @HTTPPost('some/path')
    public test() {

    }
}

describe('HTTPPost', () => {
    let mockHTTPMethod: MockHTTPMethod;

    beforeEach(() => {
        mockHTTPMethod = new MockHTTPMethod();
    });

    it('should be created', () => {
        expect(mockHTTPMethod).to.be.ok;
    });
});
