import { AxiosInstance } from "axios";
import { User } from "../types/user";
import {
    BadRequestError,
    ErrorCheck, ErrorCheckResponse,
    HttpError,
    InternalServerError, UnauthorisedError
} from "./errors";
import { RoleNotFoundError } from "./role_service";

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
            return { ok: true, error: RoleNotFoundError };
        case UserDeletedError.statusCode:
            return { ok: true, error: RoleNotFoundError };
        case UnauthorisedError.statusCode:
            return { ok: true, error: UnauthorisedError };
        case BadRequestError.statusCode:
            return { ok: true, error: BadRequestError };
        case InternalServerError.statusCode:
            return { ok: true, error: InternalServerError };
    }

    return {
        ok: false,
    };
}

export function isSetPfpError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
        case UserNotFoundError.statusCode:
            return { ok: true, error: RoleNotFoundError };
        case UnauthorisedError.statusCode:
            return { ok: true, error: UnauthorisedError };
        case BadRequestError.statusCode:
            return { ok: true, error: BadRequestError };
        case InternalServerError.statusCode:
            return { ok: true, error: InternalServerError };
    }

    return {
        ok: false,
    };
}

export function isUpdateUserError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
        case RoleNotFoundError.statusCode:
            return { ok: true, error: RoleNotFoundError };
        case UnauthorisedError.statusCode:
            return { ok: true, error: UnauthorisedError };
        case UserDeletedError.statusCode:
            return { ok: true, error: UserDeletedError };
        case BadRequestError.statusCode:
            return { ok: true, error: BadRequestError };
        case InternalServerError.statusCode:
            return { ok: true, error: InternalServerError };
    }

    return {
        ok: false,
    };
}

export function isFindUserError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
        case UserNotFoundError.statusCode:
            return { ok: true, error: RoleNotFoundError };
        case UserDeletedError.statusCode:
            return { ok: true, error: UsernameTakenError };
        case InternalServerError.statusCode:
            return { ok: true, error: InternalServerError };
    }

    return {
        ok: false,
    };
}

export function isCreateUserError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
        case RoleNotFoundError.statusCode:
            return { ok: true, error: RoleNotFoundError };
        case UsernameTakenError.statusCode:
            return { ok: true, error: UsernameTakenError };
        case UnauthorisedError.statusCode:
            return { ok: true, error: UnauthorisedError };
        case BadRequestError.statusCode:
            return { ok: true, error: BadRequestError };
        case InternalServerError.statusCode:
            return { ok: true, error: InternalServerError };
    }

    return {
        ok: false,
    };
}

export type CreateUserDto = {
    name: string;
    email: string;
    password: string;
    roleId: number;
    roleName: string;
}

export type UpdateUserDto = {
    id: string,
    name: string,
    email: string,
    password: string,
    roleId: number,
    roleName: number,
}

export type FindUserResponse = {
    error?: HttpError | null;
    user?: User;
}

export class UsersService {
    private api: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.api = axiosInstance;
    }

    async createUser(createUserDto: CreateUserDto): Promise<HttpError | undefined> {
        const resp = await this.api.post("/user", createUserDto).catch(err => err.response);

        return isCreateUserError(resp.status).error;
    }

    async findUserById(userId: string): Promise<FindUserResponse> {
        const resp = await this.api.get(`/user/${userId}`).catch(err => err.response);

        if(resp.status !== 200) {
            return {
                error: isFindUserError(resp.status).error,
            };
        }

        return {
            user: resp.data as User,
        };
    }

    async updateUser(updateUserDto: UpdateUserDto): Promise<HttpError | undefined> {
        const resp = await this.api.patch("/user", updateUserDto).catch(err => err.response);

        return isUpdateUserError(resp.status).error;
    }

    async deleteUser(userId: string): Promise<HttpError | undefined> {
        const resp = await this.api.delete(`/user/${userId}`).catch(err => err.response);

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
}
