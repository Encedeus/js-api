import { AxiosInstance } from "axios";
import { BadRequestError, ErrorCheck, ErrorCheckResponse, HttpError, InternalServerError } from "./errors";
import { UserDeletedError, UserNotFoundError } from "./users_service";

export const AccountApiKeyNotFoundError = new HttpError(404, "AccountApiKeyNotFound", "Account API key not found");
export const AccountApiKeyDeletedError = new HttpError(410, "AccountApiKeyDeleted", "Account API key was deleted");

export type CreateAccountApiKeyResponse = {
    error?: HttpError;
    key?: string;
}

export type DeleteAccountApiKeyResponse = {
    error?: HttpError;
}

export type FindOneAccountApiKeyResponse = {
    error?: HttpError;
    key?: string;
}

export type FindManyAccountApiKeysResponse = {
    error?: HttpError;
    keys?: string[];
}

export function isFindManyAccountApiKeysError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? err.statusCode : err) {
        case BadRequestError.statusCode:
            return {
                ok: true,
                error: BadRequestError,
            };
        case InternalServerError.statusCode:
            return {
                ok: true,
                error: InternalServerError,
            };
        case UserNotFoundError.statusCode:
            return {
                ok: true,
                error: UserNotFoundError,
            }
        case UserDeletedError.statusCode:
            return {
                ok: true,
                error: UserDeletedError,
            }
    }

    return {
        ok: false,
    };
}

export function isCreateAccountApiKeyError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? err.statusCode : err) {
        case BadRequestError.statusCode:
            return {
                ok: true,
                error: BadRequestError,
            };
        case InternalServerError.statusCode:
            return {
                ok: true,
                error: InternalServerError,
            };
    }

    return {
        ok: false,
    };
}

export function isDeleteAccountApiKeyError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? err.statusCode : err) {
        case BadRequestError.statusCode:
            return {
                ok: true, error: BadRequestError
            };
        case InternalServerError.statusCode:
            return {
                ok: true,
                error: InternalServerError
            };
        case AccountApiKeyDeletedError.statusCode:
            return {
                ok: true,
                error: AccountApiKeyDeletedError,
            };
    }

    return {
        ok: false,
    };
}

export class ApiKeyService {
    private api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }

    async createAccountApiKey(): Promise<CreateAccountApiKeyResponse> {
        const resp = await this.api.post("/key/account").catch(err => err.response);
        if (resp.status !== 201) {
            return {
                error: isCreateAccountApiKeyError(resp.status).error,
            };
        }

        return {
            key: resp.data.key,
        };
    }

    async deleteAccountApiKey(keyId: string): Promise<DeleteAccountApiKeyResponse> {
        const resp = await this.api.delete(`/key/account/${keyId}`).catch(err => err.response);

        if (resp.status !== 200) {
            return {
                error: isDeleteAccountApiKeyError(resp.status).error,
            }
        }

        return {};
    }

/*    async findOneAccountApiKey(keyId: string): Promise<FindOneAccountApiKeyResponse> {
        const resp = await this.api.get(`/key/account/${keyId}`).catch(err => err.response);
    }*/

    async findAccountApiKeysByUserId(userId: string): Promise<FindManyAccountApiKeysResponse> {
        const resp = await this.api.get(`/key/account/${userId}`).catch(err => err.response);

        if (resp.status !== 200) {
            return {
                error: isFindManyAccountApiKeysError(resp.status).error,
            }
        }

        return {};
    }
}