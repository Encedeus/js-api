/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Port } from "./generic";

export const protobufPackage = "";

export interface HardwareInfoRequest {
}

export interface HardwareInfoResponse {
  os: string;
  cpu: string;
  cpuClockSpeed: number;
  cores: number;
  logicalCores: number;
  totalMemory: number;
  totalDisk: number;
  memoryUsage: number;
  diskUsage: number;
}

export interface GetFreePortRequest {
}

export interface GetFreePortResponse {
  freePort: Port | undefined;
}

export interface CreateDirectoryRequest {
  path: string;
}

export interface CreateDirectoryResponse {
}

function createBaseHardwareInfoRequest(): HardwareInfoRequest {
  return {};
}

export const HardwareInfoRequest = {
  encode(_: HardwareInfoRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HardwareInfoRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHardwareInfoRequest();
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

  fromJSON(_: any): HardwareInfoRequest {
    return {};
  },

  toJSON(_: HardwareInfoRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<HardwareInfoRequest>, I>>(base?: I): HardwareInfoRequest {
    return HardwareInfoRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HardwareInfoRequest>, I>>(_: I): HardwareInfoRequest {
    const message = createBaseHardwareInfoRequest();
    return message;
  },
};

function createBaseHardwareInfoResponse(): HardwareInfoResponse {
  return {
    os: "",
    cpu: "",
    cpuClockSpeed: 0,
    cores: 0,
    logicalCores: 0,
    totalMemory: 0,
    totalDisk: 0,
    memoryUsage: 0,
    diskUsage: 0,
  };
}

export const HardwareInfoResponse = {
  encode(message: HardwareInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.os !== "") {
      writer.uint32(10).string(message.os);
    }
    if (message.cpu !== "") {
      writer.uint32(18).string(message.cpu);
    }
    if (message.cpuClockSpeed !== 0) {
      writer.uint32(24).uint32(message.cpuClockSpeed);
    }
    if (message.cores !== 0) {
      writer.uint32(32).uint32(message.cores);
    }
    if (message.logicalCores !== 0) {
      writer.uint32(40).uint32(message.logicalCores);
    }
    if (message.totalMemory !== 0) {
      writer.uint32(48).uint64(message.totalMemory);
    }
    if (message.totalDisk !== 0) {
      writer.uint32(56).uint64(message.totalDisk);
    }
    if (message.memoryUsage !== 0) {
      writer.uint32(64).uint64(message.memoryUsage);
    }
    if (message.diskUsage !== 0) {
      writer.uint32(72).uint64(message.diskUsage);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): HardwareInfoResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseHardwareInfoResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.os = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.cpu = reader.string();
          continue;
        case 3:
          if (tag !== 24) {
            break;
          }

          message.cpuClockSpeed = reader.uint32();
          continue;
        case 4:
          if (tag !== 32) {
            break;
          }

          message.cores = reader.uint32();
          continue;
        case 5:
          if (tag !== 40) {
            break;
          }

          message.logicalCores = reader.uint32();
          continue;
        case 6:
          if (tag !== 48) {
            break;
          }

          message.totalMemory = longToNumber(reader.uint64() as Long);
          continue;
        case 7:
          if (tag !== 56) {
            break;
          }

          message.totalDisk = longToNumber(reader.uint64() as Long);
          continue;
        case 8:
          if (tag !== 64) {
            break;
          }

          message.memoryUsage = longToNumber(reader.uint64() as Long);
          continue;
        case 9:
          if (tag !== 72) {
            break;
          }

          message.diskUsage = longToNumber(reader.uint64() as Long);
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): HardwareInfoResponse {
    return {
      os: isSet(object.os) ? globalThis.String(object.os) : "",
      cpu: isSet(object.cpu) ? globalThis.String(object.cpu) : "",
      cpuClockSpeed: isSet(object.cpuClockSpeed) ? globalThis.Number(object.cpuClockSpeed) : 0,
      cores: isSet(object.cores) ? globalThis.Number(object.cores) : 0,
      logicalCores: isSet(object.logicalCores) ? globalThis.Number(object.logicalCores) : 0,
      totalMemory: isSet(object.totalMemory) ? globalThis.Number(object.totalMemory) : 0,
      totalDisk: isSet(object.totalDisk) ? globalThis.Number(object.totalDisk) : 0,
      memoryUsage: isSet(object.memoryUsage) ? globalThis.Number(object.memoryUsage) : 0,
      diskUsage: isSet(object.diskUsage) ? globalThis.Number(object.diskUsage) : 0,
    };
  },

  toJSON(message: HardwareInfoResponse): unknown {
    const obj: any = {};
    if (message.os !== "") {
      obj.os = message.os;
    }
    if (message.cpu !== "") {
      obj.cpu = message.cpu;
    }
    if (message.cpuClockSpeed !== 0) {
      obj.cpuClockSpeed = Math.round(message.cpuClockSpeed);
    }
    if (message.cores !== 0) {
      obj.cores = Math.round(message.cores);
    }
    if (message.logicalCores !== 0) {
      obj.logicalCores = Math.round(message.logicalCores);
    }
    if (message.totalMemory !== 0) {
      obj.totalMemory = Math.round(message.totalMemory);
    }
    if (message.totalDisk !== 0) {
      obj.totalDisk = Math.round(message.totalDisk);
    }
    if (message.memoryUsage !== 0) {
      obj.memoryUsage = Math.round(message.memoryUsage);
    }
    if (message.diskUsage !== 0) {
      obj.diskUsage = Math.round(message.diskUsage);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<HardwareInfoResponse>, I>>(base?: I): HardwareInfoResponse {
    return HardwareInfoResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<HardwareInfoResponse>, I>>(object: I): HardwareInfoResponse {
    const message = createBaseHardwareInfoResponse();
    message.os = object.os ?? "";
    message.cpu = object.cpu ?? "";
    message.cpuClockSpeed = object.cpuClockSpeed ?? 0;
    message.cores = object.cores ?? 0;
    message.logicalCores = object.logicalCores ?? 0;
    message.totalMemory = object.totalMemory ?? 0;
    message.totalDisk = object.totalDisk ?? 0;
    message.memoryUsage = object.memoryUsage ?? 0;
    message.diskUsage = object.diskUsage ?? 0;
    return message;
  },
};

function createBaseGetFreePortRequest(): GetFreePortRequest {
  return {};
}

export const GetFreePortRequest = {
  encode(_: GetFreePortRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFreePortRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFreePortRequest();
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

  fromJSON(_: any): GetFreePortRequest {
    return {};
  },

  toJSON(_: GetFreePortRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFreePortRequest>, I>>(base?: I): GetFreePortRequest {
    return GetFreePortRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFreePortRequest>, I>>(_: I): GetFreePortRequest {
    const message = createBaseGetFreePortRequest();
    return message;
  },
};

function createBaseGetFreePortResponse(): GetFreePortResponse {
  return { freePort: undefined };
}

export const GetFreePortResponse = {
  encode(message: GetFreePortResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.freePort !== undefined) {
      Port.encode(message.freePort, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GetFreePortResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetFreePortResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.freePort = Port.decode(reader, reader.uint32());
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetFreePortResponse {
    return { freePort: isSet(object.freePort) ? Port.fromJSON(object.freePort) : undefined };
  },

  toJSON(message: GetFreePortResponse): unknown {
    const obj: any = {};
    if (message.freePort !== undefined) {
      obj.freePort = Port.toJSON(message.freePort);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetFreePortResponse>, I>>(base?: I): GetFreePortResponse {
    return GetFreePortResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetFreePortResponse>, I>>(object: I): GetFreePortResponse {
    const message = createBaseGetFreePortResponse();
    message.freePort = (object.freePort !== undefined && object.freePort !== null)
      ? Port.fromPartial(object.freePort)
      : undefined;
    return message;
  },
};

function createBaseCreateDirectoryRequest(): CreateDirectoryRequest {
  return { path: "" };
}

export const CreateDirectoryRequest = {
  encode(message: CreateDirectoryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.path !== "") {
      writer.uint32(10).string(message.path);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDirectoryRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDirectoryRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.path = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateDirectoryRequest {
    return { path: isSet(object.path) ? globalThis.String(object.path) : "" };
  },

  toJSON(message: CreateDirectoryRequest): unknown {
    const obj: any = {};
    if (message.path !== "") {
      obj.path = message.path;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDirectoryRequest>, I>>(base?: I): CreateDirectoryRequest {
    return CreateDirectoryRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDirectoryRequest>, I>>(object: I): CreateDirectoryRequest {
    const message = createBaseCreateDirectoryRequest();
    message.path = object.path ?? "";
    return message;
  },
};

function createBaseCreateDirectoryResponse(): CreateDirectoryResponse {
  return {};
}

export const CreateDirectoryResponse = {
  encode(_: CreateDirectoryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CreateDirectoryResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateDirectoryResponse();
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

  fromJSON(_: any): CreateDirectoryResponse {
    return {};
  },

  toJSON(_: CreateDirectoryResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateDirectoryResponse>, I>>(base?: I): CreateDirectoryResponse {
    return CreateDirectoryResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateDirectoryResponse>, I>>(_: I): CreateDirectoryResponse {
    const message = createBaseCreateDirectoryResponse();
    return message;
  },
};

export interface NodeInfo {
  GetNodeHardwareInfo(request: HardwareInfoRequest): Promise<HardwareInfoResponse>;
  GetFreePort(request: GetFreePortRequest): Promise<GetFreePortResponse>;
  CreateDirectory(request: CreateDirectoryRequest): Promise<CreateDirectoryResponse>;
}

export const NodeInfoServiceName = "NodeInfo";
export class NodeInfoClientImpl implements NodeInfo {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || NodeInfoServiceName;
    this.rpc = rpc;
    this.GetNodeHardwareInfo = this.GetNodeHardwareInfo.bind(this);
    this.GetFreePort = this.GetFreePort.bind(this);
    this.CreateDirectory = this.CreateDirectory.bind(this);
  }
  GetNodeHardwareInfo(request: HardwareInfoRequest): Promise<HardwareInfoResponse> {
    const data = HardwareInfoRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetNodeHardwareInfo", data);
    return promise.then((data) => HardwareInfoResponse.decode(_m0.Reader.create(data)));
  }

  GetFreePort(request: GetFreePortRequest): Promise<GetFreePortResponse> {
    const data = GetFreePortRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "GetFreePort", data);
    return promise.then((data) => GetFreePortResponse.decode(_m0.Reader.create(data)));
  }

  CreateDirectory(request: CreateDirectoryRequest): Promise<CreateDirectoryResponse> {
    const data = CreateDirectoryRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "CreateDirectory", data);
    return promise.then((data) => CreateDirectoryResponse.decode(_m0.Reader.create(data)));
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
