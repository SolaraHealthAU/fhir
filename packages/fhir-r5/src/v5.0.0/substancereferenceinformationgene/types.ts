import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Todo. */
export interface SubstanceReferenceInformationGene {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  geneSequenceOrigin?: CodeableConcept;

  gene?: CodeableConcept;

  source?: Reference[];
}
