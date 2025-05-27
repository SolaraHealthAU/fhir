import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Quantity,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { DeviceMetricCalibration } from "../devicemetriccalibration/types";

/** Generated from FHIR JSON Schema */

/** Describes a measurement, calculation or setting capability of a device. */
export interface DeviceMetric {
  resourceType: `DeviceMetric`;

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

  type: CodeableConcept;

  unit?: CodeableConcept;

  device: Reference;

  operationalStatus?: string;

  _operationalStatus?: Element;

  color?: string;

  _color?: Element;

  category?: string;

  _category?: Element;

  measurementFrequency?: Quantity;

  calibration?: DeviceMetricCalibration[];
}
