import { createMedicationKnowledgeSchema } from "../../src";
import { MedicationknowledgeExample } from "./fixture";
import { z } from "zod/v4";

describe("MedicationKnowledge Schema Validation", () => {
  it("should validate MedicationknowledgeExample fixture", () => {
    const result = createMedicationKnowledgeSchema().safeParse(
      MedicationknowledgeExample,
    );
    if (!result.success) {
      console.error("Validation failed for MedicationknowledgeExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MedicationknowledgeExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
