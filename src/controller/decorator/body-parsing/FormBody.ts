import { Controller } from '../../Controller';
import { BodyParser } from '../../../body-parser/BodyParser';
import { FormDataBodyParser } from '../../../body-parser/FormDataBodyParser';

export function FormDataBody(): Function {
    return function (target: Controller<any>, propertyKey: string, descriptor: PropertyDescriptor) {
        if (!target.dataPassing) {
            target.dataPassing = new Map<string, BodyParser>();
        }
        target.dataPassing.set(propertyKey, new FormDataBodyParser());
    };
}
