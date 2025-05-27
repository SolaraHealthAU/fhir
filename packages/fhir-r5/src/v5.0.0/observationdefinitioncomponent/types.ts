import type {
  Extension,
  CodeableConcept,
  Element,
  Coding,
} from "../core/types";
import type { ObservationDefinitionQualifiedValue } from "../observationdefinitionqualifiedvalue/types";

/** Generated from FHIR JSON Schema */

/** Set of definitional characteristics for a kind of observation or measurement produced or consumed by an orderable health care service. */
export interface ObservationDefinitionComponent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code: CodeableConcept;

  permittedDataType?: string[];

  _permittedDataType?: Element[];

  permittedUnit?: Coding[];

  qualifiedValue?: ObservationDefinitionQualifiedValue[];
}
