import type {
  Extension,
  CodeableConcept,
  Element,
  Expression,
} from "../core/types";
import type { MeasureComponent } from "../measurecomponent/types";

/** Generated from FHIR JSON Schema */

/** The Measure resource provides the definition of a quality measure. */
export interface MeasureStratifier {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept;

  description?: string;

  _description?: Element;

  criteria?: Expression;

  component?: MeasureComponent[];
}
