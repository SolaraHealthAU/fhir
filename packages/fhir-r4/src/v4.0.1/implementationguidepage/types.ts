import type { Extension, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface ImplementationGuidePage {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  nameUrl?: string;

  _nameUrl?: Element;

  nameReference?: Reference;

  title?: string;

  _title?: Element;

  generation?: "html" | "markdown" | "xml" | "generated";

  _generation?: Element;

  page?: ImplementationGuidePage[];
}
