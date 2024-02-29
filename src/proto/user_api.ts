/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { User } from "./common";
import { UUID } from "./generic";

export const protobufPackage = "";

/** request object for the `/users` endpoint */
export interface UserCreateRequest {
  /** required */
  name: string;
  email: string;
  password: string;
  roleId: UUID | undefined;
  roleName: string;
}

export interface UserCreateResponse {
  user: User | undefined;
}

export interface UserUpdateRequest {
  userId: UUID | undefined;
  name: string;
  email: string;
  password: string;
  roleId: UUID | undefined;
  roleName: string;
}

export interface UserUpdateResponse {
  user: User | undefined;
}

export interface UserDeleteRequest {
  userId: UUID | undefined;
}

export interface UserDeleteResponse {
}

export interface UserFindOneRequest {
  userId: UUID | undefined;
}

export interface UserFindOneResponse {
  user: User | undefined;
}

export interface UserFindManyResponse {
  users: User[];
}

export interface UserChangePasswordRequest {
  userId: UUID | undefined;
  oldPassword: string;
  newPassword: string;
}

export interface UserChangePasswordResponse {
}

export interface UserChangeUsernameRequest {
  userId: UUID | undefined;
  oldUsername: string;
  newUsername: string;
}

export interface UserChangeUsernameResponse {
}

export interface UserChangeEmailRequest {
  userId: UUID | undefined;
  oldEmail: string;
  newEmail: string;
}

export interface UserChangeEmailResponse {
}

function createBaseUserCreateRequest(): UserCreateRequest {
  return { name: "", email: "", password: "", roleId: undefined, roleName: "" };
}

