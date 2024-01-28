/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Module } from "./common";

export const protobufPackage = "";

export interface FindAllModulesRequest {
  frontendOnly: boolean;
  backendOnly: boolean;
}

export interface FindAllModulesResponse {
  modules: Module[];
}

function createBaseFindAllModulesRequest(): FindAllModulesRequest {
  return { frontendOnly: false, backendOnly: false };
}

export const FindAllModulesRequest = {
  encode(message: FindAllModulesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.frontendOnly === true) {
      writer.uint32(8).bool(message.frontendOnly);
    }
    if (message.backendOnly === true) {
      writer.uint32(16).bool(message.backendOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllModulesRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllModulesRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.frontendOnly = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.backendOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindAllModulesRequest {
    return {
      frontendOnly: isSet(object.frontendOnly) ? globalThis.Boolean(object.frontendOnly) : false,
      backendOnly: isSet(object.backendOnly) ? globalThis.Boolean(object.backendOnly) : false,
    };
  },

  toJSON(message: FindAllModulesRequest): unknown {
    const obj: any = {};
    if (message.frontendOnly === true) {
      obj.frontendOnly = message.frontendOnly;
    }
    if (message.backendOnly === true) {
      obj.backendOnly = message.backendOnly;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllModulesRequest>, I>>(base?: I): FindAllModulesRequest {
    return FindAllModulesRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllModulesRequest>, I>>(object: I): FindAllModulesRequest {
    const message = createBaseFindAllModulesRequest();
    message.frontendOnly = object.frontendOnly ?? false;
    message.backendOnly = object.backendOnly ?? false;
    return message;
  },
};

function createBaseFindAllModulesResponse(): FindAllModulesResponse {
  return { modules: [] };
}

export const FindAllModulesResponse = {
  encode(message: FindAllModulesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.modules) {
      Module.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): FindAllModulesResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseFindAllModulesResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.modules.push(Module.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): FindAllModulesResponse {
    return {
      modules: globalThis.Array.isArray(object?.modules) ? object.modules.map((e: any) => Module.fromJSON(e)) : [],
    };
  },

  toJSON(message: FindAllModulesResponse): unknown {
    const obj: any = {};
    if (message.modules?.length) {
      obj.modules = message.modules.map((e) => Module.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<FindAllModulesResponse>, I>>(base?: I): FindAllModulesResponse {
    return FindAllModulesResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<FindAllModulesResponse>, I>>(object: I): FindAllModulesResponse {
    const message = createBaseFindAllModulesResponse();
    message.modules = object.modules?.map((e) => Module.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
