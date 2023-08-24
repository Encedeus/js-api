import { AxiosInstance } from "axios";
import { User } from "../types/user";
import { ErrorCheck, ErrorCheckResponse, HttpError } from "./errors";
export declare const UsernameTakenError: HttpError;
export declare const UserNotFoundError: HttpError;
export declare const UserDeletedError: HttpError;
export declare function isUserDeletedError(error: HttpError): boolean;
export declare function isUserNotFoundError(error: HttpError): boolean;
export declare function isUsernameTakenError(error: HttpError): boolean;
export declare function isDeleteUserError(err: ErrorCheck): ErrorCheckResponse;
export declare function isSetPfpError(err: ErrorCheck): ErrorCheckResponse;
export declare function isUpdateUserError(err: ErrorCheck): ErrorCheckResponse;
export declare function isFindUserError(err: ErrorCheck): ErrorCheckResponse;
export declare function isCreateUserError(err: ErrorCheck): ErrorCheckResponse;
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
export type FindUserResponse = {
    error?: HttpError | null;
    user?: User;
};
export declare class UsersService {
    private api;
    constructor(axiosInstance: AxiosInstance);
    createUser(createUserDto: CreateUserDto): Promise<HttpError | null>;
    findUserById(userId: string): Promise<FindUserResponse>;
    updateUser(updateUserDto: UpdateUserDto): Promise<HttpError | null>;
    deleteUser(userId: string): Promise<HttpError | null>;
    setPfp(userId: string, pfp: Blob): Promise<HttpError | null>;
}
