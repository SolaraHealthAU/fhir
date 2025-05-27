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
import type { TerminologyCapabilitiesSoftware } from "../terminologycapabilitiessoftware/types";
import type { TerminologyCapabilitiesImplementation } from "../terminologycapabilitiesimplementation/types";
import type { TerminologyCapabilitiesCodeSystem } from "../terminologycapabilitiescodesystem/types";
import type { TerminologyCapabilitiesExpansion } from "../terminologycapabilitiesexpansion/types";
import type { TerminologyCapabilitiesValidateCode } from "../terminologycapabilitiesvalidatecode/types";
import type { TerminologyCapabilitiesTranslation } from "../terminologycapabilitiestranslation/types";
import type { TerminologyCapabilitiesClosure } from "../terminologycapabilitiesclosure/types";

/** Generated from FHIR JSON Schema */

/** A TerminologyCapabilities resource documents a set of capabilities (behaviors) of a FHIR Terminology Server that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface TerminologyCapabilities {
  resourceType: `TerminologyCapabilities`;

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

  software?: TerminologyCapabilitiesSoftware;

  implementation?: TerminologyCapabilitiesImplementation;

  lockedDate?: boolean;

  _lockedDate?: Element;

  codeSystem?: TerminologyCapabilitiesCodeSystem[];

  expansion?: TerminologyCapabilitiesExpansion;

  codeSearch?: string;

  _codeSearch?: Element;

  validateCode?: TerminologyCapabilitiesValidateCode;

  translation?: TerminologyCapabilitiesTranslation;

  closure?: TerminologyCapabilitiesClosure;
}
