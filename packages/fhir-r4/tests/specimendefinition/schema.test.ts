import { createSpecimenDefinitionSchema } from "../../src";
import { SpecimendefinitionExampleSerumPlasma } from "./fixture";
import { z } from "zod/v4";

describe("SpecimenDefinition Schema Validation", () => {
  it("should validate SpecimendefinitionExampleSerumPlasma fixture", () => {
    const result = createSpecimenDefinitionSchema().safeParse(
      SpecimendefinitionExampleSerumPlasma,
    );
    if (!result.success) {
      console.error(
        "Validation failed for SpecimendefinitionExampleSerumPlasma:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SpecimendefinitionExampleSerumPlasma: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
