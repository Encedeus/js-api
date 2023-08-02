import { AxiosInstance } from "axios";
import { Role } from "../types/role";
import {
    BadRequestError,
    InternalServerError,
    ResourceNotFoundError,
    ResourcePermanentlyDeletedError,
    UnauthorisedError
} from "./errors";

export type MissingUserPermissionError = UnauthorisedError;
export type RoleDeletedError = ResourcePermanentlyDeletedError;
export type RoleNotFoundError = ResourceNotFoundError;

export type CreateRoleError = MissingUserPermissionError | BadRequestError | RoleNotFoundError | InternalServerError | null;
export type FindRoleError = RoleDeletedError | BadRequestError | RoleNotFoundError | InternalServerError | null;
export type UpdateRoleError = UnauthorisedError | BadRequestError | RoleNotFoundError | RoleDeletedError | InternalServerError | null;
export type DeleteRoleError = UnauthorisedError | BadRequestError | RoleNotFoundError | RoleDeletedError | InternalServerError | null;

export type FindRoleResponse = {
    role?: Role;
    error?: FindRoleError;
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

    async createRole(role: Role): Promise<CreateRoleError> {
        const resp = await this.api.post("/role", role).catch(err => err.response);
        let error: CreateRoleError = null;

        switch (resp.status) {
        case 401:
            error = new UnauthorisedError(resp.data.message);
            break;
        case 400:
            error = new BadRequestError(resp.data.message);
            break;
        case 404:
            error = new ResourceNotFoundError(resp.data.message);
            break;
        case 500:
            error = new InternalServerError(resp.data.message);
            break;
        }

        return error;
    }

    async getRole(roleId: number): Promise<FindRoleResponse> {
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

        let error: FindRoleError = null;
        switch (resp.status) {
        case 404:
            error = new ResourceNotFoundError(resp.data.message);
            break;
        case 400:
            error = new BadRequestError(resp.data.message);
            break;
        case 410:
            error = new ResourcePermanentlyDeletedError(resp.data.message);
            break;
        case 500:
            error = new InternalServerError(resp.data.message);
            break;
        }

        return {
            error,
        };
    }

    async updateRole(updateRoleDto: UpdateRoleDto): Promise<UpdateRoleError> {
        const resp = await this.api.patch("/role", updateRoleDto).catch(err => err.response);

        let error: UpdateRoleError = null;
        switch (resp.status) {
        case 401:
            error = new UnauthorisedError(resp.data.message);
            break;
        case 400:
            error = new BadRequestError(resp.data.message);
            break;
        case 410:
            error = new ResourcePermanentlyDeletedError(resp.data.message);
            break;
        case 404:
            error = new ResourceNotFoundError(resp.data.message);
            break;
        case 500:
            error = new InternalServerError(resp.data.message);
            break;
        }

        return error;
    }

    async deleteRole(roleId: number): Promise<DeleteRoleError> {
        const resp = await this.api.delete(`/role/:${roleId}`).catch(err => err.response);

        let error: DeleteRoleError = null;
        switch (resp.status) {
        case 401:
            error = new UnauthorisedError(resp.data.message);
            break;
        case 400:
            error = new BadRequestError(resp.data.message);
            break;
        case 410:
            error = new ResourcePermanentlyDeletedError(resp.data.message);
            break;
        case 404:
            error = new ResourceNotFoundError(resp.data.message);
            break;
        case 500:
            error = new InternalServerError(resp.data.message);
            break;
        }

        return error;
    }
}