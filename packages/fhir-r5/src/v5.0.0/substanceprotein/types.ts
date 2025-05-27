import type { Meta, Element, Extension, CodeableConcept } from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { SubstanceProteinSubunit } from "../substanceproteinsubunit/types";

/** Generated from FHIR JSON Schema */

/** A SubstanceProtein is defined as a single unit of a linear amino acid sequence, or a combination of subunits that are either covalently linked or have a defined invariant stoichiometric relationship. This includes all synthetic, recombinant and purified SubstanceProteins of defined sequence, whether the use is therapeutic or prophylactic. This set of elements will be used to describe albumins, coagulation factors, cytokines, growth factors, peptide/SubstanceProtein hormones, enzymes, toxins, toxoids, recombinant vaccines, and immunomodulators. */
export interface SubstanceProtein {
  resourceType: `SubstanceProtein`;

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

  disulfideLinkage?: string[];

  _disulfideLinkage?: Element[];

  subunit?: SubstanceProteinSubunit[];
}
