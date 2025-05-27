import type {
  Extension,
  CodeableReference,
  Annotation,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export interface CarePlanActivity {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  performedActivity?: CodeableReference[];

  progress?: Annotation[];

  plannedActivityReference?: Reference;
}
