import { AxiosInstance } from "axios";
export type UserLoginDto = {
    email?: string;
    username?: string;
    password: string;
};
export declare enum LoginUserErrors {
    USERNAME_OR_EMAIL_NOT_SPECIFIED = 400,
    WRONG_EMAIL_OR_USERNAME = 404,
    WRONG_PASSWORD = 401,
    INTERNAL_SERVER_ERROR = 500
}
export type LoginUserResponse = {
    error?: LoginUserErrors | null;
    accessToken?: string;
};
export declare enum RefreshAccessTokenErrors {
    INVALID_REFRESH_TOKEN = 401
}
export type RefreshAccessTokenResponse = {
    accessToken?: string;
    error?: RefreshAccessTokenErrors | null;
};
export declare enum LogoutErrors {
    UNAUTHORISED = 401
}
export declare class AuthService {
    private api;
    constructor(axiosInstance: AxiosInstance);
    loginUser(userLogin: UserLoginDto): Promise<LoginUserResponse>;
    refreshAccessToken(): Promise<RefreshAccessTokenResponse>;
    logout(): Promise<LogoutErrors | null>;
}
