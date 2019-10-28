import { expect } from 'chai';
import { HTTPSServer } from '../../src';

describe('HTTPSServer', () => {
    let httpsServer: HTTPSServer;

    beforeEach(() => {
        httpsServer = new HTTPSServer(110, 'certs/server.crt', 'certs/server.key');
    });

    it('should be created', () => {
        expect(httpsServer).to.be.ok;
    });
});
