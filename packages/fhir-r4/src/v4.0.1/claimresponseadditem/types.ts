import type {
  Extension,
  Element,
  Reference,
  CodeableConcept,
  Period,
  Address,
  Quantity,
  Money,
} from "../core/types";
import type { ClaimResponseAdjudication } from "../claimresponseadjudication/types";
import type { ClaimResponseDetail1 } from "../claimresponsedetail1/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponseAddItem {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Claim items which this service line is intended to replace. */
  itemSequence?: number[];

  _itemSequence?: Element[];
  /** The sequence number of the details within the claim item which this line is intended to replace. */
  detailSequence?: number[];

  _detailSequence?: Element[];
  /** The sequence number of the sub-details within the details within the claim item which this line is intended to replace. */
  subdetailSequence?: number[];

  _subdetailSequence?: Element[];
  /** The providers who are authorized for the services rendered to the patient. */
  provider?: Reference[];
  /** When the value is a group code then this item collects a set of related claim details, otherwise this contains the product, service, drug or other billing code for the item. */
  productOrService: CodeableConcept;
  /** Item typification or modifiers codes to convey additional context for the product or service. */
  modifier?: CodeableConcept[];
  /** Identifies the program under which this may be recovered. */
  programCode?: CodeableConcept[];

  servicedDate?: string;

  _servicedDate?: Element;

  servicedPeriod?: Period;

  locationCodeableConcept?: CodeableConcept;

  locationAddress?: Address;

  locationReference?: Reference;
  /** The number of repetitions of a service or product. */
  quantity?: Quantity;
  /** If the item is not a group then this is the fee for the product or service, otherwise this is the total of the fees for the details of the group. */
  unitPrice?: Money;
  /** A real number that represents a multiplier used in determining the overall value of services delivered and/or goods received. The concept of a Factor allows for a discount or surcharge multiplier to be applied to a monetary amount. */
  factor?: number;

  _factor?: Element;
  /** The quantity times the unit price for an additional service or product or charge. */
  net?: Money;
  /** Physical service site on the patient (limb, tooth, etc.). */
  bodySite?: CodeableConcept;
  /** A region or surface of the bodySite, e.g. limb region or tooth surface(s). */
  subSite?: CodeableConcept[];
  /** The numbers associated with notes below which apply to the adjudication of this item. */
  noteNumber?: number[];

  _noteNumber?: Element[];

  adjudication: ClaimResponseAdjudication[];

  detail?: ClaimResponseDetail1[];
}
