import { createMedicationDispenseSchema } from "../../src";
import {
  Medicationdispense0301,
  Medicationdispense0302,
  Medicationdispense0303,
  Medicationdispense0304,
  Medicationdispense0305,
  Medicationdispense0306,
  Medicationdispense0307,
  Medicationdispense0308,
  Medicationdispense0309,
  Medicationdispense0310,
  Medicationdispense0311,
  Medicationdispense0312,
  Medicationdispense0313,
  Medicationdispense0314,
  Medicationdispense0315,
  Medicationdispense0316,
  Medicationdispense0317,
  Medicationdispense0318,
  Medicationdispense0319,
  Medicationdispense0320,
  Medicationdispense0321,
  Medicationdispense0322,
  Medicationdispense0324,
  Medicationdispense0325,
  Medicationdispense0326,
  Medicationdispense0327,
  Medicationdispense0328,
  Medicationdispense0329,
  Medicationdispense0330,
  Medicationdispense0331,
  Medicationdispenseexample8,
} from "./fixture";
import { z } from "zod/v4";

describe("MedicationDispense Schema Validation", () => {
  it("should validate Medicationdispense0301 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0301,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0301:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0301: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0302 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0302,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0302:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0302: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0303 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0303,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0303:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0303: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0304 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0304,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0304:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0304: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0305 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0305,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0305:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0305: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0306 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0306,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0306:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0306: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0307 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0307,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0307:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0307: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0308 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0308,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0308:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0308: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0309 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0309,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0309:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0309: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0310 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0310,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0310:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0310: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0311 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0311,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0311:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0311: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0312 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0312,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0312:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0312: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0313 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0313,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0313:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0313: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0314 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0314,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0314:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0314: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0315 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0315,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0315:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0315: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0316 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0316,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0316:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0316: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0317 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0317,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0317:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0317: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0318 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0318,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0318:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0318: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0319 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0319,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0319:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0319: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0320 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0320,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0320:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0320: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0321 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0321,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0321:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0321: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0322 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0322,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0322:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0322: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0324 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0324,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0324:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0324: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0325 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0325,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0325:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0325: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0326 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0326,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0326:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0326: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0327 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0327,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0327:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0327: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0328 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0328,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0328:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0328: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0329 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0329,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0329:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0329: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0330 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0330,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0330:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0330: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispense0331 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispense0331,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispense0331:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispense0331: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationdispenseexample8 fixture", () => {
    const result = createMedicationDispenseSchema().safeParse(
      Medicationdispenseexample8,
    );
    if (!result.success) {
      console.error("Validation failed for Medicationdispenseexample8:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationdispenseexample8: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
