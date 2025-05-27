import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
  Attachment,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ClaimResponseEvent } from "../claimresponseevent/types";
import type { ClaimResponseItem } from "../claimresponseitem/types";
import type { ClaimResponseAddItem } from "../claimresponseadditem/types";
import type { ClaimResponseAdjudication } from "../claimresponseadjudication/types";
import type { ClaimResponseTotal } from "../claimresponsetotal/types";
import type { ClaimResponsePayment } from "../claimresponsepayment/types";
import type { ClaimResponseProcessNote } from "../claimresponseprocessnote/types";
import type { ClaimResponseInsurance } from "../claimresponseinsurance/types";
import type { ClaimResponseError } from "../claimresponseerror/types";

/** Generated from FHIR JSON Schema */

/** This resource provides the adjudication details from the processing of a Claim resource. */
export interface ClaimResponse {
  resourceType: `ClaimResponse`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  traceNumber?: Identifier[];

  status?: string;

  _status?: Element;

  type: CodeableConcept;

  subType?: CodeableConcept;

  use?: string;

  _use?: Element;

  patient: Reference;

  created?: string;

  _created?: Element;

  insurer?: Reference;

  requestor?: Reference;

  request?: Reference;

  outcome?: string;

  _outcome?: Element;

  decision?: CodeableConcept;

  disposition?: string;

  _disposition?: Element;

  preAuthRef?: string;

  _preAuthRef?: Element;

  preAuthPeriod?: Period;

  event?: ClaimResponseEvent[];

  payeeType?: CodeableConcept;

  encounter?: Reference[];

  diagnosisRelatedGroup?: CodeableConcept;

  item?: ClaimResponseItem[];

  addItem?: ClaimResponseAddItem[];

  adjudication?: ClaimResponseAdjudication[];

  total?: ClaimResponseTotal[];

  payment?: ClaimResponsePayment;

  fundsReserve?: CodeableConcept;

  formCode?: CodeableConcept;

  form?: Attachment;

  processNote?: ClaimResponseProcessNote[];

  communicationRequest?: Reference[];

  insurance?: ClaimResponseInsurance[];

  error?: ClaimResponseError[];
}
