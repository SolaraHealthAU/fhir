import type { Meta, Element, Extension, Reference } from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { LinkageItem } from "../linkageitem/types";

/** Generated from FHIR JSON Schema */

/** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
export interface Linkage {
  resourceType: `Linkage`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  active?: boolean;

  _active?: Element;

  author?: Reference;

  item: LinkageItem[];
}
