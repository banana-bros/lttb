import { expect } from 'chai';
import * as WebSocket from 'ws';
import { ConnectionEvent } from '../../src';
import { IncomingMessage } from 'http';

class MockConnectionEvent implements ConnectionEvent {
    connection: WebSocket;
    request: IncomingMessage;
}

describe('ConnectionEvent', () => {
    let connectionEvent: ConnectionEvent;

    beforeEach(() => {
        connectionEvent = new MockConnectionEvent();
    });

    it('should be created', () => {
        expect(connectionEvent).to.be.ok;
    });
});
