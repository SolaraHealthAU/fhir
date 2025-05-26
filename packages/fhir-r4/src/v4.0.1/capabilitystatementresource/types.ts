import type { Extension, Element } from "../core/types";
import type { CapabilityStatementInteraction } from "../capabilitystatementinteraction/types";
import type { CapabilityStatementSearchParam } from "../capabilitystatementsearchparam/types";
import type { CapabilityStatementOperation } from "../capabilitystatementoperation/types";

/** Generated from FHIR JSON Schema */

/** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface CapabilityStatementResource {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  profile?: string;

  supportedProfile?: string[];

  documentation?: string;

  _documentation?: Element;

  interaction?: CapabilityStatementInteraction[];

  versioning?: "no-version" | "versioned" | "versioned-update";

  _versioning?: Element;

  readHistory?: boolean;

  _readHistory?: Element;

  updateCreate?: boolean;

  _updateCreate?: Element;

  conditionalCreate?: boolean;

  _conditionalCreate?: Element;

  conditionalRead?:
    | "not-supported"
    | "modified-since"
    | "not-match"
    | "full-support";

  _conditionalRead?: Element;

  conditionalUpdate?: boolean;

  _conditionalUpdate?: Element;

  conditionalDelete?: "not-supported" | "single" | "multiple";

  _conditionalDelete?: Element;

  referencePolicy?: any;

  _referencePolicy?: Element[];

  searchInclude?: string[];

  _searchInclude?: Element[];

  searchRevInclude?: string[];

  _searchRevInclude?: Element[];

  searchParam?: CapabilityStatementSearchParam[];

  operation?: CapabilityStatementOperation[];
}
