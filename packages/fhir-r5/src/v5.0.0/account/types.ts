import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Period,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { AccountCoverage } from "../accountcoverage/types";
import type { AccountGuarantor } from "../accountguarantor/types";
import type { AccountDiagnosis } from "../accountdiagnosis/types";
import type { AccountProcedure } from "../accountprocedure/types";
import type { AccountRelatedAccount } from "../accountrelatedaccount/types";
import type { AccountBalance } from "../accountbalance/types";

/** Generated from FHIR JSON Schema */

/** A financial tool for tracking value accrued for a particular purpose.  In the healthcare field, used to track charges for a patient, cost centers, etc. */
export interface Account {
  resourceType: `Account`;

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

  status?: string;

  _status?: Element;

  billingStatus?: CodeableConcept;

  type?: CodeableConcept;

  name?: string;

  _name?: Element;

  subject?: Reference[];

  servicePeriod?: Period;

  coverage?: AccountCoverage[];

  owner?: Reference;

  description?: string;

  _description?: Element;

  guarantor?: AccountGuarantor[];

  diagnosis?: AccountDiagnosis[];

  procedure?: AccountProcedure[];

  relatedAccount?: AccountRelatedAccount[];

  currency?: CodeableConcept;

  balance?: AccountBalance[];

  calculatedAt?: string;

  _calculatedAt?: Element;
}
