import { AuthService } from "./services/auth_service";
import { RoleService } from "./services/role_service";
import { UsersService } from "./services/users_service";
export declare class EncedeusAPI {
    private static instance;
    private axiosInstance;
    private _usersService;
    private _roleService;
    private _authService;
    private constructor();
    static getInstance(apiBaseURL: string, axiosConfig: object): EncedeusAPI;
    get usersService(): UsersService;
    get roleService(): RoleService;
    get authService(): AuthService;
    set accessToken(accessToken: string);
}
