import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface ImplementationGuideParameter {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?:
    | "apply"
    | "path-resource"
    | "path-pages"
    | "path-tx-cache"
    | "expansion-parameter"
    | "rule-broken-links"
    | "generate-xml"
    | "generate-json"
    | "generate-turtle"
    | "html-template";

  _code?: Element;

  value?: string;

  _value?: Element;
}
