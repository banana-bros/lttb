import { HTTPAction } from './HTTPAction';

export class HTTPConnectAction extends HTTPAction {
    getMethodName(): string {
        return 'connect';
    }
}
