import { expect } from 'chai';
import { HTTPTrace } from '../../../../src';

class MockHTTPMethod {
    @HTTPTrace('some/path')
    public test() {

    }
}

describe('HTTPTrace', () => {
    let mockHTTPMethod: MockHTTPMethod;

    beforeEach(() => {
        mockHTTPMethod = new MockHTTPMethod();
    });

    it('should be created', () => {
        expect(mockHTTPMethod).to.be.ok;
    });
});
