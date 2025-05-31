import { createCommunicationRequestSchema } from "../../src";
import {
  CommunicationrequestExampleFmSolicitAttachment,
  CommunicationrequestExample,
} from "./fixture";
import { z } from "zod/v4";

describe("CommunicationRequest Schema Validation", () => {
  it("should validate CommunicationrequestExampleFmSolicitAttachment fixture", () => {
    const result = createCommunicationRequestSchema().safeParse(
      CommunicationrequestExampleFmSolicitAttachment,
    );
    if (!result.success) {
      console.error(
        "Validation failed for CommunicationrequestExampleFmSolicitAttachment:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CommunicationrequestExampleFmSolicitAttachment: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate CommunicationrequestExample fixture", () => {
    const result = createCommunicationRequestSchema().safeParse(
      CommunicationrequestExample,
    );
    if (!result.success) {
      console.error("Validation failed for CommunicationrequestExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for CommunicationrequestExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
