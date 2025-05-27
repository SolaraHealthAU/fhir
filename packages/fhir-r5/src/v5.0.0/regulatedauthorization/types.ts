import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Period,
  CodeableReference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { RegulatedAuthorizationCase } from "../regulatedauthorizationcase/types";

/** Generated from FHIR JSON Schema */

/** Regulatory approval, clearance or licencing related to a regulated product, treatment, facility or activity that is cited in a guidance, regulation, rule or legislative act. An example is Market Authorization relating to a Medicinal Product. */
export interface RegulatedAuthorization {
  resourceType: `RegulatedAuthorization`;

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

  subject?: Reference[];

  type?: CodeableConcept;

  description?: string;

  _description?: Element;

  region?: CodeableConcept[];

  status?: CodeableConcept;

  statusDate?: string;

  _statusDate?: Element;

  validityPeriod?: Period;

  indication?: CodeableReference[];

  intendedUse?: CodeableConcept;

  basis?: CodeableConcept[];

  holder?: Reference;

  regulator?: Reference;

  attachedDocument?: Reference[];

  case?: RegulatedAuthorizationCase;
}
