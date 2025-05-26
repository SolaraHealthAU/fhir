import type {
  Extension,
  Element,
  Attachment,
  Coding,
  Quantity,
  Reference,
} from "../core/types";

/** Generated from FHIR JSON Schema */

/** Legally enforceable, formally recorded unilateral or bilateral directive i.e., a policy or agreement. */
export interface ContractAnswer {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  valueBoolean?: boolean;

  _valueBoolean?: Element;

  valueDecimal?: number;

  _valueDecimal?: Element;

  valueInteger?: number;

  _valueInteger?: Element;

  valueDate?: string;

  _valueDate?: Element;

  valueDateTime?: string;

  _valueDateTime?: Element;

  valueTime?: string;

  _valueTime?: Element;

  valueString?: string;

  _valueString?: Element;

  valueUri?: string;

  _valueUri?: Element;

  valueAttachment?: Attachment;

  valueCoding?: Coding;

  valueQuantity?: Quantity;

  valueReference?: Reference;
}
