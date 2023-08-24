export declare class HttpError extends Error {
    private readonly _statusCode;
    constructor(statusCode: number, name: string, message: string, options?: ErrorOptions);
    get statusCode(): number;
}
export type ErrorCheck = HttpError | number;
export type ErrorCheckResponse = {
    ok: boolean;
    error: HttpError | null;
};
export declare const InternalServerError: HttpError;
export declare const BadRequestError: HttpError;
export declare const UnauthorisedError: HttpError;
export declare function isInternalServerError(err: HttpError): boolean;
export declare function isBadRequestError(err: HttpError): boolean;
export declare function isUnauthorisedError(err: HttpError): boolean;
