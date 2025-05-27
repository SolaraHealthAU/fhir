import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableReference,
  CodeableConcept,
  Quantity,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { DeviceDispensePerformer } from "../devicedispenseperformer/types";

/** Generated from FHIR JSON Schema */

/** A record of dispensation of a device - i.e., assigning a device to a patient, or to a professional for their use. */
export interface DeviceDispense {
  resourceType: `DeviceDispense`;

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

  partOf?: Reference[];

  status?: string;

  _status?: Element;

  statusReason?: CodeableReference;

  category?: CodeableConcept[];

  device: CodeableReference;

  subject: Reference;

  receiver?: Reference;

  encounter?: Reference;

  supportingInformation?: Reference[];

  performer?: DeviceDispensePerformer[];

  location?: Reference;

  type?: CodeableConcept;

  quantity?: Quantity;

  preparedDate?: string;

  _preparedDate?: Element;

  whenHandedOver?: string;

  _whenHandedOver?: Element;

  destination?: Reference;

  note?: Annotation[];

  usageInstruction?: string;

  _usageInstruction?: Element;

  eventHistory?: Reference[];
}
