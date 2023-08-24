import { AxiosInstance } from "axios";
import { HttpError, InternalServerError } from "./errors";

export const UsernameOrEmailNotSpecifiedError = new HttpError(400, "UsernameOrEmailNotSpecifiedError", "Username or Email not specified");
export const WrongEmailOrUsernameError = new HttpError(404, "WrongEmailOrUsernameError", "Wrong Email or Username");
export const WrongPasswordError = new HttpError(403, "WrongPasswordError", "Wrong Password");
export const InvalidRefreshTokenError = new HttpError(400, "InvalidRefreshTokenError", "Invalid refresh token");

export const RefreshAccessTokenError = new HttpError(403, "RefreshAccessTokenError", "Invalid refresh token");
export const SignOutError = new HttpError(403, "SignOutError", "Invalid refresh token");

export function isRefreshAccessTokenError(err: HttpError): boolean {
    return err.statusCode === RefreshAccessTokenError.statusCode;
}

export function isInvalidRefreshTokenError(err: HttpError): boolean {
    return err.statusCode === InvalidRefreshTokenError.statusCode;

}

export function isWrongPasswordError(err: HttpError): boolean {
    return err.statusCode === WrongPasswordError.statusCode;
    
}

export function isWrongEmailOrUsernameError(err: HttpError): boolean {
    return err.statusCode === WrongEmailOrUsernameError.statusCode;
}

export function isUsernameOrEmailNotSpecifiedError(err: HttpError): boolean {
    return err.statusCode === UsernameOrEmailNotSpecifiedError.statusCode;
}

export function isSignInUserError(err: HttpError): boolean {
    const sc = err.statusCode;
    return sc === UsernameOrEmailNotSpecifiedError.statusCode ||
        sc === WrongEmailOrUsernameError.statusCode ||
        sc === WrongPasswordError.statusCode ||
        sc === InvalidRefreshTokenError.statusCode ||
        sc === InternalServerError.statusCode;
}

export function isSignOutError(err: HttpError): boolean {
    const sc = err.statusCode;
    return sc === SignOutError.statusCode;
}

export type SignInUserResponse = {
    error?: HttpError | null;
    accessToken?: string;
}

export type RefreshAccessTokenResponse = {
    accessToken?: string;
    error?: HttpError | null;
}

export type UserSignInDto = {
    email?: string,
    username? :string,
    password: string,
}

export class AuthService {
    private api: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.api = axiosInstance;
    }

    async signInUser(userLogin: UserSignInDto): Promise<SignInUserResponse> {
        const resp = await this.api.post("/auth/login", userLogin).catch(err => err.response);
        if (resp.status === 201) {
            return {
                accessToken: resp.data.accessToken,
            };
        }

        let error: HttpError | null = null;
        switch (resp.status) {
        case 400:
            error = UsernameOrEmailNotSpecifiedError;
            break;
        case 404:
            error = WrongEmailOrUsernameError;
            break;
        case 401:
            error = WrongPasswordError;
            break;
        case 500:
            error = InternalServerError;
            break;
        }

        return {
            error,
        };
    }

    async refreshAccessToken(): Promise<RefreshAccessTokenResponse> {
        const resp = await this.api.get("/auth/refresh").catch(err => err.response);
        if (resp.status !== 200) {
            return {
                error: InvalidRefreshTokenError,
            };
        }

        return {
            accessToken: resp.data.accessToken,
        };
    }

    async signOut(): Promise<HttpError | null> {
        const resp = await this.api.delete("/auth/logout").catch(err => err.response);
        if (resp.status !== 200) {
            return SignOutError;
        }

        return null;
    }
}
