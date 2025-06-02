import { createCareTeamSchema } from "../../src";
import { CareteamExample } from "./fixture";
import { z } from "zod/v4";

describe("Careteam Group Schema Validation", () => {
  it("should validate CareteamExample fixture (CareTeam)", () => {
    const result = createCareTeamSchema().safeParse(CareteamExample);
    if (!result.success) {
      console.error("Validation failed for CareteamExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CareteamExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
