import type { Meta, Element } from "../core/types";
import type { ParametersParameter } from "../parametersparameter/types";

/** Generated from FHIR JSON Schema */

/** This resource is used to pass information into and back from an operation (whether invoked directly from REST or within a messaging environment).  It is not persisted or allowed to be referenced by other resources. */
export interface Parameters {
  resourceType: `Parameters`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  parameter?: ParametersParameter[];
}
