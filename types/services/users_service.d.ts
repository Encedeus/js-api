import { AxiosInstance } from "axios";
import { User } from "../types/user";
import { BadRequestError, ConflictError, InternalServerError, ResourceNotFoundError, ResourcePermanentlyDeletedError, UnauthorisedError } from "./errors";
import { RoleNotFoundError } from "./role_service";
export declare type UsernameTakenError = ConflictError;
export declare type UserNotFoundError = ResourceNotFoundError;
export declare type UserDeletedError = ResourcePermanentlyDeletedError;
export declare type CreateUserError = RoleNotFoundError | UsernameTakenError | UnauthorisedError | BadRequestError | InternalServerError | null;
export declare type FindUserError = UserNotFoundError | UserDeletedError | InternalServerError | null;
export declare type UpdateUserError = UnauthorisedError | BadRequestError | RoleNotFoundError | UserDeletedError | InternalServerError | null;
export declare type SetPfpError = UnauthorisedError | BadRequestError | UserNotFoundError | InternalServerError | null;
export declare type DeleteUserError = UnauthorisedError | BadRequestError | UserDeletedError | UserNotFoundError | InternalServerError | null;
export declare type CreateUserDto = {
    name: string;
    email: string;
    password: string;
    roleId: number;
    roleName: string;
};
export declare type UpdateUserDto = {
    id: string;
    name: string;
    email: string;
    password: string;
    roleId: number;
    roleName: number;
};
export declare type FindUserResponse = {
    error?: FindUserError;
    user?: User;
};
export declare class UsersService {
    private api;
    constructor(axiosInstance: AxiosInstance);
    createUser(createUserDto: CreateUserDto): Promise<CreateUserError>;
    findUserById(userId: string): Promise<FindUserResponse>;
    updateUser(updateUserDto: UpdateUserDto): Promise<UpdateUserError>;
    deleteUser(userId: string): Promise<DeleteUserError>;
    setPfp(userId: string, pfp: Blob): Promise<SetPfpError>;
}
