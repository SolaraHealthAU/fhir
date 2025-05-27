import type {
  Extension,
  Period,
  CodeableConcept,
  Coding,
  Expression,
} from "../core/types";
import type { ConsentActor } from "../consentactor/types";
import type { ConsentData } from "../consentdata/types";

/** Generated from FHIR JSON Schema */

/** A record of a healthcare consumer’s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export interface ConsentProvision {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  period?: Period;

  actor?: ConsentActor[];

  action?: CodeableConcept[];

  securityLabel?: Coding[];

  purpose?: Coding[];

  documentType?: Coding[];

  resourceType: `ConsentProvision`;

  code?: CodeableConcept[];

  dataPeriod?: Period;

  data?: ConsentData[];

  expression?: Expression;

  provision?: ConsentProvision[];
}
