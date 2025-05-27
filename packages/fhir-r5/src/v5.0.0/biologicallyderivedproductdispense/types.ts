import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  Quantity,
  Annotation,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { BiologicallyDerivedProductDispensePerformer } from "../biologicallyderivedproductdispenseperformer/types";

/** Generated from FHIR JSON Schema */

/** This resource reflects an instance of a biologically derived product dispense. The supply or dispense of a biologically derived product from the supply organization or department (e.g. hospital transfusion laboratory) to the clinical team responsible for clinical application. */
export interface BiologicallyDerivedProductDispense {
  resourceType: `BiologicallyDerivedProductDispense`;

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

  basedOn?: Reference[];

  partOf?: Reference[];

  status?: string;

  _status?: Element;

  originRelationshipType?: CodeableConcept;

  product: Reference;

  patient: Reference;

  matchStatus?: CodeableConcept;

  performer?: BiologicallyDerivedProductDispensePerformer[];

  location?: Reference;

  quantity?: Quantity;

  preparedDate?: string;

  _preparedDate?: Element;

  whenHandedOver?: string;

  _whenHandedOver?: Element;

  destination?: Reference;

  note?: Annotation[];

  usageInstruction?: string;

  _usageInstruction?: Element;
}
