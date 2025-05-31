import { createSlotSchema } from "../../src";
import {
  SlotExampleBusy,
  SlotExampleTentative,
  SlotExampleUnavailable,
  SlotExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Slot Schema Validation", () => {
  it("should validate SlotExampleBusy fixture", () => {
    const result = createSlotSchema().safeParse(SlotExampleBusy);
    if (!result.success) {
      console.error("Validation failed for SlotExampleBusy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SlotExampleBusy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SlotExampleTentative fixture", () => {
    const result = createSlotSchema().safeParse(SlotExampleTentative);
    if (!result.success) {
      console.error("Validation failed for SlotExampleTentative:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SlotExampleTentative: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SlotExampleUnavailable fixture", () => {
    const result = createSlotSchema().safeParse(SlotExampleUnavailable);
    if (!result.success) {
      console.error("Validation failed for SlotExampleUnavailable:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SlotExampleUnavailable: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SlotExample fixture", () => {
    const result = createSlotSchema().safeParse(SlotExample);
    if (!result.success) {
      console.error("Validation failed for SlotExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SlotExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
