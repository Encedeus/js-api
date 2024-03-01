import { AxiosInstance } from "axios";
import {
    BadRequestError,
    ErrorCheck, ErrorCheckResponse, getErrorFromResponse,
    HttpError,
    InternalServerError
} from "./errors";
import {
    RoleCreateRequest,
    RoleDeleteRequest, RoleFindAllResponse,
    RoleFindOneRequest,
    RoleFindOneResponse,
    RoleUpdateRequest
} from "../proto/role_api";

export const MissingUserPermissionsError = new HttpError(401, "MissingUserPermissionsError", "user doesn't have required permissions");
export const RoleDeletedError = new HttpError(410, "RoleDeletedError", "role has been deleted");
export const RoleNotFoundError = new HttpError(404, "RoleNotFoundError", "role not found");

export function isRoleNotFoundError(error: HttpError) {
    return error === RoleNotFoundError;
}

export function isRoleDeletedError(error: HttpError) {
    return error === RoleDeletedError;
}

export function isMissingUserPermissionsError(error: HttpError): boolean {
    return error === MissingUserPermissionsError;
}

export function isDeleteRoleError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
        case MissingUserPermissionsError.statusCode:
            return { ok: true, error: MissingUserPermissionsError };
        case BadRequestError.statusCode:
            return { ok: true, error: BadRequestError }
        case RoleNotFoundError.statusCode:
            return { ok: true, error: RoleNotFoundError }
        case RoleDeletedError.statusCode:
            return { ok: true, error: RoleDeletedError }
        case InternalServerError.statusCode:
            return { ok: true, error: InternalServerError }
    }

    return {
        ok: false,
    };
}

export function isUpdateRoleError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
        case MissingUserPermissionsError.statusCode:
            return { ok: true, error: MissingUserPermissionsError };
        case BadRequestError.statusCode:
            return { ok: true, error: BadRequestError }
        case RoleNotFoundError.statusCode:
            return { ok: true, error: RoleNotFoundError }
        case RoleDeletedError.statusCode:
            return { ok: true, error: RoleDeletedError }
        case InternalServerError.statusCode:
            return { ok: true, error: InternalServerError }
    }

    return {
        ok: false,
    };
}

export function isCreateRoleError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
        case MissingUserPermissionsError.statusCode:
            return { ok: true, error: MissingUserPermissionsError };
        case BadRequestError.statusCode:
            return { ok: true, error: BadRequestError }
        case RoleNotFoundError.statusCode:
            return { ok: true, error: RoleNotFoundError }
        case InternalServerError.statusCode:
            return { ok: true, error: InternalServerError }
    }

    return {
        ok: false,
    };
}

export function isFindRoleError(err: ErrorCheck): ErrorCheckResponse {
    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {
        case RoleDeletedError.statusCode:
            return { ok: true, error: MissingUserPermissionsError };
        case BadRequestError.statusCode:
            return { ok: true, error: BadRequestError }
        case RoleNotFoundError.statusCode:
            return { ok: true, error: RoleNotFoundError }
        case InternalServerError.statusCode:
            return { ok: true, error: InternalServerError }
    }

    return {
        ok: false,
    }
}

export type FindRoleResponse = {
    response?: RoleFindOneResponse;
    error?: HttpError;
}

export type FindAllRolesResponse = {
    response?: RoleFindAllResponse;
    error?: HttpError;
}

export class RoleService {
    private api: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.api = axiosInstance;
    }

    async createRole(createReq: RoleCreateRequest): Promise<HttpError | undefined> {
        const resp = await this.api.post("/role", createReq).catch(err => err.response);

        return isCreateRoleError(resp.status).error;
    }

    async findRoleById(findReq: RoleFindOneRequest): Promise<FindRoleResponse> {
        const resp = await this.api.get(`/role/${findReq.id?.value}`).catch(err => err.response);
        if (resp.status === 200) {
            return {
                response: resp.data as RoleFindOneResponse
            };
        }

        return {
            error: isFindRoleError(resp.status).error,
        };
    }

    async updateRole(updateReq: RoleUpdateRequest): Promise<HttpError | undefined> {
        const resp = await this.api.patch("/role", updateReq).catch(err => err.response);

        return isUpdateRoleError(resp.status).error;
    }

    async deleteRole(deleteReq: RoleDeleteRequest): Promise<HttpError | undefined> {
        const resp = await this.api.delete(`/role/:${deleteReq.id?.value}`).catch(err => err.response);

        return isDeleteRoleError(resp.status).error;
    }

    async findAllRoles(): Promise<FindAllRolesResponse> {
        const resp = await this.api.get(`/role`).catch(err => err.response);

        if (resp.status == 200) {
            const response = resp.data as RoleFindAllResponse

            return {response};
        }

        return {error: getErrorFromResponse(resp)};
    }
}