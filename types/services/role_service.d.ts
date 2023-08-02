import { AxiosInstance } from "axios";
import { Role } from "../types/role";
import { BadRequestError, InternalServerError, ResourceNotFoundError, ResourcePermanentlyDeletedError, UnauthorisedError } from "./errors";
export declare type MissingUserPermissionError = UnauthorisedError;
export declare type RoleDeletedError = ResourcePermanentlyDeletedError;
export declare type RoleNotFoundError = ResourceNotFoundError;
export declare type CreateRoleError = MissingUserPermissionError | BadRequestError | RoleNotFoundError | InternalServerError | null;
export declare type FindRoleError = RoleDeletedError | BadRequestError | RoleNotFoundError | InternalServerError | null;
export declare type UpdateRoleError = UnauthorisedError | BadRequestError | RoleNotFoundError | RoleDeletedError | InternalServerError | null;
export declare type DeleteRoleError = UnauthorisedError | BadRequestError | RoleNotFoundError | RoleDeletedError | InternalServerError | null;
export declare type FindRoleResponse = {
    role?: Role;
    error?: FindRoleError;
};
export declare type UpdateRoleDto = {
    name: string;
    permissions: string[];
    id: number;
};
export declare class RoleService {
    private api;
    constructor(axiosInstance: AxiosInstance);
    createRole(role: Role): Promise<CreateRoleError>;
    getRole(roleId: number): Promise<FindRoleResponse>;
    updateRole(updateRoleDto: UpdateRoleDto): Promise<UpdateRoleError>;
    deleteRole(roleId: number): Promise<DeleteRoleError>;
}
