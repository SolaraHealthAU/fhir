import type { Extension, Element } from "../core/types";
import type { BundleLink } from "../bundlelink/types";
import type { ResourceList } from "../resourcelist/types";
import type { BundleSearch } from "../bundlesearch/types";
import type { BundleRequest } from "../bundlerequest/types";
import type { BundleResponse } from "../bundleresponse/types";

/** Generated from FHIR JSON Schema */

/** A container for a collection of resources. */
export interface BundleEntry {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  link?: BundleLink[];

  fullUrl?: string;

  _fullUrl?: Element;

  resource?: ResourceList;

  search?: BundleSearch;

  request?: BundleRequest;

  response?: BundleResponse;
}
