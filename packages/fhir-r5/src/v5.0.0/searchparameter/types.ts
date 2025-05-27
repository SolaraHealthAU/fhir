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
import type { SearchParameterComponent } from "../searchparametercomponent/types";

/** Generated from FHIR JSON Schema */

/** A search parameter that defines a named search item that can be used to search/filter on a resource. */
export interface SearchParameter {
  resourceType: `SearchParameter`;

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

  derivedFrom?: string;

  code?: string;

  _code?: Element;

  base?: string[];

  _base?: Element[];

  type?: string;

  _type?: Element;

  expression?: string;

  _expression?: Element;

  processingMode?: string;

  _processingMode?: Element;

  constraint?: string;

  _constraint?: Element;

  target?: string[];

  _target?: Element[];

  multipleOr?: boolean;

  _multipleOr?: Element;

  multipleAnd?: boolean;

  _multipleAnd?: Element;

  comparator?: string[];

  _comparator?: Element[];

  modifier?: string[];

  _modifier?: Element[];

  chain?: string[];

  _chain?: Element[];

  component?: SearchParameterComponent[];
}
