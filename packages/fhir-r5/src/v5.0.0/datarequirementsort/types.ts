import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export interface DataRequirementSort {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];
  /** The attribute of the sort. The specified path must be resolvable from the type of the required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index must be an integer constant. */
  path: string;

  _path?: Element;
  /** The direction of the sort, ascending or descending. */
  direction: "ascending" | "descending";

  _direction?: Element;
}
