import type { Extension, Element } from "../core/types";
import type { ImplementationGuideResource1 } from "../implementationguideresource1/types";
import type { ImplementationGuidePage1 } from "../implementationguidepage1/types";

/** Generated from FHIR JSON Schema */

/** A set of rules of how a particular interoperability or standards problem is solved - typically through the use of FHIR resources. This resource is used to gather all the parts of an implementation guide into a logical whole and to publish a computable definition of all the parts. */
export interface ImplementationGuideManifest {
  id?: string;

  extension?: Extension[];

  modifierExtension?: Extension[];

  rendering?: string;

  _rendering?: Element;

  resource: ImplementationGuideResource1[];

  page?: ImplementationGuidePage1[];

  image?: string[];

  _image?: Element[];

  other?: string[];

  _other?: Element[];
}
