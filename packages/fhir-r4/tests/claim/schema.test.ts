import { createClaimSchema } from "../../src";
import {
  ClaimExampleCms1500Medical,
  ClaimExampleInstitutionalRich,
  ClaimExampleInstitutional,
  ClaimExampleOralAverage,
  ClaimExampleOralBridge,
  ClaimExampleOralContainedIdentifier,
  ClaimExampleOralContained,
  ClaimExampleOralIdentifier,
  ClaimExampleOralOrthoplan,
  ClaimExamplePharmacyCompound,
  ClaimExamplePharmacyMedication,
  ClaimExamplePharmacy,
  ClaimExampleProfessional,
  ClaimExampleVisionGlasses3tier,
  ClaimExampleVisionGlasses,
  ClaimExampleVision,
  ClaimExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Claim Group Schema Validation", () => {
  it("should validate ClaimExampleCms1500Medical fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(ClaimExampleCms1500Medical);
    if (!result.success) {
      console.error("Validation failed for ClaimExampleCms1500Medical:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExampleCms1500Medical: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExampleInstitutionalRich fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(ClaimExampleInstitutionalRich);
    if (!result.success) {
      console.error("Validation failed for ClaimExampleInstitutionalRich:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExampleInstitutionalRich: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExampleInstitutional fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(ClaimExampleInstitutional);
    if (!result.success) {
      console.error("Validation failed for ClaimExampleInstitutional:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExampleInstitutional: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExampleOralAverage fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(ClaimExampleOralAverage);
    if (!result.success) {
      console.error("Validation failed for ClaimExampleOralAverage:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExampleOralAverage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExampleOralBridge fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(ClaimExampleOralBridge);
    if (!result.success) {
      console.error("Validation failed for ClaimExampleOralBridge:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExampleOralBridge: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExampleOralContainedIdentifier fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(
      ClaimExampleOralContainedIdentifier,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ClaimExampleOralContainedIdentifier:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExampleOralContainedIdentifier: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExampleOralContained fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(ClaimExampleOralContained);
    if (!result.success) {
      console.error("Validation failed for ClaimExampleOralContained:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExampleOralContained: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExampleOralIdentifier fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(ClaimExampleOralIdentifier);
    if (!result.success) {
      console.error("Validation failed for ClaimExampleOralIdentifier:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExampleOralIdentifier: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExampleOralOrthoplan fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(ClaimExampleOralOrthoplan);
    if (!result.success) {
      console.error("Validation failed for ClaimExampleOralOrthoplan:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExampleOralOrthoplan: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExamplePharmacyCompound fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(ClaimExamplePharmacyCompound);
    if (!result.success) {
      console.error("Validation failed for ClaimExamplePharmacyCompound:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExamplePharmacyCompound: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExamplePharmacyMedication fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(
      ClaimExamplePharmacyMedication,
    );
    if (!result.success) {
      console.error("Validation failed for ClaimExamplePharmacyMedication:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExamplePharmacyMedication: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExamplePharmacy fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(ClaimExamplePharmacy);
    if (!result.success) {
      console.error("Validation failed for ClaimExamplePharmacy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExamplePharmacy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExampleProfessional fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(ClaimExampleProfessional);
    if (!result.success) {
      console.error("Validation failed for ClaimExampleProfessional:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExampleProfessional: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExampleVisionGlasses3tier fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(
      ClaimExampleVisionGlasses3tier,
    );
    if (!result.success) {
      console.error("Validation failed for ClaimExampleVisionGlasses3tier:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExampleVisionGlasses3tier: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExampleVisionGlasses fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(ClaimExampleVisionGlasses);
    if (!result.success) {
      console.error("Validation failed for ClaimExampleVisionGlasses:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExampleVisionGlasses: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExampleVision fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(ClaimExampleVision);
    if (!result.success) {
      console.error("Validation failed for ClaimExampleVision:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExampleVision: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ClaimExample fixture (Claim)", () => {
    const result = createClaimSchema().safeParse(ClaimExample);
    if (!result.success) {
      console.error("Validation failed for ClaimExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ClaimExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
