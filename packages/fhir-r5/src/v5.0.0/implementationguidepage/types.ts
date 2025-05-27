import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface ImplementationGuidePage {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sourceUrl?: string;

  _sourceUrl?: Element;

  sourceString?: string;

  _sourceString?: Element;

  sourceMarkdown?: string;

  _sourceMarkdown?: Element;

  name?: string;

  _name?: Element;

  title?: string;

  _title?: Element;

  generation?: string;

  _generation?: Element;

  page?: ImplementationGuidePage[];
}
