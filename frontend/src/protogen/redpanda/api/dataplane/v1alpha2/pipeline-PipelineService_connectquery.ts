// @generated by protoc-gen-connect-query v1.4.0 with parameter "target=ts,import_extension=,js_import_style=legacy_commonjs"
// @generated from file redpanda/api/dataplane/v1alpha2/pipeline.proto (package redpanda.api.dataplane.v1alpha2, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import { MethodKind } from "@bufbuild/protobuf";
import { CreatePipelineRequest, CreatePipelineResponse, DeletePipelineRequest, DeletePipelineResponse, GetPipelineRequest, GetPipelineResponse, GetPipelinesBySecretsRequest, GetPipelinesBySecretsResponse, GetPipelineServiceConfigSchemaRequest, GetPipelineServiceConfigSchemaResponse, GetPipelinesForSecretRequest, GetPipelinesForSecretResponse, ListPipelinesRequest, ListPipelinesResponse, StartPipelineRequest, StartPipelineResponse, StopPipelineRequest, StopPipelineResponse, UpdatePipelineRequest, UpdatePipelineResponse } from "./pipeline_pb";

/**
 * CreatePipeline creates a Redpanda Connect pipeline in the Redpanda cluster.
 *
 * @generated from rpc redpanda.api.dataplane.v1alpha2.PipelineService.CreatePipeline
 */
export const createPipeline = {
  localName: "createPipeline",
  name: "CreatePipeline",
  kind: MethodKind.Unary,
  I: CreatePipelineRequest,
  O: CreatePipelineResponse,
  service: {
    typeName: "redpanda.api.dataplane.v1alpha2.PipelineService"
  }
} as const;

/**
 * GetPipeline gets a specific Redpanda Connect pipeline.
 *
 * @generated from rpc redpanda.api.dataplane.v1alpha2.PipelineService.GetPipeline
 */
export const getPipeline = {
  localName: "getPipeline",
  name: "GetPipeline",
  kind: MethodKind.Unary,
  I: GetPipelineRequest,
  O: GetPipelineResponse,
  service: {
    typeName: "redpanda.api.dataplane.v1alpha2.PipelineService"
  }
} as const;

/**
 * ListPipelines implements the list pipelines method which lists the pipelines
 * in the Redpanda cluster.
 *
 * @generated from rpc redpanda.api.dataplane.v1alpha2.PipelineService.ListPipelines
 */
export const listPipelines = {
  localName: "listPipelines",
  name: "ListPipelines",
  kind: MethodKind.Unary,
  I: ListPipelinesRequest,
  O: ListPipelinesResponse,
  service: {
    typeName: "redpanda.api.dataplane.v1alpha2.PipelineService"
  }
} as const;

/**
 * UpdatePipeline updates a specific Redpanda Connect pipeline configuration.
 *
 * @generated from rpc redpanda.api.dataplane.v1alpha2.PipelineService.UpdatePipeline
 */
export const updatePipeline = {
  localName: "updatePipeline",
  name: "UpdatePipeline",
  kind: MethodKind.Unary,
  I: UpdatePipelineRequest,
  O: UpdatePipelineResponse,
  service: {
    typeName: "redpanda.api.dataplane.v1alpha2.PipelineService"
  }
} as const;

/**
 * DeletePipeline deletes a specific Redpanda Connect pipeline.
 *
 * @generated from rpc redpanda.api.dataplane.v1alpha2.PipelineService.DeletePipeline
 */
export const deletePipeline = {
  localName: "deletePipeline",
  name: "DeletePipeline",
  kind: MethodKind.Unary,
  I: DeletePipelineRequest,
  O: DeletePipelineResponse,
  service: {
    typeName: "redpanda.api.dataplane.v1alpha2.PipelineService"
  }
} as const;

/**
 * StopPipeline stops a specific Redpanda Connect pipeline.
 *
 * @generated from rpc redpanda.api.dataplane.v1alpha2.PipelineService.StopPipeline
 */
export const stopPipeline = {
  localName: "stopPipeline",
  name: "StopPipeline",
  kind: MethodKind.Unary,
  I: StopPipelineRequest,
  O: StopPipelineResponse,
  service: {
    typeName: "redpanda.api.dataplane.v1alpha2.PipelineService"
  }
} as const;

/**
 * StartPipeline starts a specific Redpanda Connect pipeline that has been previously stopped.
 *
 * @generated from rpc redpanda.api.dataplane.v1alpha2.PipelineService.StartPipeline
 */
export const startPipeline = {
  localName: "startPipeline",
  name: "StartPipeline",
  kind: MethodKind.Unary,
  I: StartPipelineRequest,
  O: StartPipelineResponse,
  service: {
    typeName: "redpanda.api.dataplane.v1alpha2.PipelineService"
  }
} as const;

/**
 * The configuration schema includes available [components and processors](https://docs.redpanda.com/redpanda-cloud/develop/connect/components/about) in this Redpanda Connect instance.
 *
 * @generated from rpc redpanda.api.dataplane.v1alpha2.PipelineService.GetPipelineServiceConfigSchema
 */
export const getPipelineServiceConfigSchema = {
  localName: "getPipelineServiceConfigSchema",
  name: "GetPipelineServiceConfigSchema",
  kind: MethodKind.Unary,
  I: GetPipelineServiceConfigSchemaRequest,
  O: GetPipelineServiceConfigSchemaResponse,
  service: {
    typeName: "redpanda.api.dataplane.v1alpha2.PipelineService"
  }
} as const;

/**
 * GetPipelinesForSecret implements the get pipelines for secret method which lists the pipelines
 * in the Redpanda cluster for the given secret.
 *
 * @generated from rpc redpanda.api.dataplane.v1alpha2.PipelineService.GetPipelinesForSecret
 */
export const getPipelinesForSecret = {
  localName: "getPipelinesForSecret",
  name: "GetPipelinesForSecret",
  kind: MethodKind.Unary,
  I: GetPipelinesForSecretRequest,
  O: GetPipelinesForSecretResponse,
  service: {
    typeName: "redpanda.api.dataplane.v1alpha2.PipelineService"
  }
} as const;

/**
 * GetPipelinesBySecrets implements the get pipelines by secrets method which lists the pipelines
 * in the Redpanda cluster for all secrets.
 *
 * @generated from rpc redpanda.api.dataplane.v1alpha2.PipelineService.GetPipelinesBySecrets
 */
export const getPipelinesBySecrets = {
  localName: "getPipelinesBySecrets",
  name: "GetPipelinesBySecrets",
  kind: MethodKind.Unary,
  I: GetPipelinesBySecretsRequest,
  O: GetPipelinesBySecretsResponse,
  service: {
    typeName: "redpanda.api.dataplane.v1alpha2.PipelineService"
  }
} as const;
