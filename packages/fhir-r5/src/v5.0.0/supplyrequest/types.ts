import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  CodeableReference,
  Quantity,
  Period,
  Timing,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { SupplyRequestParameter } from "../supplyrequestparameter/types";

/** Generated from FHIR JSON Schema */

/** A record of a request to deliver a medication, substance or device used in the healthcare setting to a particular destination for a particular person or organization. */
export interface SupplyRequest {
  resourceType: `SupplyRequest`;

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

  status?: string;

  _status?: Element;

  basedOn?: Reference[];

  category?: CodeableConcept;

  priority?: string;

  _priority?: Element;

  deliverFor?: Reference;

  item: CodeableReference;

  quantity: Quantity;

  parameter?: SupplyRequestParameter[];

  occurrenceDateTime?: string;

  _occurrenceDateTime?: Element;

  occurrencePeriod?: Period;

  occurrenceTiming?: Timing;

  authoredOn?: string;

  _authoredOn?: Element;

  requester?: Reference;

  supplier?: Reference[];

  reason?: CodeableReference[];

  deliverFrom?: Reference;

  deliverTo?: Reference;
}
