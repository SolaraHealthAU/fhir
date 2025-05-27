import type {
  Extension,
  Identifier,
  CodeableConcept,
  Element,
} from "../core/types";
import type { DeviceDefinitionDistributor } from "../devicedefinitiondistributor/types";
import type { DeviceDefinitionUdiDeviceIdentifier } from "../devicedefinitionudideviceidentifier/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinitionPackaging {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier;

  type?: CodeableConcept;

  count?: number;

  _count?: Element;

  distributor?: DeviceDefinitionDistributor[];

  udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[];

  packaging?: DeviceDefinitionPackaging[];
}
