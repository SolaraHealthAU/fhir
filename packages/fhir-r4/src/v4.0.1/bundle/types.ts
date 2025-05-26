import type { Meta, Element, Identifier, Signature } from "../core/types";
import type { BundleLink } from "../bundlelink/types";
import type { BundleEntry } from "../bundleentry/types";

/** Generated from FHIR JSON Schema */

/** A container for a collection of resources. */
export interface Bundle {
  resourceType: `Bundle`;
  /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
  id?: string;
  /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  meta?: Meta;
  /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
  implicitRules?: string;

  _implicitRules?: Element;
  /** The base language in which the resource is written. */
  language?: string;

  _language?: Element;
  /** A persistent identifier for the bundle that won't change as a bundle is copied from server to server. */
  identifier?: Identifier;
  /** Indicates the purpose of this bundle - how it is intended to be used. */
  type:
    | "document"
    | "message"
    | "transaction"
    | "transaction-response"
    | "batch"
    | "batch-response"
    | "history"
    | "searchset"
    | "collection";

  _type?: Element;
  /** The date/time that the bundle was assembled - i.e. when the resources were placed in the bundle. */
  timestamp?: string;

  _timestamp?: Element;
  /** If a set of search matches, this is the total number of entries of type 'match' across all pages in the search.  It does not include search.mode = 'include' or 'outcome' entries and it does not provide a count of the number of entries in the Bundle. */
  total?: number;

  _total?: Element;

  link?: BundleLink[];

  entry?: BundleEntry[];
  /** Digital Signature - base64 encoded. XML-DSig or a JWT. */
  signature?: Signature;
}
