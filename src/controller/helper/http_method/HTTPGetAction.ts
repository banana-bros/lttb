import { HTTPAction } from './HTTPAction';

export class HTTPGetAction extends HTTPAction {
    getMethodName(): string {
        return 'get';
    }
}
