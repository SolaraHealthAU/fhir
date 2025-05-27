import type { Extension, Reference, Period, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Represents a defined collection of entities that may be discussed or acted upon collectively but which are not expected to act collectively, and are not formally or legally recognized; i.e. a collection of entities that isn't an Organization. */
export interface GroupMember {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  entity: Reference;

  period?: Period;

  inactive?: boolean;

  _inactive?: Element;
}
