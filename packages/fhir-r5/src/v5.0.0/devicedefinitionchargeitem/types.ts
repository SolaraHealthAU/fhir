import type {
  Extension,
  CodeableReference,
  Quantity,
  Period,
  UsageContext,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** The characteristics, operational status and capabilities of a medical-related component of a medical device. */
export interface DeviceDefinitionChargeItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  chargeItemCode: CodeableReference;

  count: Quantity;

  effectivePeriod?: Period;

  useContext?: UsageContext[];
}
