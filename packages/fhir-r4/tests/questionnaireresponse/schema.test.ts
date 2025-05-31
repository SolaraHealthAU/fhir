import { createQuestionnaireResponseSchema } from "../../src";
import {
  QuestionnaireresponseExampleBluebook,
  QuestionnaireresponseExampleF201Lifelines,
  QuestionnaireresponseExampleGcs,
  QuestionnaireresponseExampleUssgFhtAnswers,
  QuestionnaireresponseExample,
} from "./fixture";
import { z } from "zod/v4";

describe("QuestionnaireResponse Schema Validation", () => {
  it("should validate QuestionnaireresponseExampleBluebook fixture", () => {
    const result = createQuestionnaireResponseSchema().safeParse(
      QuestionnaireresponseExampleBluebook,
    );
    if (!result.success) {
      console.error(
        "Validation failed for QuestionnaireresponseExampleBluebook:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for QuestionnaireresponseExampleBluebook: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate QuestionnaireresponseExampleF201Lifelines fixture", () => {
    const result = createQuestionnaireResponseSchema().safeParse(
      QuestionnaireresponseExampleF201Lifelines,
    );
    if (!result.success) {
      console.error(
        "Validation failed for QuestionnaireresponseExampleF201Lifelines:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for QuestionnaireresponseExampleF201Lifelines: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate QuestionnaireresponseExampleGcs fixture", () => {
    const result = createQuestionnaireResponseSchema().safeParse(
      QuestionnaireresponseExampleGcs,
    );
    if (!result.success) {
      console.error("Validation failed for QuestionnaireresponseExampleGcs:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for QuestionnaireresponseExampleGcs: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate QuestionnaireresponseExampleUssgFhtAnswers fixture", () => {
    const result = createQuestionnaireResponseSchema().safeParse(
      QuestionnaireresponseExampleUssgFhtAnswers,
    );
    if (!result.success) {
      console.error(
        "Validation failed for QuestionnaireresponseExampleUssgFhtAnswers:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for QuestionnaireresponseExampleUssgFhtAnswers: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate QuestionnaireresponseExample fixture", () => {
    const result = createQuestionnaireResponseSchema().safeParse(
      QuestionnaireresponseExample,
    );
    if (!result.success) {
      console.error("Validation failed for QuestionnaireresponseExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for QuestionnaireresponseExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
