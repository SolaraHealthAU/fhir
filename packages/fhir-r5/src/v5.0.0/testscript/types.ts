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
import type { TestScriptOrigin } from "../testscriptorigin/types";
import type { TestScriptDestination } from "../testscriptdestination/types";
import type { TestScriptMetadata } from "../testscriptmetadata/types";
import type { TestScriptScope } from "../testscriptscope/types";
import type { TestScriptFixture } from "../testscriptfixture/types";
import type { TestScriptVariable } from "../testscriptvariable/types";
import type { TestScriptSetup } from "../testscriptsetup/types";
import type { TestScriptTest } from "../testscripttest/types";
import type { TestScriptTeardown } from "../testscriptteardown/types";

/** Generated from FHIR JSON Schema */

/** A structured set of tests against a FHIR server or client implementation to determine compliance against the FHIR specification. */
export interface TestScript {
  resourceType: `TestScript`;

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

  origin?: TestScriptOrigin[];

  destination?: TestScriptDestination[];

  metadata?: TestScriptMetadata;

  scope?: TestScriptScope[];

  fixture?: TestScriptFixture[];

  profile?: string[];

  variable?: TestScriptVariable[];

  setup?: TestScriptSetup;

  test?: TestScriptTest[];

  teardown?: TestScriptTeardown;
}
