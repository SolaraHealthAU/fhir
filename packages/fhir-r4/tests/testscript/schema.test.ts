import { createTestScriptSchema } from "../../src";
import {
  TestscriptExampleHistory,
  TestscriptExampleMultisystem,
  TestscriptExampleReadtest,
  TestscriptExampleSearch,
  TestscriptExampleUpdate,
  TestscriptExample,
} from "./fixture";
import { z } from "zod/v4";

describe("TestScript Schema Validation", () => {
  it("should validate TestscriptExampleHistory fixture", () => {
    const result = createTestScriptSchema().safeParse(TestscriptExampleHistory);
    if (!result.success) {
      console.error("Validation failed for TestscriptExampleHistory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TestscriptExampleHistory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TestscriptExampleMultisystem fixture", () => {
    const result = createTestScriptSchema().safeParse(
      TestscriptExampleMultisystem,
    );
    if (!result.success) {
      console.error("Validation failed for TestscriptExampleMultisystem:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TestscriptExampleMultisystem: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TestscriptExampleReadtest fixture", () => {
    const result = createTestScriptSchema().safeParse(
      TestscriptExampleReadtest,
    );
    if (!result.success) {
      console.error("Validation failed for TestscriptExampleReadtest:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TestscriptExampleReadtest: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TestscriptExampleSearch fixture", () => {
    const result = createTestScriptSchema().safeParse(TestscriptExampleSearch);
    if (!result.success) {
      console.error("Validation failed for TestscriptExampleSearch:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TestscriptExampleSearch: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TestscriptExampleUpdate fixture", () => {
    const result = createTestScriptSchema().safeParse(TestscriptExampleUpdate);
    if (!result.success) {
      console.error("Validation failed for TestscriptExampleUpdate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TestscriptExampleUpdate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TestscriptExample fixture", () => {
    const result = createTestScriptSchema().safeParse(TestscriptExample);
    if (!result.success) {
      console.error("Validation failed for TestscriptExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TestscriptExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
