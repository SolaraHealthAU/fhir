import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Coding,
  ContactDetail,
  UsageContext,
  CodeableConcept,
  Period,
  RelatedArtifact,
  Reference,
  Timing,
  Age,
  Range,
  Duration,
  CodeableReference,
  Quantity,
  Dosage,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ActivityDefinitionParticipant } from "../activitydefinitionparticipant/types";
import type { ActivityDefinitionDynamicValue } from "../activitydefinitiondynamicvalue/types";

/** Generated from FHIR JSON Schema */

/** This resource allows for the definition of some activity to be performed, independent of a particular patient, practitioner, or other performance context. */
export interface ActivityDefinition {
  resourceType: `ActivityDefinition`;

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

  url?: string;

  _url?: Element;

  identifier?: Identifier[];

  version?: string;

  _version?: Element;

  versionAlgorithmString?: string;

  _versionAlgorithmString?: Element;

  versionAlgorithmCoding?: Coding;

  name?: string;

  _name?: Element;

  title?: string;

  _title?: Element;

  status?: string;

  _status?: Element;

  experimental?: boolean;

  _experimental?: Element;

  date?: string;

  _date?: Element;

  publisher?: string;

  _publisher?: Element;

  contact?: ContactDetail[];

  description?: string;

  _description?: Element;

  useContext?: UsageContext[];

  jurisdiction?: CodeableConcept[];

  purpose?: string;

  _purpose?: Element;

  copyright?: string;

  _copyright?: Element;

  copyrightLabel?: string;

  _copyrightLabel?: Element;

  approvalDate?: string;

  _approvalDate?: Element;

  lastReviewDate?: string;

  _lastReviewDate?: Element;

  effectivePeriod?: Period;

  topic?: CodeableConcept[];

  author?: ContactDetail[];

  editor?: ContactDetail[];

  reviewer?: ContactDetail[];

  endorser?: ContactDetail[];

  relatedArtifact?: RelatedArtifact[];

  subtitle?: string;

  _subtitle?: Element;

  subjectCodeableConcept?: CodeableConcept;

  subjectReference?: Reference;

  subjectCanonical?: string;

  _subjectCanonical?: Element;

  usage?: string;

  _usage?: Element;

  library?: string[];

  kind?: string;

  _kind?: Element;

  profile?: string;

  code?: CodeableConcept;

  intent?: string;

  _intent?: Element;

  priority?: string;

  _priority?: Element;

  doNotPerform?: boolean;

  _doNotPerform?: Element;

  timingTiming?: Timing;

  timingAge?: Age;

  timingRange?: Range;

  timingDuration?: Duration;

  asNeededBoolean?: boolean;

  _asNeededBoolean?: Element;

  asNeededCodeableConcept?: CodeableConcept;

  location?: CodeableReference;

  participant?: ActivityDefinitionParticipant[];

  productReference?: Reference;

  productCodeableConcept?: CodeableConcept;

  quantity?: Quantity;

  dosage?: Dosage[];

  bodySite?: CodeableConcept[];

  specimenRequirement?: string[];

  observationRequirement?: string[];

  observationResultRequirement?: string[];

  transform?: string;

  dynamicValue?: ActivityDefinitionDynamicValue[];
}
