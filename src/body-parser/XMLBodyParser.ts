import { Request } from 'express';
import { BodyParser } from './BodyParser';

export class XMLBodyParser extends BodyParser {
    public transform(request: Request): any {
        return request.body;
    }
}
