import type { Extension, CodeableReference, Quantity } from "../core/types";

/** Generated from FHIR JSON Schema */

/** A medically related item or items, in a container or package. */
export interface PackagedProductDefinitionContainedItem {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  item: CodeableReference;

  amount?: Quantity;
}
