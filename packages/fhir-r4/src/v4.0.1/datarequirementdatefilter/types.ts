import type { Extension, Element, Period, Duration } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data. */
export interface DataRequirementDateFilter {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];
  /** The date-valued attribute of the filter. The specified path SHALL be a FHIRPath resolveable on the specified type of the DataRequirement, and SHALL consist only of identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details). Note that the index must be an integer constant. The path must resolve to an element of type date, dateTime, Period, Schedule, or Timing. */
  path?: string;

  _path?: Element;
  /** A date parameter that refers to a search parameter defined on the specified type of the DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule, or Timing. */
  searchParam?: string;

  _searchParam?: Element;

  valueDateTime?: string;

  _valueDateTime?: Element;

  valuePeriod?: Period;

  valueDuration?: Duration;
}
