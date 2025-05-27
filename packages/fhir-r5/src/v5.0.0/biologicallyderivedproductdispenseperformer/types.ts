import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource reflects an instance of a biologically derived product dispense. The supply or dispense of a biologically derived product from the supply organization or department (e.g. hospital transfusion laboratory) to the clinical team responsible for clinical application. */
export interface BiologicallyDerivedProductDispensePerformer {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  function?: CodeableConcept;

  actor: Reference;
}
