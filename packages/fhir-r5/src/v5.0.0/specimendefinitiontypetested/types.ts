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
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  isDerived?: boolean;

  _isDerived?: Element;

  type?: CodeableConcept;

  preference?: string;

  _preference?: Element;

  container?: SpecimenDefinitionContainer;

  requirement?: string;

  _requirement?: Element;

  retentionTime?: Duration;

  singleUse?: boolean;

  _singleUse?: Element;

  rejectionCriterion?: CodeableConcept[];

  handling?: SpecimenDefinitionHandling[];

  testingDestination?: CodeableConcept[];
}