export const UserCreateRequest = {
  encode(message: UserCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(18).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(26).string(message.password);
    }
    if (message.roleId !== undefined) {
      UUID.encode(message.roleId, writer.uint32(34).fork()).ldelim();
    }
    if (message.roleName !== "") {
      writer.uint32(42).string(message.roleName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCreateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCreateRequest();
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

          message.email = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.password = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.roleId = UUID.decode(reader, reader.uint32());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.roleName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserCreateRequest {
    return {
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      roleId: isSet(object.roleId) ? UUID.fromJSON(object.roleId) : undefined,
      roleName: isSet(object.roleName) ? globalThis.String(object.roleName) : "",
    };
  },

  toJSON(message: UserCreateRequest): unknown {
    const obj: any = {};
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.roleId !== undefined) {
      obj.roleId = UUID.toJSON(message.roleId);
    }
    if (message.roleName !== "") {
      obj.roleName = message.roleName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserCreateRequest>, I>>(base?: I): UserCreateRequest {
    return UserCreateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserCreateRequest>, I>>(object: I): UserCreateRequest {
    const message = createBaseUserCreateRequest();
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    message.roleId = (object.roleId !== undefined && object.roleId !== null)
      ? UUID.fromPartial(object.roleId)
      : undefined;
    message.roleName = object.roleName ?? "";
    return message;
  },
};

function createBaseUserCreateResponse(): UserCreateResponse {
  return { user: undefined };
}

export const UserCreateResponse = {
  encode(message: UserCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserCreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserCreateResponse {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: UserCreateResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserCreateResponse>, I>>(base?: I): UserCreateResponse {
    return UserCreateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserCreateResponse>, I>>(object: I): UserCreateResponse {
    const message = createBaseUserCreateResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseUserUpdateRequest(): UserUpdateRequest {
  return { userId: undefined, name: "", email: "", password: "", roleId: undefined, roleName: "" };
}

export const UserUpdateRequest = {
  encode(message: UserUpdateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      UUID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.password !== "") {
      writer.uint32(34).string(message.password);
    }
    if (message.roleId !== undefined) {
      UUID.encode(message.roleId, writer.uint32(42).fork()).ldelim();
    }
    if (message.roleName !== "") {
      writer.uint32(50).string(message.roleName);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserUpdateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUpdateRequest();
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

          message.name = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.password = reader.string();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.roleId = UUID.decode(reader, reader.uint32());
          continue;
        case 6:
          if (tag !== 50) {
            break;
          }

          message.roleName = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserUpdateRequest {
    return {
      userId: isSet(object.userId) ? UUID.fromJSON(object.userId) : undefined,
      name: isSet(object.name) ? globalThis.String(object.name) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      password: isSet(object.password) ? globalThis.String(object.password) : "",
      roleId: isSet(object.roleId) ? UUID.fromJSON(object.roleId) : undefined,
      roleName: isSet(object.roleName) ? globalThis.String(object.roleName) : "",
    };
  },

  toJSON(message: UserUpdateRequest): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = UUID.toJSON(message.userId);
    }
    if (message.name !== "") {
      obj.name = message.name;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.password !== "") {
      obj.password = message.password;
    }
    if (message.roleId !== undefined) {
      obj.roleId = UUID.toJSON(message.roleId);
    }
    if (message.roleName !== "") {
      obj.roleName = message.roleName;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserUpdateRequest>, I>>(base?: I): UserUpdateRequest {
    return UserUpdateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserUpdateRequest>, I>>(object: I): UserUpdateRequest {
    const message = createBaseUserUpdateRequest();
    message.userId = (object.userId !== undefined && object.userId !== null)
      ? UUID.fromPartial(object.userId)
      : undefined;
    message.name = object.name ?? "";
    message.email = object.email ?? "";
    message.password = object.password ?? "";
    message.roleId = (object.roleId !== undefined && object.roleId !== null)
      ? UUID.fromPartial(object.roleId)
      : undefined;
    message.roleName = object.roleName ?? "";
    return message;
  },
};

function createBaseUserUpdateResponse(): UserUpdateResponse {
  return { user: undefined };
}

export const UserUpdateResponse = {
  encode(message: UserUpdateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserUpdateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserUpdateResponse {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: UserUpdateResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserUpdateResponse>, I>>(base?: I): UserUpdateResponse {
    return UserUpdateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserUpdateResponse>, I>>(object: I): UserUpdateResponse {
    const message = createBaseUserUpdateResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseUserDeleteRequest(): UserDeleteRequest {
  return { userId: undefined };
}

export const UserDeleteRequest = {
  encode(message: UserDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      UUID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserDeleteRequest();
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

  fromJSON(object: any): UserDeleteRequest {
    return { userId: isSet(object.userId) ? UUID.fromJSON(object.userId) : undefined };
  },

  toJSON(message: UserDeleteRequest): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = UUID.toJSON(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserDeleteRequest>, I>>(base?: I): UserDeleteRequest {
    return UserDeleteRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserDeleteRequest>, I>>(object: I): UserDeleteRequest {
    const message = createBaseUserDeleteRequest();
    message.userId = (object.userId !== undefined && object.userId !== null)
      ? UUID.fromPartial(object.userId)
      : undefined;
    return message;
  },
};

function createBaseUserDeleteResponse(): UserDeleteResponse {
  return {};
}

export const UserDeleteResponse = {
  encode(_: UserDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserDeleteResponse();
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

  fromJSON(_: any): UserDeleteResponse {
    return {};
  },

  toJSON(_: UserDeleteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UserDeleteResponse>, I>>(base?: I): UserDeleteResponse {
    return UserDeleteResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserDeleteResponse>, I>>(_: I): UserDeleteResponse {
    const message = createBaseUserDeleteResponse();
    return message;
  },
};

function createBaseUserFindOneRequest(): UserFindOneRequest {
  return { userId: undefined };
}

export const UserFindOneRequest = {
  encode(message: UserFindOneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      UUID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindOneRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindOneRequest();
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

  fromJSON(object: any): UserFindOneRequest {
    return { userId: isSet(object.userId) ? UUID.fromJSON(object.userId) : undefined };
  },

  toJSON(message: UserFindOneRequest): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = UUID.toJSON(message.userId);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindOneRequest>, I>>(base?: I): UserFindOneRequest {
    return UserFindOneRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFindOneRequest>, I>>(object: I): UserFindOneRequest {
    const message = createBaseUserFindOneRequest();
    message.userId = (object.userId !== undefined && object.userId !== null)
      ? UUID.fromPartial(object.userId)
      : undefined;
    return message;
  },
};

function createBaseUserFindOneResponse(): UserFindOneResponse {
  return { user: undefined };
}

export const UserFindOneResponse = {
  encode(message: UserFindOneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.user !== undefined) {
      User.encode(message.user, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindOneResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindOneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.user = User.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindOneResponse {
    return { user: isSet(object.user) ? User.fromJSON(object.user) : undefined };
  },

  toJSON(message: UserFindOneResponse): unknown {
    const obj: any = {};
    if (message.user !== undefined) {
      obj.user = User.toJSON(message.user);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindOneResponse>, I>>(base?: I): UserFindOneResponse {
    return UserFindOneResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFindOneResponse>, I>>(object: I): UserFindOneResponse {
    const message = createBaseUserFindOneResponse();
    message.user = (object.user !== undefined && object.user !== null) ? User.fromPartial(object.user) : undefined;
    return message;
  },
};

function createBaseUserFindManyResponse(): UserFindManyResponse {
  return { users: [] };
}

export const UserFindManyResponse = {
  encode(message: UserFindManyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.users) {
      User.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserFindManyResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserFindManyResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.users.push(User.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserFindManyResponse {
    return { users: globalThis.Array.isArray(object?.users) ? object.users.map((e: any) => User.fromJSON(e)) : [] };
  },

  toJSON(message: UserFindManyResponse): unknown {
    const obj: any = {};
    if (message.users?.length) {
      obj.users = message.users.map((e) => User.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserFindManyResponse>, I>>(base?: I): UserFindManyResponse {
    return UserFindManyResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserFindManyResponse>, I>>(object: I): UserFindManyResponse {
    const message = createBaseUserFindManyResponse();
    message.users = object.users?.map((e) => User.fromPartial(e)) || [];
    return message;
  },
};

function createBaseUserChangePasswordRequest(): UserChangePasswordRequest {
  return { userId: undefined, oldPassword: "", newPassword: "" };
}

export const UserChangePasswordRequest = {
  encode(message: UserChangePasswordRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      UUID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    if (message.oldPassword !== "") {
      writer.uint32(18).string(message.oldPassword);
    }
    if (message.newPassword !== "") {
      writer.uint32(26).string(message.newPassword);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserChangePasswordRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserChangePasswordRequest();
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

          message.oldPassword = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.newPassword = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserChangePasswordRequest {
    return {
      userId: isSet(object.userId) ? UUID.fromJSON(object.userId) : undefined,
      oldPassword: isSet(object.oldPassword) ? globalThis.String(object.oldPassword) : "",
      newPassword: isSet(object.newPassword) ? globalThis.String(object.newPassword) : "",
    };
  },

  toJSON(message: UserChangePasswordRequest): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = UUID.toJSON(message.userId);
    }
    if (message.oldPassword !== "") {
      obj.oldPassword = message.oldPassword;
    }
    if (message.newPassword !== "") {
      obj.newPassword = message.newPassword;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserChangePasswordRequest>, I>>(base?: I): UserChangePasswordRequest {
    return UserChangePasswordRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserChangePasswordRequest>, I>>(object: I): UserChangePasswordRequest {
    const message = createBaseUserChangePasswordRequest();
    message.userId = (object.userId !== undefined && object.userId !== null)
      ? UUID.fromPartial(object.userId)
      : undefined;
    message.oldPassword = object.oldPassword ?? "";
    message.newPassword = object.newPassword ?? "";
    return message;
  },
};

function createBaseUserChangePasswordResponse(): UserChangePasswordResponse {
  return {};
}

export const UserChangePasswordResponse = {
  encode(_: UserChangePasswordResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserChangePasswordResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserChangePasswordResponse();
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

  fromJSON(_: any): UserChangePasswordResponse {
    return {};
  },

  toJSON(_: UserChangePasswordResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UserChangePasswordResponse>, I>>(base?: I): UserChangePasswordResponse {
    return UserChangePasswordResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserChangePasswordResponse>, I>>(_: I): UserChangePasswordResponse {
    const message = createBaseUserChangePasswordResponse();
    return message;
  },
};

function createBaseUserChangeUsernameRequest(): UserChangeUsernameRequest {
  return { userId: undefined, oldUsername: "", newUsername: "" };
}

export const UserChangeUsernameRequest = {
  encode(message: UserChangeUsernameRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      UUID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    if (message.oldUsername !== "") {
      writer.uint32(18).string(message.oldUsername);
    }
    if (message.newUsername !== "") {
      writer.uint32(26).string(message.newUsername);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserChangeUsernameRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserChangeUsernameRequest();
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

          message.oldUsername = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.newUsername = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserChangeUsernameRequest {
    return {
      userId: isSet(object.userId) ? UUID.fromJSON(object.userId) : undefined,
      oldUsername: isSet(object.oldUsername) ? globalThis.String(object.oldUsername) : "",
      newUsername: isSet(object.newUsername) ? globalThis.String(object.newUsername) : "",
    };
  },

  toJSON(message: UserChangeUsernameRequest): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = UUID.toJSON(message.userId);
    }
    if (message.oldUsername !== "") {
      obj.oldUsername = message.oldUsername;
    }
    if (message.newUsername !== "") {
      obj.newUsername = message.newUsername;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserChangeUsernameRequest>, I>>(base?: I): UserChangeUsernameRequest {
    return UserChangeUsernameRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserChangeUsernameRequest>, I>>(object: I): UserChangeUsernameRequest {
    const message = createBaseUserChangeUsernameRequest();
    message.userId = (object.userId !== undefined && object.userId !== null)
      ? UUID.fromPartial(object.userId)
      : undefined;
    message.oldUsername = object.oldUsername ?? "";
    message.newUsername = object.newUsername ?? "";
    return message;
  },
};

function createBaseUserChangeUsernameResponse(): UserChangeUsernameResponse {
  return {};
}

export const UserChangeUsernameResponse = {
  encode(_: UserChangeUsernameResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserChangeUsernameResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserChangeUsernameResponse();
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

  fromJSON(_: any): UserChangeUsernameResponse {
    return {};
  },

  toJSON(_: UserChangeUsernameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UserChangeUsernameResponse>, I>>(base?: I): UserChangeUsernameResponse {
    return UserChangeUsernameResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserChangeUsernameResponse>, I>>(_: I): UserChangeUsernameResponse {
    const message = createBaseUserChangeUsernameResponse();
    return message;
  },
};

function createBaseUserChangeEmailRequest(): UserChangeEmailRequest {
  return { userId: undefined, oldEmail: "", newEmail: "" };
}

export const UserChangeEmailRequest = {
  encode(message: UserChangeEmailRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.userId !== undefined) {
      UUID.encode(message.userId, writer.uint32(10).fork()).ldelim();
    }
    if (message.oldEmail !== "") {
      writer.uint32(18).string(message.oldEmail);
    }
    if (message.newEmail !== "") {
      writer.uint32(26).string(message.newEmail);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserChangeEmailRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserChangeEmailRequest();
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

          message.oldEmail = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.newEmail = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UserChangeEmailRequest {
    return {
      userId: isSet(object.userId) ? UUID.fromJSON(object.userId) : undefined,
      oldEmail: isSet(object.oldEmail) ? globalThis.String(object.oldEmail) : "",
      newEmail: isSet(object.newEmail) ? globalThis.String(object.newEmail) : "",
    };
  },

  toJSON(message: UserChangeEmailRequest): unknown {
    const obj: any = {};
    if (message.userId !== undefined) {
      obj.userId = UUID.toJSON(message.userId);
    }
    if (message.oldEmail !== "") {
      obj.oldEmail = message.oldEmail;
    }
    if (message.newEmail !== "") {
      obj.newEmail = message.newEmail;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UserChangeEmailRequest>, I>>(base?: I): UserChangeEmailRequest {
    return UserChangeEmailRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserChangeEmailRequest>, I>>(object: I): UserChangeEmailRequest {
    const message = createBaseUserChangeEmailRequest();
    message.userId = (object.userId !== undefined && object.userId !== null)
      ? UUID.fromPartial(object.userId)
      : undefined;
    message.oldEmail = object.oldEmail ?? "";
    message.newEmail = object.newEmail ?? "";
    return message;
  },
};

function createBaseUserChangeEmailResponse(): UserChangeEmailResponse {
  return {};
}

export const UserChangeEmailResponse = {
  encode(_: UserChangeEmailResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): UserChangeEmailResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUserChangeEmailResponse();
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

  fromJSON(_: any): UserChangeEmailResponse {
    return {};
  },

  toJSON(_: UserChangeEmailResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<UserChangeEmailResponse>, I>>(base?: I): UserChangeEmailResponse {
    return UserChangeEmailResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UserChangeEmailResponse>, I>>(_: I): UserChangeEmailResponse {
    const message = createBaseUserChangeEmailResponse();
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
