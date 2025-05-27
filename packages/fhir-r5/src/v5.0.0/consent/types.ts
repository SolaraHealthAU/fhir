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
import type { ConsentPolicyBasis } from "../consentpolicybasis/types";
import type { ConsentVerification } from "../consentverification/types";
import type { ConsentProvision } from "../consentprovision/types";

/** Generated from FHIR JSON Schema */

/** A record of a healthcare consumer’s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export interface Consent {
  resourceType: `Consent`;

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

  category?: CodeableConcept[];

  subject?: Reference;

  date?: string;

  _date?: Element;

  period?: Period;

  grantor?: Reference[];

  grantee?: Reference[];

  manager?: Reference[];

  controller?: Reference[];

  sourceAttachment?: Attachment[];

  sourceReference?: Reference[];

  regulatoryBasis?: CodeableConcept[];

  policyBasis?: ConsentPolicyBasis;

  policyText?: Reference[];

  verification?: ConsentVerification[];

  decision?: string;

  _decision?: Element;

  provision?: ConsentProvision[];
}
