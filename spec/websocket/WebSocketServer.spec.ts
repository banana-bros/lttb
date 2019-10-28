import { expect } from 'chai';
import { WebSocketServer } from '../../src';

describe('WebSocketServer', () => {
    let webSocketServer: WebSocketServer;

    beforeEach(() => {
        webSocketServer = new WebSocketServer(110);
    });

    it('should be created', () => {
        expect(webSocketServer).to.be.ok;
    });
});
