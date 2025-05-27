import type { Extension, Annotation } from "../core/types";
import type { EvidenceReportCharacteristic } from "../evidencereportcharacteristic/types";

/** Generated from FHIR JSON Schema */

/** The EvidenceReport Resource is a specialized container for a collection of resources and codeable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts. */
export interface EvidenceReportSubject {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  characteristic?: EvidenceReportCharacteristic[];

  note?: Annotation[];
}
