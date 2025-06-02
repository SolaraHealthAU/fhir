import { createAuditEventSchema } from "../../src";
import {
  AuditEventExampleLogin,
  AuditEventExampleLogout,
  AuditEventExampleMedia,
  AuditEventExamplePixquery,
  AuditEventExampleSearch,
  AuditEventExampleVread,
  AuditeventExampleDisclosure,
  AuditeventExampleError,
  AuditeventExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Auditevent Group Schema Validation", () => {
  it("should validate AuditEventExampleLogin fixture (AuditEvent)", () => {
    const result = createAuditEventSchema().safeParse(AuditEventExampleLogin);
    if (!result.success) {
      console.error("Validation failed for AuditEventExampleLogin:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AuditEventExampleLogin: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AuditEventExampleLogout fixture (AuditEvent)", () => {
    const result = createAuditEventSchema().safeParse(AuditEventExampleLogout);
    if (!result.success) {
      console.error("Validation failed for AuditEventExampleLogout:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AuditEventExampleLogout: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AuditEventExampleMedia fixture (AuditEvent)", () => {
    const result = createAuditEventSchema().safeParse(AuditEventExampleMedia);
    if (!result.success) {
      console.error("Validation failed for AuditEventExampleMedia:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AuditEventExampleMedia: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AuditEventExamplePixquery fixture (AuditEvent)", () => {
    const result = createAuditEventSchema().safeParse(
      AuditEventExamplePixquery,
    );
    if (!result.success) {
      console.error("Validation failed for AuditEventExamplePixquery:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AuditEventExamplePixquery: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AuditEventExampleSearch fixture (AuditEvent)", () => {
    const result = createAuditEventSchema().safeParse(AuditEventExampleSearch);
    if (!result.success) {
      console.error("Validation failed for AuditEventExampleSearch:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AuditEventExampleSearch: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AuditEventExampleVread fixture (AuditEvent)", () => {
    const result = createAuditEventSchema().safeParse(AuditEventExampleVread);
    if (!result.success) {
      console.error("Validation failed for AuditEventExampleVread:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AuditEventExampleVread: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AuditeventExampleDisclosure fixture (AuditEvent)", () => {
    const result = createAuditEventSchema().safeParse(
      AuditeventExampleDisclosure,
    );
    if (!result.success) {
      console.error("Validation failed for AuditeventExampleDisclosure:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AuditeventExampleDisclosure: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AuditeventExampleError fixture (AuditEvent)", () => {
    const result = createAuditEventSchema().safeParse(AuditeventExampleError);
    if (!result.success) {
      console.error("Validation failed for AuditeventExampleError:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AuditeventExampleError: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate AuditeventExample fixture (AuditEvent)", () => {
    const result = createAuditEventSchema().safeParse(AuditeventExample);
    if (!result.success) {
      console.error("Validation failed for AuditeventExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for AuditeventExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
