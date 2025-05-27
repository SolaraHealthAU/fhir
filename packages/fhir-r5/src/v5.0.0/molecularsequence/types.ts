import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  Attachment,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MolecularSequenceRelative } from "../molecularsequencerelative/types";

/** Generated from FHIR JSON Schema */

/** Representation of a molecular sequence. */
export interface MolecularSequence {
  resourceType: `MolecularSequence`;

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

  type?: string;

  _type?: Element;

  subject?: Reference;

  focus?: Reference[];

  specimen?: Reference;

  device?: Reference;

  performer?: Reference;

  literal?: string;

  _literal?: Element;

  formatted?: Attachment[];

  relative?: MolecularSequenceRelative[];
}
