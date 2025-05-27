import type { Extension, Element } from "../core/types";
import type { StructureMapParameter } from "../structuremapparameter/types";

/** Generated from FHIR JSON Schema */

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface StructureMapDependent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  name?: string;

  _name?: Element;

  parameter: StructureMapParameter[];
}
