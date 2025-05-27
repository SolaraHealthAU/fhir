import type { Extension, Identifier, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle. */
export interface MessageHeaderResponse {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier: Identifier;

  code?: string;

  _code?: Element;

  details?: Reference;
}
