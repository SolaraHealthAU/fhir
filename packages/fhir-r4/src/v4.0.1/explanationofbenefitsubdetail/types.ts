import type {
  Extension,
  Element,
  CodeableConcept,
  Quantity,
  Money,
  Reference,
} from "../core/types";
import type { ExplanationOfBenefitAdjudication } from "../explanationofbenefitadjudication/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefitSubDetail {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  sequence?: number;

  _sequence?: Element;

  revenue?: CodeableConcept;

  category?: CodeableConcept;

  productOrService: CodeableConcept;

  modifier?: CodeableConcept[];

  programCode?: CodeableConcept[];

  quantity?: Quantity;

  unitPrice?: Money;

  factor?: number;

  _factor?: Element;

  net?: Money;

  udi?: Reference[];

  noteNumber?: number[];

  _noteNumber?: Element[];

  adjudication?: ExplanationOfBenefitAdjudication[];
}
