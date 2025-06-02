import { createMessageDefinitionSchema } from "../../src";
import {
  MessagedefinitionExample,
  MessagedefinitionPatientLinkNotification,
  MessagedefinitionPatientLinkResponse,
} from "./fixture";
import { z } from "zod/v4";

describe("Messagedefinition Group Schema Validation", () => {
  it("should validate MessagedefinitionExample fixture (MessageDefinition)", () => {
    const result = createMessageDefinitionSchema().safeParse(
      MessagedefinitionExample,
    );
    if (!result.success) {
      console.error("Validation failed for MessagedefinitionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MessagedefinitionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MessagedefinitionPatientLinkNotification fixture (MessageDefinition)", () => {
    const result = createMessageDefinitionSchema().safeParse(
      MessagedefinitionPatientLinkNotification,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MessagedefinitionPatientLinkNotification:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MessagedefinitionPatientLinkNotification: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MessagedefinitionPatientLinkResponse fixture (MessageDefinition)", () => {
    const result = createMessageDefinitionSchema().safeParse(
      MessagedefinitionPatientLinkResponse,
    );
    if (!result.success) {
      console.error(
        "Validation failed for MessagedefinitionPatientLinkResponse:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MessagedefinitionPatientLinkResponse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
