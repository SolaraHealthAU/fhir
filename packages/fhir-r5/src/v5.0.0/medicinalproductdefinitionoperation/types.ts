import type {
  Extension,
  CodeableReference,
  Period,
  Reference,
  CodeableConcept,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A medicinal product, being a substance or combination of substances that is intended to treat, prevent or diagnose a disease, or to restore, correct or modify physiological functions by exerting a pharmacological, immunological or metabolic action. This resource is intended to define and detail such products and their properties, for uses other than direct patient care (e.g. regulatory use, or drug catalogs). */
export interface MedicinalProductDefinitionOperation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableReference;

  effectiveDate?: Period;

  organization?: Reference[];

  confidentialityIndicator?: CodeableConcept;
}
