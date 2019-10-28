export class AuthenticatedAction {
    public method: string;

    constructor(method: string) {
        this.method = method;
    }

    /*public getServerMethod(server: Server<any>): (path: string, ...handlers: RequestHandler[]) => void {
        const application = server.getExpress();
        const methodName = this.getMethodName();

        if (!application || !application[methodName]) {
            throw new Error(`Server Method ${methodName} not found`);
        }
        return application[methodName].bind(application);
    }*/
}
