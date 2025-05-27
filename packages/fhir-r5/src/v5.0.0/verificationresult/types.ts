import type {
  Meta,
  Element,
  Extension,
  Reference,
  CodeableConcept,
  Timing,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { VerificationResultPrimarySource } from "../verificationresultprimarysource/types";
import type { VerificationResultAttestation } from "../verificationresultattestation/types";
import type { VerificationResultValidator } from "../verificationresultvalidator/types";

/** Generated from FHIR JSON Schema */

/** Describes validation requirements, source(s), status and dates for one or more elements. */
export interface VerificationResult {
  resourceType: `VerificationResult`;

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

  target?: Reference[];

  targetLocation?: string[];

  _targetLocation?: Element[];

  need?: CodeableConcept;

  status?: string;

  _status?: Element;

  statusDate?: string;

  _statusDate?: Element;

  validationType?: CodeableConcept;

  validationProcess?: CodeableConcept[];

  frequency?: Timing;

  lastPerformed?: string;

  _lastPerformed?: Element;

  nextScheduled?: string;

  _nextScheduled?: Element;

  failureAction?: CodeableConcept;

  primarySource?: VerificationResultPrimarySource[];

  attestation?: VerificationResultAttestation;

  validator?: VerificationResultValidator[];
}
