import { createAppointmentResponseSchema } from "../../src";
import {
  AppointmentresponseExampleReq,
  AppointmentresponseExample,
} from "./fixture";
import { z } from "zod/v4";

describe("AppointmentResponse Schema Validation", () => {
  it("should validate AppointmentresponseExampleReq fixture", () => {
    const result = createAppointmentResponseSchema().safeParse(
      AppointmentresponseExampleReq,
    );
    if (!result.success) {
      console.error("Validation failed for AppointmentresponseExampleReq:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AppointmentresponseExampleReq: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AppointmentresponseExample fixture", () => {
    const result = createAppointmentResponseSchema().safeParse(
      AppointmentresponseExample,
    );
    if (!result.success) {
      console.error("Validation failed for AppointmentresponseExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AppointmentresponseExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
