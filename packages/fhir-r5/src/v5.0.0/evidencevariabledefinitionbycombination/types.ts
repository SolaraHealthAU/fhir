import type { Extension, Element } from "../core/types";
import type { EvidenceVariableCharacteristic } from "../evidencevariablecharacteristic/types";

/** Generated from FHIR JSON Schema */

/** The EvidenceVariable resource describes an element that knowledge (Evidence) is about. */
export interface EvidenceVariableDefinitionByCombination {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  code?: string;

  _code?: Element;

  threshold?: number;

  _threshold?: Element;

  characteristic: EvidenceVariableCharacteristic[];
}
