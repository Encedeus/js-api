/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Module } from "./common";
import { UUID } from "./generic";

export const protobufPackage = "";

export interface ModulesFindAllRequest {
  frontendOnly: boolean;
  backendOnly: boolean;
}

export interface ModulesFindAllResponse {
  modules: Module[];
}

export interface ModulesFindOneRequest {
  id: UUID | undefined;
}

export interface ModulesFindOneResponse {
  modules: Module[];
}

export interface ModuleInstallRequest {
  moduleId: UUID | undefined;
}

function createBaseModulesFindAllRequest(): ModulesFindAllRequest {
  return { frontendOnly: false, backendOnly: false };
}

export const ModulesFindAllRequest = {
  encode(message: ModulesFindAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.frontendOnly === true) {
      writer.uint32(8).bool(message.frontendOnly);
    }
    if (message.backendOnly === true) {
      writer.uint32(16).bool(message.backendOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModulesFindAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModulesFindAllRequest();
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

  fromJSON(object: any): ModulesFindAllRequest {
    return {
      frontendOnly: isSet(object.frontendOnly) ? globalThis.Boolean(object.frontendOnly) : false,
      backendOnly: isSet(object.backendOnly) ? globalThis.Boolean(object.backendOnly) : false,
    };
  },

  toJSON(message: ModulesFindAllRequest): unknown {
    const obj: any = {};
    if (message.frontendOnly === true) {
      obj.frontendOnly = message.frontendOnly;
    }
    if (message.backendOnly === true) {
      obj.backendOnly = message.backendOnly;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModulesFindAllRequest>, I>>(base?: I): ModulesFindAllRequest {
    return ModulesFindAllRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModulesFindAllRequest>, I>>(object: I): ModulesFindAllRequest {
    const message = createBaseModulesFindAllRequest();
    message.frontendOnly = object.frontendOnly ?? false;
    message.backendOnly = object.backendOnly ?? false;
    return message;
  },
};

function createBaseModulesFindAllResponse(): ModulesFindAllResponse {
  return { modules: [] };
}

export const ModulesFindAllResponse = {
  encode(message: ModulesFindAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.modules) {
      Module.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModulesFindAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModulesFindAllResponse();
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

  fromJSON(object: any): ModulesFindAllResponse {
    return {
      modules: globalThis.Array.isArray(object?.modules) ? object.modules.map((e: any) => Module.fromJSON(e)) : [],
    };
  },

  toJSON(message: ModulesFindAllResponse): unknown {
    const obj: any = {};
    if (message.modules?.length) {
      obj.modules = message.modules.map((e) => Module.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModulesFindAllResponse>, I>>(base?: I): ModulesFindAllResponse {
    return ModulesFindAllResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModulesFindAllResponse>, I>>(object: I): ModulesFindAllResponse {
    const message = createBaseModulesFindAllResponse();
    message.modules = object.modules?.map((e) => Module.fromPartial(e)) || [];
    return message;
  },
};

function createBaseModulesFindOneRequest(): ModulesFindOneRequest {
  return { id: undefined };
}

export const ModulesFindOneRequest = {
  encode(message: ModulesFindOneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModulesFindOneRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModulesFindOneRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModulesFindOneRequest {
    return { id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined };
  },

  toJSON(message: ModulesFindOneRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModulesFindOneRequest>, I>>(base?: I): ModulesFindOneRequest {
    return ModulesFindOneRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModulesFindOneRequest>, I>>(object: I): ModulesFindOneRequest {
    const message = createBaseModulesFindOneRequest();
    message.id = (object.id !== undefined && object.id !== null) ? UUID.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseModulesFindOneResponse(): ModulesFindOneResponse {
  return { modules: [] };
}

export const ModulesFindOneResponse = {
  encode(message: ModulesFindOneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.modules) {
      Module.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModulesFindOneResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModulesFindOneResponse();
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

  fromJSON(object: any): ModulesFindOneResponse {
    return {
      modules: globalThis.Array.isArray(object?.modules) ? object.modules.map((e: any) => Module.fromJSON(e)) : [],
    };
  },

  toJSON(message: ModulesFindOneResponse): unknown {
    const obj: any = {};
    if (message.modules?.length) {
      obj.modules = message.modules.map((e) => Module.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModulesFindOneResponse>, I>>(base?: I): ModulesFindOneResponse {
    return ModulesFindOneResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModulesFindOneResponse>, I>>(object: I): ModulesFindOneResponse {
    const message = createBaseModulesFindOneResponse();
    message.modules = object.modules?.map((e) => Module.fromPartial(e)) || [];
    return message;
  },
};

function createBaseModuleInstallRequest(): ModuleInstallRequest {
  return { moduleId: undefined };
}

export const ModuleInstallRequest = {
  encode(message: ModuleInstallRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.moduleId !== undefined) {
      UUID.encode(message.moduleId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleInstallRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleInstallRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.moduleId = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleInstallRequest {
    return { moduleId: isSet(object.moduleId) ? UUID.fromJSON(object.moduleId) : undefined };
  },

  toJSON(message: ModuleInstallRequest): unknown {
    const obj: any = {};
    if (message.moduleId !== undefined) {
      obj.moduleId = UUID.toJSON(message.moduleId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModuleInstallRequest>, I>>(base?: I): ModuleInstallRequest {
    return ModuleInstallRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModuleInstallRequest>, I>>(object: I): ModuleInstallRequest {
    const message = createBaseModuleInstallRequest();
    message.moduleId = (object.moduleId !== undefined && object.moduleId !== null)
      ? UUID.fromPartial(object.moduleId)
      : undefined;
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
