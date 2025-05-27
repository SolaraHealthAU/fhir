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
import type { ClaimEvent } from "../claimevent/types";
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

  billablePeriod?: Period;

  created?: string;

  _created?: Element;

  enterer?: Reference;

  insurer?: Reference;

  provider?: Reference;

  priority?: CodeableConcept;

  fundsReserve?: CodeableConcept;

  related?: ClaimRelated[];

  prescription?: Reference;

  originalPrescription?: Reference;

  payee?: ClaimPayee;

  referral?: Reference;

  encounter?: Reference[];

  facility?: Reference;

  diagnosisRelatedGroup?: CodeableConcept;

  event?: ClaimEvent[];

  careTeam?: ClaimCareTeam[];

  supportingInfo?: ClaimSupportingInfo[];

  diagnosis?: ClaimDiagnosis[];

  procedure?: ClaimProcedure[];

  insurance?: ClaimInsurance[];

  accident?: ClaimAccident;

  patientPaid?: Money;

  item?: ClaimItem[];

  total?: Money;
}
