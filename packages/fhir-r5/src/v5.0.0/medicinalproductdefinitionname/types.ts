import type { Extension, Element, CodeableConcept } from "../core/types";
import type { MedicinalProductDefinitionPart } from "../medicinalproductdefinitionpart/types";
import type { MedicinalProductDefinitionUsage } from "../medicinalproductdefinitionusage/types";

/** Generated from FHIR JSON Schema */

/** A medicinal product, being a substance or combination of substances that is intended to treat, prevent or diagnose a disease, or to restore, correct or modify physiological functions by exerting a pharmacological, immunological or metabolic action. This resource is intended to define and detail such products and their properties, for uses other than direct patient care (e.g. regulatory use, or drug catalogs). */
export interface MedicinalProductDefinitionName {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  productName?: string;

  _productName?: Element;

  type?: CodeableConcept;

  part?: MedicinalProductDefinitionPart[];

  usage?: MedicinalProductDefinitionUsage[];
}
