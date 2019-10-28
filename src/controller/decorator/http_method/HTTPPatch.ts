import { HTTPPatchAction } from '../../helper/http_method/HTTPPatchAction';
import { assign } from './assign';

export function HTTPPatch(path: string): Function {
    return assign(path, HTTPPatchAction);
}
