import type { Extension, Quantity, Identifier, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A food or supplement that is consumed by patients. */
export interface NutritionProductInstance {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  quantity?: Quantity;

  identifier?: Identifier[];

  name?: string;

  _name?: Element;

  lotNumber?: string;

  _lotNumber?: Element;

  expiry?: string;

  _expiry?: Element;

  useBy?: string;

  _useBy?: Element;

  biologicalSourceEvent?: Identifier;
}
