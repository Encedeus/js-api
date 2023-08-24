export class HttpError extends Error {
    private readonly _statusCode: number;

    constructor(statusCode: number, name: string, message: string, options?: ErrorOptions) {
        super(message, options);
        this._statusCode = statusCode;
        this.name = name;
    }

    get statusCode(): number {
        return this._statusCode;
    }
}

export type ErrorCheck = HttpError | number;

export type ErrorCheckResponse = {
    ok: boolean;
    error: HttpError | null;
}

export const InternalServerError = new HttpError(500, "InternalServerError", "Internal server error");
export const BadRequestError = new HttpError(400, "BadRequestError", "Invalid request data");
export const UnauthorisedError = new HttpError(403, "UnauthorisedError", "Invalid access token");

//generate code to check if an HttpError is one of the above by status code
export function isInternalServerError(err: HttpError): boolean {
    return err.statusCode === InternalServerError.statusCode;
}

export function isBadRequestError(err: HttpError): boolean {
    return err.statusCode === BadRequestError.statusCode;
}

export function isUnauthorisedError(err: HttpError): boolean {
    return err.statusCode === UnauthorisedError.statusCode;
}

/*
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
*/
