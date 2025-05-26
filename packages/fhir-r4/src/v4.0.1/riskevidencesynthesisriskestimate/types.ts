import type { Extension, Element, CodeableConcept } from "../core/types";
import type { RiskEvidenceSynthesisPrecisionEstimate } from "../riskevidencesynthesisprecisionestimate/types";

/** Generated from FHIR JSON Schema */

/** The RiskEvidenceSynthesis resource describes the likelihood of an outcome in a population plus exposure state where the risk estimate is derived from a combination of research studies. */
export interface RiskEvidenceSynthesisRiskEstimate {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Human-readable summary of risk estimate. */
  description?: string;

  _description?: Element;
  /** Examples include proportion and mean. */
  type?: CodeableConcept;
  /** The point estimate of the risk estimate. */
  value?: number;

  _value?: Element;
  /** Specifies the UCUM unit for the outcome. */
  unitOfMeasure?: CodeableConcept;
  /** The sample size for the group that was measured for this risk estimate. */
  denominatorCount?: number;

  _denominatorCount?: Element;
  /** The number of group members with the outcome of interest. */
  numeratorCount?: number;

  _numeratorCount?: Element;

  precisionEstimate?: RiskEvidenceSynthesisPrecisionEstimate[];
}
