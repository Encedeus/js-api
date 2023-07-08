import { AxiosInstance } from "axios";
import { Role } from "../types/role";
export declare enum CreateRoleErrors {
    MISSING_USER_PERMISSION = 401,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    OK = 201
}
export declare enum GetRoleErrors {
    ROLE_DELETED = 410,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    OK = 200
}
export type GetRoleResponse = {
    role?: Role;
    error: GetRoleErrors;
};
export declare enum UpdateRoleErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    ROLE_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500,
    OK = 200
}
export declare enum DeleteRoleErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    ROLE_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500,
    OK = 200
}
export type UpdateRoleDTO = {
    name: string;
    permissions: string[];
    id: number;
};
export declare class RoleService {
    private api;
    constructor(axiosInstance: AxiosInstance);
    createRole(role: Role): Promise<CreateRoleErrors>;
    getRole(roleId: number): Promise<GetRoleResponse>;
    updateRole(updateRoleDto: UpdateRoleDTO): Promise<UpdateRoleErrors>;
    deleteRole(roleId: number): Promise<DeleteRoleErrors>;
}
