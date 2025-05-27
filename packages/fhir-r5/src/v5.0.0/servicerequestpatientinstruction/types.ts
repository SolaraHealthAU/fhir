import type { Extension, Element, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
export interface ServiceRequestPatientInstruction {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  instructionMarkdown?: string;

  _instructionMarkdown?: Element;

  instructionReference?: Reference;
}
