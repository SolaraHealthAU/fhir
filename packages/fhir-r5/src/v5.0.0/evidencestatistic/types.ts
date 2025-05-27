import type {
  Extension,
  Element,
  Annotation,
  CodeableConcept,
  Quantity,
} from "../core/types";
import type { EvidenceSampleSize } from "../evidencesamplesize/types";
import type { EvidenceAttributeEstimate } from "../evidenceattributeestimate/types";
import type { EvidenceModelCharacteristic } from "../evidencemodelcharacteristic/types";

/** Generated from FHIR JSON Schema */

/** The Evidence Resource provides a machine-interpretable expression of an evidence concept including the evidence variables (e.g., population, exposures/interventions, comparators, outcomes, measured variables, confounding variables), the statistics, and the certainty of this evidence. */
export interface EvidenceStatistic {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  description?: string;

  _description?: Element;

  note?: Annotation[];

  statisticType?: CodeableConcept;

  category?: CodeableConcept;

  quantity?: Quantity;

  numberOfEvents?: number;

  _numberOfEvents?: Element;

  numberAffected?: number;

  _numberAffected?: Element;

  sampleSize?: EvidenceSampleSize;

  attributeEstimate?: EvidenceAttributeEstimate[];

  modelCharacteristic?: EvidenceModelCharacteristic[];
}
