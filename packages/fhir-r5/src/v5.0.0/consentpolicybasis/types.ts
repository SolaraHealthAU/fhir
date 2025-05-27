import type { Extension, Reference, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of a healthcare consumer’s  choices  or choices made on their behalf by a third party, which permits or denies identified recipient(s) or recipient role(s) to perform one or more actions within a given policy context, for specific purposes and periods of time. */
export interface ConsentPolicyBasis {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  reference?: Reference;

  url?: string;

  _url?: Element;
}
