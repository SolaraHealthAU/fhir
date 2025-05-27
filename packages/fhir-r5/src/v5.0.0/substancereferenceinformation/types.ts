import type { Meta, Element, Extension } from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { SubstanceReferenceInformationGene } from "../substancereferenceinformationgene/types";
import type { SubstanceReferenceInformationGeneElement } from "../substancereferenceinformationgeneelement/types";
import type { SubstanceReferenceInformationTarget } from "../substancereferenceinformationtarget/types";

/** Generated from FHIR JSON Schema */

/** Todo. */
export interface SubstanceReferenceInformation {
  resourceType: `SubstanceReferenceInformation`;

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

  comment?: string;

  _comment?: Element;

  gene?: SubstanceReferenceInformationGene[];

  geneElement?: SubstanceReferenceInformationGeneElement[];

  target?: SubstanceReferenceInformationTarget[];
}
