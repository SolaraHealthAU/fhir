import type { Extension, Element } from "../core/types";
import type { CitationEntry } from "../citationentry/types";
import type { CitationSummary1 } from "../citationsummary1/types";

/** Generated from FHIR JSON Schema */

/** The Citation Resource enables reference to any knowledge artifact for purposes of identification and attribution. The Citation Resource supports existing reference structures and developing publication practices such as versioning, expressing complex contributorship roles, and referencing computable resources. */
export interface CitationContributorship {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  complete?: boolean;

  _complete?: Element;

  entry?: CitationEntry[];

  summary?: CitationSummary1[];
}
