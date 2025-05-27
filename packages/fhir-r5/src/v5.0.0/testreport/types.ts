import type { Meta, Element, Extension, Identifier } from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { TestReportParticipant } from "../testreportparticipant/types";
import type { TestReportSetup } from "../testreportsetup/types";
import type { TestReportTest } from "../testreporttest/types";
import type { TestReportTeardown } from "../testreportteardown/types";

/** Generated from FHIR JSON Schema */

/** A summary of information based on the results of executing a TestScript. */
export interface TestReport {
  resourceType: `TestReport`;

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

  identifier?: Identifier;

  name?: string;

  _name?: Element;

  status?: string;

  _status?: Element;

  testScript: string;

  result?: string;

  _result?: Element;

  score?: number;

  _score?: Element;

  tester?: string;

  _tester?: Element;

  issued?: string;

  _issued?: Element;

  participant?: TestReportParticipant[];

  setup?: TestReportSetup;

  test?: TestReportTest[];

  teardown?: TestReportTeardown;
}
