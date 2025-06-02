import { createMediaSchema } from "../../src";
import {
  MediaExampleDicom,
  MediaExampleSound,
  MediaExampleXray,
  MediaExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Media Group Schema Validation", () => {
  it("should validate MediaExampleDicom fixture (Media)", () => {
    const result = createMediaSchema().safeParse(MediaExampleDicom);
    if (!result.success) {
      console.error("Validation failed for MediaExampleDicom:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MediaExampleDicom: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MediaExampleSound fixture (Media)", () => {
    const result = createMediaSchema().safeParse(MediaExampleSound);
    if (!result.success) {
      console.error("Validation failed for MediaExampleSound:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MediaExampleSound: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MediaExampleXray fixture (Media)", () => {
    const result = createMediaSchema().safeParse(MediaExampleXray);
    if (!result.success) {
      console.error("Validation failed for MediaExampleXray:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MediaExampleXray: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MediaExample fixture (Media)", () => {
    const result = createMediaSchema().safeParse(MediaExample);
    if (!result.success) {
      console.error("Validation failed for MediaExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MediaExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
