/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { AccountAPIKey } from "./common";
import { UUID } from "./generic";

export const protobufPackage = "";

export interface AccountAPIKeyCreateRequest {
  userId: UUID | undefined;
  description: string;
  ipAddresses: string[];
}

export interface AccountAPIKeyCreateResponse {
  accountApiKey: AccountAPIKey | undefined;
}

export interface AccountAPIKeyDeleteRequest {
  id: UUID | undefined;
}

export interface AccountAPIKeyDeleteResponse {
}

export interface AccountAPIKeyFindOneRequest {
  id: UUID | undefined;
}

export interface AccountAPIKeyFindOneResponse {
  accountApiKey: AccountAPIKey | undefined;
}

export interface AccountAPIKeyFindManyByUserRequest {
  userId: UUID | undefined;
}

export interface AccountAPIKeyFindManyResponse {
  accountApiKeys: AccountAPIKey[];
}

function createBaseAccountAPIKeyCreateRequest(): AccountAPIKeyCreateRequest {
  return { userId: undefined, description: "", ipAddresses: [] };
}

export const AccountAPIKeyCreateRequest = {
  encode(message: AccountAPIKeyCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      UUID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.ipAddresses) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountAPIKeyCreateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountAPIKeyCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = UUID.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.description = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.ipAddresses.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountAPIKeyCreateRequest {
    return {
      userId: isSet(object.userId) ? UUID.fromJSON(object.userId) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      ipAddresses: globalThis.Array.isArray(object?.ipAddresses)
        ? object.ipAddresses.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: AccountAPIKeyCreateRequest): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = UUID.toJSON(message.userId);
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.ipAddresses?.length) {
      obj.ipAddresses = message.ipAddresses;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountAPIKeyCreateRequest>, I>>(base?: I): AccountAPIKeyCreateRequest {
    return AccountAPIKeyCreateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountAPIKeyCreateRequest>, I>>(object: I): AccountAPIKeyCreateRequest {
    const message = createBaseAccountAPIKeyCreateRequest();
    message.userId = (object.userId !== undefined && object.userId !== null)
      ? UUID.fromPartial(object.userId)
      : undefined;
    message.description = object.description ?? "";
    message.ipAddresses = object.ipAddresses?.map((e) => e) || [];
    return message;
  },
};

function createBaseAccountAPIKeyCreateResponse(): AccountAPIKeyCreateResponse {
  return { accountApiKey: undefined };
}

export const AccountAPIKeyCreateResponse = {
  encode(message: AccountAPIKeyCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountApiKey !== undefined) {
      AccountAPIKey.encode(message.accountApiKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountAPIKeyCreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountAPIKeyCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountApiKey = AccountAPIKey.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountAPIKeyCreateResponse {
    return { accountApiKey: isSet(object.accountApiKey) ? AccountAPIKey.fromJSON(object.accountApiKey) : undefined };
  },

  toJSON(message: AccountAPIKeyCreateResponse): unknown {
    const obj: any = {};
    if (message.accountApiKey !== undefined) {
      obj.accountApiKey = AccountAPIKey.toJSON(message.accountApiKey);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountAPIKeyCreateResponse>, I>>(base?: I): AccountAPIKeyCreateResponse {
    return AccountAPIKeyCreateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountAPIKeyCreateResponse>, I>>(object: I): AccountAPIKeyCreateResponse {
    const message = createBaseAccountAPIKeyCreateResponse();
    message.accountApiKey = (object.accountApiKey !== undefined && object.accountApiKey !== null)
      ? AccountAPIKey.fromPartial(object.accountApiKey)
      : undefined;
    return message;
  },
};

function createBaseAccountAPIKeyDeleteRequest(): AccountAPIKeyDeleteRequest {
  return { id: undefined };
}

export const AccountAPIKeyDeleteRequest = {
  encode(message: AccountAPIKeyDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountAPIKeyDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountAPIKeyDeleteRequest();
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

  fromJSON(object: any): AccountAPIKeyDeleteRequest {
    return { id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined };
  },

  toJSON(message: AccountAPIKeyDeleteRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountAPIKeyDeleteRequest>, I>>(base?: I): AccountAPIKeyDeleteRequest {
    return AccountAPIKeyDeleteRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountAPIKeyDeleteRequest>, I>>(object: I): AccountAPIKeyDeleteRequest {
    const message = createBaseAccountAPIKeyDeleteRequest();
    message.id = (object.id !== undefined && object.id !== null) ? UUID.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseAccountAPIKeyDeleteResponse(): AccountAPIKeyDeleteResponse {
  return {};
}

export const AccountAPIKeyDeleteResponse = {
  encode(_: AccountAPIKeyDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountAPIKeyDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountAPIKeyDeleteResponse();
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

  fromJSON(_: any): AccountAPIKeyDeleteResponse {
    return {};
  },

  toJSON(_: AccountAPIKeyDeleteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountAPIKeyDeleteResponse>, I>>(base?: I): AccountAPIKeyDeleteResponse {
    return AccountAPIKeyDeleteResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountAPIKeyDeleteResponse>, I>>(_: I): AccountAPIKeyDeleteResponse {
    const message = createBaseAccountAPIKeyDeleteResponse();
    return message;
  },
};

function createBaseAccountAPIKeyFindOneRequest(): AccountAPIKeyFindOneRequest {
  return { id: undefined };
}

export const AccountAPIKeyFindOneRequest = {
  encode(message: AccountAPIKeyFindOneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountAPIKeyFindOneRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountAPIKeyFindOneRequest();
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

  fromJSON(object: any): AccountAPIKeyFindOneRequest {
    return { id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined };
  },

  toJSON(message: AccountAPIKeyFindOneRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountAPIKeyFindOneRequest>, I>>(base?: I): AccountAPIKeyFindOneRequest {
    return AccountAPIKeyFindOneRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountAPIKeyFindOneRequest>, I>>(object: I): AccountAPIKeyFindOneRequest {
    const message = createBaseAccountAPIKeyFindOneRequest();
    message.id = (object.id !== undefined && object.id !== null) ? UUID.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseAccountAPIKeyFindOneResponse(): AccountAPIKeyFindOneResponse {
  return { accountApiKey: undefined };
}

export const AccountAPIKeyFindOneResponse = {
  encode(message: AccountAPIKeyFindOneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accountApiKey !== undefined) {
      AccountAPIKey.encode(message.accountApiKey, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountAPIKeyFindOneResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountAPIKeyFindOneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountApiKey = AccountAPIKey.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountAPIKeyFindOneResponse {
    return { accountApiKey: isSet(object.accountApiKey) ? AccountAPIKey.fromJSON(object.accountApiKey) : undefined };
  },

  toJSON(message: AccountAPIKeyFindOneResponse): unknown {
    const obj: any = {};
    if (message.accountApiKey !== undefined) {
      obj.accountApiKey = AccountAPIKey.toJSON(message.accountApiKey);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountAPIKeyFindOneResponse>, I>>(base?: I): AccountAPIKeyFindOneResponse {
    return AccountAPIKeyFindOneResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountAPIKeyFindOneResponse>, I>>(object: I): AccountAPIKeyFindOneResponse {
    const message = createBaseAccountAPIKeyFindOneResponse();
    message.accountApiKey = (object.accountApiKey !== undefined && object.accountApiKey !== null)
      ? AccountAPIKey.fromPartial(object.accountApiKey)
      : undefined;
    return message;
  },
};

function createBaseAccountAPIKeyFindManyByUserRequest(): AccountAPIKeyFindManyByUserRequest {
  return { userId: undefined };
}

export const AccountAPIKeyFindManyByUserRequest = {
  encode(message: AccountAPIKeyFindManyByUserRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      UUID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountAPIKeyFindManyByUserRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountAPIKeyFindManyByUserRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.userId = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountAPIKeyFindManyByUserRequest {
    return { userId: isSet(object.userId) ? UUID.fromJSON(object.userId) : undefined };
  },

  toJSON(message: AccountAPIKeyFindManyByUserRequest): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = UUID.toJSON(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountAPIKeyFindManyByUserRequest>, I>>(
    base?: I,
  ): AccountAPIKeyFindManyByUserRequest {
    return AccountAPIKeyFindManyByUserRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountAPIKeyFindManyByUserRequest>, I>>(
    object: I,
  ): AccountAPIKeyFindManyByUserRequest {
    const message = createBaseAccountAPIKeyFindManyByUserRequest();
    message.userId = (object.userId !== undefined && object.userId !== null)
      ? UUID.fromPartial(object.userId)
      : undefined;
    return message;
  },
};

function createBaseAccountAPIKeyFindManyResponse(): AccountAPIKeyFindManyResponse {
  return { accountApiKeys: [] };
}

export const AccountAPIKeyFindManyResponse = {
  encode(message: AccountAPIKeyFindManyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.accountApiKeys) {
      AccountAPIKey.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountAPIKeyFindManyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountAPIKeyFindManyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accountApiKeys.push(AccountAPIKey.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountAPIKeyFindManyResponse {
    return {
      accountApiKeys: globalThis.Array.isArray(object?.accountApiKeys)
        ? object.accountApiKeys.map((e: any) => AccountAPIKey.fromJSON(e))
        : [],
    };
  },

  toJSON(message: AccountAPIKeyFindManyResponse): unknown {
    const obj: any = {};
    if (message.accountApiKeys?.length) {
      obj.accountApiKeys = message.accountApiKeys.map((e) => AccountAPIKey.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountAPIKeyFindManyResponse>, I>>(base?: I): AccountAPIKeyFindManyResponse {
    return AccountAPIKeyFindManyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountAPIKeyFindManyResponse>, I>>(
    object: I,
  ): AccountAPIKeyFindManyResponse {
    const message = createBaseAccountAPIKeyFindManyResponse();
    message.accountApiKeys = object.accountApiKeys?.map((e) => AccountAPIKey.fromPartial(e)) || [];
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
