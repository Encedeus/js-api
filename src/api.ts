import axios, { AxiosInstance } from "axios";
import { AuthService } from "./services/auth_service";
import { RoleService } from "./services/role_service";
import { UsersService } from "./services/users_service";
import { ApiKeyService } from "./services/api_key_service";

export class EncedeusAPI {
    private static instance: EncedeusAPI;

    private readonly axiosInstance: AxiosInstance;

    private readonly _usersService: UsersService;
    private readonly _roleService: RoleService;
    private readonly _authService: AuthService;
    private readonly _apiKeyService: ApiKeyService;

    private constructor(apiBaseURL: string, axiosConfig: object) {
        this.axiosInstance = axios.create({
            baseURL: apiBaseURL,
            headers: {
                "Content-Type": "application/json",
            },
            ...axiosConfig,
        });
        this._usersService = new UsersService(this.axiosInstance);
        this._roleService = new RoleService(this.axiosInstance);
        this._authService = new AuthService(this.axiosInstance);
        this._apiKeyService = new ApiKeyService(this.axiosInstance);
    }

    static getInstance(apiBaseURL: string, axiosConfig: object = {}) {
        if (!this.instance) {
            this.instance = new EncedeusAPI(apiBaseURL, axiosConfig);
        }
        return this.instance;
    }

    get usersService(): UsersService {
        return this._usersService;
    }

    get roleService(): RoleService {
        return this._roleService;
    }

    get authService(): AuthService {
        return this._authService;
    }

    get apiKeyService(): ApiKeyService {
        return this._apiKeyService;
    }

    set accessToken(accessToken: string) {
        this.axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }
}