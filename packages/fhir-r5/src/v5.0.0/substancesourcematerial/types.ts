import type {
  Meta,
  Element,
  Extension,
  CodeableConcept,
  Identifier,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { SubstanceSourceMaterialFractionDescription } from "../substancesourcematerialfractiondescription/types";
import type { SubstanceSourceMaterialOrganism } from "../substancesourcematerialorganism/types";
import type { SubstanceSourceMaterialPartDescription } from "../substancesourcematerialpartdescription/types";

/** Generated from FHIR JSON Schema */

/** Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex. */
export interface SubstanceSourceMaterial {
  resourceType: `SubstanceSourceMaterial`;

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

  sourceMaterialClass?: CodeableConcept;

  sourceMaterialType?: CodeableConcept;

  sourceMaterialState?: CodeableConcept;

  organismId?: Identifier;

  organismName?: string;

  _organismName?: Element;

  parentSubstanceId?: Identifier[];

  parentSubstanceName?: string[];

  _parentSubstanceName?: Element[];

  countryOfOrigin?: CodeableConcept[];

  geographicalLocation?: string[];

  _geographicalLocation?: Element[];

  developmentStage?: CodeableConcept;

  fractionDescription?: SubstanceSourceMaterialFractionDescription[];

  organism?: SubstanceSourceMaterialOrganism;

  partDescription?: SubstanceSourceMaterialPartDescription[];
}
