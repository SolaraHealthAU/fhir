import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Period,
  Annotation,
  Dosage,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. 

The primary difference between a medication statement and a medication administration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medication statement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the medication statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information. */
export interface MedicationStatement {
  resourceType: `MedicationStatement`;
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
  /** Identifiers associated with this Medication Statement that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server. */
  identifier?: Identifier[];
  /** A plan, proposal or order that is fulfilled in whole or in part by this event. */
  basedOn?: Reference[];
  /** A larger event of which this particular event is a component or step. */
  partOf?: Reference[];
  /** A code representing the patient or other source's judgment about the state of the medication used that this statement is about.  Generally, this will be active or completed. */
  status: string;

  _status?: Element;
  /** Captures the reason for the current state of the MedicationStatement. */
  statusReason?: CodeableConcept[];
  /** Indicates where the medication is expected to be consumed or administered. */
  category?: CodeableConcept;

  medicationCodeableConcept?: CodeableConcept;

  medicationReference?: Reference;
  /** The person, animal or group who is/was taking the medication. */
  subject: Reference;
  /** The encounter or episode of care that establishes the context for this MedicationStatement. */
  context?: Reference;

  effectiveDateTime?: string;

  _effectiveDateTime?: Element;

  effectivePeriod?: Period;
  /** The date when the medication statement was asserted by the information source. */
  dateAsserted?: string;

  _dateAsserted?: Element;
  /** The person or organization that provided the information about the taking of this medication. Note: Use derivedFrom when a MedicationStatement is derived from other resources, e.g. Claim or MedicationRequest. */
  informationSource?: Reference;
  /** Allows linking the MedicationStatement to the underlying MedicationRequest, or to other information that supports or is used to derive the MedicationStatement. */
  derivedFrom?: Reference[];
  /** A reason for why the medication is being/was taken. */
  reasonCode?: CodeableConcept[];
  /** Condition or observation that supports why the medication is being/was taken. */
  reasonReference?: Reference[];
  /** Provides extra information about the medication statement that is not conveyed by the other attributes. */
  note?: Annotation[];
  /** Indicates how the medication is/was or should be taken by the patient. */
  dosage?: Dosage[];
}
