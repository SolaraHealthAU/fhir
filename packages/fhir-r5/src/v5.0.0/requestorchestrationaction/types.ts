import type {
  Extension,
  Element,
  CodeableConcept,
  RelatedArtifact,
  Reference,
  Age,
  Period,
  Duration,
  Range,
  Timing,
  CodeableReference,
} from "../core/types";
import type { RequestOrchestrationCondition } from "../requestorchestrationcondition/types";
import type { RequestOrchestrationInput } from "../requestorchestrationinput/types";
import type { RequestOrchestrationOutput } from "../requestorchestrationoutput/types";
import type { RequestOrchestrationRelatedAction } from "../requestorchestrationrelatedaction/types";
import type { RequestOrchestrationParticipant } from "../requestorchestrationparticipant/types";
import type { RequestOrchestrationDynamicValue } from "../requestorchestrationdynamicvalue/types";

/** Generated from FHIR JSON Schema */

/** A set of related requests that can be used to capture intended activities that have inter-dependencies such as "give this medication after that one". */
export interface RequestOrchestrationAction {
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

  code?: CodeableConcept[];

  documentation?: RelatedArtifact[];

  goal?: Reference[];

  condition?: RequestOrchestrationCondition[];

  input?: RequestOrchestrationInput[];

  output?: RequestOrchestrationOutput[];

  relatedAction?: RequestOrchestrationRelatedAction[];

  timingDateTime?: string;

  _timingDateTime?: Element;

  timingAge?: Age;

  timingPeriod?: Period;

  timingDuration?: Duration;

  timingRange?: Range;

  timingTiming?: Timing;

  location?: CodeableReference;

  participant?: RequestOrchestrationParticipant[];

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

  resource?: Reference;

  definitionCanonical?: string;

  _definitionCanonical?: Element;

  definitionUri?: string;

  _definitionUri?: Element;

  transform?: string;

  dynamicValue?: RequestOrchestrationDynamicValue[];

  action?: RequestOrchestrationAction[];
}
