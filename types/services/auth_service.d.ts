import { AxiosInstance } from "axios";
type UserLoginDTO = {
    email?: string;
    username?: string;
    password: string;
};
declare enum LoginUserErrors {
    BAD_REQUEST = 400,
    USER_NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    UNAUTHORISED = 401,
    OK = 201
}
declare enum RefreshAccessTokenErrors {
    UNAUTHORISED = 401,
    OK = 200
}
export declare class AuthService {
    private api;
    constructor(axiosInstance: AxiosInstance);
    loginUser(userLogin: UserLoginDTO): Promise<{
        error: LoginUserErrors;
        tokens?: {
            accessToken: string;
            refreshToken: string;
        };
    }>;
    refreshAccessToken(): Promise<{
        accessToken?: string;
        error: RefreshAccessTokenErrors;
    }>;
}
export {};
