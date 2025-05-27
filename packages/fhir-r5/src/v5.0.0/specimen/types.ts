import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { SpecimenFeature } from "../specimenfeature/types";
import type { SpecimenCollection } from "../specimencollection/types";
import type { SpecimenProcessing } from "../specimenprocessing/types";
import type { SpecimenContainer } from "../specimencontainer/types";

/** Generated from FHIR JSON Schema */

/** A sample to be used for analysis. */
export interface Specimen {
  resourceType: `Specimen`;

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

  identifier?: Identifier[];

  accessionIdentifier?: Identifier;

  status?: string;

  _status?: Element;

  type?: CodeableConcept;

  subject?: Reference;

  receivedTime?: string;

  _receivedTime?: Element;

  parent?: Reference[];

  request?: Reference[];

  combined?: string;

  _combined?: Element;

  role?: CodeableConcept[];

  feature?: SpecimenFeature[];

  collection?: SpecimenCollection;

  processing?: SpecimenProcessing[];

  container?: SpecimenContainer[];

  condition?: CodeableConcept[];

  note?: Annotation[];
}
