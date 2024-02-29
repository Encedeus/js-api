/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Node } from "./common";
import { UUID } from "./generic";

export const protobufPackage = "";

export interface NodesCreateRequest {
  ipv4Address: string;
  fqdn: string;
  /** string skyhook_version = 3; */
  os: string;
  /** SSHCredentials ssh_credentials = 11; */
  apiKey: string;
}

export interface NodesCreateResponse {
  nodes: Node[];
}

export interface NodesFindAllRequest {
}

export interface NodesFindAllResponse {
  nodes: Node[];
}

export interface NodesFindOneRequest {
  id: UUID | undefined;
}

export interface NodesFindOneResponse {
  nodes: Node[];
}

export interface NodesDeleteRequest {
  id: UUID | undefined;
}

export interface NodesDeleteResponse {
}

function createBaseNodesCreateRequest(): NodesCreateRequest {
  return { ipv4Address: "", fqdn: "", os: "", apiKey: "" };
}

export const NodesCreateRequest = {
  encode(message: NodesCreateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.ipv4Address !== "") {
      writer.uint32(10).string(message.ipv4Address);
    }
    if (message.fqdn !== "") {
      writer.uint32(18).string(message.fqdn);
    }
    if (message.os !== "") {
      writer.uint32(26).string(message.os);
    }
    if (message.apiKey !== "") {
      writer.uint32(34).string(message.apiKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodesCreateRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodesCreateRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.ipv4Address = reader.string();
          continue;
        case 2:
          if (tag !== 18) {
            break;
          }

          message.fqdn = reader.string();
          continue;
        case 3:
          if (tag !== 26) {
            break;
          }

          message.os = reader.string();
          continue;
        case 4:
          if (tag !== 34) {
            break;
          }

          message.apiKey = reader.string();
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodesCreateRequest {
    return {
      ipv4Address: isSet(object.ipv4Address) ? globalThis.String(object.ipv4Address) : "",
      fqdn: isSet(object.fqdn) ? globalThis.String(object.fqdn) : "",
      os: isSet(object.os) ? globalThis.String(object.os) : "",
      apiKey: isSet(object.apiKey) ? globalThis.String(object.apiKey) : "",
    };
  },

  toJSON(message: NodesCreateRequest): unknown {
    const obj: any = {};
    if (message.ipv4Address !== "") {
      obj.ipv4Address = message.ipv4Address;
    }
    if (message.fqdn !== "") {
      obj.fqdn = message.fqdn;
    }
    if (message.os !== "") {
      obj.os = message.os;
    }
    if (message.apiKey !== "") {
      obj.apiKey = message.apiKey;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodesCreateRequest>, I>>(base?: I): NodesCreateRequest {
    return NodesCreateRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodesCreateRequest>, I>>(object: I): NodesCreateRequest {
    const message = createBaseNodesCreateRequest();
    message.ipv4Address = object.ipv4Address ?? "";
    message.fqdn = object.fqdn ?? "";
    message.os = object.os ?? "";
    message.apiKey = object.apiKey ?? "";
    return message;
  },
};

function createBaseNodesCreateResponse(): NodesCreateResponse {
  return { nodes: [] };
}

export const NodesCreateResponse = {
  encode(message: NodesCreateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodesCreateResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodesCreateResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodes.push(Node.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodesCreateResponse {
    return { nodes: globalThis.Array.isArray(object?.nodes) ? object.nodes.map((e: any) => Node.fromJSON(e)) : [] };
  },

  toJSON(message: NodesCreateResponse): unknown {
    const obj: any = {};
    if (message.nodes?.length) {
      obj.nodes = message.nodes.map((e) => Node.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodesCreateResponse>, I>>(base?: I): NodesCreateResponse {
    return NodesCreateResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodesCreateResponse>, I>>(object: I): NodesCreateResponse {
    const message = createBaseNodesCreateResponse();
    message.nodes = object.nodes?.map((e) => Node.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNodesFindAllRequest(): NodesFindAllRequest {
  return {};
}

export const NodesFindAllRequest = {
  encode(_: NodesFindAllRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodesFindAllRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodesFindAllRequest();
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

  fromJSON(_: any): NodesFindAllRequest {
    return {};
  },

  toJSON(_: NodesFindAllRequest): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NodesFindAllRequest>, I>>(base?: I): NodesFindAllRequest {
    return NodesFindAllRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodesFindAllRequest>, I>>(_: I): NodesFindAllRequest {
    const message = createBaseNodesFindAllRequest();
    return message;
  },
};

function createBaseNodesFindAllResponse(): NodesFindAllResponse {
  return { nodes: [] };
}

export const NodesFindAllResponse = {
  encode(message: NodesFindAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodesFindAllResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodesFindAllResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodes.push(Node.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodesFindAllResponse {
    return { nodes: globalThis.Array.isArray(object?.nodes) ? object.nodes.map((e: any) => Node.fromJSON(e)) : [] };
  },

  toJSON(message: NodesFindAllResponse): unknown {
    const obj: any = {};
    if (message.nodes?.length) {
      obj.nodes = message.nodes.map((e) => Node.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodesFindAllResponse>, I>>(base?: I): NodesFindAllResponse {
    return NodesFindAllResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodesFindAllResponse>, I>>(object: I): NodesFindAllResponse {
    const message = createBaseNodesFindAllResponse();
    message.nodes = object.nodes?.map((e) => Node.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNodesFindOneRequest(): NodesFindOneRequest {
  return { id: undefined };
}

export const NodesFindOneRequest = {
  encode(message: NodesFindOneRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodesFindOneRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodesFindOneRequest();
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

  fromJSON(object: any): NodesFindOneRequest {
    return { id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined };
  },

  toJSON(message: NodesFindOneRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodesFindOneRequest>, I>>(base?: I): NodesFindOneRequest {
    return NodesFindOneRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodesFindOneRequest>, I>>(object: I): NodesFindOneRequest {
    const message = createBaseNodesFindOneRequest();
    message.id = (object.id !== undefined && object.id !== null) ? UUID.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseNodesFindOneResponse(): NodesFindOneResponse {
  return { nodes: [] };
}

export const NodesFindOneResponse = {
  encode(message: NodesFindOneResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.nodes) {
      Node.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodesFindOneResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodesFindOneResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          if (tag !== 10) {
            break;
          }

          message.nodes.push(Node.decode(reader, reader.uint32()));
          continue;
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skipType(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): NodesFindOneResponse {
    return { nodes: globalThis.Array.isArray(object?.nodes) ? object.nodes.map((e: any) => Node.fromJSON(e)) : [] };
  },

  toJSON(message: NodesFindOneResponse): unknown {
    const obj: any = {};
    if (message.nodes?.length) {
      obj.nodes = message.nodes.map((e) => Node.toJSON(e));
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodesFindOneResponse>, I>>(base?: I): NodesFindOneResponse {
    return NodesFindOneResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodesFindOneResponse>, I>>(object: I): NodesFindOneResponse {
    const message = createBaseNodesFindOneResponse();
    message.nodes = object.nodes?.map((e) => Node.fromPartial(e)) || [];
    return message;
  },
};

function createBaseNodesDeleteRequest(): NodesDeleteRequest {
  return { id: undefined };
}

export const NodesDeleteRequest = {
  encode(message: NodesDeleteRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== undefined) {
      UUID.encode(message.id, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodesDeleteRequest {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodesDeleteRequest();
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

  fromJSON(object: any): NodesDeleteRequest {
    return { id: isSet(object.id) ? UUID.fromJSON(object.id) : undefined };
  },

  toJSON(message: NodesDeleteRequest): unknown {
    const obj: any = {};
    if (message.id !== undefined) {
      obj.id = UUID.toJSON(message.id);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<NodesDeleteRequest>, I>>(base?: I): NodesDeleteRequest {
    return NodesDeleteRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodesDeleteRequest>, I>>(object: I): NodesDeleteRequest {
    const message = createBaseNodesDeleteRequest();
    message.id = (object.id !== undefined && object.id !== null) ? UUID.fromPartial(object.id) : undefined;
    return message;
  },
};

function createBaseNodesDeleteResponse(): NodesDeleteResponse {
  return {};
}

export const NodesDeleteResponse = {
  encode(_: NodesDeleteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NodesDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNodesDeleteResponse();
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

  fromJSON(_: any): NodesDeleteResponse {
    return {};
  },

  toJSON(_: NodesDeleteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<NodesDeleteResponse>, I>>(base?: I): NodesDeleteResponse {
    return NodesDeleteResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<NodesDeleteResponse>, I>>(_: I): NodesDeleteResponse {
    const message = createBaseNodesDeleteResponse();
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
