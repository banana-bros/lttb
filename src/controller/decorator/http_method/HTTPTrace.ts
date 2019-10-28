import { HTTPTraceAction } from '../../helper/http_method/HTTPTraceAction';
import { assign } from './assign';

export function HTTPTrace(path: string): Function {
    return assign(path, HTTPTraceAction);
}
