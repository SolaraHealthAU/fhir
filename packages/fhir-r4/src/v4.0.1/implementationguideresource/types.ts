import type { Extension, Reference, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface ImplementationGuideResource {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  reference: Reference;

  fhirVersion?: any;

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
