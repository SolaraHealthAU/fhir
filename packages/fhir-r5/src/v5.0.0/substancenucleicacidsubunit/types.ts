import type {
  Extension,
  Element,
  Attachment,
  CodeableConcept,
} from "../core/types";
import type { SubstanceNucleicAcidLinkage } from "../substancenucleicacidlinkage/types";
import type { SubstanceNucleicAcidSugar } from "../substancenucleicacidsugar/types";

/** Generated from FHIR JSON Schema */

/** Nucleic acids are defined by three distinct elements: the base, sugar and linkage. Individual substance/moiety IDs will be created for each of these elements. The nucleotide sequence will be always entered in the 5’-3’ direction. */
export interface SubstanceNucleicAcidSubunit {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  subunit?: number;

  _subunit?: Element;

  sequence?: string;

  _sequence?: Element;

  length?: number;

  _length?: Element;

  sequenceAttachment?: Attachment;

  fivePrime?: CodeableConcept;

  threePrime?: CodeableConcept;

  linkage?: SubstanceNucleicAcidLinkage[];

  sugar?: SubstanceNucleicAcidSugar[];
}
