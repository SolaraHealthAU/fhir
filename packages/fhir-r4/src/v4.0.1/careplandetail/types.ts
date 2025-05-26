import type {
  Extension,
  Element,
  CodeableConcept,
  Reference,
  Timing,
  Period,
  Quantity,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Describes the intention of how one or more practitioners intend to deliver care for a particular patient, group or community for a period of time, possibly limited to care for a specific condition or set of conditions. */
export interface CarePlanDetail {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  kind?: string;

  _kind?: Element;

  instantiatesCanonical?: string[];

  instantiatesUri?: string[];

  _instantiatesUri?: Element[];

  code?: CodeableConcept;

  reasonCode?: CodeableConcept[];

  reasonReference?: Reference[];

  goal?: Reference[];

  status?:
    | "not-started"
    | "scheduled"
    | "in-progress"
    | "on-hold"
    | "completed"
    | "cancelled"
    | "stopped"
    | "unknown"
    | "entered-in-error";

  _status?: Element;

  statusReason?: CodeableConcept;

  doNotPerform?: boolean;

  _doNotPerform?: Element;

  scheduledTiming?: Timing;

  scheduledPeriod?: Period;

  scheduledString?: string;

  _scheduledString?: Element;

  location?: Reference;

  performer?: Reference[];

  productCodeableConcept?: CodeableConcept;

  productReference?: Reference;

  dailyAmount?: Quantity;

  quantity?: Quantity;

  description?: string;

  _description?: Element;
}
