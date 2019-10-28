import { expect } from 'chai';
import { HTTPDelete } from '../../../../src';

class MockHTTPMethod {
    @HTTPDelete('some/path')
    public test() {

    }
}

describe('HTTPDelete', () => {
    let mockHTTPMethod: MockHTTPMethod;

    beforeEach(() => {
        mockHTTPMethod = new MockHTTPMethod();
    });

    it('should be created', () => {
        expect(mockHTTPMethod).to.be.ok;
    });
});
