import { Request } from 'express';

export abstract class BodyParser {
    public abstract transform(request: Request): any;
}
