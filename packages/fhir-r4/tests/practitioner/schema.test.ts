import { createPractitionerSchema } from "../../src";
import {
  PractitionerExampleF001Evdb,
  PractitionerExampleF002Pv,
  PractitionerExampleF003Mv,
  PractitionerExampleF004Rb,
  PractitionerExampleF005Al,
  PractitionerExampleF006Rvdb,
  PractitionerExampleF007Sh,
  PractitionerExampleF201Ab,
  PractitionerExampleF202Lm,
  PractitionerExampleF203Jvg,
  PractitionerExampleF204Ce,
  PractitionerExampleXcdaAuthor,
  PractitionerExampleXcda1,
  PractitionerExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Practitioner Group Schema Validation", () => {
  it("should validate PractitionerExampleF001Evdb fixture (Practitioner)", () => {
    const result = createPractitionerSchema().safeParse(
      PractitionerExampleF001Evdb,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerExampleF001Evdb:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExampleF001Evdb: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerExampleF002Pv fixture (Practitioner)", () => {
    const result = createPractitionerSchema().safeParse(
      PractitionerExampleF002Pv,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerExampleF002Pv:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExampleF002Pv: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerExampleF003Mv fixture (Practitioner)", () => {
    const result = createPractitionerSchema().safeParse(
      PractitionerExampleF003Mv,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerExampleF003Mv:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExampleF003Mv: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerExampleF004Rb fixture (Practitioner)", () => {
    const result = createPractitionerSchema().safeParse(
      PractitionerExampleF004Rb,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerExampleF004Rb:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExampleF004Rb: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerExampleF005Al fixture (Practitioner)", () => {
    const result = createPractitionerSchema().safeParse(
      PractitionerExampleF005Al,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerExampleF005Al:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExampleF005Al: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerExampleF006Rvdb fixture (Practitioner)", () => {
    const result = createPractitionerSchema().safeParse(
      PractitionerExampleF006Rvdb,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerExampleF006Rvdb:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExampleF006Rvdb: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerExampleF007Sh fixture (Practitioner)", () => {
    const result = createPractitionerSchema().safeParse(
      PractitionerExampleF007Sh,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerExampleF007Sh:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExampleF007Sh: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerExampleF201Ab fixture (Practitioner)", () => {
    const result = createPractitionerSchema().safeParse(
      PractitionerExampleF201Ab,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerExampleF201Ab:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExampleF201Ab: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerExampleF202Lm fixture (Practitioner)", () => {
    const result = createPractitionerSchema().safeParse(
      PractitionerExampleF202Lm,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerExampleF202Lm:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExampleF202Lm: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerExampleF203Jvg fixture (Practitioner)", () => {
    const result = createPractitionerSchema().safeParse(
      PractitionerExampleF203Jvg,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerExampleF203Jvg:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExampleF203Jvg: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerExampleF204Ce fixture (Practitioner)", () => {
    const result = createPractitionerSchema().safeParse(
      PractitionerExampleF204Ce,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerExampleF204Ce:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExampleF204Ce: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerExampleXcdaAuthor fixture (Practitioner)", () => {
    const result = createPractitionerSchema().safeParse(
      PractitionerExampleXcdaAuthor,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerExampleXcdaAuthor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExampleXcdaAuthor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerExampleXcda1 fixture (Practitioner)", () => {
    const result = createPractitionerSchema().safeParse(
      PractitionerExampleXcda1,
    );
    if (!result.success) {
      console.error("Validation failed for PractitionerExampleXcda1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExampleXcda1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PractitionerExample fixture (Practitioner)", () => {
    const result = createPractitionerSchema().safeParse(PractitionerExample);
    if (!result.success) {
      console.error("Validation failed for PractitionerExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PractitionerExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
