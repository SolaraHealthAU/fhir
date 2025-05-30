import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Period,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { InsurancePlanContact } from "../insuranceplancontact/types";
import type { InsurancePlanCoverage } from "../insuranceplancoverage/types";
import type { InsurancePlanPlan } from "../insuranceplanplan/types";

/** Generated from FHIR JSON Schema */

/** Details of a Health Insurance product/plan provided by an organization. */
export interface InsurancePlan {
  resourceType: `InsurancePlan`;
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
  /** Business identifiers assigned to this health insurance product which remain constant as the resource is updated and propagates from server to server. */
  identifier?: Identifier[];
  /** The current state of the health insurance product. */
  status?: "draft" | "active" | "retired" | "unknown";

  _status?: Element;
  /** The kind of health insurance product. */
  type?: CodeableConcept[];
  /** Official name of the health insurance product as designated by the owner. */
  name?: string;

  _name?: Element;
  /** A list of alternate names that the product is known as, or was known as in the past. */
  alias?: string[];

  _alias?: Element[];
  /** The period of time that the health insurance product is available. */
  period?: Period;
  /** The entity that is providing  the health insurance product and underwriting the risk.  This is typically an insurance carriers, other third-party payers, or health plan sponsors comonly referred to as 'payers'. */
  ownedBy?: Reference;
  /** An organization which administer other services such as underwriting, customer service and/or claims processing on behalf of the health insurance product owner. */
  administeredBy?: Reference;
  /** The geographic region in which a health insurance product's benefits apply. */
  coverageArea?: Reference[];

  contact?: InsurancePlanContact[];
  /** The technical endpoints providing access to services operated for the health insurance product. */
  endpoint?: Reference[];
  /** Reference to the network included in the health insurance product. */
  network?: Reference[];

  coverage?: InsurancePlanCoverage[];

  plan?: InsurancePlanPlan[];
}
