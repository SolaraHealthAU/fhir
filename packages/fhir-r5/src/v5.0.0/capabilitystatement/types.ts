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
import type { CapabilityStatementSoftware } from "../capabilitystatementsoftware/types";
import type { CapabilityStatementImplementation } from "../capabilitystatementimplementation/types";
import type { CapabilityStatementRest } from "../capabilitystatementrest/types";
import type { CapabilityStatementMessaging } from "../capabilitystatementmessaging/types";
import type { CapabilityStatementDocument } from "../capabilitystatementdocument/types";

/** Generated from FHIR JSON Schema */

/** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server or Client for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface CapabilityStatement {
  resourceType: `CapabilityStatement`;

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

  instantiates?: string[];

  imports?: string[];

  software?: CapabilityStatementSoftware;

  implementation?: CapabilityStatementImplementation;

  fhirVersion?: string;

  _fhirVersion?: Element;

  format?: string[];

  _format?: Element[];

  patchFormat?: string[];

  _patchFormat?: Element[];

  acceptLanguage?: string[];

  _acceptLanguage?: Element[];

  implementationGuide?: string[];

  rest?: CapabilityStatementRest[];

  messaging?: CapabilityStatementMessaging[];

  document?: CapabilityStatementDocument[];
}
