import { createMedicationSchema } from "../../src";
import {
  Medicationexample0301,
  Medicationexample0302,
  Medicationexample0303,
  Medicationexample0304,
  Medicationexample0305,
  Medicationexample0306,
  Medicationexample0307,
  Medicationexample0308,
  Medicationexample0309,
  Medicationexample0310,
  Medicationexample0311,
  Medicationexample0312,
  Medicationexample0313,
  Medicationexample0314,
  Medicationexample0315,
  Medicationexample0316,
  Medicationexample0317,
  Medicationexample0318,
  Medicationexample0319,
  Medicationexample0320,
  Medicationexample0321,
  Medicationexample1,
  Medicationexample15,
} from "./fixture";
import { z } from "zod/v4";

describe("Medication Schema Validation", () => {
  it("should validate Medicationexample0301 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0301);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0301:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0301: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0302 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0302);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0302:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0302: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0303 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0303);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0303:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0303: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0304 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0304);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0304:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0304: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0305 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0305);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0305:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0305: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0306 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0306);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0306:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0306: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0307 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0307);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0307:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0307: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0308 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0308);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0308:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0308: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0309 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0309);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0309:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0309: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0310 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0310);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0310:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0310: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0311 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0311);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0311:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0311: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0312 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0312);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0312:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0312: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0313 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0313);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0313:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0313: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0314 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0314);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0314:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0314: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0315 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0315);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0315:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0315: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0316 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0316);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0316:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0316: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0317 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0317);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0317:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0317: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0318 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0318);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0318:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0318: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0319 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0319);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0319:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0319: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0320 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0320);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0320:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0320: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample0321 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample0321);
    if (!result.success) {
      console.error("Validation failed for Medicationexample0321:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample0321: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample1 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample1);
    if (!result.success) {
      console.error("Validation failed for Medicationexample1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Medicationexample15 fixture", () => {
    const result = createMedicationSchema().safeParse(Medicationexample15);
    if (!result.success) {
      console.error("Validation failed for Medicationexample15:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Medicationexample15: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
