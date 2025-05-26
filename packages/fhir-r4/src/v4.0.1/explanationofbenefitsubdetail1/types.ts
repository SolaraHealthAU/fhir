import type {
  Extension,
  CodeableConcept,
  Quantity,
  Money,
  Element,
} from "../core/types";
import type { ExplanationOfBenefitAdjudication } from "../explanationofbenefitadjudication/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitSubDetail1 {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  productOrService: CodeableConcept;

  modifier?: CodeableConcept[];

  quantity?: Quantity;

  unitPrice?: Money;

  factor?: number;

  _factor?: Element;

  net?: Money;

  noteNumber?: number[];

  _noteNumber?: Element[];

  adjudication?: ExplanationOfBenefitAdjudication[];
}
