import { AxiosInstance } from "axios";
export type UserLoginDTO = {
    email?: string;
    username?: string;
    password: string;
};
export declare enum LoginUserErrors {
    USERNAME_OR_EMAIL_NOT_SPECIFIED = 400,
    WRONG_EMAIL_OR_USERNAME = 404,
    WRONG_PASSWORD = 401,
    INTERNAL_SERVER_ERROR = 500,
    OK = 201
}
export type LoginUserResponse = {
    error: LoginUserErrors;
    accessToken?: string;
};
export declare enum RefreshAccessTokenErrors {
    INVALID_REFRESH_TOKEN = 401,
    OK = 200
}
export type RefreshAccessTokenResponse = {
    accessToken?: string;
    error: RefreshAccessTokenErrors;
};
export declare class AuthService {
    private api;
    constructor(axiosInstance: AxiosInstance);
    loginUser(userLogin: UserLoginDTO): Promise<LoginUserResponse>;
    refreshAccessToken(): Promise<RefreshAccessTokenResponse>;
}
