/* ------------------------------------------------------------------
   FHIR Resource DSL – fluent builder that compiles to REST handlers
------------------------------------------------------------------- */

import * as z from 'zod';
import type { KnownResource } from '@solarahealth/fhir-r4';
import * as types from '../types';
import { ReadBuilder, ReadBuilderReady } from './read-builder';
import { SearchBuilder, SearchBuilderReady } from './search-builder';

/* ------------------------------------------------------------------
   2.  Public entry point
   ------------------------------------------------------------------ */
export function defineResource<C extends types.Context, RT extends KnownResource>(
  resourceType: RT,
) {
  return new ResourceBuilder<RT, C>(resourceType);
}

/* ------------------------------------------------------------------
   3.  Resource‑level builder – chains read() / search() …
   ------------------------------------------------------------------ */
class ResourceBuilder<RT extends KnownResource, C extends types.Context> {
  // Store interaction details
  private interactions: {
    read?: types.InteractionDetailRead<RT, C>;
    searchType?: types.InteractionDetailSearchType<C>;
    // create?: types.InteractionDetail<RT, C>;
    // update?: types.InteractionDetail<RT, C>;
    // patch?: types.InteractionDetail<RT, C>;
    // delete?: types.InteractionDetail<RT, C>;
    // historyInstance?: types.InteractionDetail<RT, C>;
    // historyType?: types.InteractionDetail<RT, C>;
  } = {};

  // Capability fields
  private _conditionalRead?: types.CapabilityStatementResource<RT, C>['conditionalRead'];
  private _conditionalCreate?: types.CapabilityStatementResource<RT, C>['conditionalCreate'];
  private _conditionalUpdate?: types.CapabilityStatementResource<RT, C>['conditionalUpdate'];
  private _conditionalDelete?: types.CapabilityStatementResource<RT, C>['conditionalDelete'];
  private _searchInclude?: types.CapabilityStatementResource<RT, C>['searchInclude'];
  private _searchRevInclude?: types.CapabilityStatementResource<RT, C>['searchRevInclude'];
  private _searchParam?: types.CapabilityStatementResource<RT, C>['searchParam'];
  private _versioning?: types.CapabilityStatementResource<RT, C>['versioning'];
  private _readHistory?: types.CapabilityStatementResource<RT, C>['readHistory'];
  private _updateCreate?: types.CapabilityStatementResource<RT, C>['updateCreate'];

  constructor(private readonly rt: RT) {}

  // Method to add interaction details
  private addReadInteraction(handler: types.ResourceReadHandler<RT, C>, documentation?: string) {
    this.interactions.read = { handler, documentation };
    return this;
  }
  private addSearchInteraction(
    handler: types.ResourceSearchTypeHandler<C>,
    documentation?: string,
  ) {
    this.interactions.searchType = { handler, documentation };
    return this;
  }

