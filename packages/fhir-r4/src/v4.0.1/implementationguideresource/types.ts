import type { Extension, Reference, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface ImplementationGuideResource {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  reference: Reference;

  fhirVersion?: (
    | "0.01"
    | "0.05"
    | "0.06"
    | "0.11"
    | "0.0.80"
    | "0.0.81"
    | "0.0.82"
    | "0.4.0"
    | "0.5.0"
    | "1.0.0"
    | "1.0.1"
    | "1.0.2"
    | "1.1.0"
    | "1.4.0"
    | "1.6.0"
    | "1.8.0"
    | "3.0.0"
    | "3.0.1"
    | "3.3.0"
    | "3.5.0"
    | "4.0.0"
    | "4.0.1"
  )[];

  _fhirVersion?: Element[];

  name?: string;

  _name?: Element;

  description?: string;

  _description?: Element;

  exampleBoolean?: boolean;

  _exampleBoolean?: Element;

  exampleCanonical?: string;

  _exampleCanonical?: Element;

  groupingId?: string;

  _groupingId?: Element;
}
