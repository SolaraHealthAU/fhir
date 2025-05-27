import type { Extension, Coding, Element } from "../core/types";
import type { TestScriptRequestHeader } from "../testscriptrequestheader/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScriptOperation {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type?: Coding;

  resource?: string;

  _resource?: Element;

  label?: string;

  _label?: Element;

  description?: string;

  _description?: Element;

  accept?: string;

  _accept?: Element;

  contentType?: string;

  _contentType?: Element;

  destination?: number;

  _destination?: Element;

  encodeRequestUrl?: boolean;

  _encodeRequestUrl?: Element;

  method?: string;

  _method?: Element;

  origin?: number;

  _origin?: Element;

  params?: string;

  _params?: Element;

  requestHeader?: TestScriptRequestHeader[];

  requestId?: string;

  _requestId?: Element;

  responseId?: string;

  _responseId?: Element;

  sourceId?: string;

  _sourceId?: Element;

  targetId?: string;

  _targetId?: Element;

  url?: string;

  _url?: Element;
}
