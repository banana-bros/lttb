export class Repository<T> {
    protected data: T;

    constructor(data: T) {
        this.data = data;
    }

    getData() {
        return this.data;
    }
}
