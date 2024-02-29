/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Port } from "./generic";

export const protobufPackage = "";

export interface ContainerCreateParams {
  Name: string;
  Config: ContainerConfig | undefined;
}

export interface ContainerCreateResp {
  ID: string;
  Warnings: string[];
  Error: Error | undefined;
}

export interface ContainerStartParams {
  ID: string;
}

export interface ContainerStartResp {
  Error: Error | undefined;
}

export interface ContainerStopParams {
  ID: string;
}

export interface ContainerStopResp {
  Error: Error | undefined;
}

export interface ContainerRestartParams {
  ID: string;
}

export interface ContainerRestartResp {
  Error: Error | undefined;
}

export interface Error {
  Message: string;
  StatusCode: number;
}

export interface ContainerConfig {
  Image: string;
  Tty: boolean;
  Env: string[];
  Cmd: string[];
  WorkingDir: string;
  AttachStdin: boolean;
  AttachStdout: boolean;
  AttachStderr: boolean;
  ExposedPorts: DockerPort[];
  OpenStdin: boolean;
  Entrypoint: string[];
  Volumes: ContainerVolumeMapping[];
  HostConfig: ContainerHostConfig | undefined;
}

export interface ContainerVolumeMapping {
  DockerPath: string;
  HostPath: string;
}

export interface ContainerHostConfig {
  Memory: number;
  Cpus: number;
  Binds: string[];
  AutoRemove: boolean;
  RestartPolicy: RestartPolicy | undefined;
}

export interface DockerPort {
  hostPort: Port | undefined;
  containerPort: Port | undefined;
}

export interface RestartPolicy {
  Name: string;
  MaximumRetryCount: number;
}

function createBaseContainerCreateParams(): ContainerCreateParams {
  return { Name: "", Config: undefined };
}

