import type { Extension, Element } from "../core/types";
import type { PlanDefinitionOption } from "../plandefinitionoption/types";

/** Generated from FHIR JSON Schema */

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical and non-clinical artifacts such as clinical decision support rules, order sets, protocols, and drug quality specifications. */
export interface PlanDefinitionActor {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  title?: string;

  _title?: Element;

  description?: string;

  _description?: Element;

  option: PlanDefinitionOption[];
}
