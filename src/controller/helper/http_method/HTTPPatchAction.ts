import { HTTPAction } from './HTTPAction';

export class HTTPPatchAction extends HTTPAction {
    getMethodName(): string {
        return 'patch';
    }
}
