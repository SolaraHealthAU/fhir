import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
  Quantity,
  Money,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */

export interface Coverage<Contained = ResourceList> {
  resourceType: `Coverage`;
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
  contained?: Contained[];
  /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** A unique identifier assigned to this coverage. */
  identifier?: Identifier[];
  /** The status of the resource instance. */
  status: string;

  _status?: Element;
  /** The type of coverage: social program, medical plan, accident coverage (workers compensation, auto), group health or payment by an individual or organization. */
  type?: CodeableConcept;
  /** The party who 'owns' the insurance policy. */
  policyHolder?: Reference;
  /** The party who has signed-up for or 'owns' the contractual relationship to the policy or to whom the benefit of the policy for services rendered to them or their family is due. */
  subscriber?: Reference;
  /** The insurer assigned ID for the Subscriber. */
  subscriberId?: string;

  _subscriberId?: Element;
  /** The party who benefits from the insurance coverage; the patient when products and/or services are provided. */
  beneficiary: Reference;
  /** A unique identifier for a dependent under the coverage. */
  dependent?: string;

  _dependent?: Element;
  /** The relationship of beneficiary (patient) to the subscriber. */
  relationship?: CodeableConcept;
  /** Time period during which the coverage is in force. A missing start date indicates the start date isn't known, a missing end date means the coverage is continuing to be in force. */
  period?: Period;
  /** The program or plan underwriter or payor including both insurance and non-insurance agreements, such as patient-pay agreements. */
  payor: Reference[];

  class?: CoverageClass[];
  /** The order of applicability of this coverage relative to other coverages which are currently in force. Note, there may be gaps in the numbering and this does not imply primary, secondary etc. as the specific positioning of coverages depends upon the episode of care. */
  order?: number;

  _order?: Element;
  /** The insurer-specific identifier for the insurer-defined network of providers to which the beneficiary may seek treatment which will be covered at the 'in-network' rate, otherwise 'out of network' terms and conditions apply. */
  network?: string;

  _network?: Element;

  costToBeneficiary?: CoverageCostToBeneficiary[];
  /** When 'subrogation=true' this insurance instance has been included not for adjudication but to provide insurers with the details to recover costs. */
  subrogation?: boolean;

  _subrogation?: Element;
  /** The policy(s) which constitute this insurance coverage. */
  contract?: Reference[];
}

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */

export interface CoverageClass {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** The type of classification for which an insurer-specific class label or number and optional name is provided, for example may be used to identify a class of coverage or employer group, Policy, Plan. */
  type: CodeableConcept;
  /** The alphanumeric string value associated with the insurer issued label. */
  value: string;

  _value?: Element;
  /** A short description for the class. */
  name?: string;

  _name?: Element;
}

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */

export interface CoverageCostToBeneficiary {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** The category of patient centric costs associated with treatment. */
  type?: CodeableConcept;

  valueQuantity?: Quantity;

  valueMoney?: Money;

  exception?: CoverageException[];
}

/** Financial instrument which may be used to reimburse or pay for health care products and services. Includes both insurance and self-payment. */

export interface CoverageException {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  period?: Period;
}

/** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */

export interface CoverageEligibilityRequest<Contained = ResourceList> {
  resourceType: `CoverageEligibilityRequest`;
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
  contained?: Contained[];
  /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** A unique identifier assigned to this coverage eligiblity request. */
  identifier?: Identifier[];
  /** The status of the resource instance. */
  status: string;

  _status?: Element;
  /** When the requestor expects the processor to complete processing. */
  priority?: CodeableConcept;
  /** Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified. */
  purpose: ("auth-requirements" | "benefits" | "discovery" | "validation")[];

  _purpose?: Element[];
  /** The party who is the beneficiary of the supplied coverage and for whom eligibility is sought. */
  patient: Reference;

  servicedDate?: string;

  _servicedDate?: Element;

  servicedPeriod?: Period;
  /** The date when this resource was created. */
  created: string;

  _created?: Element;
  /** Person who created the request. */
  enterer?: Reference;
  /** The provider which is responsible for the request. */
  provider?: Reference;
  /** The Insurer who issued the coverage in question and is the recipient of the request. */
  insurer: Reference;
  /** Facility where the services are intended to be provided. */
  facility?: Reference;

  supportingInfo?: CoverageEligibilityRequestSupportingInfo[];

  insurance?: CoverageEligibilityRequestInsurance[];

  item?: CoverageEligibilityRequestItem[];
}

/** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */

export interface CoverageEligibilityRequestSupportingInfo {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** A number to uniquely identify supporting information entries. */
  sequence: number;

  _sequence?: Element;
  /** Additional data or information such as resources, documents, images etc. including references to the data or the actual inclusion of the data. */
  information: Reference;
  /** The supporting materials are applicable for all detail items, product/servce categories and specific billing codes. */
  appliesToAll?: boolean;

  _appliesToAll?: Element;
}

/** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */

export interface CoverageEligibilityRequestInsurance {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** A flag to indicate that this Coverage is to be used for evaluation of this request when set to true. */
  focal?: boolean;

  _focal?: Element;
  /** Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system. */
  coverage: Reference;
  /** A business agreement number established between the provider and the insurer for special business processing purposes. */
  businessArrangement?: string;

