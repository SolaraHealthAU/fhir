import { createNutritionOrderSchema } from "../../src";
import {
  NutritionorderExampleCardiacdiet,
  NutritionorderExampleDiabeticdiet,
  NutritionorderExampleDiabeticsupplement,
  NutritionorderExampleEnergysupplement,
  NutritionorderExampleEnteralbolus,
  NutritionorderExampleEnteralcontinuous,
  NutritionorderExampleFiberrestricteddiet,
  NutritionorderExampleInfantenteral,
  NutritionorderExampleProteinsupplement,
  NutritionorderExamplePureeddietSimple,
  NutritionorderExamplePureeddiet,
  NutritionorderExampleRenaldiet,
  NutritionorderExampleTextureModified,
} from "./fixture";
import { z } from "zod/v4";

describe("Nutritionorder Group Schema Validation", () => {
  it("should validate NutritionorderExampleCardiacdiet fixture (NutritionOrder)", () => {
    const result = createNutritionOrderSchema().safeParse(
      NutritionorderExampleCardiacdiet,
    );
    if (!result.success) {
      console.error("Validation failed for NutritionorderExampleCardiacdiet:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NutritionorderExampleCardiacdiet: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NutritionorderExampleDiabeticdiet fixture (NutritionOrder)", () => {
    const result = createNutritionOrderSchema().safeParse(
      NutritionorderExampleDiabeticdiet,
    );
    if (!result.success) {
      console.error("Validation failed for NutritionorderExampleDiabeticdiet:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NutritionorderExampleDiabeticdiet: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NutritionorderExampleDiabeticsupplement fixture (NutritionOrder)", () => {
    const result = createNutritionOrderSchema().safeParse(
      NutritionorderExampleDiabeticsupplement,
    );
    if (!result.success) {
      console.error(
        "Validation failed for NutritionorderExampleDiabeticsupplement:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NutritionorderExampleDiabeticsupplement: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NutritionorderExampleEnergysupplement fixture (NutritionOrder)", () => {
    const result = createNutritionOrderSchema().safeParse(
      NutritionorderExampleEnergysupplement,
    );
    if (!result.success) {
      console.error(
        "Validation failed for NutritionorderExampleEnergysupplement:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NutritionorderExampleEnergysupplement: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NutritionorderExampleEnteralbolus fixture (NutritionOrder)", () => {
    const result = createNutritionOrderSchema().safeParse(
      NutritionorderExampleEnteralbolus,
    );
    if (!result.success) {
      console.error("Validation failed for NutritionorderExampleEnteralbolus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NutritionorderExampleEnteralbolus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NutritionorderExampleEnteralcontinuous fixture (NutritionOrder)", () => {
    const result = createNutritionOrderSchema().safeParse(
      NutritionorderExampleEnteralcontinuous,
    );
    if (!result.success) {
      console.error(
        "Validation failed for NutritionorderExampleEnteralcontinuous:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NutritionorderExampleEnteralcontinuous: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NutritionorderExampleFiberrestricteddiet fixture (NutritionOrder)", () => {
    const result = createNutritionOrderSchema().safeParse(
      NutritionorderExampleFiberrestricteddiet,
    );
    if (!result.success) {
      console.error(
        "Validation failed for NutritionorderExampleFiberrestricteddiet:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NutritionorderExampleFiberrestricteddiet: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NutritionorderExampleInfantenteral fixture (NutritionOrder)", () => {
    const result = createNutritionOrderSchema().safeParse(
      NutritionorderExampleInfantenteral,
    );
    if (!result.success) {
      console.error(
        "Validation failed for NutritionorderExampleInfantenteral:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NutritionorderExampleInfantenteral: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NutritionorderExampleProteinsupplement fixture (NutritionOrder)", () => {
    const result = createNutritionOrderSchema().safeParse(
      NutritionorderExampleProteinsupplement,
    );
    if (!result.success) {
      console.error(
        "Validation failed for NutritionorderExampleProteinsupplement:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NutritionorderExampleProteinsupplement: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NutritionorderExamplePureeddietSimple fixture (NutritionOrder)", () => {
    const result = createNutritionOrderSchema().safeParse(
      NutritionorderExamplePureeddietSimple,
    );
    if (!result.success) {
      console.error(
        "Validation failed for NutritionorderExamplePureeddietSimple:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NutritionorderExamplePureeddietSimple: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NutritionorderExamplePureeddiet fixture (NutritionOrder)", () => {
    const result = createNutritionOrderSchema().safeParse(
      NutritionorderExamplePureeddiet,
    );
    if (!result.success) {
      console.error("Validation failed for NutritionorderExamplePureeddiet:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NutritionorderExamplePureeddiet: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NutritionorderExampleRenaldiet fixture (NutritionOrder)", () => {
    const result = createNutritionOrderSchema().safeParse(
      NutritionorderExampleRenaldiet,
    );
    if (!result.success) {
      console.error("Validation failed for NutritionorderExampleRenaldiet:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NutritionorderExampleRenaldiet: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate NutritionorderExampleTextureModified fixture (NutritionOrder)", () => {
    const result = createNutritionOrderSchema().safeParse(
      NutritionorderExampleTextureModified,
    );
    if (!result.success) {
      console.error(
        "Validation failed for NutritionorderExampleTextureModified:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for NutritionorderExampleTextureModified: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
