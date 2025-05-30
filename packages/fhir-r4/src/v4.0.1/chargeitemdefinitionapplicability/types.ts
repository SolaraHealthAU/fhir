import type { Extension, Element } from "../core/types";

/** Generated from FHIR JSON Schema */

/** The ChargeItemDefinition resource provides the properties that apply to the (billing) codes necessary to calculate costs and prices. The properties may differ largely depending on type and realm, therefore this resource gives only a rough structure and requires profiling for each type of billing code system. */
export interface ChargeItemDefinitionApplicability {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** A brief, natural language description of the condition that effectively communicates the intended semantics. */
  description?: string;

  _description?: Element;
  /** The media type of the language for the expression, e.g. "text/cql" for Clinical Query Language expressions or "text/fhirpath" for FHIRPath expressions. */
  language?: string;

  _language?: Element;
  /** An expression that returns true or false, indicating whether the condition is satisfied. When using FHIRPath expressions, the %context environment variable must be replaced at runtime with the ChargeItem resource to which this definition is applied. */
  expression?: string;

  _expression?: Element;
}
