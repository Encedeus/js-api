import { AxiosInstance } from "axios";
import { HttpError } from "./errors";
export declare const UsernameOrEmailNotSpecifiedError: HttpError;
export declare const WrongEmailOrUsernameError: HttpError;
export declare const WrongPasswordError: HttpError;
export declare const InvalidRefreshTokenError: HttpError;
export declare const RefreshAccessTokenError: HttpError;
export declare const SignOutError: HttpError;
export declare function isRefreshAccessTokenError(err: HttpError): boolean;
export declare function isInvalidRefreshTokenError(err: HttpError): boolean;
export declare function isWrongPasswordError(err: HttpError): boolean;
export declare function isWrongEmailOrUsernameError(err: HttpError): boolean;
export declare function isUsernameOrEmailNotSpecifiedError(err: HttpError): boolean;
export declare function isSignInUserError(err: HttpError): boolean;
export declare function isSignOutError(err: HttpError): boolean;
export type SignInUserResponse = {
    error?: HttpError | null;
    accessToken?: string;
};
export type RefreshAccessTokenResponse = {
    accessToken?: string;
    error?: HttpError | null;
};
export type UserSignInDto = {
    email?: string;
    username?: string;
    password: string;
};
export declare class AuthService {
    private api;
    constructor(axiosInstance: AxiosInstance);
    signInUser(userLogin: UserSignInDto): Promise<SignInUserResponse>;
    refreshAccessToken(): Promise<RefreshAccessTokenResponse>;
    signOut(): Promise<HttpError | null>;
}
