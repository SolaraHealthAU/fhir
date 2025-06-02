import { createActivityDefinitionSchema } from "../../src";
import {
  ActivitydefinitionAdministerZikaVirusExposureAssessment,
  ActivitydefinitionExample,
  ActivitydefinitionMedicationorderExample,
  ActivitydefinitionOrderSerumDengueVirusIgm,
  ActivitydefinitionOrderSerumZikaDengueVirusIgm,
  ActivitydefinitionPredecessorExample,
  ActivitydefinitionProvideMosquitoPreventionAdvice,
  ActivitydefinitionServicerequestExample,
  ActivitydefinitionSupplyrequestExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Activitydefinition Group Schema Validation", () => {
  it("should validate ActivitydefinitionAdministerZikaVirusExposureAssessment fixture (ActivityDefinition)", () => {
    const result = createActivityDefinitionSchema().safeParse(
      ActivitydefinitionAdministerZikaVirusExposureAssessment,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ActivitydefinitionAdministerZikaVirusExposureAssessment:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ActivitydefinitionAdministerZikaVirusExposureAssessment: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ActivitydefinitionExample fixture (ActivityDefinition)", () => {
    const result = createActivityDefinitionSchema().safeParse(
      ActivitydefinitionExample,
    );
    if (!result.success) {
      console.error("Validation failed for ActivitydefinitionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ActivitydefinitionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ActivitydefinitionMedicationorderExample fixture (ActivityDefinition)", () => {
    const result = createActivityDefinitionSchema().safeParse(
      ActivitydefinitionMedicationorderExample,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ActivitydefinitionMedicationorderExample:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ActivitydefinitionMedicationorderExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ActivitydefinitionOrderSerumDengueVirusIgm fixture (ActivityDefinition)", () => {
    const result = createActivityDefinitionSchema().safeParse(
      ActivitydefinitionOrderSerumDengueVirusIgm,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ActivitydefinitionOrderSerumDengueVirusIgm:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ActivitydefinitionOrderSerumDengueVirusIgm: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ActivitydefinitionOrderSerumZikaDengueVirusIgm fixture (ActivityDefinition)", () => {
    const result = createActivityDefinitionSchema().safeParse(
      ActivitydefinitionOrderSerumZikaDengueVirusIgm,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ActivitydefinitionOrderSerumZikaDengueVirusIgm:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ActivitydefinitionOrderSerumZikaDengueVirusIgm: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ActivitydefinitionPredecessorExample fixture (ActivityDefinition)", () => {
    const result = createActivityDefinitionSchema().safeParse(
      ActivitydefinitionPredecessorExample,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ActivitydefinitionPredecessorExample:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ActivitydefinitionPredecessorExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ActivitydefinitionProvideMosquitoPreventionAdvice fixture (ActivityDefinition)", () => {
    const result = createActivityDefinitionSchema().safeParse(
      ActivitydefinitionProvideMosquitoPreventionAdvice,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ActivitydefinitionProvideMosquitoPreventionAdvice:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ActivitydefinitionProvideMosquitoPreventionAdvice: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ActivitydefinitionServicerequestExample fixture (ActivityDefinition)", () => {
    const result = createActivityDefinitionSchema().safeParse(
      ActivitydefinitionServicerequestExample,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ActivitydefinitionServicerequestExample:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ActivitydefinitionServicerequestExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ActivitydefinitionSupplyrequestExample fixture (ActivityDefinition)", () => {
    const result = createActivityDefinitionSchema().safeParse(
      ActivitydefinitionSupplyrequestExample,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ActivitydefinitionSupplyrequestExample:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ActivitydefinitionSupplyrequestExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
