import { AxiosInstance } from "axios";
import { User } from "../types/user";

export enum CreateUserErrors {
    ROLE_NOT_FOUND = 404,
    USERNAME_TAKEN = 409,
    INTERNAL_SERVER_ERROR = 500,
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
}

export enum GetUserErrors {
    USER_NOT_FOUND = 404,
    USER_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500,
}

export enum UpdateUserErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    USER_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500,
}

export enum DeleteUserErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    USER_NOT_FOUND = 404,
    USER_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500,
}

export enum SetPfpErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    USER_NOT_FOUND = 404,
}

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

export type GetUserResponse = {
    error?: GetUserErrors | null;
    user?: User;
}

export class UsersService {
    private api: AxiosInstance;

    public constructor(axiosInstance: AxiosInstance) {
        this.api = axiosInstance;
    }

    public async createUser(createUserDto: CreateUserDto): Promise<CreateUserErrors> {
        const resp = await this.api.post("/user", createUserDto).catch(err => err.response);
        return CreateUserErrors[resp.status] as unknown as CreateUserErrors;
    }

    public async getUserById(userId: string): Promise<GetUserResponse> {
        const resp = await this.api.get(`/user/${userId}`).catch(err => err.response);

        if(resp.status === 200) {
            return {
                user: <User>resp.data,
            };
        }

        return {
            error: GetUserErrors[resp.status] as unknown as GetUserErrors,
        };
    }

    public async updateUser(updateUserDto: UpdateUserDto): Promise<UpdateUserErrors> {
        const resp = await this.api.patch("/user", updateUserDto).catch(err => err.response);
        return UpdateUserErrors[resp.status] as unknown as UpdateUserErrors;
    }

    public async deleteUser(userId: string): Promise<DeleteUserErrors> {
        const resp = await this.api.delete(`/user/${userId}`).catch(err => err.response);
        return DeleteUserErrors[resp.status] as unknown as DeleteUserErrors;
    }

    public async setPfp(userId: string, pfp: Blob): Promise<SetPfpErrors> {
        const resp = await this.api.put("/user", {
            uuid: userId,
            file: pfp,
        }, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        }).catch(err => err.response);
        return SetPfpErrors[resp.status] as unknown as SetPfpErrors;
    }
}
