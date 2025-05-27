import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";

/** Generated from FHIR JSON Schema */

/** A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.). */
export interface CompositionSection {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  title?: string;

  _title?: Element;

  code?: CodeableConcept;

  author?: Reference[];

  focus?: Reference;

  text?: Narrative;

  orderedBy?: CodeableConcept;

  entry?: Reference[];

  emptyReason?: CodeableConcept;

  section?: CompositionSection[];
}
