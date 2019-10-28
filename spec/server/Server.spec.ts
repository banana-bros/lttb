import { expect } from 'chai';
import { Server } from '../../src';

class MockServer extends Server<void> {
    public start(): void {

    }

    public stop(): void {

    }

    protected createServer(): void {

    }
}

describe('Server', () => {
    let server: MockServer;

    beforeEach(() => {
        server = new MockServer(110);
    });

    it('should be created', () => {
        expect(server).to.be.ok;
    });
});
