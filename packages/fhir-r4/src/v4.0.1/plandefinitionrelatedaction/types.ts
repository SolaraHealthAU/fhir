import type { Extension, Element, Duration, Range } from "../core/types";

/** Generated from FHIR JSON Schema */

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
export interface PlanDefinitionRelatedAction {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  actionId?: string;

  _actionId?: Element;

  relationship?:
    | "before-start"
    | "before"
    | "before-end"
    | "concurrent-with-start"
    | "concurrent"
    | "concurrent-with-end"
    | "after-start"
    | "after"
    | "after-end";

  _relationship?: Element;

  offsetDuration?: Duration;

  offsetRange?: Range;
}
