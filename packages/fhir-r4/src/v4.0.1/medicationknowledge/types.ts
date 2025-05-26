import type {
  Meta,
  Element,
  Extension,
  CodeableConcept,
  Reference,
  Quantity,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MedicationKnowledgeRelatedMedicationKnowledge } from "../medicationknowledgerelatedmedicationknowledge/types";
import type { MedicationKnowledgeMonograph } from "../medicationknowledgemonograph/types";
import type { MedicationKnowledgeIngredient } from "../medicationknowledgeingredient/types";
import type { MedicationKnowledgeCost } from "../medicationknowledgecost/types";
import type { MedicationKnowledgeMonitoringProgram } from "../medicationknowledgemonitoringprogram/types";
import type { MedicationKnowledgeAdministrationGuidelines } from "../medicationknowledgeadministrationguidelines/types";
import type { MedicationKnowledgeMedicineClassification } from "../medicationknowledgemedicineclassification/types";
import type { MedicationKnowledgePackaging } from "../medicationknowledgepackaging/types";
import type { MedicationKnowledgeDrugCharacteristic } from "../medicationknowledgedrugcharacteristic/types";
import type { MedicationKnowledgeRegulatory } from "../medicationknowledgeregulatory/types";
import type { MedicationKnowledgeKinetics } from "../medicationknowledgekinetics/types";

/** Generated from FHIR JSON Schema */

/** Information about a medication that is used to support knowledge. */
export interface MedicationKnowledge {
  resourceType: `MedicationKnowledge`;
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
  /** A code that specifies this medication, or a textual description if no code is available. Usage note: This could be a standard medication code such as a code from RxNorm, SNOMED CT, IDMP etc. It could also be a national or local formulary code, optionally with translations to other code systems. */
  code?: CodeableConcept;
  /** A code to indicate if the medication is in active use.  The status refers to the validity about the information of the medication and not to its medicinal properties. */
  status?: string;

  _status?: Element;
  /** Describes the details of the manufacturer of the medication product.  This is not intended to represent the distributor of a medication product. */
  manufacturer?: Reference;
  /** Describes the form of the item.  Powder; tablets; capsule. */
  doseForm?: CodeableConcept;
  /** Specific amount of the drug in the packaged product.  For example, when specifying a product that has the same strength (For example, Insulin glargine 100 unit per mL solution for injection), this attribute provides additional clarification of the package amount (For example, 3 mL, 10mL, etc.). */
  amount?: Quantity;
  /** Additional names for a medication, for example, the name(s) given to a medication in different countries.  For example, acetaminophen and paracetamol or salbutamol and albuterol. */
  synonym?: string[];

  _synonym?: Element[];

  relatedMedicationKnowledge?: MedicationKnowledgeRelatedMedicationKnowledge[];
  /** Associated or related medications.  For example, if the medication is a branded product (e.g. Crestor), this is the Therapeutic Moeity (e.g. Rosuvastatin) or if this is a generic medication (e.g. Rosuvastatin), this would link to a branded product (e.g. Crestor). */
  associatedMedication?: Reference[];
  /** Category of the medication or product (e.g. branded product, therapeutic moeity, generic product, innovator product, etc.). */
  productType?: CodeableConcept[];

  monograph?: MedicationKnowledgeMonograph[];

  ingredient?: MedicationKnowledgeIngredient[];
  /** The instructions for preparing the medication. */
  preparationInstruction?: string;

  _preparationInstruction?: Element;
  /** The intended or approved route of administration. */
  intendedRoute?: CodeableConcept[];

  cost?: MedicationKnowledgeCost[];

  monitoringProgram?: MedicationKnowledgeMonitoringProgram[];

  administrationGuidelines?: MedicationKnowledgeAdministrationGuidelines[];

  medicineClassification?: MedicationKnowledgeMedicineClassification[];

  packaging?: MedicationKnowledgePackaging;

  drugCharacteristic?: MedicationKnowledgeDrugCharacteristic[];
  /** Potential clinical issue with or between medication(s) (for example, drug-drug interaction, drug-disease contraindication, drug-allergy interaction, etc.). */
  contraindication?: Reference[];

  regulatory?: MedicationKnowledgeRegulatory[];

  kinetics?: MedicationKnowledgeKinetics[];
}
