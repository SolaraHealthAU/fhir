import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Period,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { DeviceAssociationOperation } from "../deviceassociationoperation/types";

/** Generated from FHIR JSON Schema */

/** A record of association or dissociation of a device with a patient. */
export interface DeviceAssociation {
  resourceType: `DeviceAssociation`;

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

  device: Reference;

  category?: CodeableConcept[];

  status: CodeableConcept;

  statusReason?: CodeableConcept[];

  subject?: Reference;

  bodyStructure?: Reference;

  period?: Period;

  operation?: DeviceAssociationOperation[];
}
