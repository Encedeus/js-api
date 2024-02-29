import axios, { AxiosInstance } from "axios";
import { AuthService } from "./services/auth_service";
import { RoleService } from "./services/role_service";
import { UsersService } from "./services/user_service";
import { ApiKeyService } from "./services/api_key_service";
import {ModulesService} from "./services/modules_service";
import {ServersService} from "./services/servers_service";

export class EncedeusAPI {
    private static instance: EncedeusAPI;
    private _accessToken: string

    private readonly axiosInstance: AxiosInstance;

    private readonly _usersService: UsersService;
    private readonly _roleService: RoleService;
    private readonly _authService: AuthService;
    private readonly _apiKeyService: ApiKeyService;
    private readonly _modulesService: ModulesService;
    private readonly _serversService: ServersService;

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
        this._modulesService = new ModulesService(this.axiosInstance);
        this._serversService = new ServersService(this.axiosInstance, this);
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
    get modulesService(): ModulesService {
        return this._modulesService;
    }
    get serversService(): ServersService {
        return this._serversService;
    }

    set accessToken(accessToken: string) {
        this._accessToken = accessToken
        this.axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    }

    get accessToken(): string {
        return this._accessToken
    }
}