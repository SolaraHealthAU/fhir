import type { Extension, Element, Period } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinitionCorrectiveAction {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  recall?: boolean;

  _recall?: Element;

  scope?: string;

  _scope?: Element;

  period: Period;
}
