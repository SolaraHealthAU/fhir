import { createOrganizationAffiliationSchema } from "../../src";
import {
  OrganizationaffiliationExample,
  OrgroleExampleHie,
  OrgroleExampleServices,
} from "./fixture";
import { z } from "zod/v4";

describe("OrganizationAffiliation Schema Validation", () => {
  it("should validate OrganizationaffiliationExample fixture", () => {
    const result = createOrganizationAffiliationSchema().safeParse(
      OrganizationaffiliationExample,
    );
    if (!result.success) {
      console.error("Validation failed for OrganizationaffiliationExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationaffiliationExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrgroleExampleHie fixture", () => {
    const result =
      createOrganizationAffiliationSchema().safeParse(OrgroleExampleHie);
    if (!result.success) {
      console.error("Validation failed for OrgroleExampleHie:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrgroleExampleHie: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrgroleExampleServices fixture", () => {
    const result = createOrganizationAffiliationSchema().safeParse(
      OrgroleExampleServices,
    );
    if (!result.success) {
      console.error("Validation failed for OrgroleExampleServices:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrgroleExampleServices: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
