import { createCommunicationSchema } from "../../src";
import {
  CommunicationExampleFmAttachment,
  CommunicationExampleFmSolicitedAttachment,
  CommunicationExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Communication Group Schema Validation", () => {
  it("should validate CommunicationExampleFmAttachment fixture (Communication)", () => {
    const result = createCommunicationSchema().safeParse(
      CommunicationExampleFmAttachment,
    );
    if (!result.success) {
      console.error("Validation failed for CommunicationExampleFmAttachment:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CommunicationExampleFmAttachment: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CommunicationExampleFmSolicitedAttachment fixture (Communication)", () => {
    const result = createCommunicationSchema().safeParse(
      CommunicationExampleFmSolicitedAttachment,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CommunicationExampleFmSolicitedAttachment:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CommunicationExampleFmSolicitedAttachment: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CommunicationExample fixture (Communication)", () => {
    const result = createCommunicationSchema().safeParse(CommunicationExample);
    if (!result.success) {
      console.error("Validation failed for CommunicationExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CommunicationExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