  /* ─────────────── READ ─────────────── */
  read(builder: { build: () => types.ResourceReadHandler<RT, C> }, documentation?: string): this;
  read<SId extends z.ZodTypeAny>(
    cfg: (b: ReadBuilder<RT, C, SId>) => ReadBuilderReady<RT, C, SId>,
    documentation?: string,
  ): this;
  read<SId extends z.ZodTypeAny>(
    arg:
      | ((b: ReadBuilder<RT, C, SId>) => ReadBuilderReady<RT, C, SId>)
      | { build: () => types.ResourceReadHandler<RT, C> },
    documentation?: string,
  ): this {
    let handler: types.ResourceReadHandler<RT, C>;
    if (typeof arg === 'function') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const cfg = arg as any; // Bypassing complex type check for overload resolution
      const impl = cfg(new ReadBuilder(this.rt));
      handler = impl.build();
    } else if (typeof arg === 'object' && arg !== null && typeof arg.build === 'function') {
      handler = arg.build();
    } else {
      throw new Error(
        "Invalid argument provided to read(). Expected a config function or a builder object with a 'build' method.",
      );
    }
    return this.addReadInteraction(handler, documentation);
  }

  /* ─────────────── SEARCH ───────────── */
  search(
    builder: { build: () => types.ResourceSearchTypeHandler<C> },
    documentation?: string,
  ): this;
  search<ParamsOut>(
    cfg: (b: SearchBuilder<RT, ParamsOut>) => SearchBuilderReady<RT, ParamsOut>,
    documentation?: string,
  ): this;
  search<ParamsOut>(
    arg:
      | ((b: SearchBuilder<RT, ParamsOut>) => SearchBuilderReady<RT, ParamsOut>)
      | { build: () => types.ResourceSearchTypeHandler<C> },
    documentation?: string,
  ): this {
    let handler: types.ResourceSearchTypeHandler<C>;
    if (typeof arg === 'function') {
      const cfg = arg as (b: SearchBuilder<RT, ParamsOut>) => SearchBuilderReady<RT, ParamsOut>;
      const impl = cfg(new SearchBuilder(this.rt));
      handler = impl.build();
    } else if (typeof arg === 'object' && arg !== null && typeof arg.build === 'function') {
      handler = arg.build();
    } else {
      throw new Error(
        "Invalid argument provided to search(). Expected a config function or a builder object with a 'build' method.",
      );
    }
    return this.addSearchInteraction(handler, documentation);
  }

  // Methods for capability properties
  conditionalRead(value: types.CapabilityStatementResource<RT, C>['conditionalRead']) {
    this._conditionalRead = value;
    return this;
  }

  conditionalCreate(value: types.CapabilityStatementResource<RT, C>['conditionalCreate']) {
    this._conditionalCreate = value;
    return this;
  }

  conditionalUpdate(value: types.CapabilityStatementResource<RT, C>['conditionalUpdate']) {
    this._conditionalUpdate = value;
    return this;
  }

  conditionalDelete(value: types.CapabilityStatementResource<RT, C>['conditionalDelete']) {
    this._conditionalDelete = value;
    return this;
  }

  searchInclude(values: types.CapabilityStatementResource<RT, C>['searchInclude']) {
    this._searchInclude = values;
    return this;
  }

  searchRevInclude(values: types.CapabilityStatementResource<RT, C>['searchRevInclude']) {
    this._searchRevInclude = values;
    return this;
  }

  searchParams(params: types.CapabilityStatementResource<RT, C>['searchParam']) {
    this._searchParam = params;
    return this;
  }

  versioning(value: types.CapabilityStatementResource<RT, C>['versioning']) {
    this._versioning = value;
    return this;
  }

  readHistory(value: types.CapabilityStatementResource<RT, C>['readHistory']) {
    this._readHistory = value;
    return this;
  }

  updateCreate(value: types.CapabilityStatementResource<RT, C>['updateCreate']) {
    this._updateCreate = value;
    return this;
  }

  /* ---------- build ---------- */
  build(): types.CapabilityStatementResource<RT, C> {
    const interaction: types.CapabilityStatementResource<RT, C>['interaction'] = [];

    if (this.interactions.read) {
      interaction.push({
        code: 'read',
        documentation: this.interactions.read.documentation,
        handler: this.interactions.read.handler,
      });
    }

    if (this.interactions.searchType) {
      interaction.push({
        code: 'search-type',
        documentation: this.interactions.searchType.documentation,
        handler: this.interactions.searchType.handler,
      });
    }

    // Construct the final resource object
    const resourceDefinition: types.CapabilityStatementResource<RT, C> = {
      type: this.rt,
      interaction,
      conditionalRead: this._conditionalRead,
      conditionalCreate: this._conditionalCreate,
      conditionalUpdate: this._conditionalUpdate,
      conditionalDelete: this._conditionalDelete,
      searchInclude: this._searchInclude,
      searchRevInclude: this._searchRevInclude,
      searchParam: this._searchParam,
      versioning: this._versioning,
      readHistory: this._readHistory,
      updateCreate: this._updateCreate,
      // Add other optional CapabilityStatementResource properties here if needed
      // e.g., profile, supportedProfile, operation
    };

    // Remove undefined properties for cleaner output
    Object.keys(resourceDefinition).forEach((key) => {
      if ((resourceDefinition as unknown as Record<string, unknown>)[key] === undefined) {
        delete (resourceDefinition as unknown as Record<string, unknown>)[key];
      }
    });

    return resourceDefinition;
  }
}
