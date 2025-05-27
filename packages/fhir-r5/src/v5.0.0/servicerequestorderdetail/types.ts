import type { Extension, CodeableReference } from "../core/types";
import type { ServiceRequestParameter } from "../servicerequestparameter/types";

/** Generated from FHIR JSON Schema */

/** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
export interface ServiceRequestOrderDetail {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  parameterFocus?: CodeableReference;

  parameter: ServiceRequestParameter[];
}
