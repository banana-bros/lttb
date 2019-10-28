import { HTTPHeadAction } from '../../helper/http_method/HTTPHeadAction';
import { assign } from './assign';

export function HTTPHead(path: string): Function {
    return assign(path, HTTPHeadAction);
}
