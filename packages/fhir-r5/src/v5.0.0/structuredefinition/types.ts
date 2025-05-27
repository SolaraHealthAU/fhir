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
import type { StructureDefinitionMapping } from "../structuredefinitionmapping/types";
import type { StructureDefinitionContext } from "../structuredefinitioncontext/types";
import type { StructureDefinitionSnapshot } from "../structuredefinitionsnapshot/types";
import type { StructureDefinitionDifferential } from "../structuredefinitiondifferential/types";

/** Generated from FHIR JSON Schema */

/** A definition of a FHIR structure. This resource is used to describe the underlying resources, data types defined in FHIR, and also for describing extensions and constraints on resources and data types. */
export interface StructureDefinition {
  resourceType: `StructureDefinition`;

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

  keyword?: Coding[];

  fhirVersion?: string;

  _fhirVersion?: Element;

  mapping?: StructureDefinitionMapping[];

  kind?: string;

  _kind?: Element;

  abstract?: boolean;

  _abstract?: Element;

  context?: StructureDefinitionContext[];

  contextInvariant?: string[];

  _contextInvariant?: Element[];

  type?: string;

  _type?: Element;

  baseDefinition?: string;

  derivation?: string;

  _derivation?: Element;

  snapshot?: StructureDefinitionSnapshot;

  differential?: StructureDefinitionDifferential;
}