export const ContainerCreateParams = {
  encode(message: ContainerCreateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Name !== "") {
      writer.uint32(10).string(message.Name);
    }
    if (message.Config !== undefined) {
      ContainerConfig.encode(message.Config, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainerCreateParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContainerCreateParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Name = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Config = ContainerConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContainerCreateParams {
    return {
      Name: isSet(object.Name) ? globalThis.String(object.Name) : "",
      Config: isSet(object.Config) ? ContainerConfig.fromJSON(object.Config) : undefined,
    };
  },

  toJSON(message: ContainerCreateParams): unknown {
    const obj: any = {};
    if (message.Name !== "") {
      obj.Name = message.Name;
    }
    if (message.Config !== undefined) {
      obj.Config = ContainerConfig.toJSON(message.Config);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContainerCreateParams>, I>>(base?: I): ContainerCreateParams {
    return ContainerCreateParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContainerCreateParams>, I>>(object: I): ContainerCreateParams {
    const message = createBaseContainerCreateParams();
    message.Name = object.Name ?? "";
    message.Config = (object.Config !== undefined && object.Config !== null)
      ? ContainerConfig.fromPartial(object.Config)
      : undefined;
    return message;
  },
};

function createBaseContainerCreateResp(): ContainerCreateResp {
  return { ID: "", Warnings: [], Error: undefined };
}

export const ContainerCreateResp = {
  encode(message: ContainerCreateResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    for (const v of message.Warnings) {
      writer.uint32(18).string(v!);
    }
    if (message.Error !== undefined) {
      Error.encode(message.Error, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainerCreateResp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContainerCreateResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ID = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.Warnings.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.Error = Error.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContainerCreateResp {
    return {
      ID: isSet(object.ID) ? globalThis.String(object.ID) : "",
      Warnings: globalThis.Array.isArray(object?.Warnings) ? object.Warnings.map((e: any) => globalThis.String(e)) : [],
      Error: isSet(object.Error) ? Error.fromJSON(object.Error) : undefined,
    };
  },

  toJSON(message: ContainerCreateResp): unknown {
    const obj: any = {};
    if (message.ID !== "") {
      obj.ID = message.ID;
    }
    if (message.Warnings?.length) {
      obj.Warnings = message.Warnings;
    }
    if (message.Error !== undefined) {
      obj.Error = Error.toJSON(message.Error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContainerCreateResp>, I>>(base?: I): ContainerCreateResp {
    return ContainerCreateResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContainerCreateResp>, I>>(object: I): ContainerCreateResp {
    const message = createBaseContainerCreateResp();
    message.ID = object.ID ?? "";
    message.Warnings = object.Warnings?.map((e) => e) || [];
    message.Error = (object.Error !== undefined && object.Error !== null) ? Error.fromPartial(object.Error) : undefined;
    return message;
  },
};

function createBaseContainerStartParams(): ContainerStartParams {
  return { ID: "" };
}

export const ContainerStartParams = {
  encode(message: ContainerStartParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainerStartParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContainerStartParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ID = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContainerStartParams {
    return { ID: isSet(object.ID) ? globalThis.String(object.ID) : "" };
  },

  toJSON(message: ContainerStartParams): unknown {
    const obj: any = {};
    if (message.ID !== "") {
      obj.ID = message.ID;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContainerStartParams>, I>>(base?: I): ContainerStartParams {
    return ContainerStartParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContainerStartParams>, I>>(object: I): ContainerStartParams {
    const message = createBaseContainerStartParams();
    message.ID = object.ID ?? "";
    return message;
  },
};

function createBaseContainerStartResp(): ContainerStartResp {
  return { Error: undefined };
}

export const ContainerStartResp = {
  encode(message: ContainerStartResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Error !== undefined) {
      Error.encode(message.Error, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainerStartResp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContainerStartResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Error = Error.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContainerStartResp {
    return { Error: isSet(object.Error) ? Error.fromJSON(object.Error) : undefined };
  },

  toJSON(message: ContainerStartResp): unknown {
    const obj: any = {};
    if (message.Error !== undefined) {
      obj.Error = Error.toJSON(message.Error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContainerStartResp>, I>>(base?: I): ContainerStartResp {
    return ContainerStartResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContainerStartResp>, I>>(object: I): ContainerStartResp {
    const message = createBaseContainerStartResp();
    message.Error = (object.Error !== undefined && object.Error !== null) ? Error.fromPartial(object.Error) : undefined;
    return message;
  },
};

function createBaseContainerStopParams(): ContainerStopParams {
  return { ID: "" };
}

export const ContainerStopParams = {
  encode(message: ContainerStopParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainerStopParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContainerStopParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ID = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContainerStopParams {
    return { ID: isSet(object.ID) ? globalThis.String(object.ID) : "" };
  },

  toJSON(message: ContainerStopParams): unknown {
    const obj: any = {};
    if (message.ID !== "") {
      obj.ID = message.ID;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContainerStopParams>, I>>(base?: I): ContainerStopParams {
    return ContainerStopParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContainerStopParams>, I>>(object: I): ContainerStopParams {
    const message = createBaseContainerStopParams();
    message.ID = object.ID ?? "";
    return message;
  },
};

function createBaseContainerStopResp(): ContainerStopResp {
  return { Error: undefined };
}

export const ContainerStopResp = {
  encode(message: ContainerStopResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Error !== undefined) {
      Error.encode(message.Error, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainerStopResp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContainerStopResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Error = Error.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContainerStopResp {
    return { Error: isSet(object.Error) ? Error.fromJSON(object.Error) : undefined };
  },

  toJSON(message: ContainerStopResp): unknown {
    const obj: any = {};
    if (message.Error !== undefined) {
      obj.Error = Error.toJSON(message.Error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContainerStopResp>, I>>(base?: I): ContainerStopResp {
    return ContainerStopResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContainerStopResp>, I>>(object: I): ContainerStopResp {
    const message = createBaseContainerStopResp();
    message.Error = (object.Error !== undefined && object.Error !== null) ? Error.fromPartial(object.Error) : undefined;
    return message;
  },
};

function createBaseContainerRestartParams(): ContainerRestartParams {
  return { ID: "" };
}

export const ContainerRestartParams = {
  encode(message: ContainerRestartParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ID !== "") {
      writer.uint32(10).string(message.ID);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainerRestartParams {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContainerRestartParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ID = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContainerRestartParams {
    return { ID: isSet(object.ID) ? globalThis.String(object.ID) : "" };
  },

  toJSON(message: ContainerRestartParams): unknown {
    const obj: any = {};
    if (message.ID !== "") {
      obj.ID = message.ID;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContainerRestartParams>, I>>(base?: I): ContainerRestartParams {
    return ContainerRestartParams.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContainerRestartParams>, I>>(object: I): ContainerRestartParams {
    const message = createBaseContainerRestartParams();
    message.ID = object.ID ?? "";
    return message;
  },
};

function createBaseContainerRestartResp(): ContainerRestartResp {
  return { Error: undefined };
}

export const ContainerRestartResp = {
  encode(message: ContainerRestartResp, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Error !== undefined) {
      Error.encode(message.Error, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainerRestartResp {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContainerRestartResp();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Error = Error.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContainerRestartResp {
    return { Error: isSet(object.Error) ? Error.fromJSON(object.Error) : undefined };
  },

  toJSON(message: ContainerRestartResp): unknown {
    const obj: any = {};
    if (message.Error !== undefined) {
      obj.Error = Error.toJSON(message.Error);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContainerRestartResp>, I>>(base?: I): ContainerRestartResp {
    return ContainerRestartResp.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContainerRestartResp>, I>>(object: I): ContainerRestartResp {
    const message = createBaseContainerRestartResp();
    message.Error = (object.Error !== undefined && object.Error !== null) ? Error.fromPartial(object.Error) : undefined;
    return message;
  },
};

function createBaseError(): Error {
  return { Message: "", StatusCode: 0 };
}

export const Error = {
  encode(message: Error, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Message !== "") {
      writer.uint32(10).string(message.Message);
    }
    if (message.StatusCode !== 0) {
      writer.uint32(16).int32(message.StatusCode);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Error {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseError();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Message = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.StatusCode = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): Error {
    return {
      Message: isSet(object.Message) ? globalThis.String(object.Message) : "",
      StatusCode: isSet(object.StatusCode) ? globalThis.Number(object.StatusCode) : 0,
    };
  },

  toJSON(message: Error): unknown {
    const obj: any = {};
    if (message.Message !== "") {
      obj.Message = message.Message;
    }
    if (message.StatusCode !== 0) {
      obj.StatusCode = Math.round(message.StatusCode);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<Error>, I>>(base?: I): Error {
    return Error.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<Error>, I>>(object: I): Error {
    const message = createBaseError();
    message.Message = object.Message ?? "";
    message.StatusCode = object.StatusCode ?? 0;
    return message;
  },
};

function createBaseContainerConfig(): ContainerConfig {
  return {
    Image: "",
    Tty: false,
    Env: [],
    Cmd: [],
    WorkingDir: "",
    AttachStdin: false,
    AttachStdout: false,
    AttachStderr: false,
    ExposedPorts: [],
    OpenStdin: false,
    Entrypoint: [],
    Volumes: [],
    HostConfig: undefined,
  };
}

export const ContainerConfig = {
  encode(message: ContainerConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Image !== "") {
      writer.uint32(10).string(message.Image);
    }
    if (message.Tty === true) {
      writer.uint32(16).bool(message.Tty);
    }
    for (const v of message.Env) {
      writer.uint32(34).string(v!);
    }
    for (const v of message.Cmd) {
      writer.uint32(26).string(v!);
    }
    if (message.WorkingDir !== "") {
      writer.uint32(42).string(message.WorkingDir);
    }
    if (message.AttachStdin === true) {
      writer.uint32(48).bool(message.AttachStdin);
    }
    if (message.AttachStdout === true) {
      writer.uint32(56).bool(message.AttachStdout);
    }
    if (message.AttachStderr === true) {
      writer.uint32(64).bool(message.AttachStderr);
    }
    for (const v of message.ExposedPorts) {
      DockerPort.encode(v!, writer.uint32(74).fork()).ldelim();
    }
    if (message.OpenStdin === true) {
      writer.uint32(80).bool(message.OpenStdin);
    }
    for (const v of message.Entrypoint) {
      writer.uint32(90).string(v!);
    }
    for (const v of message.Volumes) {
      ContainerVolumeMapping.encode(v!, writer.uint32(98).fork()).ldelim();
    }
    if (message.HostConfig !== undefined) {
      ContainerHostConfig.encode(message.HostConfig, writer.uint32(106).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainerConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContainerConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Image = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.Tty = reader.bool();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.Env.push(reader.string());
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.Cmd.push(reader.string());
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.WorkingDir = reader.string();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.AttachStdin = reader.bool();
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.AttachStdout = reader.bool();
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.AttachStderr = reader.bool();
          continue;
        case 9:
          if (tag !== 74) {
            break;
          }

          message.ExposedPorts.push(DockerPort.decode(reader, reader.uint32()));
          continue;
        case 10:
          if (tag !== 80) {
            break;
          }

          message.OpenStdin = reader.bool();
          continue;
        case 11:
          if (tag !== 90) {
            break;
          }

          message.Entrypoint.push(reader.string());
          continue;
        case 12:
          if (tag !== 98) {
            break;
          }

          message.Volumes.push(ContainerVolumeMapping.decode(reader, reader.uint32()));
          continue;
        case 13:
          if (tag !== 106) {
            break;
          }

          message.HostConfig = ContainerHostConfig.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContainerConfig {
    return {
      Image: isSet(object.Image) ? globalThis.String(object.Image) : "",
      Tty: isSet(object.Tty) ? globalThis.Boolean(object.Tty) : false,
      Env: globalThis.Array.isArray(object?.Env) ? object.Env.map((e: any) => globalThis.String(e)) : [],
      Cmd: globalThis.Array.isArray(object?.Cmd) ? object.Cmd.map((e: any) => globalThis.String(e)) : [],
      WorkingDir: isSet(object.WorkingDir) ? globalThis.String(object.WorkingDir) : "",
      AttachStdin: isSet(object.AttachStdin) ? globalThis.Boolean(object.AttachStdin) : false,
      AttachStdout: isSet(object.AttachStdout) ? globalThis.Boolean(object.AttachStdout) : false,
      AttachStderr: isSet(object.AttachStderr) ? globalThis.Boolean(object.AttachStderr) : false,
      ExposedPorts: globalThis.Array.isArray(object?.ExposedPorts)
        ? object.ExposedPorts.map((e: any) => DockerPort.fromJSON(e))
        : [],
      OpenStdin: isSet(object.OpenStdin) ? globalThis.Boolean(object.OpenStdin) : false,
      Entrypoint: globalThis.Array.isArray(object?.Entrypoint)
        ? object.Entrypoint.map((e: any) => globalThis.String(e))
        : [],
      Volumes: globalThis.Array.isArray(object?.Volumes)
        ? object.Volumes.map((e: any) => ContainerVolumeMapping.fromJSON(e))
        : [],
      HostConfig: isSet(object.HostConfig) ? ContainerHostConfig.fromJSON(object.HostConfig) : undefined,
    };
  },

  toJSON(message: ContainerConfig): unknown {
    const obj: any = {};
    if (message.Image !== "") {
      obj.Image = message.Image;
    }
    if (message.Tty === true) {
      obj.Tty = message.Tty;
    }
    if (message.Env?.length) {
      obj.Env = message.Env;
    }
    if (message.Cmd?.length) {
      obj.Cmd = message.Cmd;
    }
    if (message.WorkingDir !== "") {
      obj.WorkingDir = message.WorkingDir;
    }
    if (message.AttachStdin === true) {
      obj.AttachStdin = message.AttachStdin;
    }
    if (message.AttachStdout === true) {
      obj.AttachStdout = message.AttachStdout;
    }
    if (message.AttachStderr === true) {
      obj.AttachStderr = message.AttachStderr;
    }
    if (message.ExposedPorts?.length) {
      obj.ExposedPorts = message.ExposedPorts.map((e) => DockerPort.toJSON(e));
    }
    if (message.OpenStdin === true) {
      obj.OpenStdin = message.OpenStdin;
    }
    if (message.Entrypoint?.length) {
      obj.Entrypoint = message.Entrypoint;
    }
    if (message.Volumes?.length) {
      obj.Volumes = message.Volumes.map((e) => ContainerVolumeMapping.toJSON(e));
    }
    if (message.HostConfig !== undefined) {
      obj.HostConfig = ContainerHostConfig.toJSON(message.HostConfig);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContainerConfig>, I>>(base?: I): ContainerConfig {
    return ContainerConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContainerConfig>, I>>(object: I): ContainerConfig {
    const message = createBaseContainerConfig();
    message.Image = object.Image ?? "";
    message.Tty = object.Tty ?? false;
    message.Env = object.Env?.map((e) => e) || [];
    message.Cmd = object.Cmd?.map((e) => e) || [];
    message.WorkingDir = object.WorkingDir ?? "";
    message.AttachStdin = object.AttachStdin ?? false;
    message.AttachStdout = object.AttachStdout ?? false;
    message.AttachStderr = object.AttachStderr ?? false;
    message.ExposedPorts = object.ExposedPorts?.map((e) => DockerPort.fromPartial(e)) || [];
    message.OpenStdin = object.OpenStdin ?? false;
    message.Entrypoint = object.Entrypoint?.map((e) => e) || [];
    message.Volumes = object.Volumes?.map((e) => ContainerVolumeMapping.fromPartial(e)) || [];
    message.HostConfig = (object.HostConfig !== undefined && object.HostConfig !== null)
      ? ContainerHostConfig.fromPartial(object.HostConfig)
      : undefined;
    return message;
  },
};

function createBaseContainerVolumeMapping(): ContainerVolumeMapping {
  return { DockerPath: "", HostPath: "" };
}

export const ContainerVolumeMapping = {
  encode(message: ContainerVolumeMapping, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.DockerPath !== "") {
      writer.uint32(10).string(message.DockerPath);
    }
    if (message.HostPath !== "") {
      writer.uint32(18).string(message.HostPath);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainerVolumeMapping {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContainerVolumeMapping();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.DockerPath = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.HostPath = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContainerVolumeMapping {
    return {
      DockerPath: isSet(object.DockerPath) ? globalThis.String(object.DockerPath) : "",
      HostPath: isSet(object.HostPath) ? globalThis.String(object.HostPath) : "",
    };
  },

  toJSON(message: ContainerVolumeMapping): unknown {
    const obj: any = {};
    if (message.DockerPath !== "") {
      obj.DockerPath = message.DockerPath;
    }
    if (message.HostPath !== "") {
      obj.HostPath = message.HostPath;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContainerVolumeMapping>, I>>(base?: I): ContainerVolumeMapping {
    return ContainerVolumeMapping.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContainerVolumeMapping>, I>>(object: I): ContainerVolumeMapping {
    const message = createBaseContainerVolumeMapping();
    message.DockerPath = object.DockerPath ?? "";
    message.HostPath = object.HostPath ?? "";
    return message;
  },
};

function createBaseContainerHostConfig(): ContainerHostConfig {
  return { Memory: 0, Cpus: 0, Binds: [], AutoRemove: false, RestartPolicy: undefined };
}

export const ContainerHostConfig = {
  encode(message: ContainerHostConfig, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Memory !== 0) {
      writer.uint32(8).int64(message.Memory);
    }
    if (message.Cpus !== 0) {
      writer.uint32(16).int64(message.Cpus);
    }
    for (const v of message.Binds) {
      writer.uint32(26).string(v!);
    }
    if (message.AutoRemove === true) {
      writer.uint32(32).bool(message.AutoRemove);
    }
    if (message.RestartPolicy !== undefined) {
      RestartPolicy.encode(message.RestartPolicy, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ContainerHostConfig {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseContainerHostConfig();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 8) {
            break;
          }

          message.Memory = longToNumber(reader.int64() as Long);
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.Cpus = longToNumber(reader.int64() as Long);
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.Binds.push(reader.string());
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.AutoRemove = reader.bool();
          continue;
        case 5:
          if (tag !== 42) {
            break;
          }

          message.RestartPolicy = RestartPolicy.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): ContainerHostConfig {
    return {
      Memory: isSet(object.Memory) ? globalThis.Number(object.Memory) : 0,
      Cpus: isSet(object.Cpus) ? globalThis.Number(object.Cpus) : 0,
      Binds: globalThis.Array.isArray(object?.Binds) ? object.Binds.map((e: any) => globalThis.String(e)) : [],
      AutoRemove: isSet(object.AutoRemove) ? globalThis.Boolean(object.AutoRemove) : false,
      RestartPolicy: isSet(object.RestartPolicy) ? RestartPolicy.fromJSON(object.RestartPolicy) : undefined,
    };
  },

  toJSON(message: ContainerHostConfig): unknown {
    const obj: any = {};
    if (message.Memory !== 0) {
      obj.Memory = Math.round(message.Memory);
    }
    if (message.Cpus !== 0) {
      obj.Cpus = Math.round(message.Cpus);
    }
    if (message.Binds?.length) {
      obj.Binds = message.Binds;
    }
    if (message.AutoRemove === true) {
      obj.AutoRemove = message.AutoRemove;
    }
    if (message.RestartPolicy !== undefined) {
      obj.RestartPolicy = RestartPolicy.toJSON(message.RestartPolicy);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<ContainerHostConfig>, I>>(base?: I): ContainerHostConfig {
    return ContainerHostConfig.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<ContainerHostConfig>, I>>(object: I): ContainerHostConfig {
    const message = createBaseContainerHostConfig();
    message.Memory = object.Memory ?? 0;
    message.Cpus = object.Cpus ?? 0;
    message.Binds = object.Binds?.map((e) => e) || [];
    message.AutoRemove = object.AutoRemove ?? false;
    message.RestartPolicy = (object.RestartPolicy !== undefined && object.RestartPolicy !== null)
      ? RestartPolicy.fromPartial(object.RestartPolicy)
      : undefined;
    return message;
  },
};

function createBaseDockerPort(): DockerPort {
  return { hostPort: undefined, containerPort: undefined };
}

export const DockerPort = {
  encode(message: DockerPort, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.hostPort !== undefined) {
      Port.encode(message.hostPort, writer.uint32(10).fork()).ldelim();
    }
    if (message.containerPort !== undefined) {
      Port.encode(message.containerPort, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DockerPort {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDockerPort();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.hostPort = Port.decode(reader, reader.uint32());
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.containerPort = Port.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DockerPort {
    return {
      hostPort: isSet(object.hostPort) ? Port.fromJSON(object.hostPort) : undefined,
      containerPort: isSet(object.containerPort) ? Port.fromJSON(object.containerPort) : undefined,
    };
  },

  toJSON(message: DockerPort): unknown {
    const obj: any = {};
    if (message.hostPort !== undefined) {
      obj.hostPort = Port.toJSON(message.hostPort);
    }
    if (message.containerPort !== undefined) {
      obj.containerPort = Port.toJSON(message.containerPort);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DockerPort>, I>>(base?: I): DockerPort {
    return DockerPort.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DockerPort>, I>>(object: I): DockerPort {
    const message = createBaseDockerPort();
    message.hostPort = (object.hostPort !== undefined && object.hostPort !== null)
      ? Port.fromPartial(object.hostPort)
      : undefined;
    message.containerPort = (object.containerPort !== undefined && object.containerPort !== null)
      ? Port.fromPartial(object.containerPort)
      : undefined;
    return message;
  },
};

function createBaseRestartPolicy(): RestartPolicy {
  return { Name: "", MaximumRetryCount: 0 };
}

export const RestartPolicy = {
  encode(message: RestartPolicy, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.Name !== "") {
      writer.uint32(10).string(message.Name);
    }
    if (message.MaximumRetryCount !== 0) {
      writer.uint32(16).int32(message.MaximumRetryCount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): RestartPolicy {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseRestartPolicy();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.Name = reader.string();
          continue;
        case 2:
          if (tag !== 16) {
            break;
          }

          message.MaximumRetryCount = reader.int32();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): RestartPolicy {
    return {
      Name: isSet(object.Name) ? globalThis.String(object.Name) : "",
      MaximumRetryCount: isSet(object.MaximumRetryCount) ? globalThis.Number(object.MaximumRetryCount) : 0,
    };
  },

  toJSON(message: RestartPolicy): unknown {
    const obj: any = {};
    if (message.Name !== "") {
      obj.Name = message.Name;
    }
    if (message.MaximumRetryCount !== 0) {
      obj.MaximumRetryCount = Math.round(message.MaximumRetryCount);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<RestartPolicy>, I>>(base?: I): RestartPolicy {
    return RestartPolicy.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<RestartPolicy>, I>>(object: I): RestartPolicy {
    const message = createBaseRestartPolicy();
    message.Name = object.Name ?? "";
    message.MaximumRetryCount = object.MaximumRetryCount ?? 0;
    return message;
  },
};

export interface Container {
  Create(request: ContainerCreateParams): Promise<ContainerCreateResp>;
  Start(request: ContainerStartParams): Promise<ContainerStartResp>;
  Stop(request: ContainerStopParams): Promise<ContainerStopResp>;
  Restart(request: ContainerRestartParams): Promise<ContainerRestartResp>;
}

export const ContainerServiceName = "Container";
export class ContainerClientImpl implements Container {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || ContainerServiceName;
    this.rpc = rpc;
    this.Create = this.Create.bind(this);
    this.Start = this.Start.bind(this);
    this.Stop = this.Stop.bind(this);
    this.Restart = this.Restart.bind(this);
  }
  Create(request: ContainerCreateParams): Promise<ContainerCreateResp> {
    const data = ContainerCreateParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "Create", data);
    return promise.then((data) => ContainerCreateResp.decode(_m0.Reader.create(data)));
  }

  Start(request: ContainerStartParams): Promise<ContainerStartResp> {
    const data = ContainerStartParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "Start", data);
    return promise.then((data) => ContainerStartResp.decode(_m0.Reader.create(data)));
  }

  Stop(request: ContainerStopParams): Promise<ContainerStopResp> {
    const data = ContainerStopParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "Stop", data);
    return promise.then((data) => ContainerStopResp.decode(_m0.Reader.create(data)));
  }

  Restart(request: ContainerRestartParams): Promise<ContainerRestartResp> {
    const data = ContainerRestartParams.encode(request).finish();
    const promise = this.rpc.request(this.service, "Restart", data);
    return promise.then((data) => ContainerRestartResp.decode(_m0.Reader.create(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
