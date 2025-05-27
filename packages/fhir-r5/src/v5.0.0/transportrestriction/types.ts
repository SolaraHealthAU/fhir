import type { Extension, Element, Period, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Record of transport of item. */
export interface TransportRestriction {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  repetitions?: number;

  _repetitions?: Element;

  period?: Period;

  recipient?: Reference[];
}
