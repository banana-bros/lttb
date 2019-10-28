import { expect } from 'chai';
import { HTTPTraceAction } from '../../../../src';

describe('HTTPTraceAction', () => {
    let httpTraceAction: HTTPTraceAction;

    beforeEach(() => {
        httpTraceAction = new HTTPTraceAction(null, null);
    });

    it('should be created', () => {
        expect(httpTraceAction).to.be.ok;
    });
});
