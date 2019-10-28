import { expect } from 'chai';
import { SecureWebSocketServer } from '../../src';

describe('SecureWebSocketServer', () => {
    let secureWebSocketServer: SecureWebSocketServer;

    beforeEach(() => {
        secureWebSocketServer = new SecureWebSocketServer(110, 'certs/server.crt', 'certs/server.key');
    });

    it('should be created', () => {
        expect(secureWebSocketServer).to.be.ok;
    });
});
