import type {
  Extension,
  CodeableConcept,
  Reference,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of an event relevant for purposes such as operations, privacy, security, maintenance, and performance analysis. */
export interface AuditEventAgent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  role?: CodeableConcept[];

  who: Reference;

  requestor?: boolean;

  _requestor?: Element;

  location?: Reference;

  policy?: string[];

  _policy?: Element[];

  networkReference?: Reference;

  networkUri?: string;

  _networkUri?: Element;

  networkString?: string;

  _networkString?: Element;

  authorization?: CodeableConcept[];
}
