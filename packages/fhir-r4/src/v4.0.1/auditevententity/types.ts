import type { Extension, Reference, Coding, Element } from "../core/types";
import type { AuditEventDetail } from "../auditeventdetail/types";

/** Generated from FHIR JSON Schema */

/** A record of an event made for purposes of maintaining a security log. Typical uses include detection of intrusion attempts and monitoring for inappropriate usage. */
export interface AuditEventEntity {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];
  /** Identifies a specific instance of the entity. The reference should be version specific. */
  what?: Reference;
  /** The type of the object that was involved in this audit event. */
  type?: Coding;
  /** Code representing the role the entity played in the event being audited. */
  role?: Coding;
  /** Identifier for the data life-cycle stage for the entity. */
  lifecycle?: Coding;
  /** Security labels for the identified entity. */
  securityLabel?: Coding[];
  /** A name of the entity in the audit event. */
  name?: string;

  _name?: Element;
  /** Text that describes the entity in more detail. */
  description?: string;

  _description?: Element;
  /** The query parameters for a query-type entities. */
  query?: string;

  _query?: Element;

  detail?: AuditEventDetail[];
}
