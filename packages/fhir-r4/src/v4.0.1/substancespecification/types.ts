import type {
  Meta,
  Element,
  Extension,
  Identifier,
  CodeableConcept,
  Reference,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { SubstanceSpecificationMoiety } from "../substancespecificationmoiety/types";
import type { SubstanceSpecificationProperty } from "../substancespecificationproperty/types";
import type { SubstanceSpecificationStructure } from "../substancespecificationstructure/types";
import type { SubstanceSpecificationCode } from "../substancespecificationcode/types";
import type { SubstanceSpecificationName } from "../substancespecificationname/types";
import type { SubstanceSpecificationMolecularWeight } from "../substancespecificationmolecularweight/types";
import type { SubstanceSpecificationRelationship } from "../substancespecificationrelationship/types";

/** Generated from FHIR JSON Schema */

/** The detailed description of a substance, typically at a level beyond what is used for prescribing. */
export interface SubstanceSpecification {
  resourceType: `SubstanceSpecification`;
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
  /** Identifier by which this substance is known. */
  identifier?: Identifier;
  /** High level categorization, e.g. polymer or nucleic acid. */
  type?: CodeableConcept;
  /** Status of substance within the catalogue e.g. approved. */
  status?: CodeableConcept;
  /** If the substance applies to only human or veterinary use. */
  domain?: CodeableConcept;
  /** Textual description of the substance. */
  description?: string;

  _description?: Element;
  /** Supporting literature. */
  source?: Reference[];
  /** Textual comment about this record of a substance. */
  comment?: string;

  _comment?: Element;

  moiety?: SubstanceSpecificationMoiety[];

  property?: SubstanceSpecificationProperty[];
  /** General information detailing this substance. */
  referenceInformation?: Reference;

  structure?: SubstanceSpecificationStructure;

  code?: SubstanceSpecificationCode[];

  name?: SubstanceSpecificationName[];

  molecularWeight?: SubstanceSpecificationMolecularWeight[];

  relationship?: SubstanceSpecificationRelationship[];
  /** Data items specific to nucleic acids. */
  nucleicAcid?: Reference;
  /** Data items specific to polymers. */
  polymer?: Reference;
  /** Data items specific to proteins. */
  protein?: Reference;
  /** Material or taxonomic/anatomical source for the substance. */
  sourceMaterial?: Reference;
}
