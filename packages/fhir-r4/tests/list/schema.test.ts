import { createListSchema } from "../../src";
import {
  ListExampleAllergies,
  ListExampleDoubleCousinRelationshipPedigree,
  ListExampleEmpty,
  ListExampleFamilyhistoryF201Roel,
  ListExampleFamilyhistoryGeneticsProfile,
  ListExampleLong,
  ListExampleMedlist,
  ListExampleSimpleEmpty,
  ListExample,
} from "./fixture";
import { z } from "zod/v4";

describe("List Schema Validation", () => {
  it("should validate ListExampleAllergies fixture", () => {
    const result = createListSchema().safeParse(ListExampleAllergies);
    if (!result.success) {
      console.error("Validation failed for ListExampleAllergies:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ListExampleAllergies: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ListExampleDoubleCousinRelationshipPedigree fixture", () => {
    const result = createListSchema().safeParse(
      ListExampleDoubleCousinRelationshipPedigree,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ListExampleDoubleCousinRelationshipPedigree:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ListExampleDoubleCousinRelationshipPedigree: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ListExampleEmpty fixture", () => {
    const result = createListSchema().safeParse(ListExampleEmpty);
    if (!result.success) {
      console.error("Validation failed for ListExampleEmpty:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ListExampleEmpty: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ListExampleFamilyhistoryF201Roel fixture", () => {
    const result = createListSchema().safeParse(
      ListExampleFamilyhistoryF201Roel,
    );
    if (!result.success) {
      console.error("Validation failed for ListExampleFamilyhistoryF201Roel:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ListExampleFamilyhistoryF201Roel: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ListExampleFamilyhistoryGeneticsProfile fixture", () => {
    const result = createListSchema().safeParse(
      ListExampleFamilyhistoryGeneticsProfile,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ListExampleFamilyhistoryGeneticsProfile:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ListExampleFamilyhistoryGeneticsProfile: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ListExampleLong fixture", () => {
    const result = createListSchema().safeParse(ListExampleLong);
    if (!result.success) {
      console.error("Validation failed for ListExampleLong:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ListExampleLong: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ListExampleMedlist fixture", () => {
    const result = createListSchema().safeParse(ListExampleMedlist);
    if (!result.success) {
      console.error("Validation failed for ListExampleMedlist:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ListExampleMedlist: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ListExampleSimpleEmpty fixture", () => {
    const result = createListSchema().safeParse(ListExampleSimpleEmpty);
    if (!result.success) {
      console.error("Validation failed for ListExampleSimpleEmpty:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ListExampleSimpleEmpty: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ListExample fixture", () => {
    const result = createListSchema().safeParse(ListExample);
    if (!result.success) {
      console.error("Validation failed for ListExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ListExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
