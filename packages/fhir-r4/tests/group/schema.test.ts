import { createGroupSchema } from "../../src";
import {
  GroupExampleHerd1,
  GroupExampleMember,
  GroupExamplePatientlist,
  GroupExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Group Schema Validation", () => {
  it("should validate GroupExampleHerd1 fixture", () => {
    const result = createGroupSchema().safeParse(GroupExampleHerd1);
    if (!result.success) {
      console.error("Validation failed for GroupExampleHerd1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for GroupExampleHerd1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate GroupExampleMember fixture", () => {
    const result = createGroupSchema().safeParse(GroupExampleMember);
    if (!result.success) {
      console.error("Validation failed for GroupExampleMember:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for GroupExampleMember: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate GroupExamplePatientlist fixture", () => {
    const result = createGroupSchema().safeParse(GroupExamplePatientlist);
    if (!result.success) {
      console.error("Validation failed for GroupExamplePatientlist:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for GroupExamplePatientlist: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate GroupExample fixture", () => {
    const result = createGroupSchema().safeParse(GroupExample);
    if (!result.success) {
      console.error("Validation failed for GroupExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for GroupExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
