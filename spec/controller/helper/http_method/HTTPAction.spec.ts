import { expect } from 'chai';
import { HTTPAction } from '../../../../src';

class MockHTTPAction extends HTTPAction {
    public getMethodName(): string {
        return null;
    }
}

describe('HTTPAction', () => {
    let mockHTTPAction: MockHTTPAction;

    beforeEach(() => {
        mockHTTPAction = new MockHTTPAction(null, null);
    });

    it('should be created', () => {
        expect(mockHTTPAction).to.be.ok;
    });
});
