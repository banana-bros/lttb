import { HTTPAction } from './HTTPAction';

export class HTTPPutAction extends HTTPAction {
    getMethodName(): string {
        return 'put';
    }
}
