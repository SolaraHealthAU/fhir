import { createCapabilityStatementSchema } from "../../src";
import {
  CapabilitystatementBase2,
  CapabilitystatementKnowledgeRepository,
  CapabilitystatementMeasureProcessor,
  CapabilitystatementPhrExample,
  CapabilitystatementTerminologyServer,
} from "./fixture";
import { z } from "zod/v4";

describe("Capabilitystatement Group Schema Validation", () => {
  it("should validate CapabilitystatementBase2 fixture (CapabilityStatement)", () => {
    const result = createCapabilityStatementSchema().safeParse(
      CapabilitystatementBase2,
    );
    if (!result.success) {
      console.error("Validation failed for CapabilitystatementBase2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CapabilitystatementBase2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CapabilitystatementKnowledgeRepository fixture (CapabilityStatement)", () => {
    const result = createCapabilityStatementSchema().safeParse(
      CapabilitystatementKnowledgeRepository,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CapabilitystatementKnowledgeRepository:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CapabilitystatementKnowledgeRepository: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CapabilitystatementMeasureProcessor fixture (CapabilityStatement)", () => {
    const result = createCapabilityStatementSchema().safeParse(
      CapabilitystatementMeasureProcessor,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CapabilitystatementMeasureProcessor:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CapabilitystatementMeasureProcessor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CapabilitystatementPhrExample fixture (CapabilityStatement)", () => {
    const result = createCapabilityStatementSchema().safeParse(
      CapabilitystatementPhrExample,
    );
    if (!result.success) {
      console.error("Validation failed for CapabilitystatementPhrExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CapabilitystatementPhrExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CapabilitystatementTerminologyServer fixture (CapabilityStatement)", () => {
    const result = createCapabilityStatementSchema().safeParse(
      CapabilitystatementTerminologyServer,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CapabilitystatementTerminologyServer:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CapabilitystatementTerminologyServer: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
