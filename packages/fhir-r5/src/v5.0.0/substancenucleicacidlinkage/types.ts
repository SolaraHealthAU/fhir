import type { Extension, Element, Identifier } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
export interface SubstanceNucleicAcidLinkage {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  connectivity?: string;

  _connectivity?: Element;

  identifier?: Identifier;

  name?: string;

  _name?: Element;

  residueSite?: string;

  _residueSite?: Element;
}
