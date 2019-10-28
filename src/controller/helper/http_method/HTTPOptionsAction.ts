import { HTTPAction } from './HTTPAction';

export class HTTPOptionsAction extends HTTPAction {
    getMethodName(): string {
        return 'options';
    }
}
