import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** An authorization for the provision of glasses and/or contact lenses to a patient. */
export interface VisionPrescriptionPrism {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  amount?: number;

  _amount?: Element;

  base?: string;

  _base?: Element;
}
