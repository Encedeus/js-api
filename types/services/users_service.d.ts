import { AxiosInstance } from "axios";
export declare enum CreateUserErrors {
    ROLE_NOT_FOUND = 404,
    USERNAME_TAKEN = 409,
    INTERNAL_SERVER_ERROR = 500,
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    OK = 201
}
export declare enum GetUserErrors {
    USER_NOT_FOUND = 404,
    USER_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500,
    OK = 200
}
export declare enum UpdateUserErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    USER_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500,
    OK = 200
}
export declare enum DeleteUserErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    USER_NOT_FOUND = 404,
    USER_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500,
    OK = 200
}
export declare enum SetPfpErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    USER_NOT_FOUND = 404,
    OK = 200
}
export type CreateUserDTO = {
    name: string;
    email: string;
    password: string;
    roleId: number;
    roleName: string;
};
export type UpdateUserDTO = {
    id: string;
    name: string;
    email: string;
    password: string;
    roleId: number;
    roleName: number;
};
export declare class UsersService {
    private api;
    constructor(axiosInstance: AxiosInstance);
    createUser(createUserDto: CreateUserDTO): Promise<CreateUserErrors>;
    getUserById(userId: string): Promise<GetUserErrors>;
    updateUser(updateUserDto: UpdateUserDTO): Promise<UpdateUserErrors>;
    deleteUser(userId: string): Promise<DeleteUserErrors>;
    setPfp(userId: string, pfp: Blob): Promise<SetPfpErrors>;
}
