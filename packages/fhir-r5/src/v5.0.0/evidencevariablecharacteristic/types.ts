import type {
  Extension,
  Element,
  Annotation,
  Reference,
  CodeableConcept,
  Expression,
  Quantity,
  Range,
} from "../core/types";
import type { EvidenceVariableDefinitionByTypeAndValue } from "../evidencevariabledefinitionbytypeandvalue/types";
import type { EvidenceVariableDefinitionByCombination } from "../evidencevariabledefinitionbycombination/types";
import type { EvidenceVariableTimeFromEvent } from "../evidencevariabletimefromevent/types";

/** Generated from FHIR JSON Schema */

/** The EvidenceVariable resource describes an element that knowledge (Evidence) is about. */
export interface EvidenceVariableCharacteristic {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  linkId?: string;

  _linkId?: Element;

  description?: string;

  _description?: Element;

  note?: Annotation[];

  exclude?: boolean;

  _exclude?: Element;

  definitionReference?: Reference;

  definitionCanonical?: string;

  definitionCodeableConcept?: CodeableConcept;

  definitionExpression?: Expression;

  definitionId?: string;

  _definitionId?: Element;

  definitionByTypeAndValue?: EvidenceVariableDefinitionByTypeAndValue;

  definitionByCombination?: EvidenceVariableDefinitionByCombination;

  instancesQuantity?: Quantity;

  instancesRange?: Range;

  durationQuantity?: Quantity;

  durationRange?: Range;

  timeFromEvent?: EvidenceVariableTimeFromEvent[];
}
