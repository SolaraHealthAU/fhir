import type { Extension, Element, Attachment, Identifier } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators. */
export interface SubstanceProteinSubunit {
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

  nTerminalModificationId?: Identifier;

  nTerminalModification?: string;

  _nTerminalModification?: Element;

  cTerminalModificationId?: Identifier;

  cTerminalModification?: string;

  _cTerminalModification?: Element;
}
