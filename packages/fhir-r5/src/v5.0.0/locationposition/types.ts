import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Details and position information for a place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
export interface LocationPosition {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  longitude?: number;

  _longitude?: Element;

  latitude?: number;

  _latitude?: Element;

  altitude?: number;

  _altitude?: Element;
}
