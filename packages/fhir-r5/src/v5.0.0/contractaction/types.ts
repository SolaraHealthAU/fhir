import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
  Period,
  Timing,
  CodeableReference,
  Annotation,
} from "../core/types";
import type { ContractSubject } from "../contractsubject/types";

/** Generated from FHIR JSON Schema */

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface ContractAction {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  doNotPerform?: boolean;

  _doNotPerform?: Element;

  type: CodeableConcept;

  subject?: ContractSubject[];

  intent: CodeableConcept;

  linkId?: string[];

  _linkId?: Element[];

  status: CodeableConcept;

  context?: Reference;

  contextLinkId?: string[];

  _contextLinkId?: Element[];

  occurrenceDateTime?: string;

  _occurrenceDateTime?: Element;

  occurrencePeriod?: Period;

  occurrenceTiming?: Timing;

  requester?: Reference[];

  requesterLinkId?: string[];

  _requesterLinkId?: Element[];

  performerType?: CodeableConcept[];

  performerRole?: CodeableConcept;

  performer?: Reference;

  performerLinkId?: string[];

  _performerLinkId?: Element[];

  reason?: CodeableReference[];

  reasonLinkId?: string[];

  _reasonLinkId?: Element[];

  note?: Annotation[];

  securityLabelNumber?: number[];

  _securityLabelNumber?: Element[];
}
