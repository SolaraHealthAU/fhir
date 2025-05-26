import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  ContactPoint,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { DeviceUdiCarrier } from "../deviceudicarrier/types";
import type { DeviceDeviceName } from "../devicedevicename/types";
import type { DeviceSpecialization } from "../devicespecialization/types";
import type { DeviceVersion } from "../deviceversion/types";
import type { DeviceProperty } from "../deviceproperty/types";

/** Generated from FHIR JSON Schema */

/** A type of a manufactured item that is used in the provision of healthcare without being substantially changed through that activity. The device may be a medical or non-medical device. */
export interface Device {
  resourceType: `Device`;
  /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
  id?: string;
  /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  meta?: Meta;
  /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
  implicitRules?: string;

  _implicitRules?: Element;
  /** The base language in which the resource is written. */
  language?: string;

  _language?: Element;
  /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
  text?: Narrative;
  /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
  contained?: ResourceList[];
  /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Unique instance identifiers assigned to a device by manufacturers other organizations or owners. */
  identifier?: Identifier[];
  /** The reference to the definition for the device. */
  definition?: Reference;

  udiCarrier?: DeviceUdiCarrier[];
  /** Status of the Device availability. */
  status?: "active" | "inactive" | "entered-in-error" | "unknown";

  _status?: Element;
  /** Reason for the dtatus of the Device availability. */
  statusReason?: CodeableConcept[];
  /** The distinct identification string as required by regulation for a human cell, tissue, or cellular and tissue-based product. */
  distinctIdentifier?: string;

  _distinctIdentifier?: Element;
  /** A name of the manufacturer. */
  manufacturer?: string;

  _manufacturer?: Element;
  /** The date and time when the device was manufactured. */
  manufactureDate?: string;

  _manufactureDate?: Element;
  /** The date and time beyond which this device is no longer valid or should not be used (if applicable). */
  expirationDate?: string;

  _expirationDate?: Element;
  /** Lot number assigned by the manufacturer. */
  lotNumber?: string;

  _lotNumber?: Element;
  /** The serial number assigned by the organization when the device was manufactured. */
  serialNumber?: string;

  _serialNumber?: Element;

  deviceName?: DeviceDeviceName[];
  /** The model number for the device. */
  modelNumber?: string;

  _modelNumber?: Element;
  /** The part number of the device. */
  partNumber?: string;

  _partNumber?: Element;
  /** The kind or type of device. */
  type?: CodeableConcept;

  specialization?: DeviceSpecialization[];

  version?: DeviceVersion[];

  property?: DeviceProperty[];
  /** Patient information, If the device is affixed to a person. */
  patient?: Reference;
  /** An organization that is responsible for the provision and ongoing maintenance of the device. */
  owner?: Reference;
  /** Contact details for an organization or a particular human that is responsible for the device. */
  contact?: ContactPoint[];
  /** The place where the device can be found. */
  location?: Reference;
  /** A network address on which the device may be contacted directly. */
  url?: string;

  _url?: Element;
  /** Descriptive information, usage information or implantation information that is not captured in an existing element. */
  note?: Annotation[];
  /** Provides additional safety characteristics about a medical device.  For example devices containing latex. */
  safety?: CodeableConcept[];
  /** The parent device. */
  parent?: Reference;
}
