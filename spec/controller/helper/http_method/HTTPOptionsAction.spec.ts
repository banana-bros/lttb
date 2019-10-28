import { expect } from 'chai';
import { HTTPOptionsAction } from '../../../../src';

describe('HTTPOptionsAction', () => {
    let httpOptionsAction: HTTPOptionsAction;

    beforeEach(() => {
        httpOptionsAction = new HTTPOptionsAction(null, null);
    });

    it('should be created', () => {
        expect(httpOptionsAction).to.be.ok;
    });
});
