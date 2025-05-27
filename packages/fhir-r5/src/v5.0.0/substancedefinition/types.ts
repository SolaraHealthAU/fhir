import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { SubstanceDefinitionMoiety } from "../substancedefinitionmoiety/types";
import type { SubstanceDefinitionCharacterization } from "../substancedefinitioncharacterization/types";
import type { SubstanceDefinitionProperty } from "../substancedefinitionproperty/types";
import type { SubstanceDefinitionMolecularWeight } from "../substancedefinitionmolecularweight/types";
import type { SubstanceDefinitionStructure } from "../substancedefinitionstructure/types";
import type { SubstanceDefinitionCode } from "../substancedefinitioncode/types";
import type { SubstanceDefinitionName } from "../substancedefinitionname/types";
import type { SubstanceDefinitionRelationship } from "../substancedefinitionrelationship/types";
import type { SubstanceDefinitionSourceMaterial } from "../substancedefinitionsourcematerial/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceDefinition {
  resourceType: `SubstanceDefinition`;

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

  version?: string;

  _version?: Element;

  status?: CodeableConcept;

  classification?: CodeableConcept[];

  domain?: CodeableConcept;

  grade?: CodeableConcept[];

  description?: string;

  _description?: Element;

  informationSource?: Reference[];

  note?: Annotation[];

  manufacturer?: Reference[];

  supplier?: Reference[];

  moiety?: SubstanceDefinitionMoiety[];

  characterization?: SubstanceDefinitionCharacterization[];

  property?: SubstanceDefinitionProperty[];

  referenceInformation?: Reference;

  molecularWeight?: SubstanceDefinitionMolecularWeight[];

  structure?: SubstanceDefinitionStructure;

  code?: SubstanceDefinitionCode[];

  name?: SubstanceDefinitionName[];

  relationship?: SubstanceDefinitionRelationship[];

  nucleicAcid?: Reference;

  polymer?: Reference;

  protein?: Reference;

  sourceMaterial?: SubstanceDefinitionSourceMaterial;
}
