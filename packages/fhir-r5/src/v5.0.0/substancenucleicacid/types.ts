import type { Meta, Element, Extension, CodeableConcept } from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { SubstanceNucleicAcidSubunit } from "../substancenucleicacidsubunit/types";

/** Generated from FHIR JSON Schema */

/** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
export interface SubstanceNucleicAcid {
  resourceType: `SubstanceNucleicAcid`;

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

  sequenceType?: CodeableConcept;

  numberOfSubunits?: number;

  _numberOfSubunits?: Element;

  areaOfHybridisation?: string;

  _areaOfHybridisation?: Element;

  oligoNucleotideType?: CodeableConcept;

  subunit?: SubstanceNucleicAcidSubunit[];
}
