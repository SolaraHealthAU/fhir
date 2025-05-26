import type { Extension, CodeableConcept, Element } from "../core/types";
import type { SubstanceSourceMaterialAuthor } from "../substancesourcematerialauthor/types";
import type { SubstanceSourceMaterialHybrid } from "../substancesourcematerialhybrid/types";
import type { SubstanceSourceMaterialOrganismGeneral } from "../substancesourcematerialorganismgeneral/types";

/** Generated from FHIR JSON Schema */

/** Source material shall capture information on the taxonomic and anatomical origins as well as the fraction of a material that can result in or can be modified to form a substance. This set of data elements shall be used to define polymer substances isolated from biological matrices. Taxonomic and anatomical origins shall be described using a controlled vocabulary as required. This information is captured for naturally derived polymers ( . starch) and structurally diverse substances. For Organisms belonging to the Kingdom Plantae the Substance level defines the fresh material of a single species or infraspecies, the Herbal Drug and the Herbal preparation. For Herbal preparations, the fraction information will be captured at the Substance information level and additional information for herbal extracts will be captured at the Specified Substance Group 1 information level. See for further explanation the Substance Class: Structurally Diverse and the herbal annex. */
export interface SubstanceSourceMaterialOrganism {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** The family of an organism shall be specified. */
  family?: CodeableConcept;
  /** The genus of an organism shall be specified; refers to the Latin epithet of the genus element of the plant/animal scientific name; it is present in names for genera, species and infraspecies. */
  genus?: CodeableConcept;
  /** The species of an organism shall be specified; refers to the Latin epithet of the species of the plant/animal; it is present in names for species and infraspecies. */
  species?: CodeableConcept;
  /** The Intraspecific type of an organism shall be specified. */
  intraspecificType?: CodeableConcept;
  /** The intraspecific description of an organism shall be specified based on a controlled vocabulary. For Influenza Vaccine, the intraspecific description shall contain the syntax of the antigen in line with the WHO convention. */
  intraspecificDescription?: string;

  _intraspecificDescription?: Element;

  author?: SubstanceSourceMaterialAuthor[];

  hybrid?: SubstanceSourceMaterialHybrid;

  organismGeneral?: SubstanceSourceMaterialOrganismGeneral;
}
