import { HTTPPutAction } from '../../helper/http_method/HTTPPutAction';
import { assign } from './assign';

export function HTTPPut(path: string): Function {
    return assign(path, HTTPPutAction);
}
