import { HTTPAction } from './HTTPAction';

export class HTTPDeleteAction extends HTTPAction {
    getMethodName(): string {
        return 'delete';
    }
}
