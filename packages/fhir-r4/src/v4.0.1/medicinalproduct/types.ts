import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Coding,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MarketingStatus } from "../marketingstatus/types";
import type { MedicinalProductName } from "../medicinalproductname/types";
import type { MedicinalProductManufacturingBusinessOperation } from "../medicinalproductmanufacturingbusinessoperation/types";
import type { MedicinalProductSpecialDesignation } from "../medicinalproductspecialdesignation/types";

/** Generated from FHIR JSON Schema */

/** Detailed definition of a medicinal product, typically for uses other than direct patient care (e.g. regulatory use). */
export interface MedicinalProduct {
  resourceType: `MedicinalProduct`;
  /** The logical id of the resource, as used in the URL for the resource. Once assigned, this value never changes. */
  id?: string;
  /** The metadata about the resource. This is content that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource. */
  meta?: Meta;
  /** A reference to a set of rules that were followed when the resource was constructed, and which must be understood when processing the content. Often, this is a reference to an implementation guide that defines the special rules along with other profiles etc. */
  implicitRules?: string;

  _implicitRules?: Element;
  /** The base language in which the resource is written. */
  language?: string;

  _language?: Element;
  /** A human-readable narrative that contains a summary of the resource and can be used to represent the content of the resource to a human. The narrative need not encode all the structured data, but is required to contain sufficient detail to make it "clinically safe" for a human to just read the narrative. Resource definitions may define what content should be represented in the narrative to ensure clinical safety. */
  text?: Narrative;
  /** These resources do not have an independent existence apart from the resource that contains them - they cannot be identified independently, and nor can they have their own independent transaction scope. */
  contained?: ResourceList[];
  /** May be used to represent additional information that is not part of the basic definition of the resource. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the resource and that modifies the understanding of the element that contains it and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer is allowed to define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Business identifier for this product. Could be an MPID. */
  identifier?: Identifier[];
  /** Regulatory type, e.g. Investigational or Authorized. */
  type?: CodeableConcept;
  /** If this medicine applies to human or veterinary uses. */
  domain?: Coding;
  /** The dose form for a single part product, or combined form of a multiple part product. */
  combinedPharmaceuticalDoseForm?: CodeableConcept;
  /** The legal status of supply of the medicinal product as classified by the regulator. */
  legalStatusOfSupply?: CodeableConcept;
  /** Whether the Medicinal Product is subject to additional monitoring for regulatory reasons. */
  additionalMonitoringIndicator?: CodeableConcept;
  /** Whether the Medicinal Product is subject to special measures for regulatory reasons. */
  specialMeasures?: string[];

  _specialMeasures?: Element[];
  /** If authorised for use in children. */
  paediatricUseIndicator?: CodeableConcept;
  /** Allows the product to be classified by various systems. */
  productClassification?: CodeableConcept[];
  /** Marketing status of the medicinal product, in contrast to marketing authorizaton. */
  marketingStatus?: MarketingStatus[];
  /** Pharmaceutical aspects of product. */
  pharmaceuticalProduct?: Reference[];
  /** Package representation for the product. */
  packagedMedicinalProduct?: Reference[];
  /** Supporting documentation, typically for regulatory submission. */
  attachedDocument?: Reference[];
  /** A master file for to the medicinal product (e.g. Pharmacovigilance System Master File). */
  masterFile?: Reference[];
  /** A product specific contact, person (in a role), or an organization. */
  contact?: Reference[];
  /** Clinical trials or studies that this product is involved in. */
  clinicalTrial?: Reference[];

  name: MedicinalProductName[];
  /** Reference to another product, e.g. for linking authorised to investigational product. */
  crossReference?: Identifier[];

  manufacturingBusinessOperation?: MedicinalProductManufacturingBusinessOperation[];

  specialDesignation?: MedicinalProductSpecialDesignation[];
}
