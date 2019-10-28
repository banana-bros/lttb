import { expect } from 'chai';
import { Controller } from '../../src';

class MockController extends Controller<void> {

}

describe('Controller', () => {
    let controller: MockController;

    beforeEach(() => {
        controller = new MockController();
    });

    it('should be created', () => {
        expect(controller).to.be.ok;
    });
});
