export * from './authenticator/index';
export * from './body-parser/index';
export * from './controller/index';
export * from './enum/index';
export * from './error/index';
export * from './http/index';
export * from './repository/index';
export * from './server/index';
export * from './websocket/index';

import { Request, Response } from 'express';
import { Repository } from './repository';
import { Controller, HTTPGet, HTTPResponse, JSONBody } from './controller';
import { HTTP_STATUS } from './enum';
import { HTTPForbiddenError } from './error';
import { HTTPServer } from './http';

interface User {
    name: string;
    password: string;
}

class UserRepository extends Repository<User[]> {
    public async getAsyncData(): Promise<User[]> {
        return this.data;
    }
}

interface Test {
    id: number;
}

class UserController extends Controller<UserRepository> {
    /**
     * Define a GET-method for the url /users.
     */
    @JSONBody()
    @HTTPGet('/users')
    public getUsers(request: Request, response: Response, data: Test): User[] {
        console.log(request);
        return this.repository.getData();
    }

    /**
     * Define a asynchronous GET-method for the url /async-users.
     */
    @HTTPGet('/async-users')
    public async getAsyncUsers(): Promise<User[]> {
        return await this.repository.getAsyncData();
    }

    /**
     * Define a asynchronous GET-method for the url /async-users-with-http-response and a custom http code
     */
    @HTTPGet('/async-users-with-http-response')
    public async getAsyncUsersWithHTTPResponse(): Promise<HTTPResponse> {
        const data = await this.repository.getAsyncData();

        return new HTTPResponse(data, HTTP_STATUS.CODE_202_ACCEPTED);
    }

    /**
     * Define a GET-method for the url /faulty-users which throws a HTTP error.
     * None HTTP errors are automatically transformed to HTTP 500 error.
     */
    @HTTPGet('/faulty-method')
    public faultyMethod(): HTTPResponse {
        throw new HTTPForbiddenError();

        return null;
    }
}

const userRepository = new UserRepository([{
    name: 'admin',
    password: 'the-cake-is-a-lie'
}]);
const userController = new UserController(userRepository);

const httpServer = new HTTPServer();
httpServer.registerController(userController);
httpServer.start();
