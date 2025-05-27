import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Period,
  Timing,
  Quantity,
  Range,
  Ratio,
  SampledData,
  Attachment,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ObservationTriggeredBy } from "../observationtriggeredby/types";
import type { ObservationReferenceRange } from "../observationreferencerange/types";
import type { ObservationComponent } from "../observationcomponent/types";

/** Generated from FHIR JSON Schema */

/** Measurements and simple assertions made about a patient, device or other subject. */
export interface Observation {
  resourceType: `Observation`;

  id?: string;

  meta?: Meta;

  implicitRules?: string;

  _implicitRules?: Element;

  language?: string;

  _language?: Element;

  text?: Narrative;

  contained?: ResourceList[];

  extension?: Extension[];

  modifierExtension?: Extension[];

  identifier?: Identifier[];

  instantiatesCanonical?: string;

  _instantiatesCanonical?: Element;

  instantiatesReference?: Reference;

  basedOn?: Reference[];

  triggeredBy?: ObservationTriggeredBy[];

  partOf?: Reference[];

  status?: string;

  _status?: Element;

  category?: CodeableConcept[];

  code: CodeableConcept;

  subject?: Reference;

  focus?: Reference[];

  encounter?: Reference;

  effectiveDateTime?: string;

  _effectiveDateTime?: Element;

  effectivePeriod?: Period;

  effectiveTiming?: Timing;

  effectiveInstant?: string;

  _effectiveInstant?: Element;

  issued?: string;

  _issued?: Element;

  performer?: Reference[];

  valueQuantity?: Quantity;

  valueCodeableConcept?: CodeableConcept;

  valueString?: string;

  _valueString?: Element;

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueInteger?: number;

  _valueInteger?: Element;

  valueRange?: Range;

  valueRatio?: Ratio;

  valueSampledData?: SampledData;

  valueTime?: string;

  _valueTime?: Element;

  valueDateTime?: string;

  _valueDateTime?: Element;

  valuePeriod?: Period;

  valueAttachment?: Attachment;

  valueReference?: Reference;

  dataAbsentReason?: CodeableConcept;

  interpretation?: CodeableConcept[];

  note?: Annotation[];

  bodySite?: CodeableConcept;

  bodyStructure?: Reference;

  method?: CodeableConcept;

  specimen?: Reference;

  device?: Reference;

  referenceRange?: ObservationReferenceRange[];

  hasMember?: Reference[];

  derivedFrom?: Reference[];

  component?: ObservationComponent[];
}
