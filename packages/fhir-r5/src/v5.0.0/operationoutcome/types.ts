import type { Meta, Element, Extension } from "../core/types";
import type { Narrative } from "../narrative/types";
import type { ResourceList } from "../resourcelist/types";
import type { OperationOutcomeIssue } from "../operationoutcomeissue/types";

/** Generated from FHIR JSON Schema */

/** A collection of error, warning, or information messages that result from a system action. */
export interface OperationOutcome {
  resourceType: `OperationOutcome`;

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

  issue: OperationOutcomeIssue[];
}
