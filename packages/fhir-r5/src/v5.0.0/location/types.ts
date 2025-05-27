import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Coding,
  CodeableConcept,
  ExtendedContactDetail,
  Address,
  Reference,
  Availability,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { LocationPosition } from "../locationposition/types";
import type { VirtualServiceDetail } from "../virtualservicedetail/types";

/** Generated from FHIR JSON Schema */

/** Details and position information for a place where services are provided and resources and participants may be stored, found, contained, or accommodated. */
export interface Location {
  resourceType: `Location`;

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

  operationalStatus?: Coding;

  name?: string;

  _name?: Element;

  alias?: string[];

  _alias?: Element[];

  description?: string;

  _description?: Element;

  mode?: string;

  _mode?: Element;

  type?: CodeableConcept[];

  contact?: ExtendedContactDetail[];

  address?: Address;

  form?: CodeableConcept;

  position?: LocationPosition;

  managingOrganization?: Reference;

  partOf?: Reference;

  characteristic?: CodeableConcept[];

  hoursOfOperation?: Availability[];

  virtualService?: VirtualServiceDetail[];

  endpoint?: Reference[];
}
