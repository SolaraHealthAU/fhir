import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  CodeableReference,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { GenomicStudyAnalysis } from "../genomicstudyanalysis/types";

/** Generated from FHIR JSON Schema */

/** A GenomicStudy is a set of analyses performed to analyze and generate genomic data. */
export interface GenomicStudy {
  resourceType: `GenomicStudy`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  status?: string;

  _status?: Element;

  type?: CodeableConcept[];

  subject: Reference;

  encounter?: Reference;

  startDate?: string;

  _startDate?: Element;

  basedOn?: Reference[];

  referrer?: Reference;

  interpreter?: Reference[];

  reason?: CodeableReference[];

  instantiatesCanonical?: string;

  instantiatesUri?: string;

  _instantiatesUri?: Element;

  note?: Annotation[];

  description?: string;

  _description?: Element;

  analysis?: GenomicStudyAnalysis[];
}
