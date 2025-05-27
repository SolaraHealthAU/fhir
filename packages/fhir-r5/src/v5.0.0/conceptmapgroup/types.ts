import type { Extension } from "../core/types";
import type { ConceptMapElement } from "../conceptmapelement/types";
import type { ConceptMapUnmapped } from "../conceptmapunmapped/types";

/** Generated from FHIR JSON Schema */

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface ConceptMapGroup {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  source?: string;

  target?: string;

  element: ConceptMapElement[];

  unmapped?: ConceptMapUnmapped;
}
