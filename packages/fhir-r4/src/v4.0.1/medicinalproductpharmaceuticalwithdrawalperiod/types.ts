import type {
  Extension,
  CodeableConcept,
  Quantity,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A pharmaceutical product described in terms of its composition and dose form. */
export interface MedicinalProductPharmaceuticalWithdrawalPeriod {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  tissue: CodeableConcept;

  value: Quantity;

  supportingInformation?: string;

  _supportingInformation?: Element;
}
