/* eslint-disable */
import * as _m0 from "protobufjs/minimal";
import { Port, UUID } from "./generic";
import { Timestamp } from "./google/protobuf/timestamp";

export const protobufPackage = "";

export enum TokenType {
  ACCESS_TOKEN = 0,
  REFRESH_TOKEN = 1,
  ACCOUNT_API_KEY = 2,
  UNRECOGNIZED = -1,
}

export function tokenTypeFromJSON(object: any): TokenType {
  switch (object) {
    case 0:
    case "ACCESS_TOKEN":
      return TokenType.ACCESS_TOKEN;
    case 1:
    case "REFRESH_TOKEN":
      return TokenType.REFRESH_TOKEN;
    case 2:
    case "ACCOUNT_API_KEY":
      return TokenType.ACCOUNT_API_KEY;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TokenType.UNRECOGNIZED;
  }
}

export function tokenTypeToJSON(object: TokenType): string {
  switch (object) {
    case TokenType.ACCESS_TOKEN:
      return "ACCESS_TOKEN";
    case TokenType.REFRESH_TOKEN:
      return "REFRESH_TOKEN";
    case TokenType.ACCOUNT_API_KEY:
      return "ACCOUNT_API_KEY";
    case TokenType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface User {
  id: UUID | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
  email: string;
  password: string;
  name: string;
  roleId: UUID | undefined;
}

export interface Role {
  id: UUID | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  deletedAt: Date | undefined;
  name: string;
  permissions: string[];
}

export interface AccountAPIKey {
  id: UUID | undefined;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
  description: string;
  ipAddresses: string[];
  key: string;
  userId: UUID | undefined;
}

export interface Token {
  userId: UUID | undefined;
  type: TokenType;
}

export interface AccessToken {
  token: Token | undefined;
}

export interface RefreshToken {
  token: Token | undefined;
}

export interface AccountAPIKeyToken {
  token: Token | undefined;
  ipAddresses: string[];
  description: string;
}

export interface Module {
  store: ModuleStore | undefined;
  manifest: ModuleManifest | undefined;
  backendPort: Port | undefined;
  rpcPort: Port | undefined;
  frontendServer: ModuleFrontendServer | undefined;
}

export interface ModuleStore {
  modulesFolderPath: string;
  rpcPort: Port | undefined;
}

export interface ModuleManifest {
  name: string;
  authors: string[];
  version: string;
  frontend: ModuleManifestFrontend | undefined;
  backend: ModuleManifestBackend | undefined;
}

export interface ModuleManifestFrontend {
  tabName: string;
  tabIconPath: string;
  platform: ModulePlatform | undefined;
}

export interface ModuleManifestBackend {
  main: string;
  registeredCommands: string[];
}

export interface ModulePlatform {
  value: string;
}

export interface ModuleFrontendServer {
  platform: ModulePlatform | undefined;
  environment: string;
  entryPoint: string;
  assetsPath: string;
  port: Port | undefined;
}

function createBaseUser(): User {
  return {
    id: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    deletedAt: undefined,
    email: "",
    password: "",
    name: "",
    roleId: undefined,
  };
}

export const User = {
  encode(message: User, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.deletedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.deletedAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.email !== "") {
      writer.uint32(42).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(50).string(message.password);
    }
    if (message.name !== "") {
      writer.uint32(58).string(message.name);
    }
    if (message.roleId !== undefined) {
      UUID.encode(message.roleId, writer.uint32(66).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): User {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUser();
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

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.deletedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.email = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.password = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
            break;
          }

          message.name = reader.string();
          continue;
        case 8:
          if (tag !== 66) {
            break;
          }

          message.roleId = UUID.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): User {
    return {
      id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      deletedAt: isSet(object.deletedAt) ? fromJsonTimestamp(object.deletedAt) : undefined,
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      roleId: isSet(object.roleId) ? UUID.fromJSON(object.roleId) : undefined,
    };
  },

  toJSON(message: User): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.deletedAt !== undefined) {
      obj.deletedAt = message.deletedAt.toISOString();
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.roleId !== undefined) {
      obj.roleId = UUID.toJSON(message.roleId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<User>, I>>(base?: I): User {
    return User.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<User>, I>>(object: I): User {
    const message = createBaseUser();
    message.id = (object.id !== undefined && object.id !== null) ? UUID.fromPartial(object.id) : undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.deletedAt = object.deletedAt ?? undefined;
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    message.name = object.name ?? "";
    message.roleId = (object.roleId !== undefined && object.roleId !== null)
      ? UUID.fromPartial(object.roleId)
      : undefined;
    return message;
  },
};

function createBaseRole(): Role {
  return { id: undefined, createdAt: undefined, updatedAt: undefined, deletedAt: undefined, name: "", permissions: [] };
}

export const Role = {
  encode(message: Role, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.deletedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.deletedAt), writer.uint32(34).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    for (const v of message.permissions) {
      writer.uint32(50).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Role {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRole();
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

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.deletedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.name = reader.string();
          continue;
        case 6:
          if (tag !== 50) {
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

  fromJSON(object: any): Role {
    return {
      id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      deletedAt: isSet(object.deletedAt) ? fromJsonTimestamp(object.deletedAt) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      permissions: globalThis.Array.isArray(object?.permissions)
        ? object.permissions.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: Role): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.deletedAt !== undefined) {
      obj.deletedAt = message.deletedAt.toISOString();
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.permissions?.length) {
      obj.permissions = message.permissions;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Role>, I>>(base?: I): Role {
    return Role.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Role>, I>>(object: I): Role {
    const message = createBaseRole();
    message.id = (object.id !== undefined && object.id !== null) ? UUID.fromPartial(object.id) : undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.deletedAt = object.deletedAt ?? undefined;
    message.name = object.name ?? "";
    message.permissions = object.permissions?.map((e) => e) || [];
    return message;
  },
};

function createBaseAccountAPIKey(): AccountAPIKey {
  return {
    id: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    description: "",
    ipAddresses: [],
    key: "",
    userId: undefined,
  };
}

export const AccountAPIKey = {
  encode(message: AccountAPIKey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(18).fork()).ldelim();
    }
    if (message.updatedAt !== undefined) {
      Timestamp.encode(toTimestamp(message.updatedAt), writer.uint32(26).fork()).ldelim();
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    for (const v of message.ipAddresses) {
      writer.uint32(42).string(v!);
    }
    if (message.key !== "") {
      writer.uint32(50).string(message.key);
    }
    if (message.userId !== undefined) {
      UUID.encode(message.userId, writer.uint32(58).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountAPIKey {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountAPIKey();
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

          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.updatedAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.description = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.ipAddresses.push(reader.string());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.key = reader.string();
          continue;
        case 7:
          if (tag !== 58) {
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

  fromJSON(object: any): AccountAPIKey {
    return {
      id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      updatedAt: isSet(object.updatedAt) ? fromJsonTimestamp(object.updatedAt) : undefined,
      description: isSet(object.description) ? globalThis.String(object.description) : "",
      ipAddresses: globalThis.Array.isArray(object?.ipAddresses)
        ? object.ipAddresses.map((e: any) => globalThis.String(e))
        : [],
      key: isSet(object.key) ? globalThis.String(object.key) : "",
      userId: isSet(object.userId) ? UUID.fromJSON(object.userId) : undefined,
    };
  },

  toJSON(message: AccountAPIKey): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    if (message.createdAt !== undefined) {
      obj.createdAt = message.createdAt.toISOString();
    }
    if (message.updatedAt !== undefined) {
      obj.updatedAt = message.updatedAt.toISOString();
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    if (message.ipAddresses?.length) {
      obj.ipAddresses = message.ipAddresses;
    }
    if (message.key !== "") {
      obj.key = message.key;
    }
    if (message.userId !== undefined) {
      obj.userId = UUID.toJSON(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountAPIKey>, I>>(base?: I): AccountAPIKey {
    return AccountAPIKey.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountAPIKey>, I>>(object: I): AccountAPIKey {
    const message = createBaseAccountAPIKey();
    message.id = (object.id !== undefined && object.id !== null) ? UUID.fromPartial(object.id) : undefined;
    message.createdAt = object.createdAt ?? undefined;
    message.updatedAt = object.updatedAt ?? undefined;
    message.description = object.description ?? "";
    message.ipAddresses = object.ipAddresses?.map((e) => e) || [];
    message.key = object.key ?? "";
    message.userId = (object.userId !== undefined && object.userId !== null)
      ? UUID.fromPartial(object.userId)
      : undefined;
    return message;
  },
};

function createBaseToken(): Token {
  return { userId: undefined, type: 0 };
}

export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      UUID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    if (message.type !== 0) {
      writer.uint32(16).int32(message.type);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseToken();
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
          if (tag !== 16) {
            break;
          }

          message.type = reader.int32() as any;
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Token {
    return {
      userId: isSet(object.userId) ? UUID.fromJSON(object.userId) : undefined,
      type: isSet(object.type) ? tokenTypeFromJSON(object.type) : 0,
    };
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = UUID.toJSON(message.userId);
    }
    if (message.type !== 0) {
      obj.type = tokenTypeToJSON(message.type);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Token>, I>>(base?: I): Token {
    return Token.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Token>, I>>(object: I): Token {
    const message = createBaseToken();
    message.userId = (object.userId !== undefined && object.userId !== null)
      ? UUID.fromPartial(object.userId)
      : undefined;
    message.type = object.type ?? 0;
    return message;
  },
};

function createBaseAccessToken(): AccessToken {
  return { token: undefined };
}

export const AccessToken = {
  encode(message: AccessToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccessToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccessToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = Token.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccessToken {
    return { token: isSet(object.token) ? Token.fromJSON(object.token) : undefined };
  },

  toJSON(message: AccessToken): unknown {
    const obj: any = {};
    if (message.token !== undefined) {
      obj.token = Token.toJSON(message.token);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccessToken>, I>>(base?: I): AccessToken {
    return AccessToken.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccessToken>, I>>(object: I): AccessToken {
    const message = createBaseAccessToken();
    message.token = (object.token !== undefined && object.token !== null) ? Token.fromPartial(object.token) : undefined;
    return message;
  },
};

function createBaseRefreshToken(): RefreshToken {
  return { token: undefined };
}

export const RefreshToken = {
  encode(message: RefreshToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RefreshToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRefreshToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = Token.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RefreshToken {
    return { token: isSet(object.token) ? Token.fromJSON(object.token) : undefined };
  },

  toJSON(message: RefreshToken): unknown {
    const obj: any = {};
    if (message.token !== undefined) {
      obj.token = Token.toJSON(message.token);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RefreshToken>, I>>(base?: I): RefreshToken {
    return RefreshToken.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RefreshToken>, I>>(object: I): RefreshToken {
    const message = createBaseRefreshToken();
    message.token = (object.token !== undefined && object.token !== null) ? Token.fromPartial(object.token) : undefined;
    return message;
  },
};

function createBaseAccountAPIKeyToken(): AccountAPIKeyToken {
  return { token: undefined, ipAddresses: [], description: "" };
}

export const AccountAPIKeyToken = {
  encode(message: AccountAPIKeyToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.token !== undefined) {
      Token.encode(message.token, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.ipAddresses) {
      writer.uint32(18).string(v!);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): AccountAPIKeyToken {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseAccountAPIKeyToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.token = Token.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.ipAddresses.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.description = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): AccountAPIKeyToken {
    return {
      token: isSet(object.token) ? Token.fromJSON(object.token) : undefined,
      ipAddresses: globalThis.Array.isArray(object?.ipAddresses)
        ? object.ipAddresses.map((e: any) => globalThis.String(e))
        : [],
      description: isSet(object.description) ? globalThis.String(object.description) : "",
    };
  },

  toJSON(message: AccountAPIKeyToken): unknown {
    const obj: any = {};
    if (message.token !== undefined) {
      obj.token = Token.toJSON(message.token);
    }
    if (message.ipAddresses?.length) {
      obj.ipAddresses = message.ipAddresses;
    }
    if (message.description !== "") {
      obj.description = message.description;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<AccountAPIKeyToken>, I>>(base?: I): AccountAPIKeyToken {
    return AccountAPIKeyToken.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<AccountAPIKeyToken>, I>>(object: I): AccountAPIKeyToken {
    const message = createBaseAccountAPIKeyToken();
    message.token = (object.token !== undefined && object.token !== null) ? Token.fromPartial(object.token) : undefined;
    message.ipAddresses = object.ipAddresses?.map((e) => e) || [];
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseModule(): Module {
  return {
    store: undefined,
    manifest: undefined,
    backendPort: undefined,
    rpcPort: undefined,
    frontendServer: undefined,
  };
}

export const Module = {
  encode(message: Module, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.store !== undefined) {
      ModuleStore.encode(message.store, writer.uint32(10).fork()).ldelim();
    }
    if (message.manifest !== undefined) {
      ModuleManifest.encode(message.manifest, writer.uint32(18).fork()).ldelim();
    }
    if (message.backendPort !== undefined) {
      Port.encode(message.backendPort, writer.uint32(26).fork()).ldelim();
    }
    if (message.rpcPort !== undefined) {
      Port.encode(message.rpcPort, writer.uint32(34).fork()).ldelim();
    }
    if (message.frontendServer !== undefined) {
      ModuleFrontendServer.encode(message.frontendServer, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Module {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModule();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.store = ModuleStore.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.manifest = ModuleManifest.decode(reader, reader.uint32());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.backendPort = Port.decode(reader, reader.uint32());
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.rpcPort = Port.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.frontendServer = ModuleFrontendServer.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Module {
    return {
      store: isSet(object.store) ? ModuleStore.fromJSON(object.store) : undefined,
      manifest: isSet(object.manifest) ? ModuleManifest.fromJSON(object.manifest) : undefined,
      backendPort: isSet(object.backendPort) ? Port.fromJSON(object.backendPort) : undefined,
      rpcPort: isSet(object.rpcPort) ? Port.fromJSON(object.rpcPort) : undefined,
      frontendServer: isSet(object.frontendServer) ? ModuleFrontendServer.fromJSON(object.frontendServer) : undefined,
    };
  },

  toJSON(message: Module): unknown {
    const obj: any = {};
    if (message.store !== undefined) {
      obj.store = ModuleStore.toJSON(message.store);
    }
    if (message.manifest !== undefined) {
      obj.manifest = ModuleManifest.toJSON(message.manifest);
    }
    if (message.backendPort !== undefined) {
      obj.backendPort = Port.toJSON(message.backendPort);
    }
    if (message.rpcPort !== undefined) {
      obj.rpcPort = Port.toJSON(message.rpcPort);
    }
    if (message.frontendServer !== undefined) {
      obj.frontendServer = ModuleFrontendServer.toJSON(message.frontendServer);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Module>, I>>(base?: I): Module {
    return Module.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Module>, I>>(object: I): Module {
    const message = createBaseModule();
    message.store = (object.store !== undefined && object.store !== null)
      ? ModuleStore.fromPartial(object.store)
      : undefined;
    message.manifest = (object.manifest !== undefined && object.manifest !== null)
      ? ModuleManifest.fromPartial(object.manifest)
      : undefined;
    message.backendPort = (object.backendPort !== undefined && object.backendPort !== null)
      ? Port.fromPartial(object.backendPort)
      : undefined;
    message.rpcPort = (object.rpcPort !== undefined && object.rpcPort !== null)
      ? Port.fromPartial(object.rpcPort)
      : undefined;
    message.frontendServer = (object.frontendServer !== undefined && object.frontendServer !== null)
      ? ModuleFrontendServer.fromPartial(object.frontendServer)
      : undefined;
    return message;
  },
};

function createBaseModuleStore(): ModuleStore {
  return { modulesFolderPath: "", rpcPort: undefined };
}

export const ModuleStore = {
  encode(message: ModuleStore, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.modulesFolderPath !== "") {
      writer.uint32(10).string(message.modulesFolderPath);
    }
    if (message.rpcPort !== undefined) {
      Port.encode(message.rpcPort, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleStore {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleStore();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.modulesFolderPath = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.rpcPort = Port.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleStore {
    return {
      modulesFolderPath: isSet(object.modulesFolderPath) ? globalThis.String(object.modulesFolderPath) : "",
      rpcPort: isSet(object.rpcPort) ? Port.fromJSON(object.rpcPort) : undefined,
    };
  },

  toJSON(message: ModuleStore): unknown {
    const obj: any = {};
    if (message.modulesFolderPath !== "") {
      obj.modulesFolderPath = message.modulesFolderPath;
    }
    if (message.rpcPort !== undefined) {
      obj.rpcPort = Port.toJSON(message.rpcPort);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModuleStore>, I>>(base?: I): ModuleStore {
    return ModuleStore.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModuleStore>, I>>(object: I): ModuleStore {
    const message = createBaseModuleStore();
    message.modulesFolderPath = object.modulesFolderPath ?? "";
    message.rpcPort = (object.rpcPort !== undefined && object.rpcPort !== null)
      ? Port.fromPartial(object.rpcPort)
      : undefined;
    return message;
  },
};

function createBaseModuleManifest(): ModuleManifest {
  return { name: "", authors: [], version: "", frontend: undefined, backend: undefined };
}

export const ModuleManifest = {
  encode(message: ModuleManifest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    for (const v of message.authors) {
      writer.uint32(18).string(v!);
    }
    if (message.version !== "") {
      writer.uint32(26).string(message.version);
    }
    if (message.frontend !== undefined) {
      ModuleManifestFrontend.encode(message.frontend, writer.uint32(34).fork()).ldelim();
    }
    if (message.backend !== undefined) {
      ModuleManifestBackend.encode(message.backend, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleManifest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleManifest();
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

          message.authors.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.version = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.frontend = ModuleManifestFrontend.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.backend = ModuleManifestBackend.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleManifest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      authors: globalThis.Array.isArray(object?.authors) ? object.authors.map((e: any) => globalThis.String(e)) : [],
      version: isSet(object.version) ? globalThis.String(object.version) : "",
      frontend: isSet(object.frontend) ? ModuleManifestFrontend.fromJSON(object.frontend) : undefined,
      backend: isSet(object.backend) ? ModuleManifestBackend.fromJSON(object.backend) : undefined,
    };
  },

  toJSON(message: ModuleManifest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.authors?.length) {
      obj.authors = message.authors;
    }
    if (message.version !== "") {
      obj.version = message.version;
    }
    if (message.frontend !== undefined) {
      obj.frontend = ModuleManifestFrontend.toJSON(message.frontend);
    }
    if (message.backend !== undefined) {
      obj.backend = ModuleManifestBackend.toJSON(message.backend);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModuleManifest>, I>>(base?: I): ModuleManifest {
    return ModuleManifest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModuleManifest>, I>>(object: I): ModuleManifest {
    const message = createBaseModuleManifest();
    message.name = object.name ?? "";
    message.authors = object.authors?.map((e) => e) || [];
    message.version = object.version ?? "";
    message.frontend = (object.frontend !== undefined && object.frontend !== null)
      ? ModuleManifestFrontend.fromPartial(object.frontend)
      : undefined;
    message.backend = (object.backend !== undefined && object.backend !== null)
      ? ModuleManifestBackend.fromPartial(object.backend)
      : undefined;
    return message;
  },
};

function createBaseModuleManifestFrontend(): ModuleManifestFrontend {
  return { tabName: "", tabIconPath: "", platform: undefined };
}

export const ModuleManifestFrontend = {
  encode(message: ModuleManifestFrontend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.tabName !== "") {
      writer.uint32(10).string(message.tabName);
    }
    if (message.tabIconPath !== "") {
      writer.uint32(18).string(message.tabIconPath);
    }
    if (message.platform !== undefined) {
      ModulePlatform.encode(message.platform, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleManifestFrontend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleManifestFrontend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.tabName = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.tabIconPath = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.platform = ModulePlatform.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleManifestFrontend {
    return {
      tabName: isSet(object.tabName) ? globalThis.String(object.tabName) : "",
      tabIconPath: isSet(object.tabIconPath) ? globalThis.String(object.tabIconPath) : "",
      platform: isSet(object.platform) ? ModulePlatform.fromJSON(object.platform) : undefined,
    };
  },

  toJSON(message: ModuleManifestFrontend): unknown {
    const obj: any = {};
    if (message.tabName !== "") {
      obj.tabName = message.tabName;
    }
    if (message.tabIconPath !== "") {
      obj.tabIconPath = message.tabIconPath;
    }
    if (message.platform !== undefined) {
      obj.platform = ModulePlatform.toJSON(message.platform);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModuleManifestFrontend>, I>>(base?: I): ModuleManifestFrontend {
    return ModuleManifestFrontend.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModuleManifestFrontend>, I>>(object: I): ModuleManifestFrontend {
    const message = createBaseModuleManifestFrontend();
    message.tabName = object.tabName ?? "";
    message.tabIconPath = object.tabIconPath ?? "";
    message.platform = (object.platform !== undefined && object.platform !== null)
      ? ModulePlatform.fromPartial(object.platform)
      : undefined;
    return message;
  },
};

function createBaseModuleManifestBackend(): ModuleManifestBackend {
  return { main: "", registeredCommands: [] };
}

export const ModuleManifestBackend = {
  encode(message: ModuleManifestBackend, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.main !== "") {
      writer.uint32(10).string(message.main);
    }
    for (const v of message.registeredCommands) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleManifestBackend {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleManifestBackend();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.main = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.registeredCommands.push(reader.string());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleManifestBackend {
    return {
      main: isSet(object.main) ? globalThis.String(object.main) : "",
      registeredCommands: globalThis.Array.isArray(object?.registeredCommands)
        ? object.registeredCommands.map((e: any) => globalThis.String(e))
        : [],
    };
  },

  toJSON(message: ModuleManifestBackend): unknown {
    const obj: any = {};
    if (message.main !== "") {
      obj.main = message.main;
    }
    if (message.registeredCommands?.length) {
      obj.registeredCommands = message.registeredCommands;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModuleManifestBackend>, I>>(base?: I): ModuleManifestBackend {
    return ModuleManifestBackend.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModuleManifestBackend>, I>>(object: I): ModuleManifestBackend {
    const message = createBaseModuleManifestBackend();
    message.main = object.main ?? "";
    message.registeredCommands = object.registeredCommands?.map((e) => e) || [];
    return message;
  },
};

function createBaseModulePlatform(): ModulePlatform {
  return { value: "" };
}

export const ModulePlatform = {
  encode(message: ModulePlatform, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.value !== "") {
      writer.uint32(10).string(message.value);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModulePlatform {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModulePlatform();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.value = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModulePlatform {
    return { value: isSet(object.value) ? globalThis.String(object.value) : "" };
  },

  toJSON(message: ModulePlatform): unknown {
    const obj: any = {};
    if (message.value !== "") {
      obj.value = message.value;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModulePlatform>, I>>(base?: I): ModulePlatform {
    return ModulePlatform.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModulePlatform>, I>>(object: I): ModulePlatform {
    const message = createBaseModulePlatform();
    message.value = object.value ?? "";
    return message;
  },
};

function createBaseModuleFrontendServer(): ModuleFrontendServer {
  return { platform: undefined, environment: "", entryPoint: "", assetsPath: "", port: undefined };
}

export const ModuleFrontendServer = {
  encode(message: ModuleFrontendServer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.platform !== undefined) {
      ModulePlatform.encode(message.platform, writer.uint32(10).fork()).ldelim();
    }
    if (message.environment !== "") {
      writer.uint32(18).string(message.environment);
    }
    if (message.entryPoint !== "") {
      writer.uint32(26).string(message.entryPoint);
    }
    if (message.assetsPath !== "") {
      writer.uint32(34).string(message.assetsPath);
    }
    if (message.port !== undefined) {
      Port.encode(message.port, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ModuleFrontendServer {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseModuleFrontendServer();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.platform = ModulePlatform.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.environment = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.entryPoint = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.assetsPath = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.port = Port.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ModuleFrontendServer {
    return {
      platform: isSet(object.platform) ? ModulePlatform.fromJSON(object.platform) : undefined,
      environment: isSet(object.environment) ? globalThis.String(object.environment) : "",
      entryPoint: isSet(object.entryPoint) ? globalThis.String(object.entryPoint) : "",
      assetsPath: isSet(object.assetsPath) ? globalThis.String(object.assetsPath) : "",
      port: isSet(object.port) ? Port.fromJSON(object.port) : undefined,
    };
  },

  toJSON(message: ModuleFrontendServer): unknown {
    const obj: any = {};
    if (message.platform !== undefined) {
      obj.platform = ModulePlatform.toJSON(message.platform);
    }
    if (message.environment !== "") {
      obj.environment = message.environment;
    }
    if (message.entryPoint !== "") {
      obj.entryPoint = message.entryPoint;
    }
    if (message.assetsPath !== "") {
      obj.assetsPath = message.assetsPath;
    }
    if (message.port !== undefined) {
      obj.port = Port.toJSON(message.port);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ModuleFrontendServer>, I>>(base?: I): ModuleFrontendServer {
    return ModuleFrontendServer.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ModuleFrontendServer>, I>>(object: I): ModuleFrontendServer {
    const message = createBaseModuleFrontendServer();
    message.platform = (object.platform !== undefined && object.platform !== null)
      ? ModulePlatform.fromPartial(object.platform)
      : undefined;
    message.environment = object.environment ?? "";
    message.entryPoint = object.entryPoint ?? "";
    message.assetsPath = object.assetsPath ?? "";
    message.port = (object.port !== undefined && object.port !== null) ? Port.fromPartial(object.port) : undefined;
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

function toTimestamp(date: Date): Timestamp {
  const seconds = Math.trunc(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = (t.seconds || 0) * 1_000;
  millis += (t.nanos || 0) / 1_000_000;
  return new globalThis.Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof globalThis.Date) {
    return o;
  } else if (typeof o === "string") {
    return new globalThis.Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
