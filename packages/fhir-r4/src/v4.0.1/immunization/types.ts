import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Quantity,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ImmunizationPerformer } from "../immunizationperformer/types";
import type { ImmunizationEducation } from "../immunizationeducation/types";
import type { ImmunizationReaction } from "../immunizationreaction/types";
import type { ImmunizationProtocolApplied } from "../immunizationprotocolapplied/types";

/** Generated from FHIR JSON Schema */

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface Immunization {
  resourceType: `Immunization`;
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
  /** A unique identifier assigned to this immunization record. */
  identifier?: Identifier[];
  /** Indicates the current status of the immunization event. */
  status: string;

  _status?: Element;
  /** Indicates the reason the immunization event was not performed. */
  statusReason?: CodeableConcept;
  /** Vaccine that was administered or was to be administered. */
  vaccineCode: CodeableConcept;
  /** The patient who either received or did not receive the immunization. */
  patient: Reference;
  /** The visit or admission or other contact between patient and health care provider the immunization was performed as part of. */
  encounter?: Reference;

  occurrenceDateTime?: string;

  _occurrenceDateTime?: Element;

  occurrenceString?: string;

  _occurrenceString?: Element;
  /** The date the occurrence of the immunization was first captured in the record - potentially significantly after the occurrence of the event. */
  recorded?: string;

  _recorded?: Element;
  /** An indication that the content of the record is based on information from the person who administered the vaccine. This reflects the context under which the data was originally recorded. */
  primarySource?: boolean;

  _primarySource?: Element;
  /** The source of the data when the report of the immunization event is not based on information from the person who administered the vaccine. */
  reportOrigin?: CodeableConcept;
  /** The service delivery location where the vaccine administration occurred. */
  location?: Reference;
  /** Name of vaccine manufacturer. */
  manufacturer?: Reference;
  /** Lot number of the  vaccine product. */
  lotNumber?: string;

  _lotNumber?: Element;
  /** Date vaccine batch expires. */
  expirationDate?: string;

  _expirationDate?: Element;
  /** Body site where vaccine was administered. */
  site?: CodeableConcept;
  /** The path by which the vaccine product is taken into the body. */
  route?: CodeableConcept;
  /** The quantity of vaccine product that was administered. */
  doseQuantity?: Quantity;

  performer?: ImmunizationPerformer[];
  /** Extra information about the immunization that is not conveyed by the other attributes. */
  note?: Annotation[];
  /** Reasons why the vaccine was administered. */
  reasonCode?: CodeableConcept[];
  /** Condition, Observation or DiagnosticReport that supports why the immunization was administered. */
  reasonReference?: Reference[];
  /** Indication if a dose is considered to be subpotent. By default, a dose should be considered to be potent. */
  isSubpotent?: boolean;

  _isSubpotent?: Element;
  /** Reason why a dose is considered to be subpotent. */
  subpotentReason?: CodeableConcept[];

  education?: ImmunizationEducation[];
  /** Indicates a patient's eligibility for a funding program. */
  programEligibility?: CodeableConcept[];
  /** Indicates the source of the vaccine actually administered. This may be different than the patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine but due to inventory issues, vaccine purchased with private funds was actually administered). */
  fundingSource?: CodeableConcept;

  reaction?: ImmunizationReaction[];

  protocolApplied?: ImmunizationProtocolApplied[];
}
