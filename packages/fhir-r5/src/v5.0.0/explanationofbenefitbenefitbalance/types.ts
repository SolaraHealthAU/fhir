import type { Extension, CodeableConcept, Element } from "../core/types";
import type { ExplanationOfBenefitFinancial } from "../explanationofbenefitfinancial/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitBenefitBalance {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  category: CodeableConcept;

  excluded?: boolean;

  _excluded?: Element;

  name?: string;

  _name?: Element;

  description?: string;

  _description?: Element;

  network?: CodeableConcept;

  unit?: CodeableConcept;

  term?: CodeableConcept;

  financial?: ExplanationOfBenefitFinancial[];
}
