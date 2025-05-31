import { createProcedureSchema } from "../../src";
import {
  ProcedureExampleHcbs,
  ProcedureExampleAmbulation,
  ProcedureExampleAppendectomyNarrative,
  ProcedureExampleBiopsy,
  ProcedureExampleColonBiopsy,
  ProcedureExampleColonoscopy,
  ProcedureExampleEducation,
  ProcedureExampleF001Heart,
  ProcedureExampleF002Lung,
  ProcedureExampleF003Abscess,
  ProcedureExampleF004Tracheotomy,
  ProcedureExampleF201Tpf,
  ProcedureExampleImplant,
  ProcedureExampleOb,
  ProcedureExamplePhysicalTherapy,
  ProcedureExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Procedure Schema Validation", () => {
  it("should validate ProcedureExampleHcbs fixture", () => {
    const result = createProcedureSchema().safeParse(ProcedureExampleHcbs);
    if (!result.success) {
      console.error("Validation failed for ProcedureExampleHcbs:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExampleHcbs: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExampleAmbulation fixture", () => {
    const result = createProcedureSchema().safeParse(
      ProcedureExampleAmbulation,
    );
    if (!result.success) {
      console.error("Validation failed for ProcedureExampleAmbulation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExampleAmbulation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExampleAppendectomyNarrative fixture", () => {
    const result = createProcedureSchema().safeParse(
      ProcedureExampleAppendectomyNarrative,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ProcedureExampleAppendectomyNarrative:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExampleAppendectomyNarrative: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExampleBiopsy fixture", () => {
    const result = createProcedureSchema().safeParse(ProcedureExampleBiopsy);
    if (!result.success) {
      console.error("Validation failed for ProcedureExampleBiopsy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExampleBiopsy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExampleColonBiopsy fixture", () => {
    const result = createProcedureSchema().safeParse(
      ProcedureExampleColonBiopsy,
    );
    if (!result.success) {
      console.error("Validation failed for ProcedureExampleColonBiopsy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExampleColonBiopsy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExampleColonoscopy fixture", () => {
    const result = createProcedureSchema().safeParse(
      ProcedureExampleColonoscopy,
    );
    if (!result.success) {
      console.error("Validation failed for ProcedureExampleColonoscopy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExampleColonoscopy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExampleEducation fixture", () => {
    const result = createProcedureSchema().safeParse(ProcedureExampleEducation);
    if (!result.success) {
      console.error("Validation failed for ProcedureExampleEducation:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExampleEducation: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExampleF001Heart fixture", () => {
    const result = createProcedureSchema().safeParse(ProcedureExampleF001Heart);
    if (!result.success) {
      console.error("Validation failed for ProcedureExampleF001Heart:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExampleF001Heart: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExampleF002Lung fixture", () => {
    const result = createProcedureSchema().safeParse(ProcedureExampleF002Lung);
    if (!result.success) {
      console.error("Validation failed for ProcedureExampleF002Lung:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExampleF002Lung: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExampleF003Abscess fixture", () => {
    const result = createProcedureSchema().safeParse(
      ProcedureExampleF003Abscess,
    );
    if (!result.success) {
      console.error("Validation failed for ProcedureExampleF003Abscess:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExampleF003Abscess: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExampleF004Tracheotomy fixture", () => {
    const result = createProcedureSchema().safeParse(
      ProcedureExampleF004Tracheotomy,
    );
    if (!result.success) {
      console.error("Validation failed for ProcedureExampleF004Tracheotomy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExampleF004Tracheotomy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExampleF201Tpf fixture", () => {
    const result = createProcedureSchema().safeParse(ProcedureExampleF201Tpf);
    if (!result.success) {
      console.error("Validation failed for ProcedureExampleF201Tpf:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExampleF201Tpf: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExampleImplant fixture", () => {
    const result = createProcedureSchema().safeParse(ProcedureExampleImplant);
    if (!result.success) {
      console.error("Validation failed for ProcedureExampleImplant:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExampleImplant: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExampleOb fixture", () => {
    const result = createProcedureSchema().safeParse(ProcedureExampleOb);
    if (!result.success) {
      console.error("Validation failed for ProcedureExampleOb:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExampleOb: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExamplePhysicalTherapy fixture", () => {
    const result = createProcedureSchema().safeParse(
      ProcedureExamplePhysicalTherapy,
    );
    if (!result.success) {
      console.error("Validation failed for ProcedureExamplePhysicalTherapy:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExamplePhysicalTherapy: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ProcedureExample fixture", () => {
    const result = createProcedureSchema().safeParse(ProcedureExample);
    if (!result.success) {
      console.error("Validation failed for ProcedureExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ProcedureExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
