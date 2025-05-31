import { createPersonSchema } from "../../src";
import {
  PersonExampleF002Ariadne,
  PersonExample,
  PersonGrahame,
  PersonPatientPortal,
  PersonProviderDirectory,
} from "./fixture";
import { z } from "zod/v4";

describe("Person Schema Validation", () => {
  it("should validate PersonExampleF002Ariadne fixture", () => {
    const result = createPersonSchema().safeParse(PersonExampleF002Ariadne);
    if (!result.success) {
      console.error("Validation failed for PersonExampleF002Ariadne:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PersonExampleF002Ariadne: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PersonExample fixture", () => {
    const result = createPersonSchema().safeParse(PersonExample);
    if (!result.success) {
      console.error("Validation failed for PersonExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PersonExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PersonGrahame fixture", () => {
    const result = createPersonSchema().safeParse(PersonGrahame);
    if (!result.success) {
      console.error("Validation failed for PersonGrahame:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PersonGrahame: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PersonPatientPortal fixture", () => {
    const result = createPersonSchema().safeParse(PersonPatientPortal);
    if (!result.success) {
      console.error("Validation failed for PersonPatientPortal:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PersonPatientPortal: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PersonProviderDirectory fixture", () => {
    const result = createPersonSchema().safeParse(PersonProviderDirectory);
    if (!result.success) {
      console.error("Validation failed for PersonProviderDirectory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PersonProviderDirectory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
