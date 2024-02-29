/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export interface UserSignInRequest {
  uid: string;
  password: string;
}

export interface UserSignInResponse {
  accessToken: string;
  refreshToken: string;
}

export interface AccessTokenRefreshRequest {
  refreshToken: string;
}

export interface AccessTokenRefreshResponse {
  accessToken: string;
}

function createBaseUserSignInRequest(): UserSignInRequest {
  return { uid: "", password: "" };
}

export const UserSignInRequest = {
  encode(message: UserSignInRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.uid !== "") {
      writer.uint32(10).string(message.uid);
    }
    if (message.password !== "") {
      writer.uint32(18).string(message.password);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSignInRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSignInRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.uid = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.password = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSignInRequest {
    return {
      uid: isSet(object.uid) ? globalThis.String(object.uid) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
    };
  },

  toJSON(message: UserSignInRequest): unknown {
    const obj: any = {};
    if (message.uid !== "") {
      obj.uid = message.uid;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSignInRequest>, I>>(base?: I): UserSignInRequest {
    return UserSignInRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserSignInRequest>, I>>(object: I): UserSignInRequest {
    const message = createBaseUserSignInRequest();
    message.uid = object.uid ?? "";
    message.password = object.password ?? "";
    return message;
  },
};

function createBaseUserSignInResponse(): UserSignInResponse {
  return { accessToken: "", refreshToken: "" };
}

export const UserSignInResponse = {
  encode(message: UserSignInResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    if (message.refreshToken !== "") {
      writer.uint32(18).string(message.refreshToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserSignInResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserSignInResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.refreshToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserSignInResponse {
    return {
      accessToken: isSet(object.accessToken) ? globalThis.String(object.accessToken) : "",
      refreshToken: isSet(object.refreshToken) ? globalThis.String(object.refreshToken) : "",
    };
  },

  toJSON(message: UserSignInResponse): unknown {
    const obj: any = {};
    if (message.accessToken !== "") {
      obj.accessToken = message.accessToken;
    }
    if (message.refreshToken !== "") {
      obj.refreshToken = message.refreshToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserSignInResponse>, I>>(base?: I): UserSignInResponse {
    return UserSignInResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserSignInResponse>, I>>(object: I): UserSignInResponse {
    const message = createBaseUserSignInResponse();
    message.accessToken = object.accessToken ?? "";
    message.refreshToken = object.refreshToken ?? "";
    return message;
  },
};

function createBaseAccessTokenRefreshRequest(): AccessTokenRefreshRequest {
  return { refreshToken: "" };
}

export const AccessTokenRefreshRequest = {
  encode(message: AccessTokenRefreshRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.refreshToken !== "") {
      writer.uint32(10).string(message.refreshToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessTokenRefreshRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessTokenRefreshRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.refreshToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessTokenRefreshRequest {
    return { refreshToken: isSet(object.refreshToken) ? globalThis.String(object.refreshToken) : "" };
  },

  toJSON(message: AccessTokenRefreshRequest): unknown {
    const obj: any = {};
    if (message.refreshToken !== "") {
      obj.refreshToken = message.refreshToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccessTokenRefreshRequest>, I>>(base?: I): AccessTokenRefreshRequest {
    return AccessTokenRefreshRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccessTokenRefreshRequest>, I>>(object: I): AccessTokenRefreshRequest {
    const message = createBaseAccessTokenRefreshRequest();
    message.refreshToken = object.refreshToken ?? "";
    return message;
  },
};

function createBaseAccessTokenRefreshResponse(): AccessTokenRefreshResponse {
  return { accessToken: "" };
}

export const AccessTokenRefreshResponse = {
  encode(message: AccessTokenRefreshResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.accessToken !== "") {
      writer.uint32(10).string(message.accessToken);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessTokenRefreshResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessTokenRefreshResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.accessToken = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessTokenRefreshResponse {
    return { accessToken: isSet(object.accessToken) ? globalThis.String(object.accessToken) : "" };
  },

  toJSON(message: AccessTokenRefreshResponse): unknown {
    const obj: any = {};
    if (message.accessToken !== "") {
      obj.accessToken = message.accessToken;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccessTokenRefreshResponse>, I>>(base?: I): AccessTokenRefreshResponse {
    return AccessTokenRefreshResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccessTokenRefreshResponse>, I>>(object: I): AccessTokenRefreshResponse {
    const message = createBaseAccessTokenRefreshResponse();
    message.accessToken = object.accessToken ?? "";
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
