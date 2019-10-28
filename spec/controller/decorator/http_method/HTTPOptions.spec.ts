import { expect } from 'chai';
import { HTTPOptions } from '../../../../src';

class MockHTTPMethod {
    @HTTPOptions('some/path')
    public test() {

    }
}

describe('HTTPOptions', () => {
    let mockHTTPMethod: MockHTTPMethod;

    beforeEach(() => {
        mockHTTPMethod = new MockHTTPMethod();
    });

    it('should be created', () => {
        expect(mockHTTPMethod).to.be.ok;
    });
});
