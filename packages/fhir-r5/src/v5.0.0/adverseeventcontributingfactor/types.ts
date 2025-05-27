import type { Extension, Reference, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** An event (i.e. any change to current patient status) that may be related to unintended effects on a patient or research participant. The unintended effects may require additional monitoring, treatment, hospitalization, or may result in death. The AdverseEvent resource also extends to potential or avoided events that could have had such effects. There are two major domains where the AdverseEvent resource is expected to be used. One is in clinical care reported adverse events and the other is in reporting adverse events in clinical  research trial management. Adverse events can be reported by healthcare providers, patients, caregivers or by medical products manufacturers. Given the differences between these two concepts, we recommend consulting the domain specific implementation guides when implementing the AdverseEvent Resource. The implementation guides include specific extensions, value sets and constraints. */
export interface AdverseEventContributingFactor {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  itemReference?: Reference;

  itemCodeableConcept?: CodeableConcept;
}
