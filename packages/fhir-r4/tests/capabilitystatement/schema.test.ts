import { createCapabilityStatementSchema } from "../../src";
import {
  CapabilitystatementBase2,
  CapabilitystatementExample,
  CapabilitystatementKnowledgeRepository,
  CapabilitystatementMeasureProcessor,
  CapabilitystatementMessagedefinition,
  CapabilitystatementPhrExample,
  CapabilitystatementTerminologyServer,
} from "./fixture";
import { z } from "zod/v4";

describe("CapabilityStatement Schema Validation", () => {
  it("should validate CapabilitystatementBase2 fixture", () => {
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

  it("should validate CapabilitystatementExample fixture", () => {
    const result = createCapabilityStatementSchema().safeParse(
      CapabilitystatementExample,
    );
    if (!result.success) {
      console.error("Validation failed for CapabilitystatementExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CapabilitystatementExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CapabilitystatementKnowledgeRepository fixture", () => {
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

  it("should validate CapabilitystatementMeasureProcessor fixture", () => {
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

  it("should validate CapabilitystatementMessagedefinition fixture", () => {
    const result = createCapabilityStatementSchema().safeParse(
      CapabilitystatementMessagedefinition,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CapabilitystatementMessagedefinition:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CapabilitystatementMessagedefinition: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CapabilitystatementPhrExample fixture", () => {
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

  it("should validate CapabilitystatementTerminologyServer fixture", () => {
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
