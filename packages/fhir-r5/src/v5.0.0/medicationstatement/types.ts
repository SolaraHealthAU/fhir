import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Reference,
  CodeableConcept,
  CodeableReference,
  Period,
  Timing,
  Annotation,
  Dosage,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { MedicationStatementAdherence } from "../medicationstatementadherence/types";

/** Generated from FHIR JSON Schema */

/** A record of a medication that is being consumed by a patient.   A MedicationStatement may indicate that the patient may be taking the medication now or has taken the medication in the past or will be taking the medication in the future.  The source of this information can be the patient, significant other (such as a family member or spouse), or a clinician.  A common scenario where this information is captured is during the history taking process during a patient visit or stay.   The medication information may come from sources such as the patient's memory, from a prescription bottle,  or from a list of medications the patient, clinician or other party maintains. 

The primary difference between a medicationstatement and a medicationadministration is that the medication administration has complete administration information and is based on actual administration information from the person who administered the medication.  A medicationstatement is often, if not always, less specific.  There is no required date/time when the medication was administered, in fact we only know that a source has reported the patient is taking this medication, where details such as time, quantity, or rate or even medication product may be incomplete or missing or less precise.  As stated earlier, the Medication Statement information may come from the patient's memory, from a prescription bottle or from a list of medications the patient, clinician or other party maintains.  Medication administration is more formal and is not missing detailed information.

The MedicationStatement resource was previously called MedicationStatement. */
export interface MedicationStatement {
  resourceType: `MedicationStatement`;

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

  identifier?: Identifier[];

  partOf?: Reference[];

  status?: string;

  _status?: Element;

  category?: CodeableConcept[];

  medication: CodeableReference;

  subject: Reference;

  encounter?: Reference;

  effectiveDateTime?: string;

  _effectiveDateTime?: Element;

  effectivePeriod?: Period;

  effectiveTiming?: Timing;

  dateAsserted?: string;

  _dateAsserted?: Element;

  informationSource?: Reference[];

  derivedFrom?: Reference[];

  reason?: CodeableReference[];

  note?: Annotation[];

  relatedClinicalInformation?: Reference[];

  renderedDosageInstruction?: string;

  _renderedDosageInstruction?: Element;

  dosage?: Dosage[];

  adherence?: MedicationStatementAdherence;
}
