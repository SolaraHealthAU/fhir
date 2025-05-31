import { createConsentSchema } from "../../src";
import {
  ConsentExampleEmergency,
  ConsentExampleOut,
  ConsentExampleGrantor,
  ConsentExampleNotauthor,
  ConsentExampleNotorg,
  ConsentExampleNotthem,
  ConsentExampleNotthis,
  ConsentExampleNottime,
  ConsentExamplePkb,
  ConsentExampleSignature,
  ConsentExampleSmartonfhir,
  ConsentExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Consent Schema Validation", () => {
  it("should validate ConsentExampleEmergency fixture", () => {
    const result = createConsentSchema().safeParse(ConsentExampleEmergency);
    if (!result.success) {
      console.error("Validation failed for ConsentExampleEmergency:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConsentExampleEmergency: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConsentExampleOut fixture", () => {
    const result = createConsentSchema().safeParse(ConsentExampleOut);
    if (!result.success) {
      console.error("Validation failed for ConsentExampleOut:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConsentExampleOut: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConsentExampleGrantor fixture", () => {
    const result = createConsentSchema().safeParse(ConsentExampleGrantor);
    if (!result.success) {
      console.error("Validation failed for ConsentExampleGrantor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConsentExampleGrantor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConsentExampleNotauthor fixture", () => {
    const result = createConsentSchema().safeParse(ConsentExampleNotauthor);
    if (!result.success) {
      console.error("Validation failed for ConsentExampleNotauthor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConsentExampleNotauthor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConsentExampleNotorg fixture", () => {
    const result = createConsentSchema().safeParse(ConsentExampleNotorg);
    if (!result.success) {
      console.error("Validation failed for ConsentExampleNotorg:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConsentExampleNotorg: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConsentExampleNotthem fixture", () => {
    const result = createConsentSchema().safeParse(ConsentExampleNotthem);
    if (!result.success) {
      console.error("Validation failed for ConsentExampleNotthem:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConsentExampleNotthem: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConsentExampleNotthis fixture", () => {
    const result = createConsentSchema().safeParse(ConsentExampleNotthis);
    if (!result.success) {
      console.error("Validation failed for ConsentExampleNotthis:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConsentExampleNotthis: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConsentExampleNottime fixture", () => {
    const result = createConsentSchema().safeParse(ConsentExampleNottime);
    if (!result.success) {
      console.error("Validation failed for ConsentExampleNottime:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConsentExampleNottime: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConsentExamplePkb fixture", () => {
    const result = createConsentSchema().safeParse(ConsentExamplePkb);
    if (!result.success) {
      console.error("Validation failed for ConsentExamplePkb:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConsentExamplePkb: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConsentExampleSignature fixture", () => {
    const result = createConsentSchema().safeParse(ConsentExampleSignature);
    if (!result.success) {
      console.error("Validation failed for ConsentExampleSignature:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConsentExampleSignature: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConsentExampleSmartonfhir fixture", () => {
    const result = createConsentSchema().safeParse(ConsentExampleSmartonfhir);
    if (!result.success) {
      console.error("Validation failed for ConsentExampleSmartonfhir:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConsentExampleSmartonfhir: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ConsentExample fixture", () => {
    const result = createConsentSchema().safeParse(ConsentExample);
    if (!result.success) {
      console.error("Validation failed for ConsentExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ConsentExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
