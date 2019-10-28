import { Controller } from '../../Controller';
import { HTTPAction } from '../../helper';

export function assign(path: string, HTTPActionClass: new (path: string, propertyKey: string) => HTTPAction): Function {
    return function (target: Controller<any>, propertyKey: string, descriptor: PropertyDescriptor) {
        if (!target.actions) {
            target.actions = [];
        }

        target.actions.push(new HTTPActionClass(path, propertyKey));
    };
}
