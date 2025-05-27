import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { SubstancePolymerMonomerSet } from "../substancepolymermonomerset/types";
import type { SubstancePolymerRepeat } from "../substancepolymerrepeat/types";

/** Generated from FHIR JSON Schema */

/** Properties of a substance specific to it being a polymer. */
export interface SubstancePolymer {
  resourceType: `SubstancePolymer`;

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

  identifier?: Identifier;

  class?: CodeableConcept;

  geometry?: CodeableConcept;

  copolymerConnectivity?: CodeableConcept[];

  modification?: string;

  _modification?: Element;

  monomerSet?: SubstancePolymerMonomerSet[];

  repeat?: SubstancePolymerRepeat[];
}
