import { createMedicationRequestSchema } from "../../src";
import {
  Medicationrequest0301,
  Medicationrequest0302,
  Medicationrequest0303,
  Medicationrequest0304,
  Medicationrequest0305,
  Medicationrequest0306,
  Medicationrequest0307,
  Medicationrequest0308,
  Medicationrequest0309,
  Medicationrequest0310,
  Medicationrequest0312,
  Medicationrequest0313,
  Medicationrequest0314,
  Medicationrequest0315,
  Medicationrequest0316,
  Medicationrequest0317,
  Medicationrequest0318,
  Medicationrequest0319,
  Medicationrequest0320,
  Medicationrequest0321,
  Medicationrequest0322,
  Medicationrequest0323,
  Medicationrequest0324,
  Medicationrequest0325,
  Medicationrequest0326,
  Medicationrequest0327,
  Medicationrequest0328,
  Medicationrequest0329,
  Medicationrequest0330,
  Medicationrequest0331,
  Medicationrequest0332,
  Medicationrequest0333,
  Medicationrequest0334,
  Medicationrequest0335,
  Medicationrequest0336,
  Medicationrequest0337,
  Medicationrequest0338,
  Medicationrequest0339,
  Medicationrequestexample1,
  Medicationrequestexample2,
} from "./fixture";
import { z } from "zod/v4";

describe("MedicationRequest Schema Validation", () => {
  it("should validate Medicationrequest0301 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0301,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0301:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0301: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0302 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0302,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0302:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0302: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0303 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0303,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0303:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0303: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0304 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0304,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0304:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0304: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0305 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0305,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0305:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0305: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0306 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0306,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0306:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0306: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0307 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0307,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0307:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0307: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0308 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0308,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0308:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0308: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0309 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0309,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0309:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0309: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0310 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0310,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0310:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0310: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0312 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0312,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0312:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0312: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0313 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0313,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0313:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0313: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0314 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0314,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0314:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0314: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0315 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0315,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0315:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0315: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0316 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0316,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0316:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0316: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0317 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0317,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0317:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0317: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0318 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0318,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0318:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0318: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0319 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0319,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0319:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0319: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0320 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0320,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0320:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0320: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0321 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0321,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0321:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0321: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0322 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0322,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0322:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0322: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0323 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0323,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0323:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0323: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0324 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0324,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0324:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0324: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0325 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0325,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0325:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0325: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0326 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0326,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0326:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0326: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0327 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0327,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0327:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0327: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0328 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0328,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0328:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0328: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0329 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0329,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0329:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0329: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0330 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0330,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0330:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0330: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0331 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0331,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0331:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0331: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0332 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0332,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0332:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0332: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0333 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0333,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0333:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0333: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0334 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0334,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0334:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0334: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0335 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0335,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0335:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0335: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0336 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0336,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0336:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0336: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0337 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0337,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0337:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0337: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0338 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0338,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0338:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0338: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequest0339 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequest0339,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequest0339:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequest0339: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequestexample1 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequestexample1,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequestexample1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequestexample1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationrequestexample2 fixture", () => {
    const result = createMedicationRequestSchema().safeParse(
      Medicationrequestexample2,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationrequestexample2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationrequestexample2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
