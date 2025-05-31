import type { BiologicallyDerivedProduct } from "../../src/v4.0.1/biologicallyderivedproduct/types";

export const BiologicallyderivedproductExample: BiologicallyDerivedProduct = {
  resourceType: "BiologicallyDerivedProduct",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">[Put rendering here]</div>',
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;
