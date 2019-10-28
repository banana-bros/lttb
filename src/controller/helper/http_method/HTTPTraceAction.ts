import { HTTPAction } from './HTTPAction';

export class HTTPTraceAction extends HTTPAction {
    getMethodName(): string {
        return 'trace';
    }
}
