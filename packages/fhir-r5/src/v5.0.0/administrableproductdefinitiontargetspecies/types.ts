import type { Extension, CodeableConcept } from "../core/types";
import type { AdministrableProductDefinitionWithdrawalPeriod } from "../administrableproductdefinitionwithdrawalperiod/types";

/** Generated from FHIR JSON Schema */

/** A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed). */
export interface AdministrableProductDefinitionTargetSpecies {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

  withdrawalPeriod?: AdministrableProductDefinitionWithdrawalPeriod[];
}
