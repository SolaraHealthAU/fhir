import type { Extension, Element } from "../core/types";
import type { OperationDefinitionBinding } from "../operationdefinitionbinding/types";
import type { OperationDefinitionReferencedFrom } from "../operationdefinitionreferencedfrom/types";

/** Generated from FHIR JSON Schema */

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface OperationDefinitionParameter {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  name?: string;

  _name?: Element;

  use?: string;

  _use?: Element;

  scope?: string[];

  _scope?: Element[];

  min?: number;

  _min?: Element;

  max?: string;

  _max?: Element;

  documentation?: string;

  _documentation?: Element;

  type?: string;

  _type?: Element;

  allowedType?: string[];

  _allowedType?: Element[];

  targetProfile?: string[];

  searchType?: string;

  _searchType?: Element;

  binding?: OperationDefinitionBinding;

  referencedFrom?: OperationDefinitionReferencedFrom[];

  part?: OperationDefinitionParameter[];
}
