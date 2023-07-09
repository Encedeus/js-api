import { AxiosInstance } from "axios";

export type UserLoginDTO = {
    email?: string,
    username? :string,
    password: string,
}

export enum LoginUserErrors {
    USERNAME_OR_EMAIL_NOT_SPECIFIED = 400,
    WRONG_EMAIL_OR_USERNAME = 404,
    WRONG_PASSWORD = 401,
    INTERNAL_SERVER_ERROR = 500,
    OK = 201,
}

export type LoginUserResponse = {
    error: LoginUserErrors;
    accessToken?: string;
}

export enum RefreshAccessTokenErrors {
    INVALID_REFRESH_TOKEN = 401,
    OK = 200,
}

export type RefreshAccessTokenResponse = {
    accessToken?: string;
    error: RefreshAccessTokenErrors
}


export class AuthService {
    private api: AxiosInstance;

    public constructor(axiosInstance: AxiosInstance) {
        this.api = axiosInstance;
    }

    public async loginUser(userLogin: UserLoginDTO): Promise<LoginUserResponse> {
        const resp = await this.api.post("/auth/login", userLogin).catch(err => err.response);
        if (resp.status === 201) {
            return {
                error: LoginUserErrors.OK,
                accessToken: resp.data.accessToken,
            };
        }

        return {
            error: LoginUserErrors[resp.status] as unknown as LoginUserErrors,
        };
    }

    public async refreshAccessToken(): Promise<RefreshAccessTokenResponse> {
        const resp = await this.api.get("/auth/refresh").catch(err => err.response);
        if (resp.status !== 200) {
            return {
                error: RefreshAccessTokenErrors.INVALID_REFRESH_TOKEN,
            }
        }

        return {
            accessToken: resp.data.accessToken,
            error: RefreshAccessTokenErrors.OK,
        };
    }
}
