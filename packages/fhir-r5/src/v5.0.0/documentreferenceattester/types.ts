import type {
  Extension,
  CodeableConcept,
  Element,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A reference to a document of any kind for any purpose. While the term “document” implies a more narrow focus, for this resource this "document" encompasses *any* serialized object with a mime-type, it includes formal patient-centric documents (CDA), clinical notes, scanned paper, non-patient specific documents like policy text, as well as a photo, video, or audio recording acquired or used in healthcare.  The DocumentReference resource provides metadata about the document so that the document can be discovered and managed.  The actual content may be inline base64 encoded data or provided by direct reference. */
export interface DocumentReferenceAttester {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  mode: CodeableConcept;

  time?: string;

  _time?: Element;

  party?: Reference;
}
