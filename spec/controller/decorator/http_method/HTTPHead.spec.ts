import { expect } from 'chai';
import { HTTPHead } from '../../../../src';

class MockHTTPMethod {
    @HTTPHead('some/path')
    public test() {

    }
}

describe('HTTPHead', () => {
    let mockHTTPMethod: MockHTTPMethod;

    beforeEach(() => {
        mockHTTPMethod = new MockHTTPMethod();
    });

    it('should be created', () => {
        expect(mockHTTPMethod).to.be.ok;
    });
});
