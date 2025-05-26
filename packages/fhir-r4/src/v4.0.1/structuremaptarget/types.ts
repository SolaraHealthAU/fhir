import type { Extension, Element } from "../core/types";
import type { StructureMapParameter } from "../structuremapparameter/types";

/** Generated from FHIR JSON Schema */

/** A Map of relationships between 2 structures that can be used to transform data. */
export interface StructureMapTarget {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  context?: string;

  _context?: Element;

  contextType?: "type" | "variable";

  _contextType?: Element;

  element?: string;

  _element?: Element;

  variable?: string;

  _variable?: Element;

  listMode?: any;

  _listMode?: Element[];

  listRuleId?: string;

  _listRuleId?: Element;

  transform?:
    | "create"
    | "copy"
    | "truncate"
    | "escape"
    | "cast"
    | "append"
    | "translate"
    | "reference"
    | "dateOp"
    | "uuid"
    | "pointer"
    | "evaluate"
    | "cc"
    | "c"
    | "qty"
    | "id"
    | "cp";

  _transform?: Element;

  parameter?: StructureMapParameter[];
}
