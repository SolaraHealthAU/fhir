import { createOperationOutcomeSchema } from "../../src";
import {
  OperationoutcomeExampleAllok,
  OperationoutcomeExampleBreakTheGlass,
  OperationoutcomeExampleException,
  OperationoutcomeExampleSearchfail,
  OperationoutcomeExampleValidationfail,
  OperationoutcomeExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Operationoutcome Group Schema Validation", () => {
  it("should validate OperationoutcomeExampleAllok fixture (OperationOutcome)", () => {
    const result = createOperationOutcomeSchema().safeParse(
      OperationoutcomeExampleAllok,
    );
    if (!result.success) {
      console.error("Validation failed for OperationoutcomeExampleAllok:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationoutcomeExampleAllok: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationoutcomeExampleBreakTheGlass fixture (OperationOutcome)", () => {
    const result = createOperationOutcomeSchema().safeParse(
      OperationoutcomeExampleBreakTheGlass,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OperationoutcomeExampleBreakTheGlass:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationoutcomeExampleBreakTheGlass: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationoutcomeExampleException fixture (OperationOutcome)", () => {
    const result = createOperationOutcomeSchema().safeParse(
      OperationoutcomeExampleException,
    );
    if (!result.success) {
      console.error("Validation failed for OperationoutcomeExampleException:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationoutcomeExampleException: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationoutcomeExampleSearchfail fixture (OperationOutcome)", () => {
    const result = createOperationOutcomeSchema().safeParse(
      OperationoutcomeExampleSearchfail,
    );
    if (!result.success) {
      console.error("Validation failed for OperationoutcomeExampleSearchfail:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationoutcomeExampleSearchfail: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationoutcomeExampleValidationfail fixture (OperationOutcome)", () => {
    const result = createOperationOutcomeSchema().safeParse(
      OperationoutcomeExampleValidationfail,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OperationoutcomeExampleValidationfail:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationoutcomeExampleValidationfail: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationoutcomeExample fixture (OperationOutcome)", () => {
    const result = createOperationOutcomeSchema().safeParse(
      OperationoutcomeExample,
    );
    if (!result.success) {
      console.error("Validation failed for OperationoutcomeExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationoutcomeExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
