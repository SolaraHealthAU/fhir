import type {
  Meta,
  Element,
  Extension,
  Coding,
  CodeableConcept,
  Reference,
  Identifier,
  Range,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { BiologicallyDerivedProductCollection } from "../biologicallyderivedproductcollection/types";
import type { BiologicallyDerivedProductProperty } from "../biologicallyderivedproductproperty/types";

/** Generated from FHIR JSON Schema */

/** This resource reflects an instance of a biologically derived product. A material substance originating from a biological entity intended to be transplanted or infused
into another (possibly the same) biological entity. */
export interface BiologicallyDerivedProduct {
  resourceType: `BiologicallyDerivedProduct`;

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

  productCategory?: Coding;

  productCode?: CodeableConcept;

  parent?: Reference[];

  request?: Reference[];

  identifier?: Identifier[];

  biologicalSourceEvent?: Identifier;

  processingFacility?: Reference[];

  division?: string;

  _division?: Element;

  productStatus?: Coding;

  expirationDate?: string;

  _expirationDate?: Element;

  collection?: BiologicallyDerivedProductCollection;

  storageTempRequirements?: Range;

  property?: BiologicallyDerivedProductProperty[];
}
