import type { Extension, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Identifies two or more records (resource instances) that refer to the same real-world "occurrence". */
export interface LinkageItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: string;

  _type?: Element;

  resource: Reference;
}
