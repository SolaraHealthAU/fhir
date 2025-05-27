import type {
  Extension,
  CodeableConcept,
  Element,
  Reference,
} from "../core/types";
import type { SubstanceDefinitionMolecularWeight } from "../substancedefinitionmolecularweight/types";
import type { SubstanceDefinitionRepresentation } from "../substancedefinitionrepresentation/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceDefinitionStructure {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  stereochemistry?: CodeableConcept;

  opticalActivity?: CodeableConcept;

  molecularFormula?: string;

  _molecularFormula?: Element;

  molecularFormulaByMoiety?: string;

  _molecularFormulaByMoiety?: Element;

  molecularWeight?: SubstanceDefinitionMolecularWeight;

  technique?: CodeableConcept[];

  sourceDocument?: Reference[];

  representation?: SubstanceDefinitionRepresentation[];
}
