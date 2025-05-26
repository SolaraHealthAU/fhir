import type { Extension, CodeableConcept } from "../core/types";
import type { MedicinalProductPharmaceuticalWithdrawalPeriod } from "../medicinalproductpharmaceuticalwithdrawalperiod/types";

/** Generated from FHIR JSON Schema */

/** A pharmaceutical product described in terms of its composition and dose form. */
export interface MedicinalProductPharmaceuticalTargetSpecies {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

  withdrawalPeriod?: MedicinalProductPharmaceuticalWithdrawalPeriod[];
}
