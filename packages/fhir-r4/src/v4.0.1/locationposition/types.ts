import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Details and position information for a physical place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
export interface LocationPosition {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Longitude. The value domain and the interpretation are the same as for the text of the longitude element in KML (see notes below). */
  longitude: number;

  _longitude?: Element;
  /** Latitude. The value domain and the interpretation are the same as for the text of the latitude element in KML (see notes below). */
  latitude: number;

  _latitude?: Element;
  /** Altitude. The value domain and the interpretation are the same as for the text of the altitude element in KML (see notes below). */
  altitude?: number;

  _altitude?: Element;
}
