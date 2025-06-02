import { createScheduleSchema } from "../../src";
import {
  ScheduleExample,
  ScheduleProviderLocation1Example,
  ScheduleProviderLocation2Example,
} from "./fixture";
import { z } from "zod/v4";

describe("Schedule Group Schema Validation", () => {
  it("should validate ScheduleExample fixture (Schedule)", () => {
    const result = createScheduleSchema().safeParse(ScheduleExample);
    if (!result.success) {
      console.error("Validation failed for ScheduleExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScheduleExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScheduleProviderLocation1Example fixture (Schedule)", () => {
    const result = createScheduleSchema().safeParse(
      ScheduleProviderLocation1Example,
    );
    if (!result.success) {
      console.error("Validation failed for ScheduleProviderLocation1Example:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScheduleProviderLocation1Example: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ScheduleProviderLocation2Example fixture (Schedule)", () => {
    const result = createScheduleSchema().safeParse(
      ScheduleProviderLocation2Example,
    );
    if (!result.success) {
      console.error("Validation failed for ScheduleProviderLocation2Example:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ScheduleProviderLocation2Example: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
