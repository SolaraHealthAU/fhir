import type { Extension, Element } from "../core/types";
import type { CapabilityStatementEndpoint } from "../capabilitystatementendpoint/types";
import type { CapabilityStatementSupportedMessage } from "../capabilitystatementsupportedmessage/types";

/** Generated from FHIR JSON Schema */

/** A Capability Statement documents a set of capabilities (behaviors) of a FHIR Server or Client for a particular version of FHIR that may be used as a statement of actual server functionality or a statement of required or desired server implementation. */
export interface CapabilityStatementMessaging {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  endpoint?: CapabilityStatementEndpoint[];

  reliableCache?: number;

  _reliableCache?: Element;

  documentation?: string;

  _documentation?: Element;

  supportedMessage?: CapabilityStatementSupportedMessage[];
}
