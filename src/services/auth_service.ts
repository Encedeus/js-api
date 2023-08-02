import { AxiosInstance } from "axios";
import { BadRequestError, InternalServerError, ResourceNotFoundError, UnauthorisedError } from "./errors";

export type UsernameOrEmailNotSpecifiedError = BadRequestError;
export type WrongEmailOrUsernameError = ResourceNotFoundError;
export type WrongPasswordError = UnauthorisedError;
export type InvalidRefreshTokenError = UnauthorisedError;

export type SignInUserError = UsernameOrEmailNotSpecifiedError | WrongEmailOrUsernameError | WrongPasswordError | InternalServerError | null;
export type RefreshAccessTokenError = InvalidRefreshTokenError | null;
export type SignOutError = UnauthorisedError | null;

export type SignInUserResponse = {
    error?: SignInUserError;
    accessToken?: string;
}

export type RefreshAccessTokenResponse = {
    accessToken?: string;
    error?: RefreshAccessTokenError
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

        let error: SignInUserError = null;
        switch (resp.status) {
        case 400:
            error = new BadRequestError(resp.data.message);
            break;
        case 404:
            error = new ResourceNotFoundError(resp.data.message);
            break;
        case 401:
            error = new UnauthorisedError(resp.data.message);
            break;
        case 500:
            error = new InternalServerError(resp.data.message);
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
                error: new UnauthorisedError(resp.data.message),
            };
        }

        return {
            accessToken: resp.data.accessToken,
        };
    }

    async signOut(): Promise<SignOutError> {
        const resp = await this.api.delete("/auth/logout").catch(err => err.response);
        if (resp.status !== 200) {
            return new UnauthorisedError(resp.data.message);
        }

        return null;
    }
}
