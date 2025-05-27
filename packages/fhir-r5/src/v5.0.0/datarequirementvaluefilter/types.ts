import type { Extension, Element, Period, Duration } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export interface DataRequirementValueFilter {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];
  /** The attribute of the filter. The specified path SHALL be a FHIRPath resolvable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of a type that is comparable to the valueFilter.value[x] element for the filter. */
  path?: string;

  _path?: Element;
  /** A search parameter defined on the specified type of the DataRequirement, and which searches on elements of a type compatible with the type of the valueFilter.value[x] for the filter. */
  searchParam?: string;

  _searchParam?: Element;
  /** The comparator to be used to determine whether the value is matching. */
  comparator?: string;

  _comparator?: Element;

  valueDateTime?: string;

  _valueDateTime?: Element;

  valuePeriod?: Period;

  valueDuration?: Duration;
}
