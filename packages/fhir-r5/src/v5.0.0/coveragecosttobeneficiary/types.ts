import type {
  Extension,
  CodeableConcept,
  Quantity,
  Money,
} from "../core/types";
import type { CoverageException } from "../coverageexception/types";

/** Generated from FHIR JSON Schema */

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */
export interface CoverageCostToBeneficiary {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: CodeableConcept;

  category?: CodeableConcept;

  network?: CodeableConcept;

  unit?: CodeableConcept;

  term?: CodeableConcept;

  valueQuantity?: Quantity;

  valueMoney?: Money;

  exception?: CoverageException[];
}
