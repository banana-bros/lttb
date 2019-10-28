import { Request } from 'express';
import { BodyParser } from './BodyParser';

export class JSONBodyParser extends BodyParser {
    public transform(request: Request): any {
        return request.body;
    }
}
