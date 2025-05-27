import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";

/** Generated from FHIR JSON Schema */

/** This resource describes a product or service that is available through a program and includes the conditions and constraints of availability.  All of the information in this resource is specific to the inclusion of the item in the formulary and is not inherent to the item itself. */
export interface FormularyItem {
  resourceType: `FormularyItem`;

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

  code?: CodeableConcept;

  status?: string;

  _status?: Element;
}
