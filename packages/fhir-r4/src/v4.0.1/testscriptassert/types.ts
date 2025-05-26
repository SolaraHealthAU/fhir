import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScriptAssert {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  label?: string;

  _label?: Element;

  description?: string;

  _description?: Element;

  direction?: "response" | "request";

  _direction?: Element;

  compareToSourceId?: string;

  _compareToSourceId?: Element;

  compareToSourceExpression?: string;

  _compareToSourceExpression?: Element;

  compareToSourcePath?: string;

  _compareToSourcePath?: Element;

  contentType?: string;

  _contentType?: Element;

  expression?: string;

  _expression?: Element;

  headerField?: string;

  _headerField?: Element;

  minimumId?: string;

  _minimumId?: Element;

  navigationLinks?: boolean;

  _navigationLinks?: Element;

  operator?:
    | "equals"
    | "notEquals"
    | "in"
    | "notIn"
    | "greaterThan"
    | "lessThan"
    | "empty"
    | "notEmpty"
    | "contains"
    | "notContains"
    | "eval";

  _operator?: Element;

  path?: string;

  _path?: Element;

  requestMethod?:
    | "delete"
    | "get"
    | "options"
    | "patch"
    | "post"
    | "put"
    | "head";

  _requestMethod?: Element;

  requestURL?: string;

  _requestURL?: Element;

  resource?: string;

  _resource?: Element;

  response?:
    | "okay"
    | "created"
    | "noContent"
    | "notModified"
    | "bad"
    | "forbidden"
    | "notFound"
    | "methodNotAllowed"
    | "conflict"
    | "gone"
    | "preconditionFailed"
    | "unprocessable";

  _response?: Element;

  responseCode?: string;

  _responseCode?: Element;

  sourceId?: string;

  _sourceId?: Element;

  validateProfileId?: string;

  _validateProfileId?: Element;

  value?: string;

  _value?: Element;

  warningOnly?: boolean;

  _warningOnly?: Element;
}
