import { createGoalSchema } from "../../src";
import { GoalExampleStopSmoking, GoalExample } from "./fixture";
import { z } from "zod/v4";

describe("Goal Schema Validation", () => {
  it("should validate GoalExampleStopSmoking fixture", () => {
    const result = createGoalSchema().safeParse(GoalExampleStopSmoking);
    if (!result.success) {
      console.error("Validation failed for GoalExampleStopSmoking:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for GoalExampleStopSmoking: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate GoalExample fixture", () => {
    const result = createGoalSchema().safeParse(GoalExample);
    if (!result.success) {
      console.error("Validation failed for GoalExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for GoalExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
