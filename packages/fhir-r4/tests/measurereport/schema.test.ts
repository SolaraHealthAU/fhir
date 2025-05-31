import { createMeasureReportSchema } from "../../src";
import {
  MeasurereportCms146Cat1Example,
  MeasurereportCms146Cat3Example,
  MeasurereportHivIndicators,
} from "./fixture";
import { z } from "zod/v4";

describe("MeasureReport Schema Validation", () => {
  it("should validate MeasurereportCms146Cat1Example fixture", () => {
    const result = createMeasureReportSchema().safeParse(
      MeasurereportCms146Cat1Example,
    );
    if (!result.success) {
      console.error("Validation failed for MeasurereportCms146Cat1Example:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MeasurereportCms146Cat1Example: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MeasurereportCms146Cat3Example fixture", () => {
    const result = createMeasureReportSchema().safeParse(
      MeasurereportCms146Cat3Example,
    );
    if (!result.success) {
      console.error("Validation failed for MeasurereportCms146Cat3Example:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MeasurereportCms146Cat3Example: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MeasurereportHivIndicators fixture", () => {
    const result = createMeasureReportSchema().safeParse(
      MeasurereportHivIndicators,
    );
    if (!result.success) {
      console.error("Validation failed for MeasurereportHivIndicators:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MeasurereportHivIndicators: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
