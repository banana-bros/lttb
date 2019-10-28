import { HTTPError } from './HTTPError';

export class HTTPUnauthorizedError extends HTTPError {
    constructor(message: string = null) {
        super(401, 'Unauthorized', message);
    }
}
