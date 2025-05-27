import type {
  Extension,
  Identifier,
  CodeableConcept,
  Element,
  Reference,
  Annotation,
} from "../core/types";
import type { GenomicStudyInput } from "../genomicstudyinput/types";
import type { GenomicStudyOutput } from "../genomicstudyoutput/types";
import type { GenomicStudyPerformer } from "../genomicstudyperformer/types";
import type { GenomicStudyDevice } from "../genomicstudydevice/types";

/** Generated from FHIR JSON Schema */

/** A GenomicStudy is a set of analyses performed to analyze and generate genomic data. */
export interface GenomicStudyAnalysis {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  methodType?: CodeableConcept[];

  changeType?: CodeableConcept[];

  genomeBuild?: CodeableConcept;

  instantiatesCanonical?: string;

  instantiatesUri?: string;

  _instantiatesUri?: Element;

  title?: string;

  _title?: Element;

  focus?: Reference[];

  specimen?: Reference[];

  date?: string;

  _date?: Element;

  note?: Annotation[];

  protocolPerformed?: Reference;

  regionsStudied?: Reference[];

  regionsCalled?: Reference[];

  input?: GenomicStudyInput[];

  output?: GenomicStudyOutput[];

  performer?: GenomicStudyPerformer[];

  device?: GenomicStudyDevice[];
}
