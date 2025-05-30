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
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ObservationReferenceRange } from "../observationreferencerange/types";
import type { ObservationComponent } from "../observationcomponent/types";

/** Generated from FHIR JSON Schema */

/** Measurements and simple assertions made about a patient, device or other subject. */
export interface Observation {
  resourceType: `Observation`;
  /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
  id?: string;
  /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  meta?: Meta;
  /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
  implicitRules?: string;

  _implicitRules?: Element;
  /** The base language in which the resource is written. */
  language?: string;

  _language?: Element;
  /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
  text?: Narrative;
  /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
  contained?: ResourceList[];
  /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** A unique identifier assigned to this observation. */
  identifier?: Identifier[];
  /** A plan, proposal or order that is fulfilled in whole or in part by this event.  For example, a MedicationRequest may require a patient to have laboratory test performed before  it is dispensed. */
  basedOn?: Reference[];
  /** A larger event of which this particular Observation is a component or step.  For example,  an observation as part of a procedure. */
  partOf?: Reference[];
  /** The status of the result value. */
  status:
    | "registered"
    | "preliminary"
    | "final"
    | "amended"
    | "corrected"
    | "cancelled"
    | "entered-in-error"
    | "unknown";

  _status?: Element;
  /** A code that classifies the general type of observation being made. */
  category?: CodeableConcept[];
  /** Describes what was observed. Sometimes this is called the observation "name". */
  code: CodeableConcept;
  /** The patient, or group of patients, location, or device this observation is about and into whose record the observation is placed. If the actual focus of the observation is different from the subject (or a sample of, part, or region of the subject), the `focus` element or the `code` itself specifies the actual focus of the observation. */
  subject?: Reference;
  /** The actual focus of an observation when it is not the patient of record representing something or someone associated with the patient such as a spouse, parent, fetus, or donor. For example, fetus observations in a mother's record.  The focus of an observation could also be an existing condition,  an intervention, the subject's diet,  another observation of the subject,  or a body structure such as tumor or implanted device.   An example use case would be using the Observation resource to capture whether the mother is trained to change her child's tracheostomy tube. In this example, the child is the patient of record and the mother is the focus. */
  focus?: Reference[];
  /** The healthcare event  (e.g. a patient and healthcare provider interaction) during which this observation is made. */
  encounter?: Reference;

  effectiveDateTime?: string;

  _effectiveDateTime?: Element;

  effectivePeriod?: Period;

  effectiveTiming?: Timing;

  effectiveInstant?: string;

  _effectiveInstant?: Element;
  /** The date and time this version of the observation was made available to providers, typically after the results have been reviewed and verified. */
  issued?: string;

  _issued?: Element;
  /** Who was responsible for asserting the observed value as "true". */
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
  /** Provides a reason why the expected value in the element Observation.value[x] is missing. */
  dataAbsentReason?: CodeableConcept;
  /** A categorical assessment of an observation value.  For example, high, low, normal. */
  interpretation?: CodeableConcept[];
  /** Comments about the observation or the results. */
  note?: Annotation[];
  /** Indicates the site on the subject's body where the observation was made (i.e. the target site). */
  bodySite?: CodeableConcept;
  /** Indicates the mechanism used to perform the observation. */
  method?: CodeableConcept;
  /** The specimen that was used when this observation was made. */
  specimen?: Reference;
  /** The device used to generate the observation data. */
  device?: Reference;

  referenceRange?: ObservationReferenceRange[];
  /** This observation is a group observation (e.g. a battery, a panel of tests, a set of vital sign measurements) that includes the target as a member of the group. */
  hasMember?: Reference[];
  /** The target resource that represents a measurement from which this observation value is derived. For example, a calculated anion gap or a fetal measurement based on an ultrasound image. */
  derivedFrom?: Reference[];

  component?: ObservationComponent[];
}
