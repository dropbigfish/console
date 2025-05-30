// @generated by protoc-gen-connect-query v1.4.0 with parameter "target=ts,import_extension=,js_import_style=legacy_commonjs"
// @generated from file redpanda/api/dataplane/v1alpha1/user.proto (package redpanda.api.dataplane.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { CreateUserRequest, CreateUserResponse, DeleteUserRequest, DeleteUserResponse, ListUsersRequest, ListUsersResponse, UpdateUserRequest, UpdateUserResponse } from "./user_pb";

/**
 * @generated from rpc redpanda.api.dataplane.v1alpha1.UserService.CreateUser
 * @deprecated
 */
export const createUser = {
  localName: "createUser",
  name: "CreateUser",
  kind: MethodKind.Unary,
  I: CreateUserRequest,
  O: CreateUserResponse,
  service: {
    typeName: "redpanda.api.dataplane.v1alpha1.UserService"
  }
} as const;

/**
 * @generated from rpc redpanda.api.dataplane.v1alpha1.UserService.UpdateUser
 * @deprecated
 */
export const updateUser = {
  localName: "updateUser",
  name: "UpdateUser",
  kind: MethodKind.Unary,
  I: UpdateUserRequest,
  O: UpdateUserResponse,
  service: {
    typeName: "redpanda.api.dataplane.v1alpha1.UserService"
  }
} as const;

/**
 * @generated from rpc redpanda.api.dataplane.v1alpha1.UserService.ListUsers
 * @deprecated
 */
export const listUsers = {
  localName: "listUsers",
  name: "ListUsers",
  kind: MethodKind.Unary,
  I: ListUsersRequest,
  O: ListUsersResponse,
  service: {
    typeName: "redpanda.api.dataplane.v1alpha1.UserService"
  }
} as const;

/**
 * @generated from rpc redpanda.api.dataplane.v1alpha1.UserService.DeleteUser
 * @deprecated
 */
export const deleteUser = {
  localName: "deleteUser",
  name: "DeleteUser",
  kind: MethodKind.Unary,
  I: DeleteUserRequest,
  O: DeleteUserResponse,
  service: {
    typeName: "redpanda.api.dataplane.v1alpha1.UserService"
  }
} as const;
