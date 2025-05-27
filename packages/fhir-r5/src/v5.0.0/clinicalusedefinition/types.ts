import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ClinicalUseDefinitionContraindication } from "../clinicalusedefinitioncontraindication/types";
import type { ClinicalUseDefinitionIndication } from "../clinicalusedefinitionindication/types";
import type { ClinicalUseDefinitionInteraction } from "../clinicalusedefinitioninteraction/types";
import type { ClinicalUseDefinitionUndesirableEffect } from "../clinicalusedefinitionundesirableeffect/types";
import type { ClinicalUseDefinitionWarning } from "../clinicalusedefinitionwarning/types";

/** Generated from FHIR JSON Schema */

/** A single issue - either an indication, contraindication, interaction or an undesirable effect for a medicinal product, medication, device or procedure. */
export interface ClinicalUseDefinition {
  resourceType: `ClinicalUseDefinition`;

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

  type?: string;

  _type?: Element;

  category?: CodeableConcept[];

  subject?: Reference[];

  status?: CodeableConcept;

  contraindication?: ClinicalUseDefinitionContraindication;

  indication?: ClinicalUseDefinitionIndication;

  interaction?: ClinicalUseDefinitionInteraction;

  population?: Reference[];

  library?: string[];

  undesirableEffect?: ClinicalUseDefinitionUndesirableEffect;

  warning?: ClinicalUseDefinitionWarning;
}
