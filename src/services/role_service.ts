import { AxiosInstance } from "axios";
import { Role } from "../types/role";

export enum CreateRoleErrors {
    MISSING_USER_PERMISSION = 401,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    OK = 201,
}

export enum GetRoleErrors {
    ROLE_DELETED = 410,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    OK = 200,
}

export type GetRoleResponse = {
    role?: Role;
    error: GetRoleErrors;
}

export enum UpdateRoleErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    ROLE_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500,
    OK = 200,
}

export enum DeleteRoleErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    ROLE_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500,
    OK = 200,
}

export type UpdateRoleDTO = {
    name: string;
    permissions: string[];
    id: number;
}

export class RoleService {
    private api: AxiosInstance;

    public constructor(axiosInstance: AxiosInstance) {
        this.api = axiosInstance;
    }

    public async createRole(role: Role): Promise<CreateRoleErrors> {
        const resp = await this.api.post("/role", role).catch(err => err.response);
        return CreateRoleErrors[resp.status] as unknown as CreateRoleErrors;
    }

    public async getRole(roleId: number): Promise<GetRoleResponse> {
        const resp = await this.api.get(`/role/${roleId}`).catch(err => err.response);
        if (resp.status === 200) {
            return {
                role: new Role()
                    .setName(resp.data.name)
                    .setPermissions(resp.data.permissions)
                    .setCreatedAt(new Date(resp.data.createdAt))
                    .setUpdatedAt(new Date(resp.data.updatedAt)),
                error: GetRoleErrors.OK,
            }
        }

        return {
            error: GetRoleErrors[resp.status] as unknown as GetRoleErrors,
        }
    }

    public async updateRole(updateRoleDto: UpdateRoleDTO): Promise<UpdateRoleErrors> {
        const resp = await this.api.patch("/role", updateRoleDto).catch(err => err.response);
        return UpdateRoleErrors[resp.status] as unknown as UpdateRoleErrors;
    }

    public async deleteRole(roleId: number): Promise<DeleteRoleErrors> {
        const resp = await this.api.delete(`/role/:${roleId}`).catch(err => err.response);
        return DeleteRoleErrors[resp.status] as unknown as DeleteRoleErrors;
    }
}