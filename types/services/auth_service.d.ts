import { AxiosInstance } from "axios";
import { BadRequestError, InternalServerError, ResourceNotFoundError, UnauthorisedError } from "./errors";
export declare type UsernameOrEmailNotSpecifiedError = BadRequestError;
export declare type WrongEmailOrUsernameError = ResourceNotFoundError;
export declare type WrongPasswordError = UnauthorisedError;
export declare type InvalidRefreshTokenError = UnauthorisedError;
export declare type SignInUserError = UsernameOrEmailNotSpecifiedError | WrongEmailOrUsernameError | WrongPasswordError | InternalServerError | null;
export declare type RefreshAccessTokenError = InvalidRefreshTokenError | null;
export declare type SignOutError = UnauthorisedError | null;
export declare type SignInUserResponse = {
    error?: SignInUserError;
    accessToken?: string;
};
export declare type RefreshAccessTokenResponse = {
    accessToken?: string;
    error?: RefreshAccessTokenError;
};
export declare type UserSignInDto = {
    email?: string;
    username?: string;
    password: string;
};
export declare class AuthService {
    private api;
    constructor(axiosInstance: AxiosInstance);
    signInUser(userLogin: UserSignInDto): Promise<SignInUserResponse>;
    refreshAccessToken(): Promise<RefreshAccessTokenResponse>;
    signOut(): Promise<SignOutError>;
}
