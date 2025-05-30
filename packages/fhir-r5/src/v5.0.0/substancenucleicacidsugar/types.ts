import type { Extension, Identifier, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
export interface SubstanceNucleicAcidSugar {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier;

  name?: string;

  _name?: Element;

  residueSite?: string;

  _residueSite?: Element;
}
