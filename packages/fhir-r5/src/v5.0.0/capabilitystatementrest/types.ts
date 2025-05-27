import type { Extension, Element } from "../core/types";
import type { CapabilityStatementSecurity } from "../capabilitystatementsecurity/types";
import type { CapabilityStatementResource } from "../capabilitystatementresource/types";
import type { CapabilityStatementInteraction1 } from "../capabilitystatementinteraction1/types";
import type { CapabilityStatementSearchParam } from "../capabilitystatementsearchparam/types";
import type { CapabilityStatementOperation } from "../capabilitystatementoperation/types";

/** Generated from FHIR JSON Schema */

/** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server or Client for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface CapabilityStatementRest {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  mode?: string;

  _mode?: Element;

  documentation?: string;

  _documentation?: Element;

  security?: CapabilityStatementSecurity;

  resource?: CapabilityStatementResource[];

  interaction?: CapabilityStatementInteraction1[];

  searchParam?: CapabilityStatementSearchParam[];

  operation?: CapabilityStatementOperation[];

  compartment?: string[];
}
