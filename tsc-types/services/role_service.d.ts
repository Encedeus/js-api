import { AxiosInstance } from "axios";
import { Role } from "../types/role";
import { ErrorCheck, ErrorCheckResponse, HttpError } from "./errors";
export declare const MissingUserPermissionsError: HttpError;
export declare const RoleDeletedError: HttpError;
export declare const RoleNotFoundError: HttpError;
export declare function isRoleNotFoundError(error: HttpError): boolean;
export declare function isRoleDeletedError(error: HttpError): boolean;
export declare function isMissingUserPermissionsError(error: HttpError): boolean;
export declare function isDeleteRoleError(err: ErrorCheck): ErrorCheckResponse;
export declare function isUpdateRoleError(err: ErrorCheck): ErrorCheckResponse;
export declare function isCreateRoleError(err: ErrorCheck): ErrorCheckResponse;
export declare function isFindRoleError(err: ErrorCheck): ErrorCheckResponse;
export type FindRoleResponse = {
    role?: Role;
    error?: HttpError | null;
};
export type UpdateRoleDto = {
    name: string;
    permissions: string[];
    id: number;
};
export declare class RoleService {
    private api;
    constructor(axiosInstance: AxiosInstance);
    createRole(role: Role): Promise<HttpError | null>;
    findRoleById(roleId: number): Promise<FindRoleResponse>;
    updateRole(updateRoleDto: UpdateRoleDto): Promise<HttpError | null>;
    deleteRole(roleId: number): Promise<HttpError | null>;
}
