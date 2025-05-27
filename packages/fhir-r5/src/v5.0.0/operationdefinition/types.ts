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
import type { OperationDefinitionParameter } from "../operationdefinitionparameter/types";
import type { OperationDefinitionOverload } from "../operationdefinitionoverload/types";

/** Generated from FHIR JSON Schema */

/** A formal computable definition of an operation (on the RESTful interface) or a named query (using the search interaction). */
export interface OperationDefinition {
  resourceType: `OperationDefinition`;

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

  kind?: string;

  _kind?: Element;

  affectsState?: boolean;

  _affectsState?: Element;

  code?: string;

  _code?: Element;

  comment?: string;

  _comment?: Element;

  base?: string;

  resource?: string[];

  _resource?: Element[];

  system?: boolean;

  _system?: Element;

  type?: boolean;

  _type?: Element;

  instance?: boolean;

  _instance?: Element;

  inputProfile?: string;

  outputProfile?: string;

  parameter?: OperationDefinitionParameter[];

  overload?: OperationDefinitionOverload[];
}
