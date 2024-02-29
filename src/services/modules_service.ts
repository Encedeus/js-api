import {AxiosInstance} from "axios";
import {
    ModuleInstallRequest,
    ModulesFindAllRequest,
    ModulesFindAllResponse,
    ModulesFindOneRequest,
    ModulesFindOneResponse
} from "../proto/modules_api";
import {BadRequestError, ErrorCheck, ErrorCheckResponse, HttpError} from "./errors";

export const ModuleNotFoundError = new HttpError(404, "ModuleNotFoundError", "module not found");
export type FindModulesResponse = {

    error?: HttpError;

    response?: ModulesFindAllResponse;

}


export type FindModuleResponse = {

    error?: HttpError;

    response?: ModulesFindOneResponse;

}


export function isFindModulesError(err: ErrorCheck): ErrorCheckResponse {

    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {

        case BadRequestError.statusCode:

            return { ok: true, error: BadRequestError };

    }



    return {

        ok: false,

    };

}


export function isFindModuleError(err: ErrorCheck): ErrorCheckResponse {

    switch (err instanceof HttpError ? (err as HttpError).statusCode : err) {

        case ModuleNotFoundError.statusCode:

            return { ok: true, error: ModuleNotFoundError };

    }


    return {

        ok: false,

    };

}
export class ModulesService {
    private api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api;
    }
    // todo: unstupid after friday
    async installPlugin(req: ModuleInstallRequest): Promise<ErrorCheckResponse> {
        const resp = await this.api.post("/modules/").catch(err => err.response)

        if (resp.status == 200) {
            return {ok: true}
        }

        return {ok:false, error: new HttpError(resp.status, "", resp["message"])}
    }

    async findAllModules(findReq: ModulesFindAllRequest): Promise<FindModulesResponse> {

        const resp = await this.api.get(`/modules?frontendOnly=${findReq.frontendOnly}&backendOnly=${findReq.backendOnly}`).catch(err => err.response);


        if (resp.status != 200) {

            return {

                error: isFindModulesError(resp.status).error

            };

        }


        return {

            response: resp.data as ModulesFindAllResponse

        };

    }


    async findOneModule(findReq: ModulesFindOneRequest): Promise<FindModuleResponse> {

        const resp = await this.api.get(`/modules/${findReq.id?.value}`);


        if (resp.status != 200) {

            return {

                error: isFindModuleError(resp.status).error,

            };

        }


        return {

            response: ModulesFindOneResponse.fromJSON(resp.data),

        };

    }
}