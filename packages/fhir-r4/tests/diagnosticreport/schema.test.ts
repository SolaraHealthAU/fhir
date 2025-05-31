import { createDiagnosticReportSchema } from "../../src";
import {
  DiagnosticreportExampleDxa,
  DiagnosticreportExampleF201Brainct,
  DiagnosticreportExamplePapsmear,
  DiagnosticreportExamplePgx,
  DiagnosticreportExampleUltrasound,
} from "./fixture";
import { z } from "zod/v4";

describe("DiagnosticReport Schema Validation", () => {
  it("should validate DiagnosticreportExampleDxa fixture", () => {
    const result = createDiagnosticReportSchema().safeParse(
      DiagnosticreportExampleDxa,
    );
    if (!result.success) {
      console.error("Validation failed for DiagnosticreportExampleDxa:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportExampleDxa: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportExampleF201Brainct fixture", () => {
    const result = createDiagnosticReportSchema().safeParse(
      DiagnosticreportExampleF201Brainct,
    );
    if (!result.success) {
      console.error(
        "Validation failed for DiagnosticreportExampleF201Brainct:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportExampleF201Brainct: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportExamplePapsmear fixture", () => {
    const result = createDiagnosticReportSchema().safeParse(
      DiagnosticreportExamplePapsmear,
    );
    if (!result.success) {
      console.error("Validation failed for DiagnosticreportExamplePapsmear:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportExamplePapsmear: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportExamplePgx fixture", () => {
    const result = createDiagnosticReportSchema().safeParse(
      DiagnosticreportExamplePgx,
    );
    if (!result.success) {
      console.error("Validation failed for DiagnosticreportExamplePgx:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportExamplePgx: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate DiagnosticreportExampleUltrasound fixture", () => {
    const result = createDiagnosticReportSchema().safeParse(
      DiagnosticreportExampleUltrasound,
    );
    if (!result.success) {
      console.error("Validation failed for DiagnosticreportExampleUltrasound:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for DiagnosticreportExampleUltrasound: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
