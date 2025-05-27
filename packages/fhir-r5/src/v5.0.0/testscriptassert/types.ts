import type { Extension, Element } from "../core/types";
import type { TestScriptRequirement } from "../testscriptrequirement/types";

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

  direction?: string;

  _direction?: Element;

  compareToSourceId?: string;

  _compareToSourceId?: Element;

  compareToSourceExpression?: string;

  _compareToSourceExpression?: Element;

  compareToSourcePath?: string;

  _compareToSourcePath?: Element;

  contentType?: string;

  _contentType?: Element;

  defaultManualCompletion?: string;

  _defaultManualCompletion?: Element;

  expression?: string;

  _expression?: Element;

  headerField?: string;

  _headerField?: Element;

  minimumId?: string;

  _minimumId?: Element;

  navigationLinks?: boolean;

  _navigationLinks?: Element;

  operator?: string;

  _operator?: Element;

  path?: string;

  _path?: Element;

  requestMethod?: string;

  _requestMethod?: Element;

  requestURL?: string;

  _requestURL?: Element;

  resource?: string;

  _resource?: Element;

  response?: string;

  _response?: Element;

  responseCode?: string;

  _responseCode?: Element;

  sourceId?: string;

  _sourceId?: Element;

  stopTestOnFail?: boolean;

  _stopTestOnFail?: Element;

  validateProfileId?: string;

  _validateProfileId?: Element;

  value?: string;

  _value?: Element;

  warningOnly?: boolean;

  _warningOnly?: Element;

  requirement?: TestScriptRequirement[];
}
