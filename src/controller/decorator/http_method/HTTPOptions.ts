import { HTTPOptionsAction } from '../../helper/http_method/HTTPOptionsAction';
import { assign } from './assign';

export function HTTPOptions(path: string): Function {
    return assign(path, HTTPOptionsAction);
}
