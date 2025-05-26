import type {
  Extension,
  Element,
  CodeableConcept,
  RelatedArtifact,
  Age,
  Period,
  Duration,
  Range,
  Timing,
  Reference,
} from "../core/types";
import type { RequestGroupCondition } from "../requestgroupcondition/types";
import type { RequestGroupRelatedAction } from "../requestgrouprelatedaction/types";

/** Generated from FHIR JSON Schema */

/** A group of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface RequestGroupAction {
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
  /** A short description of the action used to provide a summary to display to the user. */
  description?: string;

  _description?: Element;
  /** A text equivalent of the action to be performed. This provides a human-interpretable description of the action when the definition is consumed by a system that might not be capable of interpreting it dynamically. */
  textEquivalent?: string;

  _textEquivalent?: Element;
  /** Indicates how quickly the action should be addressed with respect to other actions. */
  priority?: string;

  _priority?: Element;
  /** A code that provides meaning for the action or action group. For example, a section may have a LOINC code for a section of a documentation template. */
  code?: CodeableConcept[];
  /** Didactic or other informational resources associated with the action that can be provided to the CDS recipient. Information resources can include inline text commentary and links to web resources. */
  documentation?: RelatedArtifact[];

  condition?: RequestGroupCondition[];

  relatedAction?: RequestGroupRelatedAction[];

  timingDateTime?: string;

  _timingDateTime?: Element;

  timingAge?: Age;

  timingPeriod?: Period;

  timingDuration?: Duration;

  timingRange?: Range;

  timingTiming?: Timing;
  /** The participant that should perform or be responsible for this action. */
  participant?: Reference[];
  /** The type of action to perform (create, update, remove). */
  type?: CodeableConcept;
  /** Defines the grouping behavior for the action and its children. */
  groupingBehavior?: string;

  _groupingBehavior?: Element;
  /** Defines the selection behavior for the action and its children. */
  selectionBehavior?: string;

  _selectionBehavior?: Element;
  /** Defines expectations around whether an action is required. */
  requiredBehavior?: string;

  _requiredBehavior?: Element;
  /** Defines whether the action should usually be preselected. */
  precheckBehavior?: string;

  _precheckBehavior?: Element;
  /** Defines whether the action can be selected multiple times. */
  cardinalityBehavior?: string;

  _cardinalityBehavior?: Element;
  /** The resource that is the target of the action (e.g. CommunicationRequest). */
  resource?: Reference;

  action?: RequestGroupAction[];
}
