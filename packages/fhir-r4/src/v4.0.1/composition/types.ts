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
import type { CompositionAttester } from "../compositionattester/types";
import type { CompositionRelatesTo } from "../compositionrelatesto/types";
import type { CompositionEvent } from "../compositionevent/types";
import type { CompositionSection } from "../compositionsection/types";

/** Generated from FHIR JSON Schema */

/** A set of healthcare-related information that is assembled together into a single logical package that provides a single coherent statement of meaning, establishes its own context and that has clinical attestation with regard to who is making the statement. A Composition defines the structure and narrative content necessary for a document. However, a Composition alone does not constitute a document. Rather, the Composition must be the first entry in a Bundle where Bundle.type=document, and any other resources referenced from Composition must be included as subsequent entries in the Bundle (for example Patient, Practitioner, Encounter, etc.). */
export interface Composition {
  resourceType: `Composition`;
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
  /** A version-independent identifier for the Composition. This identifier stays constant as the composition is changed over time. */
  identifier?: Identifier;
  /** The workflow/clinical status of this composition. The status is a marker for the clinical standing of the document. */
  status: "preliminary" | "final" | "amended" | "entered-in-error";

  _status?: Element;
  /** Specifies the particular kind of composition (e.g. History and Physical, Discharge Summary, Progress Note). This usually equates to the purpose of making the composition. */
  type: CodeableConcept;
  /** A categorization for the type of the composition - helps for indexing and searching. This may be implied by or derived from the code specified in the Composition Type. */
  category?: CodeableConcept[];
  /** Who or what the composition is about. The composition can be about a person, (patient or healthcare practitioner), a device (e.g. a machine) or even a group of subjects (such as a document about a herd of livestock, or a set of patients that share a common exposure). */
  subject?: Reference;
  /** Describes the clinical encounter or type of care this documentation is associated with. */
  encounter?: Reference;
  /** The composition editing time, when the composition was last logically changed by the author. */
  date: string;

  _date?: Element;
  /** Identifies who is responsible for the information in the composition, not necessarily who typed it in. */
  author: Reference[];
  /** Official human-readable label for the composition. */
  title: string;

  _title?: Element;
  /** The code specifying the level of confidentiality of the Composition. */
  confidentiality?: string;

  _confidentiality?: Element;

  attester?: CompositionAttester[];
  /** Identifies the organization or group who is responsible for ongoing maintenance of and access to the composition/document information. */
  custodian?: Reference;

  relatesTo?: CompositionRelatesTo[];

  event?: CompositionEvent[];

  section?: CompositionSection[];
}
