import type {
  Extension,
  Element,
  CodeableConcept,
  RelatedArtifact,
  Reference,
  TriggerDefinition,
  DataRequirement,
  Age,
  Period,
  Duration,
  Range,
  Timing,
} from "../core/types";
import type { PlanDefinitionCondition } from "../plandefinitioncondition/types";
import type { PlanDefinitionRelatedAction } from "../plandefinitionrelatedaction/types";
import type { PlanDefinitionParticipant } from "../plandefinitionparticipant/types";
import type { PlanDefinitionDynamicValue } from "../plandefinitiondynamicvalue/types";

/** Generated from FHIR JSON Schema */

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical artifacts such as clinical decision support rules, order sets and protocols. */
export interface PlanDefinitionAction {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** A user-visible prefix for the action. */
  prefix?: string;

  _prefix?: Element;
  /** The title of the action displayed to a user. */
  title?: string;

  _title?: Element;
  /** A brief description of the action used to provide a summary to display to the user. */
  description?: string;

  _description?: Element;
  /** A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically. */
  textEquivalent?: string;

  _textEquivalent?: Element;
  /** Indicates how quickly the action should be addressed with respect to other actions. */
  priority?: string;

  _priority?: Element;
  /** A code that provides meaning for the action or action group. For example, a section may have a LOINC code for the section of a documentation template. */
  code?: CodeableConcept[];
  /** A description of why this action is necessary or appropriate. */
  reason?: CodeableConcept[];
  /** Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources. */
  documentation?: RelatedArtifact[];
  /** Identifies goals that this action supports. The reference must be to a goal element defined within this plan definition. */
  goalId?: string[];

  _goalId?: Element[];

  subjectCodeableConcept?: CodeableConcept;

  subjectReference?: Reference;
  /** A description of when the action should be triggered. */
  trigger?: TriggerDefinition[];

  condition?: PlanDefinitionCondition[];
  /** Defines input data requirements for the action. */
  input?: DataRequirement[];
  /** Defines the outputs of the action, if any. */
  output?: DataRequirement[];

  relatedAction?: PlanDefinitionRelatedAction[];

  timingDateTime?: string;

  _timingDateTime?: Element;

  timingAge?: Age;

  timingPeriod?: Period;

  timingDuration?: Duration;

  timingRange?: Range;

  timingTiming?: Timing;

  participant?: PlanDefinitionParticipant[];
  /** The type of action to perform (create, update, remove). */
  type?: CodeableConcept;
  /** Defines the grouping behavior for the action and its children. */
  groupingBehavior?: "visual-group" | "logical-group" | "sentence-group";

  _groupingBehavior?: Element;
  /** Defines the selection behavior for the action and its children. */
  selectionBehavior?:
    | "any"
    | "all"
    | "all-or-none"
    | "exactly-one"
    | "at-most-one"
    | "one-or-more";

  _selectionBehavior?: Element;
  /** Defines the required behavior for the action. */
  requiredBehavior?: "must" | "could" | "must-unless-documented";

  _requiredBehavior?: Element;
  /** Defines whether the action should usually be preselected. */
  precheckBehavior?: "yes" | "no";

  _precheckBehavior?: Element;
  /** Defines whether the action can be selected multiple times. */
  cardinalityBehavior?: "single" | "multiple";

  _cardinalityBehavior?: Element;

  definitionCanonical?: string;

  _definitionCanonical?: Element;

  definitionUri?: string;

  _definitionUri?: Element;
  /** A reference to a StructureMap resource that defines a transform that can be executed to produce the intent resource using the ActivityDefinition instance as the input. */
  transform?: string;

  dynamicValue?: PlanDefinitionDynamicValue[];

  action?: PlanDefinitionAction[];
}
