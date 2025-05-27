import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableReference,
  Period,
  Timing,
  CodeableConcept,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { DeviceRequestParameter } from "../devicerequestparameter/types";

/** Generated from FHIR JSON Schema */

/** Represents a request for a patient to employ a medical device. The device may be an implantable device, or an external assistive device, such as a walker. */
export interface DeviceRequest {
  resourceType: `DeviceRequest`;

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

  replaces?: Reference[];

  groupIdentifier?: Identifier;

  status?: string;

  _status?: Element;

  intent?: string;

  _intent?: Element;

  priority?: string;

  _priority?: Element;

  doNotPerform?: boolean;

  _doNotPerform?: Element;

  code: CodeableReference;

  quantity?: number;

  _quantity?: Element;

  parameter?: DeviceRequestParameter[];

  subject: Reference;

  encounter?: Reference;

  occurrenceDateTime?: string;

  _occurrenceDateTime?: Element;

  occurrencePeriod?: Period;

  occurrenceTiming?: Timing;

  authoredOn?: string;

  _authoredOn?: Element;

  requester?: Reference;

  performer?: CodeableReference;

  reason?: CodeableReference[];

  asNeeded?: boolean;

  _asNeeded?: Element;

  asNeededFor?: CodeableConcept;

  insurance?: Reference[];

  supportingInfo?: Reference[];

  note?: Annotation[];

  relevantHistory?: Reference[];
}
