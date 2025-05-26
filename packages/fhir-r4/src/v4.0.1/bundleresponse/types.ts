import type { Extension, Element } from "../core/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** A container for a collection of resources. */
export interface BundleResponse {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  status?: string;

  _status?: Element;

  location?: string;

  _location?: Element;

  etag?: string;

  _etag?: Element;

  lastModified?: string;

  _lastModified?: Element;

  outcome?: ResourceList;
}
