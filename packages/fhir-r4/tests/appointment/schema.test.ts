import { createAppointmentSchema } from "../../src";
import {
  AppointmentExampleRequest,
  AppointmentExample,
  AppointmentExample2doctors,
} from "./fixture";
import { z } from "zod/v4";

describe("Appointment Schema Validation", () => {
  it("should validate AppointmentExampleRequest fixture", () => {
    const result = createAppointmentSchema().safeParse(
      AppointmentExampleRequest,
    );
    if (!result.success) {
      console.error("Validation failed for AppointmentExampleRequest:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AppointmentExampleRequest: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AppointmentExample fixture", () => {
    const result = createAppointmentSchema().safeParse(AppointmentExample);
    if (!result.success) {
      console.error("Validation failed for AppointmentExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AppointmentExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AppointmentExample2doctors fixture", () => {
    const result = createAppointmentSchema().safeParse(
      AppointmentExample2doctors,
    );
    if (!result.success) {
      console.error("Validation failed for AppointmentExample2doctors:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AppointmentExample2doctors: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
