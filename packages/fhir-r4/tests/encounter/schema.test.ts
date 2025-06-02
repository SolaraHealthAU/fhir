import { createEncounterSchema } from "../../src";
import {
  EncounterExampleEmerg,
  EncounterExampleF001Heart,
  EncounterExampleF002Lung,
  EncounterExampleF003Abscess,
  EncounterExampleF20120130404,
  EncounterExampleF20220130128,
  EncounterExampleF20320130311,
  EncounterExampleHome,
  EncounterExampleXcda,
  EncounterExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Encounter Group Schema Validation", () => {
  it("should validate EncounterExampleEmerg fixture (Encounter)", () => {
    const result = createEncounterSchema().safeParse(EncounterExampleEmerg);
    if (!result.success) {
      console.error("Validation failed for EncounterExampleEmerg:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EncounterExampleEmerg: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EncounterExampleF001Heart fixture (Encounter)", () => {
    const result = createEncounterSchema().safeParse(EncounterExampleF001Heart);
    if (!result.success) {
      console.error("Validation failed for EncounterExampleF001Heart:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EncounterExampleF001Heart: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EncounterExampleF002Lung fixture (Encounter)", () => {
    const result = createEncounterSchema().safeParse(EncounterExampleF002Lung);
    if (!result.success) {
      console.error("Validation failed for EncounterExampleF002Lung:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EncounterExampleF002Lung: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EncounterExampleF003Abscess fixture (Encounter)", () => {
    const result = createEncounterSchema().safeParse(
      EncounterExampleF003Abscess,
    );
    if (!result.success) {
      console.error("Validation failed for EncounterExampleF003Abscess:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EncounterExampleF003Abscess: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EncounterExampleF20120130404 fixture (Encounter)", () => {
    const result = createEncounterSchema().safeParse(
      EncounterExampleF20120130404,
    );
    if (!result.success) {
      console.error("Validation failed for EncounterExampleF20120130404:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EncounterExampleF20120130404: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EncounterExampleF20220130128 fixture (Encounter)", () => {
    const result = createEncounterSchema().safeParse(
      EncounterExampleF20220130128,
    );
    if (!result.success) {
      console.error("Validation failed for EncounterExampleF20220130128:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EncounterExampleF20220130128: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EncounterExampleF20320130311 fixture (Encounter)", () => {
    const result = createEncounterSchema().safeParse(
      EncounterExampleF20320130311,
    );
    if (!result.success) {
      console.error("Validation failed for EncounterExampleF20320130311:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EncounterExampleF20320130311: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EncounterExampleHome fixture (Encounter)", () => {
    const result = createEncounterSchema().safeParse(EncounterExampleHome);
    if (!result.success) {
      console.error("Validation failed for EncounterExampleHome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EncounterExampleHome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EncounterExampleXcda fixture (Encounter)", () => {
    const result = createEncounterSchema().safeParse(EncounterExampleXcda);
    if (!result.success) {
      console.error("Validation failed for EncounterExampleXcda:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EncounterExampleXcda: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EncounterExample fixture (Encounter)", () => {
    const result = createEncounterSchema().safeParse(EncounterExample);
    if (!result.success) {
      console.error("Validation failed for EncounterExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EncounterExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
