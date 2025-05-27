import type {
  Extension,
  CodeableReference,
  Range,
  Element,
  Reference,
  Expression,
} from "../core/types";
import type { ClinicalUseDefinitionOtherTherapy } from "../clinicalusedefinitionothertherapy/types";

/** Generated from FHIR JSON Schema */

/** A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure. */
export interface ClinicalUseDefinitionIndication {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  diseaseSymptomProcedure?: CodeableReference;

  diseaseStatus?: CodeableReference;

  comorbidity?: CodeableReference[];

  intendedEffect?: CodeableReference;

  durationRange?: Range;

  durationString?: string;

  _durationString?: Element;

  undesirableEffect?: Reference[];

  applicability?: Expression;

  otherTherapy?: ClinicalUseDefinitionOtherTherapy[];
}
