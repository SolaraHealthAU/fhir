import type { Extension, Coding, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server or Client for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface CapabilityStatementEndpoint {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  protocol: Coding;

  address?: string;

  _address?: Element;
}
