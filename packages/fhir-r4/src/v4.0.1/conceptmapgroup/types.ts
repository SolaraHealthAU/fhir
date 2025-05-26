import type { Extension, Element } from "../core/types";
import type { ConceptMapElement } from "../conceptmapelement/types";
import type { ConceptMapUnmapped } from "../conceptmapunmapped/types";

/** Generated from FHIR JSON Schema */

/** A statement of relationships from one set of concepts to one or more other concepts - either concepts in code systems, or data element/data element concepts, or classes in class models. */
export interface ConceptMapGroup {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** An absolute URI that identifies the source system where the concepts to be mapped are defined. */
  source?: string;

  _source?: Element;
  /** The specific version of the code system, as determined by the code system authority. */
  sourceVersion?: string;

  _sourceVersion?: Element;
  /** An absolute URI that identifies the target system that the concepts will be mapped to. */
  target?: string;

  _target?: Element;
  /** The specific version of the code system, as determined by the code system authority. */
  targetVersion?: string;

  _targetVersion?: Element;

  element: ConceptMapElement[];

  unmapped?: ConceptMapUnmapped;
}
