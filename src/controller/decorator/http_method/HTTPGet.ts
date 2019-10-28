import { HTTPGetAction } from '../../helper/http_method/HTTPGetAction';
import { assign } from './assign';

export function HTTPGet(path: string): Function {
    return assign(path, HTTPGetAction);
}
