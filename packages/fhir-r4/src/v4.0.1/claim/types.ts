import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
  Money,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ClaimRelated } from "../claimrelated/types";
import type { ClaimPayee } from "../claimpayee/types";
import type { ClaimCareTeam } from "../claimcareteam/types";
import type { ClaimSupportingInfo } from "../claimsupportinginfo/types";
import type { ClaimDiagnosis } from "../claimdiagnosis/types";
import type { ClaimProcedure } from "../claimprocedure/types";
import type { ClaimInsurance } from "../claiminsurance/types";
import type { ClaimAccident } from "../claimaccident/types";
import type { ClaimItem } from "../claimitem/types";

/** Generated from FHIR JSON Schema */

/** A provider issued list of professional services and products which have been provided, or are to be provided, to a patient which is sent to an insurer for reimbursement. */
export interface Claim {
  resourceType: `Claim`;
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
  /** A unique identifier assigned to this claim. */
  identifier?: Identifier[];
  /** The status of the resource instance. */
  status: string;

  _status?: Element;
  /** The category of claim, e.g. oral, pharmacy, vision, institutional, professional. */
  type: CodeableConcept;
  /** A finer grained suite of claim type codes which may convey additional information such as Inpatient vs Outpatient and/or a specialty service. */
  subType?: CodeableConcept;
  /** A code to indicate whether the nature of the request is: to request adjudication of products and services previously rendered; or requesting authorization and adjudication for provision in the future; or requesting the non-binding adjudication of the listed products and services which could be provided in the future. */
  use: "claim" | "preauthorization" | "predetermination";

  _use?: Element;
  /** The party to whom the professional services and/or products have been supplied or are being considered and for whom actual or forecast reimbursement is sought. */
  patient: Reference;
  /** The period for which charges are being submitted. */
  billablePeriod?: Period;
  /** The date this resource was created. */
  created: string;

  _created?: Element;
  /** Individual who created the claim, predetermination or preauthorization. */
  enterer?: Reference;
  /** The Insurer who is target of the request. */
  insurer?: Reference;
  /** The provider which is responsible for the claim, predetermination or preauthorization. */
  provider: Reference;
  /** The provider-required urgency of processing the request. Typical values include: stat, routine deferred. */
  priority: CodeableConcept;
  /** A code to indicate whether and for whom funds are to be reserved for future claims. */
  fundsReserve?: CodeableConcept;

  related?: ClaimRelated[];
  /** Prescription to support the dispensing of pharmacy, device or vision products. */
  prescription?: Reference;
  /** Original prescription which has been superseded by this prescription to support the dispensing of pharmacy services, medications or products. */
  originalPrescription?: Reference;

  payee?: ClaimPayee;
  /** A reference to a referral resource. */
  referral?: Reference;
  /** Facility where the services were provided. */
  facility?: Reference;

  careTeam?: ClaimCareTeam[];

  supportingInfo?: ClaimSupportingInfo[];

  diagnosis?: ClaimDiagnosis[];

  procedure?: ClaimProcedure[];

  insurance: ClaimInsurance[];

  accident?: ClaimAccident;

  item?: ClaimItem[];
  /** The total value of the all the items in the claim. */
  total?: Money;
}
