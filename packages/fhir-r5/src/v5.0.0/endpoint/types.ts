import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
  ContactPoint,
  Period,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { EndpointPayload } from "../endpointpayload/types";

/** Generated from FHIR JSON Schema */

/** The technical details of an endpoint that can be used for electronic services, such as for web services providing XDS.b, a REST endpoint for another FHIR server, or a s/Mime email address. This may include any security context information. */
export interface Endpoint {
  resourceType: `Endpoint`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  status?: string;

  _status?: Element;

  connectionType: CodeableConcept[];

  name?: string;

  _name?: Element;

  description?: string;

  _description?: Element;

  environmentType?: CodeableConcept[];

  managingOrganization?: Reference;

  contact?: ContactPoint[];

  period?: Period;

  payload?: EndpointPayload[];

  address?: string;

  _address?: Element;

  header?: string[];

  _header?: Element[];
}
