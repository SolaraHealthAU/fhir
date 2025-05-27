import type { Extension, Element, ContactDetail } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers. */
export interface Contributor {
  id?: string;

  extension?: Extension[];
  /** The type of contributor. */
  type: "author" | "editor" | "reviewer" | "endorser";

  _type?: Element;
  /** The name of the individual or organization responsible for the contribution. */
  name: string;

  _name?: Element;
  /** Contact details to assist a user in finding and communicating with the contributor. */
  contact?: ContactDetail[];
}
