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
import type { ListEntry } from "../listentry/types";

/** Generated from FHIR JSON Schema */

/** A List is a curated collection of resources, for things such as problem lists, allergy lists, facility list, organization list, etc. */
export interface List {
  resourceType: `List`;

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

  status?: string;

  _status?: Element;

  mode?: string;

  _mode?: Element;

  title?: string;

  _title?: Element;

  code?: CodeableConcept;

  subject?: Reference[];

  encounter?: Reference;

  date?: string;

  _date?: Element;

  source?: Reference;

  orderedBy?: CodeableConcept;

  note?: Annotation[];

  entry?: ListEntry[];

  emptyReason?: CodeableConcept;
}
