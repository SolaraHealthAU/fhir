import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  CodeableReference,
  Quantity,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { SubstanceIngredient } from "../substanceingredient/types";

/** Generated from FHIR JSON Schema */

/** A homogeneous material with a definite composition. */
export interface Substance {
  resourceType: `Substance`;

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

  instance?: boolean;

  _instance?: Element;

  status?: string;

  _status?: Element;

  category?: CodeableConcept[];

  code: CodeableReference;

  description?: string;

  _description?: Element;

  expiry?: string;

  _expiry?: Element;

  quantity?: Quantity;

  ingredient?: SubstanceIngredient[];
}
