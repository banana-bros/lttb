import { expect } from 'chai';
import { HTTPServer } from '../../src';

describe('HTTPServer', () => {
    let httpServer: HTTPServer;

    beforeEach(() => {
        httpServer = new HTTPServer(110);
    });

    it('should be created', () => {
        expect(httpServer).to.be.ok;
    });
});
