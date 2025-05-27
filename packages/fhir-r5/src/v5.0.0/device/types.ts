import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableReference,
  CodeableConcept,
  Count,
  Duration,
  Reference,
  ContactPoint,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { DeviceUdiCarrier } from "../deviceudicarrier/types";
import type { DeviceName } from "../devicename/types";
import type { DeviceVersion } from "../deviceversion/types";
import type { DeviceConformsTo } from "../deviceconformsto/types";
import type { DeviceProperty } from "../deviceproperty/types";

/** Generated from FHIR JSON Schema */

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface Device {
  resourceType: `Device`;

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

  displayName?: string;

  _displayName?: Element;

  definition?: CodeableReference;

  udiCarrier?: DeviceUdiCarrier[];

  status?: string;

  _status?: Element;

  availabilityStatus?: CodeableConcept;

  biologicalSourceEvent?: Identifier;

  manufacturer?: string;

  _manufacturer?: Element;

  manufactureDate?: string;

  _manufactureDate?: Element;

  expirationDate?: string;

  _expirationDate?: Element;

  lotNumber?: string;

  _lotNumber?: Element;

  serialNumber?: string;

  _serialNumber?: Element;

  name?: DeviceName[];

  modelNumber?: string;

  _modelNumber?: Element;

  partNumber?: string;

  _partNumber?: Element;

  category?: CodeableConcept[];

  type?: CodeableConcept[];

  version?: DeviceVersion[];

  conformsTo?: DeviceConformsTo[];

  property?: DeviceProperty[];

  mode?: CodeableConcept;

  cycle?: Count;

  duration?: Duration;

  owner?: Reference;

  contact?: ContactPoint[];

  location?: Reference;

  url?: string;

  _url?: Element;

  endpoint?: Reference[];

  gateway?: CodeableReference[];

  note?: Annotation[];

  safety?: CodeableConcept[];

  parent?: Reference;
}
