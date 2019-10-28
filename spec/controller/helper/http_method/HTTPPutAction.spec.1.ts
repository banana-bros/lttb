import { expect } from 'chai';
import { HTTPPatchAction } from '../../../../src';

describe('HTTPPatchAction', () => {
    let httpPutAction: HTTPPatchAction;

    beforeEach(() => {
        httpPutAction = new HTTPPatchAction(null, null);
    });

    it('should be created', () => {
        expect(httpPutAction).to.be.ok;
    });
});
