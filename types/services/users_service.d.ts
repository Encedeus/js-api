import { AxiosInstance } from "axios";
import { User } from "../types/user";
export declare enum CreateUserErrors {
    ROLE_NOT_FOUND = 404,
    USERNAME_TAKEN = 409,
    INTERNAL_SERVER_ERROR = 500,
    UNAUTHORISED = 401,
    BAD_REQUEST = 400
}
export declare enum GetUserErrors {
    USER_NOT_FOUND = 404,
    USER_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500
}
export declare enum UpdateUserErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    USER_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500
}
export declare enum DeleteUserErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    USER_NOT_FOUND = 404,
    USER_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500
}
export declare enum SetPfpErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    USER_NOT_FOUND = 404
}
export type CreateUserDto = {
    name: string;
    email: string;
    password: string;
    roleId: number;
    roleName: string;
};
export type UpdateUserDto = {
    id: string;
    name: string;
    email: string;
    password: string;
    roleId: number;
    roleName: number;
};
export type GetUserResponse = {
    error?: GetUserErrors | null;
    user?: User;
};
export declare class UsersService {
    private api;
    constructor(axiosInstance: AxiosInstance);
    createUser(createUserDto: CreateUserDto): Promise<CreateUserErrors>;
    getUserById(userId: string): Promise<GetUserResponse>;
    updateUser(updateUserDto: UpdateUserDto): Promise<UpdateUserErrors>;
    deleteUser(userId: string): Promise<DeleteUserErrors>;
    setPfp(userId: string, pfp: Blob): Promise<SetPfpErrors>;
}
