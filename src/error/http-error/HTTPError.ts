export abstract class HTTPError implements Error {
    public code: number;
    public name: string;
    public message: string;

    constructor(code: number, name: string, message: string) {
        this.code = code;
        this.name = name;
        this.message = message;
    }
}
