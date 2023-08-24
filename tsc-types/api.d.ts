import { AuthService } from "./services/auth_service";
import { RoleService } from "./services/role_service";
import { UsersService } from "./services/users_service";
export declare class EncedeusAPI {
    private static instance;
    private readonly axiosInstance;
    private readonly _usersService;
    private readonly _roleService;
    private readonly _authService;
    private constructor();
    static getInstance(apiBaseURL: string, axiosConfig?: object): EncedeusAPI;
    get usersService(): UsersService;
    get roleService(): RoleService;
    get authService(): AuthService;
    set accessToken(accessToken: string);
}
