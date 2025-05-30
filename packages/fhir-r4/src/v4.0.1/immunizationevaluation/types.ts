import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** Describes a comparison of an immunization event against published recommendations to determine if the administration is "valid" in relation to those  recommendations. */
export interface ImmunizationEvaluation {
  resourceType: `ImmunizationEvaluation`;
  /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
  id?: string;
  /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  meta?: Meta;
  /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
  implicitRules?: string;

  _implicitRules?: Element;
  /** The base language in which the resource is written. */
  language?: string;

  _language?: Element;
  /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
  text?: Narrative;
  /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
  contained?: ResourceList[];
  /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** A unique identifier assigned to this immunization evaluation record. */
  identifier?: Identifier[];
  /** Indicates the current status of the evaluation of the vaccination administration event. */
  status: string;

  _status?: Element;
  /** The individual for whom the evaluation is being done. */
  patient: Reference;
  /** The date the evaluation of the vaccine administration event was performed. */
  date?: string;

  _date?: Element;
  /** Indicates the authority who published the protocol (e.g. ACIP). */
  authority?: Reference;
  /** The vaccine preventable disease the dose is being evaluated against. */
  targetDisease: CodeableConcept;
  /** The vaccine administration event being evaluated. */
  immunizationEvent: Reference;
  /** Indicates if the dose is valid or not valid with respect to the published recommendations. */
  doseStatus: CodeableConcept;
  /** Provides an explanation as to why the vaccine administration event is valid or not relative to the published recommendations. */
  doseStatusReason?: CodeableConcept[];
  /** Additional information about the evaluation. */
  description?: string;

  _description?: Element;
  /** One possible path to achieve presumed immunity against a disease - within the context of an authority. */
  series?: string;

  _series?: Element;

  doseNumberPositiveInt?: number;

  _doseNumberPositiveInt?: Element;

  doseNumberString?: string;

  _doseNumberString?: Element;

  seriesDosesPositiveInt?: number;

  _seriesDosesPositiveInt?: Element;

  seriesDosesString?: string;

  _seriesDosesString?: Element;
}
