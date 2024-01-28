import { AxiosInstance } from "axios";
import {
    BadRequestError,
    ErrorCheck, ErrorCheckResponse,
    HttpError,
    InternalServerError, UnauthorisedError
} from "./errors";
import { RoleNotFoundError } from "./role_service";
import {
    UserChangeEmailRequest,
    UserChangeEmailResponse,
    UserChangePasswordRequest, UserChangePasswordResponse, UserChangeUsernameRequest, UserChangeUsernameResponse,
    UserCreateRequest,
    UserDeleteRequest,
    UserFindOneRequest,
    UserFindOneResponse,
    UserUpdateRequest
} from "../proto/user_api";
import { WrongPasswordError } from "./auth_service";

export const UsernameTakenError = new HttpError(409, "UsernameTakenError", "Username has been taken");
export const UserNotFoundError = new HttpError(404, "UserNotFoundError", "User not found error");
export const UserDeletedError = new HttpError(410, "UserDeletedError", "User has been deleted");

export function isUserDeletedError(error: HttpError): boolean {
    return error === UserDeletedError;
}

export function isUserNotFoundError(error: HttpError): boolean {
    return error === UserNotFoundError;
}

export function isUsernameTakenError(error: HttpError): boolean {
    return error === UsernameTakenError;
}

export function isDeleteUserError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
    case UserNotFoundError.statusCode:
        return {ok: true, error: RoleNotFoundError};
    case UserDeletedError.statusCode:
        return {ok: true, error: RoleNotFoundError};
    case UnauthorisedError.statusCode:
        return {ok: true, error: UnauthorisedError};
    case BadRequestError.statusCode:
        return {ok: true, error: BadRequestError};
    case InternalServerError.statusCode:
        return {ok: true, error: InternalServerError};
    }

    return {
        ok: false,
    };
}

export function isSetPfpError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
    case UserNotFoundError.statusCode:
        return {ok: true, error: RoleNotFoundError};
    case UnauthorisedError.statusCode:
        return {ok: true, error: UnauthorisedError};
    case BadRequestError.statusCode:
        return {ok: true, error: BadRequestError};
    case InternalServerError.statusCode:
        return {ok: true, error: InternalServerError};
    }

    return {
        ok: false,
    };
}

export function isUpdateUserError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
    case RoleNotFoundError.statusCode:
        return {ok: true, error: RoleNotFoundError};
    case UnauthorisedError.statusCode:
        return {ok: true, error: UnauthorisedError};
    case UserDeletedError.statusCode:
        return {ok: true, error: UserDeletedError};
    case BadRequestError.statusCode:
        return {ok: true, error: BadRequestError};
    case InternalServerError.statusCode:
        return {ok: true, error: InternalServerError};
    }

    return {
        ok: false,
    };
}

export function isFindUserError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
    case UserNotFoundError.statusCode:
        return {ok: true, error: RoleNotFoundError};
    case UserDeletedError.statusCode:
        return {ok: true, error: UsernameTakenError};
    case InternalServerError.statusCode:
        return {ok: true, error: InternalServerError};
    }

    return {
        ok: false,
    };
}

export function isCreateUserError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
    case RoleNotFoundError.statusCode:
        return {ok: true, error: RoleNotFoundError};
    case UsernameTakenError.statusCode:
        return {ok: true, error: UsernameTakenError};
    case UnauthorisedError.statusCode:
        return {ok: true, error: UnauthorisedError};
    case BadRequestError.statusCode:
        return {ok: true, error: BadRequestError};
    case InternalServerError.statusCode:
        return {ok: true, error: InternalServerError};
    }

    return {
        ok: false,
    };
}

export function isChangePasswordError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
    case UserNotFoundError.statusCode:
        return {ok: true, error: UserNotFoundError};
    case BadRequestError.statusCode:
        return {ok: true, error: new HttpError(400, "BadRequestError", (err as HttpError).message)};
    case InternalServerError.statusCode:
        return {ok: true, error: InternalServerError};
    case WrongPasswordError.statusCode:
        return {ok: true, error: WrongPasswordError};
    case UnauthorisedError.statusCode:
        return { ok: true, error: UnauthorisedError };
    }

    return {
        ok: false,
    };
}

