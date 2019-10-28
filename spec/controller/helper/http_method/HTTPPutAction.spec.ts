import { expect } from 'chai';
import { HTTPPutAction } from '../../../../src';

describe('HTTPPutAction', () => {
    let httpPutAction: HTTPPutAction;

    beforeEach(() => {
        httpPutAction = new HTTPPutAction(null, null);
    });

    it('should be created', () => {
        expect(httpPutAction).to.be.ok;
    });
});
