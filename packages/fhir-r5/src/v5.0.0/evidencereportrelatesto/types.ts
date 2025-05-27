import type { Extension, Element } from "../core/types";
import type { EvidenceReportTarget } from "../evidencereporttarget/types";

/** Generated from FHIR JSON Schema */

/** The EvidenceReport Resource is a specialized container for a collection of resources and codeable concepts, adapted to support compositions of Evidence, EvidenceVariable, and Citation resources and related concepts. */
export interface EvidenceReportRelatesTo {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  target: EvidenceReportTarget;
}