  _businessArrangement?: Element;
}

/** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */

export interface CoverageEligibilityRequestItem {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Exceptions, special conditions and supporting information applicable for this service or product line. */
  supportingInfoSequence?: number[];

  _supportingInfoSequence?: Element[];
  /** Code to identify the general type of benefits under which products and services are provided. */
  category?: CodeableConcept;
  /** This contains the product, service, drug or other billing code for the item. */
  productOrService?: CodeableConcept;
  /** Item typification or modifiers codes to convey additional context for the product or service. */
  modifier?: CodeableConcept[];
  /** The practitioner who is responsible for the product or service to be rendered to the patient. */
  provider?: Reference;
  /** The number of repetitions of a service or product. */
  quantity?: Quantity;
  /** The amount charged to the patient by the provider for a single unit. */
  unitPrice?: Money;
  /** Facility where the services will be provided. */
  facility?: Reference;

  diagnosis?: CoverageEligibilityRequestDiagnosis[];
  /** The plan/proposal/order describing the proposed service in detail. */
  detail?: Reference[];
}

/** The CoverageEligibilityRequest provides patient and insurance coverage information to an insurer for them to respond, in the form of an CoverageEligibilityResponse, with information regarding whether the stated coverage is valid and in-force and optionally to provide the insurance details of the policy. */

export interface CoverageEligibilityRequestDiagnosis {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  diagnosisCodeableConcept?: CodeableConcept;

  diagnosisReference?: Reference;
}

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */

export interface CoverageEligibilityResponse<Contained = ResourceList> {
  resourceType: `CoverageEligibilityResponse`;
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
  contained?: Contained[];
  /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** A unique identifier assigned to this coverage eligiblity request. */
  identifier?: Identifier[];
  /** The status of the resource instance. */
  status: string;

  _status?: Element;
  /** Code to specify whether requesting: prior authorization requirements for some service categories or billing codes; benefits for coverages specified or discovered; discovery and return of coverages for the patient; and/or validation that the specified coverage is in-force at the date/period specified or 'now' if not specified. */
  purpose: ("auth-requirements" | "benefits" | "discovery" | "validation")[];

  _purpose?: Element[];
  /** The party who is the beneficiary of the supplied coverage and for whom eligibility is sought. */
  patient: Reference;

  servicedDate?: string;

  _servicedDate?: Element;

  servicedPeriod?: Period;
  /** The date this resource was created. */
  created: string;

  _created?: Element;
  /** The provider which is responsible for the request. */
  requestor?: Reference;
  /** Reference to the original request resource. */
  request: Reference;
  /** The outcome of the request processing. */
  outcome: "queued" | "complete" | "error" | "partial";

  _outcome?: Element;
  /** A human readable description of the status of the adjudication. */
  disposition?: string;

  _disposition?: Element;
  /** The Insurer who issued the coverage in question and is the author of the response. */
  insurer: Reference;

  insurance?: CoverageEligibilityResponseInsurance[];
  /** A reference from the Insurer to which these services pertain to be used on further communication and as proof that the request occurred. */
  preAuthRef?: string;

  _preAuthRef?: Element;
  /** A code for the form to be used for printing the content. */
  form?: CodeableConcept;

  error?: CoverageEligibilityResponseError[];
}

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */

export interface CoverageEligibilityResponseInsurance {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Reference to the insurance card level information contained in the Coverage resource. The coverage issuing insurer will use these details to locate the patient's actual coverage within the insurer's information system. */
  coverage: Reference;
  /** Flag indicating if the coverage provided is inforce currently if no service date(s) specified or for the whole duration of the service dates. */
  inforce?: boolean;

  _inforce?: Element;
  /** The term of the benefits documented in this response. */
  benefitPeriod?: Period;

  item?: CoverageEligibilityResponseItem[];
}

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */

export interface CoverageEligibilityResponseItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  category?: CodeableConcept;

  productOrService?: CodeableConcept;

  modifier?: CodeableConcept[];

  provider?: Reference;

  excluded?: boolean;

  _excluded?: Element;

  name?: string;

  _name?: Element;

  description?: string;

  _description?: Element;

  network?: CodeableConcept;

  unit?: CodeableConcept;

  term?: CodeableConcept;

  benefit?: CoverageEligibilityResponseBenefit[];

  authorizationRequired?: boolean;

  _authorizationRequired?: Element;

  authorizationSupporting?: CodeableConcept[];

  authorizationUrl?: string;

  _authorizationUrl?: Element;
}

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */

export interface CoverageEligibilityResponseBenefit {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  allowedUnsignedInt?: number;

  _allowedUnsignedInt?: Element;

  allowedString?: string;

  _allowedString?: Element;

  allowedMoney?: Money;

  usedUnsignedInt?: number;

  _usedUnsignedInt?: Element;

  usedString?: string;

  _usedString?: Element;

  usedMoney?: Money;
}

/** This resource provides eligibility and plan details from the processing of an CoverageEligibilityRequest resource. */

export interface CoverageEligibilityResponseError {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** An error code,from a specified code system, which details why the eligibility check could not be performed. */
  code: CodeableConcept;
}
