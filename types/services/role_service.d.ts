import { AxiosInstance } from "axios";
import { Role } from "../types/role";
export declare enum CreateRoleErrors {
    MISSING_USER_PERMISSION = 401,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}
export declare enum GetRoleErrors {
    ROLE_DELETED = 410,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}
export type GetRoleResponse = {
    role?: Role;
    error?: GetRoleErrors | null;
};
export declare enum UpdateRoleErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    ROLE_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500
}
export declare enum DeleteRoleErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    ROLE_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500
}
export type UpdateRoleDto = {
    name: string;
    permissions: string[];
    id: number;
};
export declare class RoleService {
    private api;
    constructor(axiosInstance: AxiosInstance);
    createRole(role: Role): Promise<CreateRoleErrors>;
    getRole(roleId: number): Promise<GetRoleResponse>;
    updateRole(updateRoleDto: UpdateRoleDto): Promise<UpdateRoleErrors>;
    deleteRole(roleId: number): Promise<DeleteRoleErrors>;
}
