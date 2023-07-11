import axios, { AxiosInstance } from "axios";
import { AuthService } from "./services/auth_service";
import { RoleService } from "./services/role_service";
import { UsersService } from "./services/users_service";

export class EncedeusAPI {
    private static instance: EncedeusAPI;
    private axiosInstance: AxiosInstance;

    private _usersService: UsersService;
    private _roleService: RoleService;
    private _authService: AuthService;

    private constructor(apiBaseURL: string, accessToken: string, axiosConfig: object) {
        this.axiosInstance = axios.create({
            baseURL: apiBaseURL,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            ...axiosConfig,
        });
        this._usersService = new UsersService(this.axiosInstance);
        this._roleService = new RoleService(this.axiosInstance);
        this._authService = new AuthService(this.axiosInstance);
    }

    public static getInstance(apiBaseURL: string, accessToken: string, axiosConfig: object) {
        if (!this.instance) {
            this.instance = new EncedeusAPI(apiBaseURL, accessToken, axiosConfig);
        }
        return this.instance;
    }

    public get usersService(): UsersService {
        return this._usersService;
    }

    get roleService(): RoleService {
        return this._roleService;
    }

    get authService(): AuthService {
        return this._authService;
    }
}