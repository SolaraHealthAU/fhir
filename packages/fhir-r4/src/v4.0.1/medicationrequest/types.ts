import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Annotation,
  Dosage,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MedicationRequestDispenseRequest } from "../medicationrequestdispenserequest/types";
import type { MedicationRequestSubstitution } from "../medicationrequestsubstitution/types";

/** Generated from FHIR JSON Schema */

/** An order or request for both supply of the medication and the instructions for administration of the medication to a patient. The resource is called "MedicationRequest" rather than "MedicationPrescription" or "MedicationOrder" to generalize the use across inpatient and outpatient settings, including care plans, etc., and to harmonize with workflow patterns. */
export interface MedicationRequest {
  resourceType: `MedicationRequest`;
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
  /** Identifiers associated with this medication request that are defined by business processes and/or used to refer to it when a direct URL reference to the resource itself is not appropriate. They are business identifiers assigned to this resource by the performer or other systems and remain constant as the resource is updated and propagates from server to server. */
  identifier?: Identifier[];
  /** A code specifying the current state of the order.  Generally, this will be active or completed state. */
  status: string;

  _status?: Element;
  /** Captures the reason for the current state of the MedicationRequest. */
  statusReason?: CodeableConcept;
  /** Whether the request is a proposal, plan, or an original order. */
  intent: string;

  _intent?: Element;
  /** Indicates the type of medication request (for example, where the medication is expected to be consumed or administered (i.e. inpatient or outpatient)). */
  category?: CodeableConcept[];
  /** Indicates how quickly the Medication Request should be addressed with respect to other requests. */
  priority?: string;

  _priority?: Element;
  /** If true indicates that the provider is asking for the medication request not to occur. */
  doNotPerform?: boolean;

  _doNotPerform?: Element;

  reportedBoolean?: boolean;

  _reportedBoolean?: Element;

  reportedReference?: Reference;

  medicationCodeableConcept?: CodeableConcept;

  medicationReference?: Reference;
  /** A link to a resource representing the person or set of individuals to whom the medication will be given. */
  subject: Reference;
  /** The Encounter during which this [x] was created or to which the creation of this record is tightly associated. */
  encounter?: Reference;
  /** Include additional information (for example, patient height and weight) that supports the ordering of the medication. */
  supportingInformation?: Reference[];
  /** The date (and perhaps time) when the prescription was initially written or authored on. */
  authoredOn?: string;

  _authoredOn?: Element;
  /** The individual, organization, or device that initiated the request and has responsibility for its activation. */
  requester?: Reference;
  /** The specified desired performer of the medication treatment (e.g. the performer of the medication administration). */
  performer?: Reference;
  /** Indicates the type of performer of the administration of the medication. */
  performerType?: CodeableConcept;
  /** The person who entered the order on behalf of another individual for example in the case of a verbal or a telephone order. */
  recorder?: Reference;
  /** The reason or the indication for ordering or not ordering the medication. */
  reasonCode?: CodeableConcept[];
  /** Condition or observation that supports why the medication was ordered. */
  reasonReference?: Reference[];
  /** The URL pointing to a protocol, guideline, orderset, or other definition that is adhered to in whole or in part by this MedicationRequest. */
  instantiatesCanonical?: string[];

  _instantiatesCanonical?: Element[];
  /** The URL pointing to an externally maintained protocol, guideline, orderset or other definition that is adhered to in whole or in part by this MedicationRequest. */
  instantiatesUri?: string[];

  _instantiatesUri?: Element[];
  /** A plan or request that is fulfilled in whole or in part by this medication request. */
  basedOn?: Reference[];
  /** A shared identifier common to all requests that were authorized more or less simultaneously by a single author, representing the identifier of the requisition or prescription. */
  groupIdentifier?: Identifier;
  /** The description of the overall patte3rn of the administration of the medication to the patient. */
  courseOfTherapyType?: CodeableConcept;
  /** Insurance plans, coverage extensions, pre-authorizations and/or pre-determinations that may be required for delivering the requested service. */
  insurance?: Reference[];
  /** Extra information about the prescription that could not be conveyed by the other attributes. */
  note?: Annotation[];
  /** Indicates how the medication is to be used by the patient. */
  dosageInstruction?: Dosage[];

  dispenseRequest?: MedicationRequestDispenseRequest;

  substitution?: MedicationRequestSubstitution;
  /** A link to a resource representing an earlier order related order or prescription. */
  priorPrescription?: Reference;
  /** Indicates an actual or potential clinical issue with or between one or more active or proposed clinical actions for a patient; e.g. Drug-drug interaction, duplicate therapy, dosage alert etc. */
  detectedIssue?: Reference[];
  /** Links to Provenance records for past versions of this resource or fulfilling request or event resources that identify key state transitions or updates that are likely to be relevant to a user looking at the current version of the resource. */
  eventHistory?: Reference[];
}
