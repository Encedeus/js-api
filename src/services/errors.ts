abstract class HttpError extends Error {
    private readonly _statusCode: number;

    protected constructor(statusCode: number, name: string, message: string, options?: ErrorOptions) {
        super(message, options);
        this._statusCode = statusCode;
        this.name = name;
    }

    get statusCode(): number {
        return this._statusCode;
    }
}

export class BadRequestError extends HttpError {
    constructor(message: string, options?: ErrorOptions) {
        super(400, "UsernameOrEmailNotSpecifiedError", message, options);
    }
}

export class ResourceNotFoundError extends HttpError {
    constructor(message: string, options?: ErrorOptions) {
        super(404, "ResourceNotFoundError", message, options);
    }
}

export class InternalServerError extends HttpError {
    constructor(message: string, options?: ErrorOptions) {
        super(500, "InternalServerError", message, options);
    }
}

export class UnauthorisedError extends HttpError {
    constructor(message: string, options?: ErrorOptions) {
        super(401, "UnauthorisedError", message, options);
    }
}

export class ResourcePermanentlyDeletedError extends HttpError {
    constructor(message: string, options?: ErrorOptions) {
        super(410, "ResourcePermanentlyDeletedError", message, options);
    }
}

export class ConflictError extends HttpError {
    constructor(message: string, options?: ErrorOptions) {
        super(409, "ConflictError", message, options);
    }
}
