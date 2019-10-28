import * as WebSocket from 'ws';
import { IncomingMessage } from 'http';

export interface ConnectionEvent {
    connection: WebSocket;
    request: IncomingMessage;
}
