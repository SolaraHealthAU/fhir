import { createRequestGroupSchema } from "../../src";
import { RequestgroupExample, RequestgroupKdn5Example } from "./fixture";
import { z } from "zod/v4";

describe("Requestgroup Group Schema Validation", () => {
  it("should validate RequestgroupExample fixture (RequestGroup)", () => {
    const result = createRequestGroupSchema().safeParse(RequestgroupExample);
    if (!result.success) {
      console.error("Validation failed for RequestgroupExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RequestgroupExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate RequestgroupKdn5Example fixture (RequestGroup)", () => {
    const result = createRequestGroupSchema().safeParse(
      RequestgroupKdn5Example,
    );
    if (!result.success) {
      console.error("Validation failed for RequestgroupKdn5Example:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for RequestgroupKdn5Example: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
