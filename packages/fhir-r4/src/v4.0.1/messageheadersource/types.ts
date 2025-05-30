import type { Extension, Element, ContactPoint } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The header for a message exchange that is either requesting or responding to an action.  The reference(s) that are the subject of the action as well as other information related to the action are typically transmitted in a bundle in which the MessageHeader resource instance is the first resource in the bundle. */
export interface MessageHeaderSource {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Human-readable name for the source system. */
  name?: string;

  _name?: Element;
  /** May include configuration or other information useful in debugging. */
  software?: string;

  _software?: Element;
  /** Can convey versions of multiple systems in situations where a message passes through multiple hands. */
  version?: string;

  _version?: Element;
  /** An e-mail, phone, website or other contact point to use to resolve issues with message communications. */
  contact?: ContactPoint;
  /** Identifies the routing target to send acknowledgements to. */
  endpoint: string;

  _endpoint?: Element;
}
