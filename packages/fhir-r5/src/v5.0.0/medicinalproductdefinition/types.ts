import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  CodeableReference,
  Coding,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MarketingStatus } from "../marketingstatus/types";
import type { MedicinalProductDefinitionContact } from "../medicinalproductdefinitioncontact/types";
import type { MedicinalProductDefinitionName } from "../medicinalproductdefinitionname/types";
import type { MedicinalProductDefinitionCrossReference } from "../medicinalproductdefinitioncrossreference/types";
import type { MedicinalProductDefinitionOperation } from "../medicinalproductdefinitionoperation/types";
import type { MedicinalProductDefinitionCharacteristic } from "../medicinalproductdefinitioncharacteristic/types";

/** Generated from FHIR JSON Schema */

/** A medicinal product, being a substance or combination of substances that is intended to treat, prevent or diagnose a disease, or to restore, correct or modify physiological functions by exerting a pharmacological, immunological or metabolic action. This resource is intended to define and detail such products and their properties, for uses other than direct patient care (e.g. regulatory use, or drug catalogs). */
export interface MedicinalProductDefinition {
  resourceType: `MedicinalProductDefinition`;

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

  type?: CodeableConcept;

  domain?: CodeableConcept;

  version?: string;

  _version?: Element;

  status?: CodeableConcept;

  statusDate?: string;

  _statusDate?: Element;

  description?: string;

  _description?: Element;

  combinedPharmaceuticalDoseForm?: CodeableConcept;

  route?: CodeableConcept[];

  indication?: string;

  _indication?: Element;

  legalStatusOfSupply?: CodeableConcept;

  additionalMonitoringIndicator?: CodeableConcept;

  specialMeasures?: CodeableConcept[];

  pediatricUseIndicator?: CodeableConcept;

  classification?: CodeableConcept[];

  marketingStatus?: MarketingStatus[];

  packagedMedicinalProduct?: CodeableConcept[];

  comprisedOf?: Reference[];

  ingredient?: CodeableConcept[];

  impurity?: CodeableReference[];

  attachedDocument?: Reference[];

  masterFile?: Reference[];

  contact?: MedicinalProductDefinitionContact[];

  clinicalTrial?: Reference[];

  code?: Coding[];

  name: MedicinalProductDefinitionName[];

  crossReference?: MedicinalProductDefinitionCrossReference[];

  operation?: MedicinalProductDefinitionOperation[];

  characteristic?: MedicinalProductDefinitionCharacteristic[];
}
