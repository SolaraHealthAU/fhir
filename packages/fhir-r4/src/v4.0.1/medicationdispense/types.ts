import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Quantity,
  Annotation,
  Dosage,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MedicationDispensePerformer } from "../medicationdispenseperformer/types";
import type { MedicationDispenseSubstitution } from "../medicationdispensesubstitution/types";

/** Generated from FHIR JSON Schema */

/** Indicates that a medication product is to be or has been dispensed for a named person/patient.  This includes a description of the medication product (supply) provided and the instructions for administering the medication.  The medication dispense is the result of a pharmacy system responding to a medication order. */
export interface MedicationDispense {
  resourceType: `MedicationDispense`;
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
  /** Identifiers associated with this Medication Dispense that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server. */
  identifier?: Identifier[];
  /** The procedure that trigger the dispense. */
  partOf?: Reference[];
  /** A code specifying the state of the set of dispense events. */
  status: string;

  _status?: Element;

  statusReasonCodeableConcept?: CodeableConcept;

  statusReasonReference?: Reference;
  /** Indicates the type of medication dispense (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)). */
  category?: CodeableConcept;

  medicationCodeableConcept?: CodeableConcept;

  medicationReference?: Reference;
  /** A link to a resource representing the person or the group to whom the medication will be given. */
  subject?: Reference;
  /** The encounter or episode of care that establishes the context for this event. */
  context?: Reference;
  /** Additional information that supports the medication being dispensed. */
  supportingInformation?: Reference[];

  performer?: MedicationDispensePerformer[];
  /** The principal physical location where the dispense was performed. */
  location?: Reference;
  /** Indicates the medication order that is being dispensed against. */
  authorizingPrescription?: Reference[];
  /** Indicates the type of dispensing event that is performed. For example, Trial Fill, Completion of Trial, Partial Fill, Emergency Fill, Samples, etc. */
  type?: CodeableConcept;
  /** The amount of medication that has been dispensed. Includes unit of measure. */
  quantity?: Quantity;
  /** The amount of medication expressed as a timing amount. */
  daysSupply?: Quantity;
  /** The time when the dispensed product was packaged and reviewed. */
  whenPrepared?: string;

  _whenPrepared?: Element;
  /** The time the dispensed product was provided to the patient or their representative. */
  whenHandedOver?: string;

  _whenHandedOver?: Element;
  /** Identification of the facility/location where the medication was shipped to, as part of the dispense event. */
  destination?: Reference;
  /** Identifies the person who picked up the medication.  This will usually be a patient or their caregiver, but some cases exist where it can be a healthcare professional. */
  receiver?: Reference[];
  /** Extra information about the dispense that could not be conveyed in the other attributes. */
  note?: Annotation[];
  /** Indicates how the medication is to be used by the patient. */
  dosageInstruction?: Dosage[];

  substitution?: MedicationDispenseSubstitution;
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. drug-drug interaction, duplicate therapy, dosage alert etc. */
  detectedIssue?: Reference[];
  /** A summary of the events of interest that have occurred, such as when the dispense was verified. */
  eventHistory?: Reference[];
}
