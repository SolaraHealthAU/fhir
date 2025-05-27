import type { Extension, Attachment, Reference } from "../core/types";

/** Generated from FHIR JSON Schema */

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface ContractLegal {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  contentAttachment?: Attachment;

  contentReference?: Reference;
}
