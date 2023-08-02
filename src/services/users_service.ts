import { AxiosInstance } from "axios";
import { User } from "../types/user";
import {
    BadRequestError,
    ConflictError,
    InternalServerError,
    ResourceNotFoundError, ResourcePermanentlyDeletedError,
    UnauthorisedError
} from "./errors";
import { RoleNotFoundError } from "./role_service";

export type UsernameTakenError = ConflictError;
export type UserNotFoundError = ResourceNotFoundError;
export type UserDeletedError = ResourcePermanentlyDeletedError;

export type CreateUserError = RoleNotFoundError | UsernameTakenError | UnauthorisedError | BadRequestError | InternalServerError | null;
export type FindUserError = UserNotFoundError | UserDeletedError | InternalServerError | null;
export type UpdateUserError = UnauthorisedError | BadRequestError | RoleNotFoundError | UserDeletedError | InternalServerError | null;
export type SetPfpError = UnauthorisedError | BadRequestError | UserNotFoundError | InternalServerError | null;
export type DeleteUserError = UnauthorisedError | BadRequestError | UserDeletedError | UserNotFoundError | InternalServerError | null;

export type CreateUserDto = {
    name: string;
    email: string;
    password: string;
    roleId: number;
    roleName: string;
}

export type UpdateUserDto = {
    id: string,
    name: string,
    email: string,
    password: string,
    roleId: number,
    roleName: number,
}

export type FindUserResponse = {
    error?: FindUserError;
    user?: User;
}

export class UsersService {
    private api: AxiosInstance;

    constructor(axiosInstance: AxiosInstance) {
        this.api = axiosInstance;
    }

    async createUser(createUserDto: CreateUserDto): Promise<CreateUserError> {
        const resp = await this.api.post("/user", createUserDto).catch(err => err.response);
        let error: CreateUserError = null;

        switch (resp.status) {
        case 404:
            error = new ResourceNotFoundError(resp.data.message);
            break;
        case 409:
            error = new ConflictError(resp.data.message);
            break;
        case 401:
            error = new UnauthorisedError(resp.data.message);
            break;
        case 400:
            error = new BadRequestError(resp.data.message);
            break;
        case 500:
            error = new InternalServerError(resp.data.message);
            break;
        }

        return error;
    }

    async findUserById(userId: string): Promise<FindUserResponse> {
        const resp = await this.api.get(`/user/${userId}`).catch(err => err.response);

        if(resp.status === 200) {
            return {
                user: resp.data as User,
            };
        }

        let error: FindUserError = null;
        switch (resp.status) {
        case 404:
            error = new ResourceNotFoundError(resp.data.message);
            break;
        case 410:
            error = new ResourcePermanentlyDeletedError(resp.data.message);
            break;
        case 500:
            error = new InternalServerError(resp.data.message);
            break;
        }

        return {
            error,
        };
    }

    async updateUser(updateUserDto: UpdateUserDto): Promise<UpdateUserError> {
        const resp = await this.api.patch("/user", updateUserDto).catch(err => err.response);
        let error: UpdateUserError = null;

        switch (resp.status) {
        case 404:
            error = new ResourceNotFoundError(resp.data.message);
            break;
        case 410:
            error = new ResourcePermanentlyDeletedError(resp.data.message);
            break;
        case 401:
            error = new UnauthorisedError(resp.data.message);
            break;
        case 400:
            error = new BadRequestError(resp.data.message);
            break;
        case 500:
            error = new InternalServerError(resp.data.message);
            break;
        }

        return error;
    }

    async deleteUser(userId: string): Promise<DeleteUserError> {
        const resp = await this.api.delete(`/user/${userId}`).catch(err => err.response);
        let error: DeleteUserError = null;

        switch (resp.status) {
        case 404:
            error = new ResourceNotFoundError(resp.data.message);
            break;
        case 410:
            error = new ResourcePermanentlyDeletedError(resp.data.message);
            break;
        case 401:
            error = new UnauthorisedError(resp.data.message);
            break;
        case 400:
            error = new BadRequestError(resp.data.message);
            break;
        case 500:
            error = new InternalServerError(resp.data.message);
            break;
        }

        return error;
    }

    async setPfp(userId: string, pfp: Blob): Promise<SetPfpError> {
        const resp = await this.api.put("/user", {
            uuid: userId,
            file: pfp,
        }, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).catch(err => err.response);
        let error: SetPfpError = null;

        switch (resp.status) {
        case 401:
            error = new UnauthorisedError(resp.data.message);
            break;
        case 404:
            error = new ResourceNotFoundError(resp.data.message);
            break;
        case 400:
            error = new BadRequestError(resp.data.message);
            break;
        case 500:
            error = new InternalServerError(resp.data.message);
            break;
        }

        return error;
    }
}
