import type { Extension, Element, Period, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A task to be performed. */
export interface TaskRestriction {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  repetitions?: number;

  _repetitions?: Element;

  period?: Period;

  recipient?: Reference[];
}