export function isChangeUsernameError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
    case UserNotFoundError.statusCode:
        return {ok: true, error: UserNotFoundError};
    case BadRequestError.statusCode:
        return {ok: true, error: new HttpError(400, "BadRequestError", (err as HttpError).message)};
    case InternalServerError.statusCode:
        return {ok: true, error: InternalServerError};
    case UnauthorisedError.statusCode:
        return {ok: true, error: UnauthorisedError};
    }

    return {
        ok: false,
    };
}

export function isChangeEmailError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
    case UserNotFoundError.statusCode:
        return {ok: true, error: UserNotFoundError};
    case BadRequestError.statusCode:
        return {ok: true, error: new HttpError(400, "BadRequestError", (err as HttpError).message)};
    case InternalServerError.statusCode:
        return {ok: true, error: InternalServerError};
    case UnauthorisedError.statusCode:
        return {ok: true, error: UnauthorisedError};
    }

    return {
        ok: false,
    };
}

export type FindUserResponse = {
    error?: HttpError;
    response?: UserFindOneResponse;
}

export type ChangePasswordResponse = {
    error?: HttpError;
    response?: UserChangePasswordResponse;
}

export type ChangeUsernameResponse = {
    error?: HttpError;
    response?: UserChangeUsernameResponse;
}

export type ChangeEmailResponse = {
    error?: HttpError;
    response?: UserChangeEmailResponse;
}

export class UsersService {
    private api: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.api = axiosInstance;
    }

    async createUser(createReq: UserCreateRequest): Promise<HttpError | undefined> {
        const resp = await this.api.post("/user", createReq).catch(err => err.response);

        return isCreateUserError(resp.status).error;
    }

    async findUserById(findOneReq: UserFindOneRequest): Promise<FindUserResponse> {
        const resp = await this.api.get(`/user/${findOneReq.userId?.value}`).catch(err => err.response);

        if (resp.status !== 200) {
            return {
                error: isFindUserError(resp.status).error,
            };
        }

        return {
            response: resp.data as UserFindOneResponse,
        };
    }

    async updateUser(updateReq: UserUpdateRequest): Promise<HttpError | undefined> {
        const resp = await this.api.patch("/user", updateReq).catch(err => err.response);

        return isUpdateUserError(resp.status).error;
    }

    async deleteUser(deleteReq: UserDeleteRequest): Promise<HttpError | undefined> {
        const resp = await this.api.delete(`/user/${deleteReq.userId?.value}`).catch(err => err.response);

        return isDeleteUserError(resp.status).error;
    }

    async setPfp(userId: string, pfp: Blob): Promise<HttpError | undefined> {
        const resp = await this.api.put("/user", {
            uuid: userId,
            file: pfp,
        }, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).catch(err => err.response);

        return isSetPfpError(resp.status).error;
    }

    async changePassword(changeReq: UserChangePasswordRequest): Promise<ChangePasswordResponse> {
        const resp = await this.api.patch(`/user/${changeReq.userId?.value}/changePassword`, changeReq).catch(err => err.response);

        const {ok, error} = isChangePasswordError(resp.status);
        if (ok) {
            return {
                error,
            };
        }

        return {
            response: resp.data as UserChangePasswordResponse,
        };
    }

    async changeEmail(changeReq: UserChangeEmailRequest): Promise<ChangeEmailResponse> {
        const resp = await this.api.patch(`/user/${changeReq.userId?.value}/changeEmail`, changeReq).catch(err => err.response);

        const {ok, error} = isChangeEmailError(resp.status);
        if (ok) {
            return {
                error,
            };
        }

        return {
            response: resp.data as UserChangeEmailResponse,
        };
    }

    async changeUsername(changeReq: UserChangeUsernameRequest): Promise<ChangeUsernameResponse> {
        const resp = await this.api.patch(`/user/${changeReq.userId?.value}/changeUsername`, changeReq).catch(err => err.response);

        const {ok, error} = isChangeUsernameError(resp.status);
        if (ok) {
            return {
                error,
            };
        }

        return {
            response: resp.data as UserChangeUsernameResponse,
        };
    }
}
