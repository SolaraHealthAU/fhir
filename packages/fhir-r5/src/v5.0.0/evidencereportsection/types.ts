import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
  Quantity,
} from "../core/types";
import type { Narrative } from "../narrative/types";

/** Generated from FHIR JSON Schema */

/** The EvidenceReport Resource is a specialized container for a collection of resources and codeable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts. */
export interface EvidenceReportSection {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  title?: string;

  _title?: Element;

  focus?: CodeableConcept;

  focusReference?: Reference;

  author?: Reference[];

  text?: Narrative;

  mode?: string;

  _mode?: Element;

  orderedBy?: CodeableConcept;

  entryClassifier?: CodeableConcept[];

  entryReference?: Reference[];

  entryQuantity?: Quantity[];

  emptyReason?: CodeableConcept;

  section?: EvidenceReportSection[];
}
