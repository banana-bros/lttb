import { HTTPPostAction } from '../../helper/http_method/HTTPPostAction';
import { assign } from './assign';

export function HTTPPost(path: string): Function {
    return assign(path, HTTPPostAction);
}
