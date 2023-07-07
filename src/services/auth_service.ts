import { AxiosInstance } from "axios";

type UserLoginDTO = {
    email?: string,
    username? :string,
    password: string,
}

enum LoginUserErrors {
    BAD_REQUEST = 400,
    USER_NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500,
    UNAUTHORISED = 401,
    OK = 201,
}

enum RefreshAccessTokenErrors {
    UNAUTHORISED = 401,
    OK = 200,
}

export class AuthService {
    private api: AxiosInstance;

    public constructor(axiosInstance: AxiosInstance) {
        this.api = axiosInstance;
    }

    public async loginUser(userLogin: UserLoginDTO): Promise<{ error: LoginUserErrors; tokens?: { accessToken: string; refreshToken: string } }> {
        const resp = await this.api.post("/auth/login", userLogin);
        if (resp.status === 200) {
            return {
                error: LoginUserErrors.OK,
                tokens: {
                    accessToken: resp.data.accessToken,
                    refreshToken: resp.data.refreshToken,
                }
            };
        }

        return {
            error: LoginUserErrors[resp.status] as unknown as LoginUserErrors,
        };
    }

    public async refreshAccessToken(): Promise<{ accessToken?: string; error: RefreshAccessTokenErrors }> {
        const resp = await this.api.get("/auth/refresh");
        if (resp.status !== 200) {
            return {
                error: RefreshAccessTokenErrors.UNAUTHORISED,
            }
        }

        return {
            accessToken: resp.data.accessToken,
            error: RefreshAccessTokenErrors.OK,
        };
    }
}
