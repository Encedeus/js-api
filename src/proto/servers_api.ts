/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Server } from "./common";
import { UUID } from "./generic";

export const protobufPackage = "";

export interface ServersCreateRequest {
  name: string;
  crater: string;
  craterVariant: string;
  owner: UUID | undefined;
  node: UUID | undefined;
  ram: number;
  storage: number;
  logicalCores: number;
}

export interface ServersCreateResponse {
  servers: Server[];
}

export interface ServersFindAllRequest {
  backendOnly: boolean;
  frontendOnly: boolean;
}

export interface ServersFindAllResponse {
  servers: Server[];
}

export interface ServersFindOneRequest {
  id: UUID | undefined;
}

export interface ServersFindOneResponse {
  servers: Server[];
}

export interface ServersDeleteRequest {
  id: UUID | undefined;
}

export interface ServersDeleteResponse {
}

export interface ServersGetStatusResponse {
  status: string;
}

function createBaseServersCreateRequest(): ServersCreateRequest {
  return {
    name: "",
    crater: "",
    craterVariant: "",
    owner: undefined,
    node: undefined,
    ram: 0,
    storage: 0,
    logicalCores: 0,
  };
}

export const ServersCreateRequest = {
  encode(message: ServersCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.crater !== "") {
      writer.uint32(18).string(message.crater);
    }
    if (message.craterVariant !== "") {
      writer.uint32(26).string(message.craterVariant);
    }
    if (message.owner !== undefined) {
      UUID.encode(message.owner, writer.uint32(34).fork()).ldelim();
    }
    if (message.node !== undefined) {
      UUID.encode(message.node, writer.uint32(42).fork()).ldelim();
    }
    if (message.ram !== 0) {
      writer.uint32(48).uint64(message.ram);
    }
    if (message.storage !== 0) {
      writer.uint32(56).uint64(message.storage);
    }
    if (message.logicalCores !== 0) {
      writer.uint32(64).uint32(message.logicalCores);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServersCreateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServersCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.crater = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.craterVariant = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.owner = UUID.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.node = UUID.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.ram = longToNumber(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.storage = longToNumber(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.logicalCores = reader.uint32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServersCreateRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      crater: isSet(object.crater) ? globalThis.String(object.crater) : "",
      craterVariant: isSet(object.craterVariant) ? globalThis.String(object.craterVariant) : "",
      owner: isSet(object.owner) ? UUID.fromJSON(object.owner) : undefined,
      node: isSet(object.node) ? UUID.fromJSON(object.node) : undefined,
      ram: isSet(object.ram) ? globalThis.Number(object.ram) : 0,
      storage: isSet(object.storage) ? globalThis.Number(object.storage) : 0,
      logicalCores: isSet(object.logicalCores) ? globalThis.Number(object.logicalCores) : 0,
    };
  },

  toJSON(message: ServersCreateRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.crater !== "") {
      obj.crater = message.crater;
    }
    if (message.craterVariant !== "") {
      obj.craterVariant = message.craterVariant;
    }
    if (message.owner !== undefined) {
      obj.owner = UUID.toJSON(message.owner);
    }
    if (message.node !== undefined) {
      obj.node = UUID.toJSON(message.node);
    }
    if (message.ram !== 0) {
      obj.ram = Math.round(message.ram);
    }
    if (message.storage !== 0) {
      obj.storage = Math.round(message.storage);
    }
    if (message.logicalCores !== 0) {
      obj.logicalCores = Math.round(message.logicalCores);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServersCreateRequest>, I>>(base?: I): ServersCreateRequest {
    return ServersCreateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServersCreateRequest>, I>>(object: I): ServersCreateRequest {
    const message = createBaseServersCreateRequest();
    message.name = object.name ?? "";
    message.crater = object.crater ?? "";
    message.craterVariant = object.craterVariant ?? "";
    message.owner = (object.owner !== undefined && object.owner !== null) ? UUID.fromPartial(object.owner) : undefined;
    message.node = (object.node !== undefined && object.node !== null) ? UUID.fromPartial(object.node) : undefined;
    message.ram = object.ram ?? 0;
    message.storage = object.storage ?? 0;
    message.logicalCores = object.logicalCores ?? 0;
    return message;
  },
};

function createBaseServersCreateResponse(): ServersCreateResponse {
  return { servers: [] };
}

export const ServersCreateResponse = {
  encode(message: ServersCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.servers) {
      Server.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServersCreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServersCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.servers.push(Server.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServersCreateResponse {
    return {
      servers: globalThis.Array.isArray(object?.servers) ? object.servers.map((e: any) => Server.fromJSON(e)) : [],
    };
  },

  toJSON(message: ServersCreateResponse): unknown {
    const obj: any = {};
    if (message.servers?.length) {
      obj.servers = message.servers.map((e) => Server.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServersCreateResponse>, I>>(base?: I): ServersCreateResponse {
    return ServersCreateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServersCreateResponse>, I>>(object: I): ServersCreateResponse {
    const message = createBaseServersCreateResponse();
    message.servers = object.servers?.map((e) => Server.fromPartial(e)) || [];
    return message;
  },
};

function createBaseServersFindAllRequest(): ServersFindAllRequest {
  return { backendOnly: false, frontendOnly: false };
}

export const ServersFindAllRequest = {
  encode(message: ServersFindAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.backendOnly === true) {
      writer.uint32(8).bool(message.backendOnly);
    }
    if (message.frontendOnly === true) {
      writer.uint32(16).bool(message.frontendOnly);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServersFindAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServersFindAllRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.backendOnly = reader.bool();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.frontendOnly = reader.bool();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServersFindAllRequest {
    return {
      backendOnly: isSet(object.backendOnly) ? globalThis.Boolean(object.backendOnly) : false,
      frontendOnly: isSet(object.frontendOnly) ? globalThis.Boolean(object.frontendOnly) : false,
    };
  },

  toJSON(message: ServersFindAllRequest): unknown {
    const obj: any = {};
    if (message.backendOnly === true) {
      obj.backendOnly = message.backendOnly;
    }
    if (message.frontendOnly === true) {
      obj.frontendOnly = message.frontendOnly;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServersFindAllRequest>, I>>(base?: I): ServersFindAllRequest {
    return ServersFindAllRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServersFindAllRequest>, I>>(object: I): ServersFindAllRequest {
    const message = createBaseServersFindAllRequest();
    message.backendOnly = object.backendOnly ?? false;
    message.frontendOnly = object.frontendOnly ?? false;
    return message;
  },
};

function createBaseServersFindAllResponse(): ServersFindAllResponse {
  return { servers: [] };
}

export const ServersFindAllResponse = {
  encode(message: ServersFindAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.servers) {
      Server.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServersFindAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServersFindAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.servers.push(Server.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServersFindAllResponse {
    return {
      servers: globalThis.Array.isArray(object?.servers) ? object.servers.map((e: any) => Server.fromJSON(e)) : [],
    };
  },

  toJSON(message: ServersFindAllResponse): unknown {
    const obj: any = {};
    if (message.servers?.length) {
      obj.servers = message.servers.map((e) => Server.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServersFindAllResponse>, I>>(base?: I): ServersFindAllResponse {
    return ServersFindAllResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServersFindAllResponse>, I>>(object: I): ServersFindAllResponse {
    const message = createBaseServersFindAllResponse();
    message.servers = object.servers?.map((e) => Server.fromPartial(e)) || [];
    return message;
  },
};

function createBaseServersFindOneRequest(): ServersFindOneRequest {
  return { id: undefined };
}

export const ServersFindOneRequest = {
  encode(message: ServersFindOneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServersFindOneRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServersFindOneRequest();
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

  fromJSON(object: any): ServersFindOneRequest {
    return { id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined };
  },

  toJSON(message: ServersFindOneRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServersFindOneRequest>, I>>(base?: I): ServersFindOneRequest {
    return ServersFindOneRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServersFindOneRequest>, I>>(object: I): ServersFindOneRequest {
    const message = createBaseServersFindOneRequest();
    message.id = (object.id !== undefined && object.id !== null) ? UUID.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseServersFindOneResponse(): ServersFindOneResponse {
  return { servers: [] };
}

export const ServersFindOneResponse = {
  encode(message: ServersFindOneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.servers) {
      Server.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServersFindOneResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServersFindOneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.servers.push(Server.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServersFindOneResponse {
    return {
      servers: globalThis.Array.isArray(object?.servers) ? object.servers.map((e: any) => Server.fromJSON(e)) : [],
    };
  },

  toJSON(message: ServersFindOneResponse): unknown {
    const obj: any = {};
    if (message.servers?.length) {
      obj.servers = message.servers.map((e) => Server.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServersFindOneResponse>, I>>(base?: I): ServersFindOneResponse {
    return ServersFindOneResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServersFindOneResponse>, I>>(object: I): ServersFindOneResponse {
    const message = createBaseServersFindOneResponse();
    message.servers = object.servers?.map((e) => Server.fromPartial(e)) || [];
    return message;
  },
};

function createBaseServersDeleteRequest(): ServersDeleteRequest {
  return { id: undefined };
}

export const ServersDeleteRequest = {
  encode(message: ServersDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServersDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServersDeleteRequest();
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

  fromJSON(object: any): ServersDeleteRequest {
    return { id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined };
  },

  toJSON(message: ServersDeleteRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServersDeleteRequest>, I>>(base?: I): ServersDeleteRequest {
    return ServersDeleteRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServersDeleteRequest>, I>>(object: I): ServersDeleteRequest {
    const message = createBaseServersDeleteRequest();
    message.id = (object.id !== undefined && object.id !== null) ? UUID.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseServersDeleteResponse(): ServersDeleteResponse {
  return {};
}

export const ServersDeleteResponse = {
  encode(_: ServersDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServersDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServersDeleteResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): ServersDeleteResponse {
    return {};
  },

  toJSON(_: ServersDeleteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<ServersDeleteResponse>, I>>(base?: I): ServersDeleteResponse {
    return ServersDeleteResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServersDeleteResponse>, I>>(_: I): ServersDeleteResponse {
    const message = createBaseServersDeleteResponse();
    return message;
  },
};

function createBaseServersGetStatusResponse(): ServersGetStatusResponse {
  return { status: "" };
}

export const ServersGetStatusResponse = {
  encode(message: ServersGetStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.status !== "") {
      writer.uint32(10).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ServersGetStatusResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseServersGetStatusResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.status = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ServersGetStatusResponse {
    return { status: isSet(object.status) ? globalThis.String(object.status) : "" };
  },

  toJSON(message: ServersGetStatusResponse): unknown {
    const obj: any = {};
    if (message.status !== "") {
      obj.status = message.status;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ServersGetStatusResponse>, I>>(base?: I): ServersGetStatusResponse {
    return ServersGetStatusResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ServersGetStatusResponse>, I>>(object: I): ServersGetStatusResponse {
    const message = createBaseServersGetStatusResponse();
    message.status = object.status ?? "";
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

function longToNumber(long: Long): number {
  if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
