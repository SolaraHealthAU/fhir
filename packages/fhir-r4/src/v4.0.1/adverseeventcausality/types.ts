import type {
  Extension,
  CodeableConcept,
  Element,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Actual or  potential/avoided event causing unintended physical injury resulting from or contributed to by medical care, a research study or other healthcare setting factors that requires additional monitoring, treatment, or hospitalization, or that results in death. */
export interface AdverseEventCausality {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  assessment?: CodeableConcept;

  productRelatedness?: string;

  _productRelatedness?: Element;

  author?: Reference;

  method?: CodeableConcept;
}
