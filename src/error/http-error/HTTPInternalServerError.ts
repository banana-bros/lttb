import { HTTPError } from './HTTPError';

export class HTTPInternalServerError extends HTTPError {
    constructor(message: string = null) {
        super(500, 'Internal Server Error', message);
    }
}
