import { createLocationSchema } from "../../src";
import {
  LocationExampleAmbulance,
  LocationExampleHl7hq,
  LocationExamplePatientsHome,
  LocationExampleRoom,
  LocationExampleUkpharmacy,
  LocationExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Location Schema Validation", () => {
  it("should validate LocationExampleAmbulance fixture", () => {
    const result = createLocationSchema().safeParse(LocationExampleAmbulance);
    if (!result.success) {
      console.error("Validation failed for LocationExampleAmbulance:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LocationExampleAmbulance: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LocationExampleHl7hq fixture", () => {
    const result = createLocationSchema().safeParse(LocationExampleHl7hq);
    if (!result.success) {
      console.error("Validation failed for LocationExampleHl7hq:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LocationExampleHl7hq: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LocationExamplePatientsHome fixture", () => {
    const result = createLocationSchema().safeParse(
      LocationExamplePatientsHome,
    );
    if (!result.success) {
      console.error("Validation failed for LocationExamplePatientsHome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LocationExamplePatientsHome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LocationExampleRoom fixture", () => {
    const result = createLocationSchema().safeParse(LocationExampleRoom);
    if (!result.success) {
      console.error("Validation failed for LocationExampleRoom:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LocationExampleRoom: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LocationExampleUkpharmacy fixture", () => {
    const result = createLocationSchema().safeParse(LocationExampleUkpharmacy);
    if (!result.success) {
      console.error("Validation failed for LocationExampleUkpharmacy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LocationExampleUkpharmacy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate LocationExample fixture", () => {
    const result = createLocationSchema().safeParse(LocationExample);
    if (!result.success) {
      console.error("Validation failed for LocationExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for LocationExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
