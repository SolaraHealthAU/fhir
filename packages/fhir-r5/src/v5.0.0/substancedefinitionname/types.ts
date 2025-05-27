import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
} from "../core/types";
import type { SubstanceDefinitionOfficial } from "../substancedefinitionofficial/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceDefinitionName {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  name?: string;

  _name?: Element;

  type?: CodeableConcept;

  status?: CodeableConcept;

  preferred?: boolean;

  _preferred?: Element;

  language?: CodeableConcept[];

  domain?: CodeableConcept[];

  jurisdiction?: CodeableConcept[];

  synonym?: SubstanceDefinitionName[];

  translation?: SubstanceDefinitionName[];

  official?: SubstanceDefinitionOfficial[];

  source?: Reference[];
}
