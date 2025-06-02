import { createPlanDefinitionSchema } from "../../src";
import {
  PlandefinitionChlamydiaScreeningIntervention,
  PlandefinitionExampleKdn5Simplified,
  PlandefinitionExample,
  PlandefinitionExclusiveBreastfeedingIntervention01,
  PlandefinitionExclusiveBreastfeedingIntervention02,
  PlandefinitionExclusiveBreastfeedingIntervention03,
  PlandefinitionExclusiveBreastfeedingIntervention04,
  PlandefinitionOpioidcds04,
  PlandefinitionOpioidcds05,
  PlandefinitionOpioidcds07,
  PlandefinitionOpioidcds08,
  PlandefinitionOpioidcds10,
  PlandefinitionOpioidcds11,
  PlandefinitionOptionsExample,
  PlandefinitionPredecessorExample,
  PlandefinitionProtocolExample,
  PlandefinitionZikaVirusIntervention,
} from "./fixture";
import { z } from "zod/v4";

describe("Plandefinition Group Schema Validation", () => {
  it("should validate PlandefinitionChlamydiaScreeningIntervention fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionChlamydiaScreeningIntervention,
    );
    if (!result.success) {
      console.error(
        "Validation failed for PlandefinitionChlamydiaScreeningIntervention:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionChlamydiaScreeningIntervention: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionExampleKdn5Simplified fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionExampleKdn5Simplified,
    );
    if (!result.success) {
      console.error(
        "Validation failed for PlandefinitionExampleKdn5Simplified:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionExampleKdn5Simplified: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionExample fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionExample,
    );
    if (!result.success) {
      console.error("Validation failed for PlandefinitionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionExclusiveBreastfeedingIntervention01 fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionExclusiveBreastfeedingIntervention01,
    );
    if (!result.success) {
      console.error(
        "Validation failed for PlandefinitionExclusiveBreastfeedingIntervention01:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionExclusiveBreastfeedingIntervention01: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionExclusiveBreastfeedingIntervention02 fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionExclusiveBreastfeedingIntervention02,
    );
    if (!result.success) {
      console.error(
        "Validation failed for PlandefinitionExclusiveBreastfeedingIntervention02:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionExclusiveBreastfeedingIntervention02: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionExclusiveBreastfeedingIntervention03 fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionExclusiveBreastfeedingIntervention03,
    );
    if (!result.success) {
      console.error(
        "Validation failed for PlandefinitionExclusiveBreastfeedingIntervention03:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionExclusiveBreastfeedingIntervention03: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionExclusiveBreastfeedingIntervention04 fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionExclusiveBreastfeedingIntervention04,
    );
    if (!result.success) {
      console.error(
        "Validation failed for PlandefinitionExclusiveBreastfeedingIntervention04:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionExclusiveBreastfeedingIntervention04: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionOpioidcds04 fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionOpioidcds04,
    );
    if (!result.success) {
      console.error("Validation failed for PlandefinitionOpioidcds04:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionOpioidcds04: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionOpioidcds05 fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionOpioidcds05,
    );
    if (!result.success) {
      console.error("Validation failed for PlandefinitionOpioidcds05:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionOpioidcds05: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionOpioidcds07 fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionOpioidcds07,
    );
    if (!result.success) {
      console.error("Validation failed for PlandefinitionOpioidcds07:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionOpioidcds07: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionOpioidcds08 fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionOpioidcds08,
    );
    if (!result.success) {
      console.error("Validation failed for PlandefinitionOpioidcds08:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionOpioidcds08: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionOpioidcds10 fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionOpioidcds10,
    );
    if (!result.success) {
      console.error("Validation failed for PlandefinitionOpioidcds10:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionOpioidcds10: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionOpioidcds11 fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionOpioidcds11,
    );
    if (!result.success) {
      console.error("Validation failed for PlandefinitionOpioidcds11:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionOpioidcds11: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionOptionsExample fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionOptionsExample,
    );
    if (!result.success) {
      console.error("Validation failed for PlandefinitionOptionsExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionOptionsExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionPredecessorExample fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionPredecessorExample,
    );
    if (!result.success) {
      console.error("Validation failed for PlandefinitionPredecessorExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionPredecessorExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionProtocolExample fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionProtocolExample,
    );
    if (!result.success) {
      console.error("Validation failed for PlandefinitionProtocolExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionProtocolExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate PlandefinitionZikaVirusIntervention fixture (PlanDefinition)", () => {
    const result = createPlanDefinitionSchema().safeParse(
      PlandefinitionZikaVirusIntervention,
    );
    if (!result.success) {
      console.error(
        "Validation failed for PlandefinitionZikaVirusIntervention:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for PlandefinitionZikaVirusIntervention: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
