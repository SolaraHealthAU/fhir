import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { GroupCharacteristic } from "../groupcharacteristic/types";
import type { GroupMember } from "../groupmember/types";

/** Generated from FHIR JSON Schema */

/** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
export interface Group {
  resourceType: `Group`;

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

  active?: boolean;

  _active?: Element;

  type?: string;

  _type?: Element;

  membership?: string;

  _membership?: Element;

  code?: CodeableConcept;

  name?: string;

  _name?: Element;

  description?: string;

  _description?: Element;

  quantity?: number;

  _quantity?: Element;

  managingEntity?: Reference;

  characteristic?: GroupCharacteristic[];

  member?: GroupMember[];
}
