import { Request, Response } from 'express';
import type {
  KnownResource,
  OperationOutcome,
  Bundle,
  CapabilityStatementResource as FhirR4CapabilityStatementResource,
  ResourceListType,
  CapabilityStatementInteraction,
  CapabilityStatementInteraction1,
  CapabilityStatement as FhirR4CapabilityStatement,
  CapabilityStatementRest as FhirR4CapabilityStatementRest,
} from '@solarahealth/fhir-r4';

export type ResourceService<R extends KnownResource, C extends Context> = {
  getCapabilityStatementResource: () => ConsistentCapabilityStatementResource<R>;
} & Partial<{
  // Supported capabilities
  read: (args: { id: string }, context: C) => Promise<Resource<R>>;
  vread: (args: { id: string; vid: string }, context: C) => Promise<Resource<R>>;
  update: (args: { id: string; body: Resource<R> }, context: C) => Promise<Resource<R> | void>;
  patch: (args: { id: string; body: string }, context: C) => Promise<Resource<R> | void>;
  delete: (args: { id: string }, context: C) => Promise<OperationOutcome>;
  create: (args: { body: Resource<R> }, context: C) => Promise<Resource<R> | void>;
  searchType: (args: { params: Record<string, string> }, context: C) => Promise<Bundle>;
  historyInstance: (args: { params: Record<string, string> }, context: C) => Promise<Bundle>;
  historyType: (args: { params: Record<string, string> }, context: C) => Promise<Bundle>;
}>;

export type Resource<R extends KnownResource> = ResourceListType & {
  resourceType: R;
};

type ConsistentCapabilityStatementResource<T extends string> = {
  type: T;
} & FhirR4CapabilityStatementResource;

export type Context = object;

export type Interaction =
  | CapabilityStatementInteraction['code']
  | CapabilityStatementInteraction1['code'];

export type ExpressContextFunctionArgument = {
  req: Request;
  res: Response;
};

export type ExpressContextFunction<C extends Context> = (
  args: ExpressContextFunctionArgument,
) => Promise<C>;

export interface CapabilityStatement<C extends Context> extends FhirR4CapabilityStatement {
  fhirVersion: '4.0.1';
  rest?: CapabilityStatementRest<C>[];
}

export interface CapabilityStatementRest<C extends Context> extends FhirR4CapabilityStatementRest {
  resource?: CapabilityStatementResource<KnownResource, C>[];
  interaction?: CapabilityStatementInteraction1Option<C>[];
}

type CapabilityStatementInteraction1Option<C extends Context> =
  CapabilityStatementInteraction1Transaction<C>;

interface CapabilityStatementInteraction1Transaction<C extends Context>
  extends CapabilityStatementInteraction1 {
  code: 'transaction';
  handler: TransactionHandler<C>;
}

export type TransactionHandler<C extends Context> = (args: unknown, c: C) => Promise<void>;

export interface CapabilityStatementResource<R extends KnownResource, C extends Context>
  extends FhirR4CapabilityStatementResource {
  type: R;
  interaction: CapabilityStatementInteractionOption<R, C>[];
}

export type CapabilityStatementInteractionOption<R extends KnownResource, C extends Context> =
  | CapabilityStatementInteractionRead<R, C>
  | CapabilityStatementInteractionSearchType<C>;

export interface CapabilityStatementInteractionRead<R extends KnownResource, C extends Context>
  extends CapabilityStatementInteraction {
  code: 'read';
  handler: ResourceReadHandler<R, C>;
}

export interface CapabilityStatementInteractionSearchType<C extends Context>
  extends CapabilityStatementInteraction {
  code: 'search-type';
  handler: ResourceSearchTypeHandler<C>;
}

export type InteractionDetail<R extends KnownResource, C extends Context> =
  | InteractionDetailRead<R, C>
  | InteractionDetailSearchType<C>;

export type InteractionDetailRead<R extends KnownResource, C extends Context> = {
  handler: ResourceReadHandler<R, C>;
  documentation?: string;
};

export type ResourceReadHandler<R extends KnownResource, C extends Context> = (
  args: {
    id: string;
    ifModifiedSince: string | null;
    ifNoneMatch: string | null;
  },
  context: C,
) => Promise<Resource<R>>;

export type InteractionDetailSearchType<C extends Context> = {
  handler: ResourceSearchTypeHandler<C>;
  documentation?: string;
};

export type ResourceSearchTypeHandler<C extends Context> = (
  args: { params: Record<string, string | string[]> },
  context: C,
) => Promise<Bundle>;
