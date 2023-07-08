import { AxiosInstance } from "axios";
import { User } from "../types/user";

export enum CreateUserErrors {
    ROLE_NOT_FOUND = 404,
    USERNAME_TAKEN = 409,
    INTERNAL_SERVER_ERROR = 500,
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    OK = 201,
}

export enum GetUserErrors {
    USER_NOT_FOUND = 404,
    USER_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500,
    OK = 200,
}

export enum UpdateUserErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    ROLE_NOT_FOUND = 404,
    USER_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500,
    OK = 200,
}

export enum DeleteUserErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    USER_NOT_FOUND = 404,
    USER_DELETED = 410,
    INTERNAL_SERVER_ERROR = 500,
    OK = 200,
}

export enum SetPfpErrors {
    UNAUTHORISED = 401,
    BAD_REQUEST = 400,
    USER_NOT_FOUND = 404,
    OK = 200,
}

export type CreateUserDTO = {
    name: string;
    email: string;
    password: string;
    roleId: number;
    roleName: string;
}

export type UpdateUserDTO = {
    id: string,
    name: string,
    email: string,
    password: string,
    roleId: number,
    roleName: number,
}

export class UsersService {
    private api: AxiosInstance;

    public constructor(axiosInstance: AxiosInstance) {
        this.api = axiosInstance;
    }

    public async createUser(createUserDto: CreateUserDTO): Promise<CreateUserErrors> {
        const resp = await this.api.post("/users", createUserDto);
        return CreateUserErrors[resp.status] as unknown as CreateUserErrors;
    }

    public async getUserById(userId: string): Promise<GetUserErrors> {
        const resp = await this.api.get(`/users/${userId}`);
        return GetUserErrors[resp.status] as unknown as GetUserErrors;
    }

    public async updateUser(updateUserDto: UpdateUserDTO): Promise<UpdateUserErrors> {
        const resp = await this.api.patch("/users", updateUserDto);
        return UpdateUserErrors[resp.status] as unknown as UpdateUserErrors;
    }

    public async deleteUser(userId: string): Promise<DeleteUserErrors> {
        const resp = await this.api.delete(`/users/${userId}`);
        return DeleteUserErrors[resp.status] as unknown as DeleteUserErrors;
    }

    public async setPfp(userId: string, pfp: Blob) {
        const resp = await this.api.put("/users", {
            uuid: userId,
            file: pfp,
        }, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
        return SetPfpErrors[resp.status] as unknown as SetPfpErrors;
    }
}
