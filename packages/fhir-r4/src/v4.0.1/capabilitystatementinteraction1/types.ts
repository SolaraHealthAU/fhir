import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface CapabilityStatementInteraction1 {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: "transaction" | "batch" | "search-system" | "history-system";

  _code?: Element;

  documentation?: string;

  _documentation?: Element;
}
