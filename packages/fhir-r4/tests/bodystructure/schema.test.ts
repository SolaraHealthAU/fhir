import { createBodyStructureSchema } from "../../src";
import {
  BodystructureExampleFetus,
  BodystructureExampleSkinPatch,
  BodystructureExampleTumor,
} from "./fixture";
import { z } from "zod/v4";

describe("BodyStructure Schema Validation", () => {
  it("should validate BodystructureExampleFetus fixture", () => {
    const result = createBodyStructureSchema().safeParse(
      BodystructureExampleFetus,
    );
    if (!result.success) {
      console.error("Validation failed for BodystructureExampleFetus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BodystructureExampleFetus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BodystructureExampleSkinPatch fixture", () => {
    const result = createBodyStructureSchema().safeParse(
      BodystructureExampleSkinPatch,
    );
    if (!result.success) {
      console.error("Validation failed for BodystructureExampleSkinPatch:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BodystructureExampleSkinPatch: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate BodystructureExampleTumor fixture", () => {
    const result = createBodyStructureSchema().safeParse(
      BodystructureExampleTumor,
    );
    if (!result.success) {
      console.error("Validation failed for BodystructureExampleTumor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for BodystructureExampleTumor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
