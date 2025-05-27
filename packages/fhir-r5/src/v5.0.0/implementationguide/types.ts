import type {
  Meta,
  Element,
  Extension,
  Identifier,
  Coding,
  ContactDetail,
  UsageContext,
  CodeableConcept,
} from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { ImplementationGuideDependsOn } from "../implementationguidedependson/types";
import type { ImplementationGuideGlobal } from "../implementationguideglobal/types";
import type { ImplementationGuideDefinition } from "../implementationguidedefinition/types";
import type { ImplementationGuideManifest } from "../implementationguidemanifest/types";

/** Generated from FHIR JSON Schema */

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface ImplementationGuide {
  resourceType: `ImplementationGuide`;

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

  url?: string;

  _url?: Element;

  identifier?: Identifier[];

  version?: string;

  _version?: Element;

  versionAlgorithmString?: string;

  _versionAlgorithmString?: Element;

  versionAlgorithmCoding?: Coding;

  name?: string;

  _name?: Element;

  title?: string;

  _title?: Element;

  status?: string;

  _status?: Element;

  experimental?: boolean;

  _experimental?: Element;

  date?: string;

  _date?: Element;

  publisher?: string;

  _publisher?: Element;

  contact?: ContactDetail[];

  description?: string;

  _description?: Element;

  useContext?: UsageContext[];

  jurisdiction?: CodeableConcept[];

  purpose?: string;

  _purpose?: Element;

  copyright?: string;

  _copyright?: Element;

  copyrightLabel?: string;

  _copyrightLabel?: Element;

  packageId?: string;

  _packageId?: Element;

  license?: string;

  _license?: Element;

  fhirVersion?: string[];

  _fhirVersion?: Element[];

  dependsOn?: ImplementationGuideDependsOn[];

  global?: ImplementationGuideGlobal[];

  definition?: ImplementationGuideDefinition;

  manifest?: ImplementationGuideManifest;
}
