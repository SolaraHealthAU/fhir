import type {
  Extension,
  CodeableConcept,
  CodeableReference,
} from "../core/types";
import type { ClinicalUseDefinitionInteractant } from "../clinicalusedefinitioninteractant/types";

/** Generated from FHIR JSON Schema */

/** A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure. */
export interface ClinicalUseDefinitionInteraction {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  interactant?: ClinicalUseDefinitionInteractant[];

  type?: CodeableConcept;

  effect?: CodeableReference;

  incidence?: CodeableConcept;

  management?: CodeableConcept[];
}
