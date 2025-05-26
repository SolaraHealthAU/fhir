import type {
  Extension,
  CodeableConcept,
  Range,
  Duration,
  Element,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** A kind of specimen with associated set of requirements. */
export interface SpecimenDefinitionHandling {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  temperatureQualifier?: CodeableConcept;

  temperatureRange?: Range;

  maxDuration?: Duration;

  instruction?: string;

  _instruction?: Element;
}
