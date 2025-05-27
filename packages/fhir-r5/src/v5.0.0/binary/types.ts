import type { Meta, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A resource that represents the data of a single raw artifact as digital content accessible in its native format.  A Binary resource can contain any content, whether text, image, pdf, zip archive, etc. */
export interface Binary {
  resourceType: `Binary`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  contentType?: string;

  _contentType?: Element;

  securityContext?: Reference;

  data?: string;

  _data?: Element;
}
