import { HTTPAction } from './HTTPAction';

export class HTTPPostAction extends HTTPAction {
    getMethodName(): string {
        return 'post';
    }
}
