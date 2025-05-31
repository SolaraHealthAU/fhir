import { createServiceRequestSchema } from "../../src";
import {
  ServicerequestExampleAmbulation,
  ServicerequestExampleAppendectomy,
  ServicerequestExampleColonoscopyBx,
  ServicerequestExampleColonoscopy,
  ServicerequestExampleDi,
  ServicerequestExampleEdu,
  ServicerequestExampleFt4,
  ServicerequestExampleImplant,
  ServicerequestExampleLipid,
  ServicerequestExampleMyringotomy,
  ServicerequestExampleOb,
  ServicerequestExamplePgx,
  ServicerequestExamplePt,
  ServicerequestExampleSubrequest,
  ServicerequestExampleVentilation,
  ServicerequestExample,
  ServicerequestExample2,
  ServicerequestExample3,
  ServicerequestExample4,
  ServicerequestGeneticsExample1,
} from "./fixture";
import { z } from "zod/v4";

describe("ServiceRequest Schema Validation", () => {
  it("should validate ServicerequestExampleAmbulation fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExampleAmbulation,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExampleAmbulation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExampleAmbulation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExampleAppendectomy fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExampleAppendectomy,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExampleAppendectomy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExampleAppendectomy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExampleColonoscopyBx fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExampleColonoscopyBx,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ServicerequestExampleColonoscopyBx:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExampleColonoscopyBx: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExampleColonoscopy fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExampleColonoscopy,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExampleColonoscopy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExampleColonoscopy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExampleDi fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExampleDi,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExampleDi:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExampleDi: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExampleEdu fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExampleEdu,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExampleEdu:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExampleEdu: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExampleFt4 fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExampleFt4,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExampleFt4:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExampleFt4: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExampleImplant fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExampleImplant,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExampleImplant:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExampleImplant: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExampleLipid fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExampleLipid,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExampleLipid:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExampleLipid: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExampleMyringotomy fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExampleMyringotomy,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExampleMyringotomy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExampleMyringotomy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExampleOb fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExampleOb,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExampleOb:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExampleOb: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExamplePgx fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExamplePgx,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExamplePgx:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExamplePgx: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExamplePt fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExamplePt,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExamplePt:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExamplePt: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExampleSubrequest fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExampleSubrequest,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExampleSubrequest:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExampleSubrequest: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExampleVentilation fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExampleVentilation,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExampleVentilation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExampleVentilation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExample fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExample,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExample2 fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExample2,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExample2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExample2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExample3 fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExample3,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExample3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExample3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestExample4 fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestExample4,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestExample4:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestExample4: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ServicerequestGeneticsExample1 fixture", () => {
    const result = createServiceRequestSchema().safeParse(
      ServicerequestGeneticsExample1,
    );
    if (!result.success) {
      console.error("Validation failed for ServicerequestGeneticsExample1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ServicerequestGeneticsExample1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
