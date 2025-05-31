import { createLibrarySchema } from "../../src";
import {
  LibraryCms146Example,
  LibraryCompositionExample,
  LibraryExample,
  LibraryExclusiveBreastfeedingCdsLogic,
  LibraryExclusiveBreastfeedingCqmLogic,
  LibraryFhirHelpers,
  LibraryHivIndicators,
  LibraryMmiSuicideriskOrdersetLogic,
  LibraryOmtkModelinfo,
  LibraryOpioidcdsCommon,
  LibraryOpioidcdsRecommendation04,
  LibraryOpioidcdsRecommendation05,
  LibraryOpioidcdsRecommendation07,
  LibraryOpioidcdsRecommendation08,
  LibraryOpioidcdsRecommendation10,
  LibraryOpioidcdsRecommendation11,
  LibraryPredecessorExample,
  LibraryQuickModelDefinition,
  LibraryZikaVirusInterventionLogic,
} from "./fixture";
import { z } from "zod/v4";

describe("Library Schema Validation", () => {
  it("should validate LibraryCms146Example fixture", () => {
    const result = createLibrarySchema().safeParse(LibraryCms146Example);
    if (!result.success) {
      console.error("Validation failed for LibraryCms146Example:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryCms146Example: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryCompositionExample fixture", () => {
    const result = createLibrarySchema().safeParse(LibraryCompositionExample);
    if (!result.success) {
      console.error("Validation failed for LibraryCompositionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryCompositionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryExample fixture", () => {
    const result = createLibrarySchema().safeParse(LibraryExample);
    if (!result.success) {
      console.error("Validation failed for LibraryExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryExclusiveBreastfeedingCdsLogic fixture", () => {
    const result = createLibrarySchema().safeParse(
      LibraryExclusiveBreastfeedingCdsLogic,
    );
    if (!result.success) {
      console.error(
        "Validation failed for LibraryExclusiveBreastfeedingCdsLogic:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryExclusiveBreastfeedingCdsLogic: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryExclusiveBreastfeedingCqmLogic fixture", () => {
    const result = createLibrarySchema().safeParse(
      LibraryExclusiveBreastfeedingCqmLogic,
    );
    if (!result.success) {
      console.error(
        "Validation failed for LibraryExclusiveBreastfeedingCqmLogic:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryExclusiveBreastfeedingCqmLogic: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryFhirHelpers fixture", () => {
    const result = createLibrarySchema().safeParse(LibraryFhirHelpers);
    if (!result.success) {
      console.error("Validation failed for LibraryFhirHelpers:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryFhirHelpers: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryHivIndicators fixture", () => {
    const result = createLibrarySchema().safeParse(LibraryHivIndicators);
    if (!result.success) {
      console.error("Validation failed for LibraryHivIndicators:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryHivIndicators: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryMmiSuicideriskOrdersetLogic fixture", () => {
    const result = createLibrarySchema().safeParse(
      LibraryMmiSuicideriskOrdersetLogic,
    );
    if (!result.success) {
      console.error(
        "Validation failed for LibraryMmiSuicideriskOrdersetLogic:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryMmiSuicideriskOrdersetLogic: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryOmtkModelinfo fixture", () => {
    const result = createLibrarySchema().safeParse(LibraryOmtkModelinfo);
    if (!result.success) {
      console.error("Validation failed for LibraryOmtkModelinfo:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryOmtkModelinfo: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryOpioidcdsCommon fixture", () => {
    const result = createLibrarySchema().safeParse(LibraryOpioidcdsCommon);
    if (!result.success) {
      console.error("Validation failed for LibraryOpioidcdsCommon:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryOpioidcdsCommon: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryOpioidcdsRecommendation04 fixture", () => {
    const result = createLibrarySchema().safeParse(
      LibraryOpioidcdsRecommendation04,
    );
    if (!result.success) {
      console.error("Validation failed for LibraryOpioidcdsRecommendation04:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryOpioidcdsRecommendation04: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryOpioidcdsRecommendation05 fixture", () => {
    const result = createLibrarySchema().safeParse(
      LibraryOpioidcdsRecommendation05,
    );
    if (!result.success) {
      console.error("Validation failed for LibraryOpioidcdsRecommendation05:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryOpioidcdsRecommendation05: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryOpioidcdsRecommendation07 fixture", () => {
    const result = createLibrarySchema().safeParse(
      LibraryOpioidcdsRecommendation07,
    );
    if (!result.success) {
      console.error("Validation failed for LibraryOpioidcdsRecommendation07:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryOpioidcdsRecommendation07: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryOpioidcdsRecommendation08 fixture", () => {
    const result = createLibrarySchema().safeParse(
      LibraryOpioidcdsRecommendation08,
    );
    if (!result.success) {
      console.error("Validation failed for LibraryOpioidcdsRecommendation08:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryOpioidcdsRecommendation08: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryOpioidcdsRecommendation10 fixture", () => {
    const result = createLibrarySchema().safeParse(
      LibraryOpioidcdsRecommendation10,
    );
    if (!result.success) {
      console.error("Validation failed for LibraryOpioidcdsRecommendation10:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryOpioidcdsRecommendation10: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryOpioidcdsRecommendation11 fixture", () => {
    const result = createLibrarySchema().safeParse(
      LibraryOpioidcdsRecommendation11,
    );
    if (!result.success) {
      console.error("Validation failed for LibraryOpioidcdsRecommendation11:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryOpioidcdsRecommendation11: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryPredecessorExample fixture", () => {
    const result = createLibrarySchema().safeParse(LibraryPredecessorExample);
    if (!result.success) {
      console.error("Validation failed for LibraryPredecessorExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryPredecessorExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryQuickModelDefinition fixture", () => {
    const result = createLibrarySchema().safeParse(LibraryQuickModelDefinition);
    if (!result.success) {
      console.error("Validation failed for LibraryQuickModelDefinition:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryQuickModelDefinition: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LibraryZikaVirusInterventionLogic fixture", () => {
    const result = createLibrarySchema().safeParse(
      LibraryZikaVirusInterventionLogic,
    );
    if (!result.success) {
      console.error("Validation failed for LibraryZikaVirusInterventionLogic:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LibraryZikaVirusInterventionLogic: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
