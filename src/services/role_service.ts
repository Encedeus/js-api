import { AxiosInstance } from "axios";
import { Role } from "../types/role";
import {
    BadRequestError,
    ErrorCheck, ErrorCheckResponse,
    HttpError,
    InternalServerError
} from "./errors";

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
        error: null,
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
        error: null,
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
        error: null,
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
        error: null,
    }
}

export type FindRoleResponse = {
    role?: Role;
    error?: HttpError | null;
}

export type UpdateRoleDto = {
    name: string;
    permissions: string[];
    id: number;
}

export class RoleService {
    private api: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.api = axiosInstance;
    }

    async createRole(role: Role): Promise<HttpError | null> {
        const resp = await this.api.post("/role", role).catch(err => err.response);

        return isCreateRoleError(resp.status).error;
    }

    async findRoleById(roleId: number): Promise<FindRoleResponse> {
        const resp = await this.api.get(`/role/${roleId}`).catch(err => err.response);
        if (resp.status === 200) {
            return {
                role: new Role()
                    .setName(resp.data.name)
                    .setPermissions(resp.data.permissions)
                    .setCreatedAt(new Date(resp.data.createdAt))
                    .setUpdatedAt(new Date(resp.data.updatedAt)),
            };
        }

        return {
            error: isFindRoleError(resp.status).error,
        };
    }

    async updateRole(updateRoleDto: UpdateRoleDto): Promise<HttpError | null> {
        const resp = await this.api.patch("/role", updateRoleDto).catch(err => err.response);

        return isUpdateRoleError(resp.status).error;
    }

    async deleteRole(roleId: number): Promise<HttpError | null> {
        const resp = await this.api.delete(`/role/:${roleId}`).catch(err => err.response);

        return isDeleteRoleError(resp.status).error;
    }
}