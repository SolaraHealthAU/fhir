import type { Extension, Element, UsageContext } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Captures constraints on each element within the resource, profile, or extension. */
export interface ElementDefinitionAdditional {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  purpose?: string;

  _purpose?: Element;

  valueSet: string;

  documentation?: string;

  _documentation?: Element;

  shortDoco?: string;

  _shortDoco?: Element;

  usage?: UsageContext[];

  any?: boolean;

  _any?: Element;
}
