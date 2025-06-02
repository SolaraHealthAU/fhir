import { createEpisodeOfCareSchema } from "../../src";
import { EpisodeofcareExample } from "./fixture";
import { z } from "zod/v4";

describe("Episodeofcare Group Schema Validation", () => {
  it("should validate EpisodeofcareExample fixture (EpisodeOfCare)", () => {
    const result = createEpisodeOfCareSchema().safeParse(EpisodeofcareExample);
    if (!result.success) {
      console.error("Validation failed for EpisodeofcareExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EpisodeofcareExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
