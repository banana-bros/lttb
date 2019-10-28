import { Request } from 'express';
import { BodyParser } from './BodyParser';

export class FormDataBodyParser extends BodyParser {
    public transform(request: Request): any {
        return request.body;
    }
}
