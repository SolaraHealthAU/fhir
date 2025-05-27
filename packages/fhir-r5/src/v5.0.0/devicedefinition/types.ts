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
import type { DeviceDefinitionUdiDeviceIdentifier } from "../devicedefinitionudideviceidentifier/types";
import type { DeviceDefinitionRegulatoryIdentifier } from "../devicedefinitionregulatoryidentifier/types";
import type { DeviceDefinitionDeviceName } from "../devicedefinitiondevicename/types";
import type { DeviceDefinitionClassification } from "../devicedefinitionclassification/types";
import type { DeviceDefinitionConformsTo } from "../devicedefinitionconformsto/types";
import type { DeviceDefinitionHasPart } from "../devicedefinitionhaspart/types";
import type { DeviceDefinitionPackaging } from "../devicedefinitionpackaging/types";
import type { DeviceDefinitionVersion } from "../devicedefinitionversion/types";
import type { ProductShelfLife } from "../productshelflife/types";
import type { DeviceDefinitionProperty } from "../devicedefinitionproperty/types";
import type { DeviceDefinitionLink } from "../devicedefinitionlink/types";
import type { DeviceDefinitionMaterial } from "../devicedefinitionmaterial/types";
import type { DeviceDefinitionGuideline } from "../devicedefinitionguideline/types";
import type { DeviceDefinitionCorrectiveAction } from "../devicedefinitioncorrectiveaction/types";
import type { DeviceDefinitionChargeItem } from "../devicedefinitionchargeitem/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinition {
  resourceType: `DeviceDefinition`;

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

  description?: string;

  _description?: Element;

  identifier?: Identifier[];

  udiDeviceIdentifier?: DeviceDefinitionUdiDeviceIdentifier[];

  regulatoryIdentifier?: DeviceDefinitionRegulatoryIdentifier[];

  partNumber?: string;

  _partNumber?: Element;

  manufacturer?: Reference;

  deviceName?: DeviceDefinitionDeviceName[];

  modelNumber?: string;

  _modelNumber?: Element;

  classification?: DeviceDefinitionClassification[];

  conformsTo?: DeviceDefinitionConformsTo[];

  hasPart?: DeviceDefinitionHasPart[];

  packaging?: DeviceDefinitionPackaging[];

  version?: DeviceDefinitionVersion[];

  safety?: CodeableConcept[];

  shelfLifeStorage?: ProductShelfLife[];

  languageCode?: CodeableConcept[];

  property?: DeviceDefinitionProperty[];

  owner?: Reference;

  contact?: ContactPoint[];

  link?: DeviceDefinitionLink[];

  note?: Annotation[];

  material?: DeviceDefinitionMaterial[];

  productionIdentifierInUDI?: string[];

  _productionIdentifierInUDI?: Element[];

  guideline?: DeviceDefinitionGuideline;

  correctiveAction?: DeviceDefinitionCorrectiveAction;

  chargeItem?: DeviceDefinitionChargeItem[];
}
