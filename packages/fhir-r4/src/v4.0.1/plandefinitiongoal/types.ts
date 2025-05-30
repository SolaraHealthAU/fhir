import type {
  Extension,
  CodeableConcept,
  RelatedArtifact,
} from "../core/types";
import type { PlanDefinitionTarget } from "../plandefinitiontarget/types";

/** Generated from FHIR JSON Schema */

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
export interface PlanDefinitionGoal {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Indicates a category the goal falls within. */
  category?: CodeableConcept;
  /** Human-readable and/or coded description of a specific desired objective of care, such as "control blood pressure" or "negotiate an obstacle course" or "dance with child at wedding". */
  description: CodeableConcept;
  /** Identifies the expected level of importance associated with reaching/sustaining the defined goal. */
  priority?: CodeableConcept;
  /** The event after which the goal should begin being pursued. */
  start?: CodeableConcept;
  /** Identifies problems, conditions, issues, or concerns the goal is intended to address. */
  addresses?: CodeableConcept[];
  /** Didactic or other informational resources associated with the goal that provide further supporting information about the goal. Information resources can include inline text commentary and links to web resources. */
  documentation?: RelatedArtifact[];

  target?: PlanDefinitionTarget[];
}
