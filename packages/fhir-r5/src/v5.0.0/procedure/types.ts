import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Period,
  Age,
  Range,
  Timing,
  CodeableReference,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ProcedurePerformer } from "../procedureperformer/types";
import type { ProcedureFocalDevice } from "../procedurefocaldevice/types";

/** Generated from FHIR JSON Schema */

/** An action that is or was performed on or for a patient, practitioner, device, organization, or location. For example, this can be a physical intervention on a patient like an operation, or less invasive like long term services, counseling, or hypnotherapy.  This can be a quality or safety inspection for a location, organization, or device.  This can be an accreditation procedure on a practitioner for licensing. */
export interface Procedure {
  resourceType: `Procedure`;

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

  instantiatesCanonical?: string[];

  instantiatesUri?: string[];

  _instantiatesUri?: Element[];

  basedOn?: Reference[];

  partOf?: Reference[];

  status?: string;

  _status?: Element;

  statusReason?: CodeableConcept;

  category?: CodeableConcept[];

  code?: CodeableConcept;

  subject: Reference;

  focus?: Reference;

  encounter?: Reference;

  occurrenceDateTime?: string;

  _occurrenceDateTime?: Element;

  occurrencePeriod?: Period;

  occurrenceString?: string;

  _occurrenceString?: Element;

  occurrenceAge?: Age;

  occurrenceRange?: Range;

  occurrenceTiming?: Timing;

  recorded?: string;

  _recorded?: Element;

  recorder?: Reference;

  reportedBoolean?: boolean;

  _reportedBoolean?: Element;

  reportedReference?: Reference;

  performer?: ProcedurePerformer[];

  location?: Reference;

  reason?: CodeableReference[];

  bodySite?: CodeableConcept[];

  outcome?: CodeableConcept;

  report?: Reference[];

  complication?: CodeableReference[];

  followUp?: CodeableConcept[];

  note?: Annotation[];

  focalDevice?: ProcedureFocalDevice[];

  used?: CodeableReference[];

  supportingInfo?: Reference[];
}
