import type { Extension, CodeableConcept, Element } from "../core/types";
import type { SubstanceSourceMaterialAuthor } from "../substancesourcematerialauthor/types";
import type { SubstanceSourceMaterialHybrid } from "../substancesourcematerialhybrid/types";
import type { SubstanceSourceMaterialOrganismGeneral } from "../substancesourcematerialorganismgeneral/types";

/** Generated from FHIR JSON Schema */

/** Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex. */
export interface SubstanceSourceMaterialOrganism {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  family?: CodeableConcept;

  genus?: CodeableConcept;

  species?: CodeableConcept;

  intraspecificType?: CodeableConcept;

  intraspecificDescription?: string;

  _intraspecificDescription?: Element;

  author?: SubstanceSourceMaterialAuthor[];

  hybrid?: SubstanceSourceMaterialHybrid;

  organismGeneral?: SubstanceSourceMaterialOrganismGeneral;
}
