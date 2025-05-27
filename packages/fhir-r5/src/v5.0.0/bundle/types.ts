import type { Meta, Element, Identifier, Signature } from "../core/types";
import type { BundleLink } from "../bundlelink/types";
import type { BundleEntry } from "../bundleentry/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** A container for a collection of resources. */
export interface Bundle {
  resourceType: `Bundle`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  identifier?: Identifier;

  type?: string;

  _type?: Element;

  timestamp?: string;

  _timestamp?: Element;

  total?: number;

  _total?: Element;

  link?: BundleLink[];

  entry?: BundleEntry[];

  signature?: Signature;

  issues?: ResourceList;
}
