import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface TerminologyCapabilitiesValidateCode {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  translations?: boolean;

  _translations?: Element;
}
