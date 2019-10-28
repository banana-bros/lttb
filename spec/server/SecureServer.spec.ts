import { expect } from 'chai';
import { SecureServer } from '../../src';

class MockSecureServer extends SecureServer<void> {
    public start(): void {

    }

    public stop(): void {

    }

    protected createServer(): void {

    }
}

describe('SecureServer', () => {
    let secureServer: MockSecureServer;

    beforeEach(() => {
        secureServer = new MockSecureServer(110, 'certs/server.crt', 'certs/server.key');
    });

    it('should be created', () => {
        expect(secureServer).to.be.ok;
    });
});
