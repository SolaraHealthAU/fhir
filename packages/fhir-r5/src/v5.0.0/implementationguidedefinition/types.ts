import type { Extension } from "../core/types";
import type { ImplementationGuideGrouping } from "../implementationguidegrouping/types";
import type { ImplementationGuideResource } from "../implementationguideresource/types";
import type { ImplementationGuidePage } from "../implementationguidepage/types";
import type { ImplementationGuideParameter } from "../implementationguideparameter/types";
import type { ImplementationGuideTemplate } from "../implementationguidetemplate/types";

/** Generated from FHIR JSON Schema */

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface ImplementationGuideDefinition {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  grouping?: ImplementationGuideGrouping[];

  resource?: ImplementationGuideResource[];

  page?: ImplementationGuidePage;

  parameter?: ImplementationGuideParameter[];

  template?: ImplementationGuideTemplate[];
}
