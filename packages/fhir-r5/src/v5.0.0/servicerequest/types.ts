import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  CodeableReference,
  Quantity,
  Ratio,
  Range,
  Period,
  Timing,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ServiceRequestOrderDetail } from "../servicerequestorderdetail/types";
import type { ServiceRequestPatientInstruction } from "../servicerequestpatientinstruction/types";

/** Generated from FHIR JSON Schema */

/** A record of a request for service such as diagnostic investigations, treatments, or operations to be performed. */
export interface ServiceRequest {
  resourceType: `ServiceRequest`;

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

  instantiatesCanonical?: string[];

  instantiatesUri?: string[];

  _instantiatesUri?: Element[];

  basedOn?: Reference[];

  replaces?: Reference[];

  requisition?: Identifier;

  status?: string;

  _status?: Element;

  intent?: string;

  _intent?: Element;

  category?: CodeableConcept[];

  priority?: string;

  _priority?: Element;

  doNotPerform?: boolean;

  _doNotPerform?: Element;

  code?: CodeableReference;

  orderDetail?: ServiceRequestOrderDetail[];

  quantityQuantity?: Quantity;

  quantityRatio?: Ratio;

  quantityRange?: Range;

  subject: Reference;

  focus?: Reference[];

  encounter?: Reference;

  occurrenceDateTime?: string;

  _occurrenceDateTime?: Element;

  occurrencePeriod?: Period;

  occurrenceTiming?: Timing;

  asNeededBoolean?: boolean;

  _asNeededBoolean?: Element;

  asNeededCodeableConcept?: CodeableConcept;

  authoredOn?: string;

  _authoredOn?: Element;

  requester?: Reference;

  performerType?: CodeableConcept;

  performer?: Reference[];

  location?: CodeableReference[];

  reason?: CodeableReference[];

  insurance?: Reference[];

  supportingInfo?: CodeableReference[];

  specimen?: Reference[];

  bodySite?: CodeableConcept[];

  bodyStructure?: Reference;

  note?: Annotation[];

  patientInstruction?: ServiceRequestPatientInstruction[];

  relevantHistory?: Reference[];
}
