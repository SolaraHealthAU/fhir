import { createEndpointSchema } from "../../src";
import {
  EndpointExampleDirect,
  EndpointExampleIid,
  EndpointExampleWadors,
  EndpointExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Endpoint Schema Validation", () => {
  it("should validate EndpointExampleDirect fixture", () => {
    const result = createEndpointSchema().safeParse(EndpointExampleDirect);
    if (!result.success) {
      console.error("Validation failed for EndpointExampleDirect:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for EndpointExampleDirect: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate EndpointExampleIid fixture", () => {
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

  it("should validate EndpointExampleWadors fixture", () => {
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

  it("should validate EndpointExample fixture", () => {
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
