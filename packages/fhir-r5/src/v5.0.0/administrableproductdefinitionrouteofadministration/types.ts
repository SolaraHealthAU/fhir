import type {
  Extension,
  CodeableConcept,
  Quantity,
  Ratio,
  Duration,
} from "../core/types";
import type { AdministrableProductDefinitionTargetSpecies } from "../administrableproductdefinitiontargetspecies/types";

/** Generated from FHIR JSON Schema */

/** A medicinal product in the final form which is suitable for administering to a patient (after any mixing of multiple components, dissolution etc. has been performed). */
export interface AdministrableProductDefinitionRouteOfAdministration {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

  firstDose?: Quantity;

  maxSingleDose?: Quantity;

  maxDosePerDay?: Quantity;

  maxDosePerTreatmentPeriod?: Ratio;

  maxTreatmentPeriod?: Duration;

  targetSpecies?: AdministrableProductDefinitionTargetSpecies[];
}
