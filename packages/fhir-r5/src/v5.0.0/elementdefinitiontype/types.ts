import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Captures constraints on each element within the resource, profile, or extension. */
export interface ElementDefinitionType {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];
  /** URL of Data type or Resource that is a(or the) type used for this element. References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only allowed in logical models. */
  code: string;

  _code?: Element;
  /** Identifies a profile structure or implementation Guide that applies to the datatype this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the type SHALL conform to at least one profile defined in the implementation guide. */
  profile?: string[];
  /** Used when the type is "Reference" or "canonical", and identifies a profile structure or implementation Guide that applies to the target of the reference this element refers to. If any profiles are specified, then the content must conform to at least one of them. The URL can be a local reference - to a contained StructureDefinition, or a reference to another StructureDefinition or Implementation Guide by a canonical URL. When an implementation guide is specified, the target resource SHALL conform to at least one profile defined in the implementation guide. */
  targetProfile?: string[];
  /** If the type is a reference to another resource, how the resource is or can be aggregated - is it a contained resource, or a reference, and if the context is a bundle, is it included in the bundle. */
  aggregation?: any;

  _aggregation?: Element[];
  /** Whether this reference needs to be version specific or version independent, or whether either can be used. */
  versioning?: "either" | "independent" | "specific";

  _versioning?: Element;
}
