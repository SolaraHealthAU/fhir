import type { Extension, Element } from "../core/types";
import type { CodeSystemDesignation } from "../codesystemdesignation/types";
import type { CodeSystemProperty1 } from "../codesystemproperty1/types";

/** Generated from FHIR JSON Schema */

/** The CodeSystem resource is used to declare the existence of and describe a code system or code system supplement and its key properties, and optionally define a part or all of its content. */
export interface CodeSystemConcept {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** A code - a text symbol - that uniquely identifies the concept within the code system. */
  code: string;

  _code?: Element;
  /** A human readable string that is the recommended default way to present this concept to a user. */
  display?: string;

  _display?: Element;
  /** The formal definition of the concept. The code system resource does not make formal definitions required, because of the prevalence of legacy systems. However, they are highly recommended, as without them there is no formal meaning associated with the concept. */
  definition?: string;

  _definition?: Element;

  designation?: CodeSystemDesignation[];

  property?: CodeSystemProperty1[];

  concept?: CodeSystemConcept[];
}
