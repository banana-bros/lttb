import { HTTPDeleteAction } from '../../helper/http_method/HTTPDeleteAction';
import { assign } from './assign';

export function HTTPDelete(path: string): Function {
    return assign(path, HTTPDeleteAction);
}
