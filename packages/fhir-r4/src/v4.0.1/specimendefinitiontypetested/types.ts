import type {
  Extension,
  Element,
  CodeableConcept,
  Duration,
} from "../core/types";
import type { SpecimenDefinitionContainer } from "../specimendefinitioncontainer/types";
import type { SpecimenDefinitionHandling } from "../specimendefinitionhandling/types";

/** Generated from FHIR JSON Schema */

/** A kind of specimen with associated set of requirements. */
export interface SpecimenDefinitionTypeTested {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Primary of secondary specimen. */
  isDerived?: boolean;

  _isDerived?: Element;
  /** The kind of specimen conditioned for testing expected by lab. */
  type?: CodeableConcept;
  /** The preference for this type of conditioned specimen. */
  preference: "preferred" | "alternate";

  _preference?: Element;

  container?: SpecimenDefinitionContainer;
  /** Requirements for delivery and special handling of this kind of conditioned specimen. */
  requirement?: string;

  _requirement?: Element;
  /** The usual time that a specimen of this kind is retained after the ordered tests are completed, for the purpose of additional testing. */
  retentionTime?: Duration;
  /** Criterion for rejection of the specimen in its container by the laboratory. */
  rejectionCriterion?: CodeableConcept[];

  handling?: SpecimenDefinitionHandling[];
}
