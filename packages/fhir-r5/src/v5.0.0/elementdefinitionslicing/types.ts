import type { Extension, Element } from "../core/types";
import type { ElementDefinitionDiscriminator } from "../elementdefinitiondiscriminator/types";

/** Generated from FHIR JSON Schema */

/** Captures constraints on each element within the resource, profile, or extension. */
export interface ElementDefinitionSlicing {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  discriminator?: ElementDefinitionDiscriminator[];
  /** A human-readable text description of how the slicing works. If there is no discriminator, this is required to be present to provide whatever information is possible about how the slices can be differentiated. */
  description?: string;

  _description?: Element;
  /** If the matching elements have to occur in the same order as defined in the profile. */
  ordered?: boolean;

  _ordered?: Element;
  /** Whether additional slices are allowed or not. When the slices are ordered, profile authors can also say that additional slices are only allowed at the end. */
  rules: "closed" | "open" | "openAtEnd";

  _rules?: Element;
}
