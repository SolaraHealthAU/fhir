import type { Extension, CodeableConcept } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A medically related item or items, in a container or package. */
export interface PackagedProductDefinitionLegalStatusOfSupply {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: CodeableConcept;

  jurisdiction?: CodeableConcept;
}
