import { Controller } from '../../Controller';
import { BodyParser } from '../../../body-parser/BodyParser';
import { XMLBodyParser } from '../../../body-parser/XMLBodyParser';

export function XMLBody(): Function {
    return function (target: Controller<any>, propertyKey: string, descriptor: PropertyDescriptor) {
        if (!target.dataPassing) {
            target.dataPassing = new Map<string, BodyParser>();
        }
        target.dataPassing.set(propertyKey, new XMLBodyParser());
    };
}
