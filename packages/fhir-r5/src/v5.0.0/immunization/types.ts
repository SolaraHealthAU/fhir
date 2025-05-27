import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  CodeableReference,
  Quantity,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ImmunizationPerformer } from "../immunizationperformer/types";
import type { ImmunizationProgramEligibility } from "../immunizationprogrameligibility/types";
import type { ImmunizationReaction } from "../immunizationreaction/types";
import type { ImmunizationProtocolApplied } from "../immunizationprotocolapplied/types";

/** Generated from FHIR JSON Schema */

/** Describes the event of a patient being administered a vaccine or a record of an immunization as reported by a patient, a clinician or another party. */
export interface Immunization {
  resourceType: `Immunization`;

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

  basedOn?: Reference[];

  status?: string;

  _status?: Element;

  statusReason?: CodeableConcept;

  vaccineCode: CodeableConcept;

  administeredProduct?: CodeableReference;

  manufacturer?: CodeableReference;

  lotNumber?: string;

  _lotNumber?: Element;

  expirationDate?: string;

  _expirationDate?: Element;

  patient: Reference;

  encounter?: Reference;

  supportingInformation?: Reference[];

  occurrenceDateTime?: string;

  _occurrenceDateTime?: Element;

  occurrenceString?: string;

  _occurrenceString?: Element;

  primarySource?: boolean;

  _primarySource?: Element;

  informationSource?: CodeableReference;

  location?: Reference;

  site?: CodeableConcept;

  route?: CodeableConcept;

  doseQuantity?: Quantity;

  performer?: ImmunizationPerformer[];

  note?: Annotation[];

  reason?: CodeableReference[];

  isSubpotent?: boolean;

  _isSubpotent?: Element;

  subpotentReason?: CodeableConcept[];

  programEligibility?: ImmunizationProgramEligibility[];

  fundingSource?: CodeableConcept;

  reaction?: ImmunizationReaction[];

  protocolApplied?: ImmunizationProtocolApplied[];
}
