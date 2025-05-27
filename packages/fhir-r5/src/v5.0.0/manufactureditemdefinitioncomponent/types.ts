import type { Extension, CodeableConcept, Quantity } from "../core/types";
import type { ManufacturedItemDefinitionConstituent } from "../manufactureditemdefinitionconstituent/types";
import type { ManufacturedItemDefinitionProperty } from "../manufactureditemdefinitionproperty/types";

/** Generated from FHIR JSON Schema */

/** The definition and characteristics of a medicinal manufactured item, such as a tablet or capsule, as contained in a packaged medicinal product. */
export interface ManufacturedItemDefinitionComponent {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  type: CodeableConcept;

  function?: CodeableConcept[];

  amount?: Quantity[];

  constituent?: ManufacturedItemDefinitionConstituent[];

  property?: ManufacturedItemDefinitionProperty[];

  component?: ManufacturedItemDefinitionComponent[];
}
