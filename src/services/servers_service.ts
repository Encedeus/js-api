import {AxiosInstance} from "axios";
import {ErrorCheckResponse, getErrorFromResponse, HttpError, isUnauthorized} from "./errors";
import {
    ServersCreateRequest,
    ServersCreateResponse,
    ServersFindAllResponse, ServersFindOneRequest,
    ServersFindOneResponse, ServersGetStatusResponse
} from "../proto/servers_api";
import {EncedeusAPI} from "../api";
// todo: unstupid after friday

export type ServerCreateResponse = {
    error?: HttpError
    response?: ServersCreateResponse
}
export type FindAllServersResponse = {
    error?: HttpError
    response?: ServersFindAllResponse
}
export type FindOneServerResponse = {
    error?: HttpError
    response?: ServersFindOneResponse
}
export type GetServerStatusResponse = {
    error?: HttpError
    response?: ServersGetStatusResponse
}

export type DeleteServerResponse = {
    error?: HttpError
}

export type ServerChangeStateResponse = {
    error?: HttpError
}

// todo: add unauth checking
export class ServersService {
    private api: AxiosInstance;
    private readonly apiInstance: EncedeusAPI;

    constructor(api: AxiosInstance, apiInstance: EncedeusAPI) {
        this.api = api;
        this.apiInstance = apiInstance;
    }

    async createServer(req: ServersCreateRequest): Promise<ServerCreateResponse> {
        const authErr = isUnauthorized(this.apiInstance);
        if (authErr) {
            return {error: authErr};
        }

        const resp = await this.api.post("/servers", req).catch(err => err.response);

        if (resp.status == 200) {
            const response = resp.data as ServersCreateResponse;

            return {response};
        }

        return {error: getErrorFromResponse(resp)};
    }

    async findAllServers(): Promise<FindAllServersResponse> {
        const resp = await this.api.get("/servers").catch(err => err.response);

        if (resp.status == 200) {
            const response = resp.data as ServersFindAllResponse;

            return {response};
        }

        return {error: getErrorFromResponse(resp)};
    }

    async findOneServers(id: string): Promise<FindOneServerResponse> {
        const resp = await this.api.get(`/servers/${id}`).catch(err => err.response);

        if (resp.status == 200) {
            const response = resp.data as ServersFindOneResponse;

            return {response};
        }

        return {error: getErrorFromResponse(resp)};
    }

    async getServerStatus(id: string): Promise<GetServerStatusResponse> {
        const resp = await this.api.get(`/servers/${id}/status`).catch(err => err.response);

        if (resp.status == 200) {
            const response = resp.data as ServersGetStatusResponse;

            return {response};
        }

        return {error: getErrorFromResponse(resp)};
    }

    //todo: upgrade console

    async deleteServer(id: string): Promise<DeleteServerResponse> {
        const resp = await this.api.delete(`/servers/${id}`).catch(err => err.response);

        if (resp.status == 200) {
            return {};
        }

        return {error: getErrorFromResponse(resp)};
    }

    async startServer(id: string): Promise<ServerChangeStateResponse> {
        const resp = await this.api.post(`/servers/${id}/start`).catch(err => err.response);

        if (resp.status == 200) {
            return {};
        }

        return {error: getErrorFromResponse(resp)};
    }

    async restartServer(id: string): Promise<ServerChangeStateResponse> {
        const resp = await this.api.post(`/servers/${id}/restart`).catch(err => err.response);

        if (resp.status == 200) {
            return {};
        }

        return {error: getErrorFromResponse(resp)};
    }

    async stopServer(id: string): Promise<ServerChangeStateResponse> {
        const resp = await this.api.post(`/servers/${id}/stop`).catch(err => err.response);

        if (resp.status == 200) {
            return {};
        }

        return {error: getErrorFromResponse(resp)};
    }
}