import { HTTPError } from './HTTPError';

export class HTTPForbiddenError extends HTTPError {
    constructor(message: string = null) {
        super(403, 'Forbidden', message);
    }
}
