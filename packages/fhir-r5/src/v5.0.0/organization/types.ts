import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  ExtendedContactDetail,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { OrganizationQualification } from "../organizationqualification/types";

/** Generated from FHIR JSON Schema */

/** A formally or informally recognized grouping of people or organizations formed for the purpose of achieving some form of collective action.  Includes companies, institutions, corporations, departments, community groups, healthcare practice groups, payer/insurer, etc. */
export interface Organization {
  resourceType: `Organization`;

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

  active?: boolean;

  _active?: Element;

  type?: CodeableConcept[];

  name?: string;

  _name?: Element;

  alias?: string[];

  _alias?: Element[];

  description?: string;

  _description?: Element;

  contact?: ExtendedContactDetail[];

  partOf?: Reference;

  endpoint?: Reference[];

  qualification?: OrganizationQualification[];
}
