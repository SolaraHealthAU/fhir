import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
  Money,
  Attachment,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ExplanationOfBenefitRelated } from "../explanationofbenefitrelated/types";
import type { ExplanationOfBenefitEvent } from "../explanationofbenefitevent/types";
import type { ExplanationOfBenefitPayee } from "../explanationofbenefitpayee/types";
import type { ExplanationOfBenefitCareTeam } from "../explanationofbenefitcareteam/types";
import type { ExplanationOfBenefitSupportingInfo } from "../explanationofbenefitsupportinginfo/types";
import type { ExplanationOfBenefitDiagnosis } from "../explanationofbenefitdiagnosis/types";
import type { ExplanationOfBenefitProcedure } from "../explanationofbenefitprocedure/types";
import type { ExplanationOfBenefitInsurance } from "../explanationofbenefitinsurance/types";
import type { ExplanationOfBenefitAccident } from "../explanationofbenefitaccident/types";
import type { ExplanationOfBenefitItem } from "../explanationofbenefititem/types";
import type { ExplanationOfBenefitAddItem } from "../explanationofbenefitadditem/types";
import type { ExplanationOfBenefitAdjudication } from "../explanationofbenefitadjudication/types";
import type { ExplanationOfBenefitTotal } from "../explanationofbenefittotal/types";
import type { ExplanationOfBenefitPayment } from "../explanationofbenefitpayment/types";
import type { ExplanationOfBenefitProcessNote } from "../explanationofbenefitprocessnote/types";
import type { ExplanationOfBenefitBenefitBalance } from "../explanationofbenefitbenefitbalance/types";

/** Generated from FHIR JSON Schema */

/** This resource provides: the claim details; adjudication details from the processing of a Claim; and optionally account balance information, for informing the subscriber of the benefits provided. */
export interface ExplanationOfBenefit {
  resourceType: `ExplanationOfBenefit`;

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

  fundsReserveRequested?: CodeableConcept;

  fundsReserve?: CodeableConcept;

  related?: ExplanationOfBenefitRelated[];

  prescription?: Reference;

  originalPrescription?: Reference;

  event?: ExplanationOfBenefitEvent[];

  payee?: ExplanationOfBenefitPayee;

  referral?: Reference;

  encounter?: Reference[];

  facility?: Reference;

  claim?: Reference;

  claimResponse?: Reference;

  outcome?: string;

  _outcome?: Element;

  decision?: CodeableConcept;

  disposition?: string;

  _disposition?: Element;

  preAuthRef?: string[];

  _preAuthRef?: Element[];

  preAuthRefPeriod?: Period[];

  diagnosisRelatedGroup?: CodeableConcept;

  careTeam?: ExplanationOfBenefitCareTeam[];

  supportingInfo?: ExplanationOfBenefitSupportingInfo[];

  diagnosis?: ExplanationOfBenefitDiagnosis[];

  procedure?: ExplanationOfBenefitProcedure[];

  precedence?: number;

  _precedence?: Element;

  insurance?: ExplanationOfBenefitInsurance[];

  accident?: ExplanationOfBenefitAccident;

  patientPaid?: Money;

  item?: ExplanationOfBenefitItem[];

  addItem?: ExplanationOfBenefitAddItem[];

  adjudication?: ExplanationOfBenefitAdjudication[];

  total?: ExplanationOfBenefitTotal[];

  payment?: ExplanationOfBenefitPayment;

  formCode?: CodeableConcept;

  form?: Attachment;

  processNote?: ExplanationOfBenefitProcessNote[];

  benefitPeriod?: Period;

  benefitBalance?: ExplanationOfBenefitBenefitBalance[];
}
