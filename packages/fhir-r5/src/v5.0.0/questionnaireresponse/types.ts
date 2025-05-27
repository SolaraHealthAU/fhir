import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { QuestionnaireResponseItem } from "../questionnaireresponseitem/types";

/** Generated from FHIR JSON Schema */

/** A structured set of questions and their answers. The questions are ordered and grouped into coherent subsets, corresponding to the structure of the grouping of the questionnaire being responded to. */
export interface QuestionnaireResponse {
  resourceType: `QuestionnaireResponse`;

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

  basedOn?: Reference[];

  partOf?: Reference[];

  questionnaire: string;

  status?: string;

  _status?: Element;

  subject?: Reference;

  encounter?: Reference;

  authored?: string;

  _authored?: Element;

  author?: Reference;

  source?: Reference;

  item?: QuestionnaireResponseItem[];
}
