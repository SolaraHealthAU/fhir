import type { Extension } from "../core/types";
import type { ImplementationGuideGrouping } from "../implementationguidegrouping/types";
import type { ImplementationGuideResource } from "../implementationguideresource/types";
import type { ImplementationGuidePage } from "../implementationguidepage/types";
import type { ImplementationGuideParameter } from "../implementationguideparameter/types";
import type { ImplementationGuideTemplate } from "../implementationguidetemplate/types";

/** Generated from FHIR JSON Schema */

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface ImplementationGuideDefinition {
  /** Unique id for the element within a resource (for internal references). This may be any string value that does not contain spaces. */
  id?: string;
  /** May be used to represent additional information that is not part of the basic definition of the element. To make the use of extensions safe and manageable, there is a strict set of governance  applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. */
  extension?: Extension[];
  /** May be used to represent additional information that is not part of the basic definition of the element and that modifies the understanding of the element in which it is contained and/or the understanding of the containing element's descendants. Usually modifier elements provide negation or qualification. To make the use of extensions safe and manageable, there is a strict set of governance applied to the definition and use of extensions. Though any implementer can define an extension, there is a set of requirements that SHALL be met as part of the definition of the extension. Applications processing a resource are required to check for modifier extensions.

Modifier extensions SHALL NOT change the meaning of any elements on Resource or DomainResource (including cannot change the meaning of modifierExtension itself). */
  modifierExtension?: Extension[];

  grouping?: ImplementationGuideGrouping[];

  resource: ImplementationGuideResource[];

  page?: ImplementationGuidePage;

  parameter?: ImplementationGuideParameter[];

  template?: ImplementationGuideTemplate[];
}
