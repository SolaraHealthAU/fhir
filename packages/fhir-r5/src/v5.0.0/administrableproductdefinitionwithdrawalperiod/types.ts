import type {
  Extension,
  CodeableConcept,
  Quantity,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed). */
export interface AdministrableProductDefinitionWithdrawalPeriod {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  tissue: CodeableConcept;

  value: Quantity;

  supportingInformation?: string;

  _supportingInformation?: Element;
}
