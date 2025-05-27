import type { Extension, CodeableConcept, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Invoice containing collected ChargeItems from an Account with calculated individual and total price for Billing purpose. */
export interface InvoiceParticipant {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  role?: CodeableConcept;

  actor: Reference;
}
