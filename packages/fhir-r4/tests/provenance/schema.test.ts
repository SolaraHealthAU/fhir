import { createProvenanceSchema } from "../../src";
import {
  ProvenanceConsentSignature,
  ProvenanceExampleBiocomputeObject,
  ProvenanceExampleCwl,
  ProvenanceExampleSig,
  ProvenanceExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Provenance Group Schema Validation", () => {
  it("should validate ProvenanceConsentSignature fixture (Provenance)", () => {
    const result = createProvenanceSchema().safeParse(
      ProvenanceConsentSignature,
    );
    if (!result.success) {
      console.error("Validation failed for ProvenanceConsentSignature:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProvenanceConsentSignature: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProvenanceExampleBiocomputeObject fixture (Provenance)", () => {
    const result = createProvenanceSchema().safeParse(
      ProvenanceExampleBiocomputeObject,
    );
    if (!result.success) {
      console.error("Validation failed for ProvenanceExampleBiocomputeObject:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProvenanceExampleBiocomputeObject: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProvenanceExampleCwl fixture (Provenance)", () => {
    const result = createProvenanceSchema().safeParse(ProvenanceExampleCwl);
    if (!result.success) {
      console.error("Validation failed for ProvenanceExampleCwl:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProvenanceExampleCwl: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProvenanceExampleSig fixture (Provenance)", () => {
    const result = createProvenanceSchema().safeParse(ProvenanceExampleSig);
    if (!result.success) {
      console.error("Validation failed for ProvenanceExampleSig:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProvenanceExampleSig: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProvenanceExample fixture (Provenance)", () => {
    const result = createProvenanceSchema().safeParse(ProvenanceExample);
    if (!result.success) {
      console.error("Validation failed for ProvenanceExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProvenanceExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
