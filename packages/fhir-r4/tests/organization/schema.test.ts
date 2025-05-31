import { createOrganizationSchema } from "../../src";
import {
  OrganizationExampleF001Burgers,
  OrganizationExampleF002BurgersCard,
  OrganizationExampleF003BurgersEnt,
  OrganizationExampleF201Aumc,
  OrganizationExampleF203Bumc,
  OrganizationExampleGastro,
  OrganizationExampleGoodHealthCare,
  OrganizationExampleHl7pay,
  OrganizationExampleInsurer,
  OrganizationExampleLab,
  OrganizationExampleMihealth,
  OrganizationExampleMmanu,
  OrganizationExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Organization Schema Validation", () => {
  it("should validate OrganizationExampleF001Burgers fixture", () => {
    const result = createOrganizationSchema().safeParse(
      OrganizationExampleF001Burgers,
    );
    if (!result.success) {
      console.error("Validation failed for OrganizationExampleF001Burgers:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationExampleF001Burgers: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationExampleF002BurgersCard fixture", () => {
    const result = createOrganizationSchema().safeParse(
      OrganizationExampleF002BurgersCard,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OrganizationExampleF002BurgersCard:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationExampleF002BurgersCard: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationExampleF003BurgersEnt fixture", () => {
    const result = createOrganizationSchema().safeParse(
      OrganizationExampleF003BurgersEnt,
    );
    if (!result.success) {
      console.error("Validation failed for OrganizationExampleF003BurgersEnt:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationExampleF003BurgersEnt: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationExampleF201Aumc fixture", () => {
    const result = createOrganizationSchema().safeParse(
      OrganizationExampleF201Aumc,
    );
    if (!result.success) {
      console.error("Validation failed for OrganizationExampleF201Aumc:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationExampleF201Aumc: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationExampleF203Bumc fixture", () => {
    const result = createOrganizationSchema().safeParse(
      OrganizationExampleF203Bumc,
    );
    if (!result.success) {
      console.error("Validation failed for OrganizationExampleF203Bumc:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationExampleF203Bumc: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationExampleGastro fixture", () => {
    const result = createOrganizationSchema().safeParse(
      OrganizationExampleGastro,
    );
    if (!result.success) {
      console.error("Validation failed for OrganizationExampleGastro:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationExampleGastro: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationExampleGoodHealthCare fixture", () => {
    const result = createOrganizationSchema().safeParse(
      OrganizationExampleGoodHealthCare,
    );
    if (!result.success) {
      console.error("Validation failed for OrganizationExampleGoodHealthCare:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationExampleGoodHealthCare: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationExampleHl7pay fixture", () => {
    const result = createOrganizationSchema().safeParse(
      OrganizationExampleHl7pay,
    );
    if (!result.success) {
      console.error("Validation failed for OrganizationExampleHl7pay:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationExampleHl7pay: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationExampleInsurer fixture", () => {
    const result = createOrganizationSchema().safeParse(
      OrganizationExampleInsurer,
    );
    if (!result.success) {
      console.error("Validation failed for OrganizationExampleInsurer:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationExampleInsurer: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationExampleLab fixture", () => {
    const result = createOrganizationSchema().safeParse(OrganizationExampleLab);
    if (!result.success) {
      console.error("Validation failed for OrganizationExampleLab:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationExampleLab: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationExampleMihealth fixture", () => {
    const result = createOrganizationSchema().safeParse(
      OrganizationExampleMihealth,
    );
    if (!result.success) {
      console.error("Validation failed for OrganizationExampleMihealth:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationExampleMihealth: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationExampleMmanu fixture", () => {
    const result = createOrganizationSchema().safeParse(
      OrganizationExampleMmanu,
    );
    if (!result.success) {
      console.error("Validation failed for OrganizationExampleMmanu:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationExampleMmanu: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OrganizationExample fixture", () => {
    const result = createOrganizationSchema().safeParse(OrganizationExample);
    if (!result.success) {
      console.error("Validation failed for OrganizationExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OrganizationExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
