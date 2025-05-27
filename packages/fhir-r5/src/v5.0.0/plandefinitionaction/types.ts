import type {
  Extension,
  Element,
  CodeableConcept,
  RelatedArtifact,
  Reference,
  TriggerDefinition,
  Age,
  Duration,
  Range,
  Timing,
  CodeableReference,
} from "../core/types";
import type { PlanDefinitionCondition } from "../plandefinitioncondition/types";
import type { PlanDefinitionInput } from "../plandefinitioninput/types";
import type { PlanDefinitionOutput } from "../plandefinitionoutput/types";
import type { PlanDefinitionRelatedAction } from "../plandefinitionrelatedaction/types";
import type { PlanDefinitionParticipant } from "../plandefinitionparticipant/types";
import type { PlanDefinitionDynamicValue } from "../plandefinitiondynamicvalue/types";

/** Generated from FHIR JSON Schema */

/** This resource allows for the definition of various types of plans as a sharable, consumable, and executable artifact. The resource is general enough to support the description of a broad range of clinical and non-clinical artifacts such as clinical decision support rules, order sets, protocols, and drug quality specifications. */
export interface PlanDefinitionAction {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  linkId?: string;

  _linkId?: Element;

  prefix?: string;

  _prefix?: Element;

  title?: string;

  _title?: Element;

  description?: string;

  _description?: Element;

  textEquivalent?: string;

  _textEquivalent?: Element;

  priority?: string;

  _priority?: Element;

  code?: CodeableConcept;

  reason?: CodeableConcept[];

  documentation?: RelatedArtifact[];

  goalId?: string[];

  _goalId?: Element[];

  subjectCodeableConcept?: CodeableConcept;

  subjectReference?: Reference;

  subjectCanonical?: string;

  _subjectCanonical?: Element;

  trigger?: TriggerDefinition[];

  condition?: PlanDefinitionCondition[];

  input?: PlanDefinitionInput[];

  output?: PlanDefinitionOutput[];

  relatedAction?: PlanDefinitionRelatedAction[];

  timingAge?: Age;

  timingDuration?: Duration;

  timingRange?: Range;

  timingTiming?: Timing;

  location?: CodeableReference;

  participant?: PlanDefinitionParticipant[];

  type?: CodeableConcept;

  groupingBehavior?: string;

  _groupingBehavior?: Element;

  selectionBehavior?: string;

  _selectionBehavior?: Element;

  requiredBehavior?: string;

  _requiredBehavior?: Element;

  precheckBehavior?: string;

  _precheckBehavior?: Element;

  cardinalityBehavior?: string;

  _cardinalityBehavior?: Element;

  definitionCanonical?: string;

  _definitionCanonical?: Element;

  definitionUri?: string;

  _definitionUri?: Element;

  transform?: string;

  dynamicValue?: PlanDefinitionDynamicValue[];

  action?: PlanDefinitionAction[];
}
