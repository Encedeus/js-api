/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Role } from "./common";
import { UUID } from "./generic";

export const protobufPackage = "";

export interface RoleCreateRequest {
  name: string;
  permissions: string[];
}

export interface RoleCreateResponse {
  role: Role | undefined;
}

export interface RoleUpdateRequest {
  id: UUID | undefined;
  name: string;
  permissions: string[];
}

export interface RoleUpdateResponse {
  role: Role | undefined;
}

export interface RoleDeleteRequest {
  id: UUID | undefined;
}

export interface RoleDeleteResponse {
}

export interface RoleFindOneRequest {
  id: UUID | undefined;
}

export interface RoleFindOneResponse {
  role: Role | undefined;
}

export interface RoleFindManyResponse {
  roles: Role[];
}

function createBaseRoleCreateRequest(): RoleCreateRequest {
  return { name: "", permissions: [] };
}

export const RoleCreateRequest = {
  encode(message: RoleCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleCreateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleCreateRequest();
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

          message.permissions.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RoleCreateRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      permissions: globalThis.Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: RoleCreateRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.permissions?.length) {
      obj.permissions = message.permissions;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleCreateRequest>, I>>(base?: I): RoleCreateRequest {
    return RoleCreateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleCreateRequest>, I>>(object: I): RoleCreateRequest {
    const message = createBaseRoleCreateRequest();
    message.name = object.name ?? "";
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
};

function createBaseRoleCreateResponse(): RoleCreateResponse {
  return { role: undefined };
}

export const RoleCreateResponse = {
  encode(message: RoleCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== undefined) {
      Role.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleCreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.role = Role.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RoleCreateResponse {
    return { role: isSet(object.role) ? Role.fromJSON(object.role) : undefined };
  },

  toJSON(message: RoleCreateResponse): unknown {
    const obj: any = {};
    if (message.role !== undefined) {
      obj.role = Role.toJSON(message.role);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleCreateResponse>, I>>(base?: I): RoleCreateResponse {
    return RoleCreateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleCreateResponse>, I>>(object: I): RoleCreateResponse {
    const message = createBaseRoleCreateResponse();
    message.role = (object.role !== undefined && object.role !== null) ? Role.fromPartial(object.role) : undefined;
    return message;
  },
};

function createBaseRoleUpdateRequest(): RoleUpdateRequest {
  return { id: undefined, name: "", permissions: [] };
}

export const RoleUpdateRequest = {
  encode(message: RoleUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleUpdateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.id = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.permissions.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RoleUpdateRequest {
    return {
      id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      permissions: globalThis.Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: RoleUpdateRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.permissions?.length) {
      obj.permissions = message.permissions;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleUpdateRequest>, I>>(base?: I): RoleUpdateRequest {
    return RoleUpdateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleUpdateRequest>, I>>(object: I): RoleUpdateRequest {
    const message = createBaseRoleUpdateRequest();
    message.id = (object.id !== undefined && object.id !== null) ? UUID.fromPartial(object.id) : undefined;
    message.name = object.name ?? "";
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
};

function createBaseRoleUpdateResponse(): RoleUpdateResponse {
  return { role: undefined };
}

export const RoleUpdateResponse = {
  encode(message: RoleUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== undefined) {
      Role.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.role = Role.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RoleUpdateResponse {
    return { role: isSet(object.role) ? Role.fromJSON(object.role) : undefined };
  },

  toJSON(message: RoleUpdateResponse): unknown {
    const obj: any = {};
    if (message.role !== undefined) {
      obj.role = Role.toJSON(message.role);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleUpdateResponse>, I>>(base?: I): RoleUpdateResponse {
    return RoleUpdateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleUpdateResponse>, I>>(object: I): RoleUpdateResponse {
    const message = createBaseRoleUpdateResponse();
    message.role = (object.role !== undefined && object.role !== null) ? Role.fromPartial(object.role) : undefined;
    return message;
  },
};

function createBaseRoleDeleteRequest(): RoleDeleteRequest {
  return { id: undefined };
}

export const RoleDeleteRequest = {
  encode(message: RoleDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleDeleteRequest();
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

  fromJSON(object: any): RoleDeleteRequest {
    return { id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined };
  },

  toJSON(message: RoleDeleteRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleDeleteRequest>, I>>(base?: I): RoleDeleteRequest {
    return RoleDeleteRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleDeleteRequest>, I>>(object: I): RoleDeleteRequest {
    const message = createBaseRoleDeleteRequest();
    message.id = (object.id !== undefined && object.id !== null) ? UUID.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseRoleDeleteResponse(): RoleDeleteResponse {
  return {};
}

export const RoleDeleteResponse = {
  encode(_: RoleDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleDeleteResponse();
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

  fromJSON(_: any): RoleDeleteResponse {
    return {};
  },

  toJSON(_: RoleDeleteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleDeleteResponse>, I>>(base?: I): RoleDeleteResponse {
    return RoleDeleteResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleDeleteResponse>, I>>(_: I): RoleDeleteResponse {
    const message = createBaseRoleDeleteResponse();
    return message;
  },
};

function createBaseRoleFindOneRequest(): RoleFindOneRequest {
  return { id: undefined };
}

export const RoleFindOneRequest = {
  encode(message: RoleFindOneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleFindOneRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleFindOneRequest();
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

  fromJSON(object: any): RoleFindOneRequest {
    return { id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined };
  },

  toJSON(message: RoleFindOneRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleFindOneRequest>, I>>(base?: I): RoleFindOneRequest {
    return RoleFindOneRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleFindOneRequest>, I>>(object: I): RoleFindOneRequest {
    const message = createBaseRoleFindOneRequest();
    message.id = (object.id !== undefined && object.id !== null) ? UUID.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseRoleFindOneResponse(): RoleFindOneResponse {
  return { role: undefined };
}

export const RoleFindOneResponse = {
  encode(message: RoleFindOneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.role !== undefined) {
      Role.encode(message.role, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleFindOneResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleFindOneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.role = Role.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RoleFindOneResponse {
    return { role: isSet(object.role) ? Role.fromJSON(object.role) : undefined };
  },

  toJSON(message: RoleFindOneResponse): unknown {
    const obj: any = {};
    if (message.role !== undefined) {
      obj.role = Role.toJSON(message.role);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleFindOneResponse>, I>>(base?: I): RoleFindOneResponse {
    return RoleFindOneResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleFindOneResponse>, I>>(object: I): RoleFindOneResponse {
    const message = createBaseRoleFindOneResponse();
    message.role = (object.role !== undefined && object.role !== null) ? Role.fromPartial(object.role) : undefined;
    return message;
  },
};

function createBaseRoleFindManyResponse(): RoleFindManyResponse {
  return { roles: [] };
}

export const RoleFindManyResponse = {
  encode(message: RoleFindManyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.roles) {
      Role.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RoleFindManyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRoleFindManyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.roles.push(Role.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RoleFindManyResponse {
    return { roles: globalThis.Array.isArray(object?.roles) ? object.roles.map((e: any) => Role.fromJSON(e)) : [] };
  },

  toJSON(message: RoleFindManyResponse): unknown {
    const obj: any = {};
    if (message.roles?.length) {
      obj.roles = message.roles.map((e) => Role.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RoleFindManyResponse>, I>>(base?: I): RoleFindManyResponse {
    return RoleFindManyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RoleFindManyResponse>, I>>(object: I): RoleFindManyResponse {
    const message = createBaseRoleFindManyResponse();
    message.roles = object.roles?.map((e) => Role.fromPartial(e)) || [];
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
