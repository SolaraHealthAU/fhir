import { createEndpointSchema } from "../../src";
import {
  EndpointExampleIid,
  EndpointExampleWadors,
  EndpointExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Endpoint Group Schema Validation", () => {
  it("should validate EndpointExampleIid fixture (Endpoint)", () => {
    const result = createEndpointSchema().safeParse(EndpointExampleIid);
    if (!result.success) {
      console.error("Validation failed for EndpointExampleIid:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EndpointExampleIid: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EndpointExampleWadors fixture (Endpoint)", () => {
    const result = createEndpointSchema().safeParse(EndpointExampleWadors);
    if (!result.success) {
      console.error("Validation failed for EndpointExampleWadors:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EndpointExampleWadors: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EndpointExample fixture (Endpoint)", () => {
    const result = createEndpointSchema().safeParse(EndpointExample);
    if (!result.success) {
      console.error("Validation failed for EndpointExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EndpointExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
