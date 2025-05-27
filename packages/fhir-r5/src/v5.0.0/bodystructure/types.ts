import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Attachment,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { BodyStructureIncludedStructure } from "../bodystructureincludedstructure/types";

/** Generated from FHIR JSON Schema */

/** Record details about an anatomical structure.  This resource may be used when a coded concept does not provide the necessary detail needed for the use case. */
export interface BodyStructure {
  resourceType: `BodyStructure`;

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

  morphology?: CodeableConcept;

  includedStructure: BodyStructureIncludedStructure[];

  excludedStructure?: BodyStructureIncludedStructure[];

  description?: string;

  _description?: Element;

  image?: Attachment[];

  patient: Reference;
}
