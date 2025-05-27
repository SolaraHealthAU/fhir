import type {
  Extension,
  Element,
  Reference,
  ContactPoint,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle. */
export interface MessageHeaderSource {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  endpointUrl?: string;

  _endpointUrl?: Element;

  endpointReference?: Reference;

  name?: string;

  _name?: Element;

  software?: string;

  _software?: Element;

  version?: string;

  _version?: Element;

  contact?: ContactPoint;
}
