import type { Extension, Element } from "../core/types";
import type { CapabilityStatementSecurity } from "../capabilitystatementsecurity/types";
import type { CapabilityStatementResource } from "../capabilitystatementresource/types";
import type { CapabilityStatementInteraction1 } from "../capabilitystatementinteraction1/types";
import type { CapabilityStatementSearchParam } from "../capabilitystatementsearchparam/types";
import type { CapabilityStatementOperation } from "../capabilitystatementoperation/types";

/** Generated from FHIR JSON Schema */

/** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface CapabilityStatementRest {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Identifies whether this portion of the statement is describing the ability to initiate or receive restful operations. */
  mode: "client" | "server";

  _mode?: Element;
  /** Information about the system's restful capabilities that apply across all applications, such as security. */
  documentation?: string;

  _documentation?: Element;

  security?: CapabilityStatementSecurity;

  resource?: CapabilityStatementResource[];

  interaction?: CapabilityStatementInteraction1[];

  searchParam?: CapabilityStatementSearchParam[];

  operation?: CapabilityStatementOperation[];
  /** An absolute URI which is a reference to the definition of a compartment that the system supports. The reference is to a CompartmentDefinition resource by its canonical URL . */
  compartment?: string[];
}
