import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A container for a collection of resources. */
export interface BundleRequest {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  method?: string;

  _method?: Element;

  url?: string;

  _url?: Element;

  ifNoneMatch?: string;

  _ifNoneMatch?: Element;

  ifModifiedSince?: string;

  _ifModifiedSince?: Element;

  ifMatch?: string;

  _ifMatch?: Element;

  ifNoneExist?: string;

  _ifNoneExist?: Element;
}
