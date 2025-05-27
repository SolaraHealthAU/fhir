import type {
  Extension,
  Coding,
  Element,
  ContactPoint,
  ExtendedContactDetail,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Virtual Service Contact Details. */
export interface VirtualServiceDetail {
  id?: string;

  extension?: Extension[];
  /** The type of virtual service to connect to (i.e. Teams, Zoom, Specific VMR technology, WhatsApp). */
  channelType?: Coding;

  addressUrl?: string;

  _addressUrl?: Element;

  addressString?: string;

  _addressString?: Element;

  addressContactPoint?: ContactPoint;

  addressExtendedContactDetail?: ExtendedContactDetail;
  /** Address to see alternative connection details. */
  additionalInfo?: string[];

  _additionalInfo?: Element[];
  /** Maximum number of participants supported by the virtual service. */
  maxParticipants?: number;

  _maxParticipants?: Element;
  /** Session Key required by the virtual service. */
  sessionKey?: string;

  _sessionKey?: Element;
}
