import { createLibrarySchema } from "../../src";
import {
  LibraryCompositionExample,
  LibraryExclusiveBreastfeedingCdsLogic,
  LibraryExclusiveBreastfeedingCqmLogic,
  LibraryOpioidcdsCommon,
  LibraryOpioidcdsRecommendation04,
  LibraryOpioidcdsRecommendation05,
  LibraryOpioidcdsRecommendation07,
  LibraryOpioidcdsRecommendation08,
  LibraryOpioidcdsRecommendation10,
  LibraryOpioidcdsRecommendation11,
  LibraryQuickModelDefinition,
} from "./fixture";
import { z } from "zod/v4";

describe("Library Group Schema Validation", () => {
  it("should validate LibraryCompositionExample fixture (Library)", () => {
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

  it("should validate LibraryExclusiveBreastfeedingCdsLogic fixture (Library)", () => {
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

  it("should validate LibraryExclusiveBreastfeedingCqmLogic fixture (Library)", () => {
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

  it("should validate LibraryOpioidcdsCommon fixture (Library)", () => {
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

  it("should validate LibraryOpioidcdsRecommendation04 fixture (Library)", () => {
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

  it("should validate LibraryOpioidcdsRecommendation05 fixture (Library)", () => {
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

  it("should validate LibraryOpioidcdsRecommendation07 fixture (Library)", () => {
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

  it("should validate LibraryOpioidcdsRecommendation08 fixture (Library)", () => {
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

  it("should validate LibraryOpioidcdsRecommendation10 fixture (Library)", () => {
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

  it("should validate LibraryOpioidcdsRecommendation11 fixture (Library)", () => {
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

  it("should validate LibraryQuickModelDefinition fixture (Library)", () => {
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
});
