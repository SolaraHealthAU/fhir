import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  Quantity,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MolecularSequenceReferenceSeq } from "../molecularsequencereferenceseq/types";
import type { MolecularSequenceVariant } from "../molecularsequencevariant/types";
import type { MolecularSequenceQuality } from "../molecularsequencequality/types";
import type { MolecularSequenceRepository } from "../molecularsequencerepository/types";
import type { MolecularSequenceStructureVariant } from "../molecularsequencestructurevariant/types";

/** Generated from FHIR JSON Schema */

/** Raw data describing a biological sequence. */
export interface MolecularSequence {
  resourceType: `MolecularSequence`;
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
  /** A unique identifier for this particular sequence instance. This is a FHIR-defined id. */
  identifier?: Identifier[];
  /** Amino Acid Sequence/ DNA Sequence / RNA Sequence. */
  type?: "aa" | "dna" | "rna";

  _type?: Element;
  /** Whether the sequence is numbered starting at 0 (0-based numbering or coordinates, inclusive start, exclusive end) or starting at 1 (1-based numbering, inclusive start and inclusive end). */
  coordinateSystem: number;

  _coordinateSystem?: Element;
  /** The patient whose sequencing results are described by this resource. */
  patient?: Reference;
  /** Specimen used for sequencing. */
  specimen?: Reference;
  /** The method for sequencing, for example, chip information. */
  device?: Reference;
  /** The organization or lab that should be responsible for this result. */
  performer?: Reference;
  /** The number of copies of the sequence of interest. (RNASeq). */
  quantity?: Quantity;

  referenceSeq?: MolecularSequenceReferenceSeq;

  variant?: MolecularSequenceVariant[];
  /** Sequence that was observed. It is the result marked by referenceSeq along with variant records on referenceSeq. This shall start from referenceSeq.windowStart and end by referenceSeq.windowEnd. */
  observedSeq?: string;

  _observedSeq?: Element;

  quality?: MolecularSequenceQuality[];
  /** Coverage (read depth or depth) is the average number of reads representing a given nucleotide in the reconstructed sequence. */
  readCoverage?: number;

  _readCoverage?: Element;

  repository?: MolecularSequenceRepository[];
  /** Pointer to next atomic sequence which at most contains one variant. */
  pointer?: Reference[];

  structureVariant?: MolecularSequenceStructureVariant[];
}
