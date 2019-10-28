import { HTTPAction } from './HTTPAction';

export class HTTPHeadAction extends HTTPAction {
    getMethodName(): string {
        return 'head';
    }
}
