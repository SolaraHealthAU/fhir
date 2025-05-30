import type {
  Extension,
  Element,
  CodeableConcept,
  Quantity,
} from "../core/types";
import type { MolecularSequenceRoc } from "../molecularsequenceroc/types";

/** Generated from FHIR JSON Schema */

/** Raw data describing a biological sequence. */
export interface MolecularSequenceQuality {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** INDEL / SNP / Undefined variant. */
  type: "indel" | "snp" | "unknown";

  _type?: Element;
  /** Gold standard sequence used for comparing against. */
  standardSequence?: CodeableConcept;
  /** Start position of the sequence. If the coordinate system is either 0-based or 1-based, then start position is inclusive. */
  start?: number;

  _start?: Element;
  /** End position of the sequence. If the coordinate system is 0-based then end is exclusive and does not include the last position. If the coordinate system is 1-base, then end is inclusive and includes the last position. */
  end?: number;

  _end?: Element;
  /** The score of an experimentally derived feature such as a p-value ([SO:0001685](http://www.sequenceontology.org/browser/current_svn/term/SO:0001685)). */
  score?: Quantity;
  /** Which method is used to get sequence quality. */
  method?: CodeableConcept;
  /** True positives, from the perspective of the truth data, i.e. the number of sites in the Truth Call Set for which there are paths through the Query Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event. */
  truthTP?: number;

  _truthTP?: Element;
  /** True positives, from the perspective of the query data, i.e. the number of sites in the Query Call Set for which there are paths through the Truth Call Set that are consistent with all of the alleles at this site, and for which there is an accurate genotype call for the event. */
  queryTP?: number;

  _queryTP?: Element;
  /** False negatives, i.e. the number of sites in the Truth Call Set for which there is no path through the Query Call Set that is consistent with all of the alleles at this site, or sites for which there is an inaccurate genotype call for the event. Sites with correct variant but incorrect genotype are counted here. */
  truthFN?: number;

  _truthFN?: Element;
  /** False positives, i.e. the number of sites in the Query Call Set for which there is no path through the Truth Call Set that is consistent with this site. Sites with correct variant but incorrect genotype are counted here. */
  queryFP?: number;

  _queryFP?: Element;
  /** The number of false positives where the non-REF alleles in the Truth and Query Call Sets match (i.e. cases where the truth is 1/1 and the query is 0/1 or similar). */
  gtFP?: number;

  _gtFP?: Element;
  /** QUERY.TP / (QUERY.TP + QUERY.FP). */
  precision?: number;

  _precision?: Element;
  /** TRUTH.TP / (TRUTH.TP + TRUTH.FN). */
  recall?: number;

  _recall?: Element;
  /** Harmonic mean of Recall and Precision, computed as: 2 * precision * recall / (precision + recall). */
  fScore?: number;

  _fScore?: Element;

  roc?: MolecularSequenceRoc;
}
