import { HTTPConnectAction } from '../../helper/http_method/HTTPConnectAction';
import { assign } from './assign';

export function HTTPConnect(path: string): Function {
    return assign(path, HTTPConnectAction);
}
