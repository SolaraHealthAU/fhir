import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface StructureMapParameter {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  valueId?: string;

  _valueId?: Element;

  valueString?: string;

  _valueString?: Element;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueInteger?: number;

  _valueInteger?: Element;

  valueDecimal?: number;

  _valueDecimal?: Element;
}
