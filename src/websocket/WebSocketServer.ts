import * as WebSocket from 'ws';
import { IncomingMessage } from 'http';
import { Subject } from 'rxjs';
import { Server } from '../server/Server';
import { HTTPServer } from '../http/HTTPServer';

export class WebSocketServer extends Server<WebSocket.Server> {
    public onListening: Subject<null> = new Subject();

    private httpServer: HTTPServer;
    private wsServer: WebSocket.Server;

    protected createServer(): void {
        this.httpServer = new HTTPServer(this.port);

        this.wsServer = new WebSocket.Server({
            server: this.httpServer.server
        });

        this.wsServer.on('listening', () => this.onListening.next());

        this.wsServer.on('connection', (connection: WebSocket, request: IncomingMessage) => {
            this.onConnection.next({
                connection: connection,
                request: request
            } as any);
        });
    }

    public start(): void {
        this.httpServer.start();
    }

    public stop(): void {
        this.httpServer.stop();
    }
}
