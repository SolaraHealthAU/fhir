import { createValueSetSchema } from "../../src";
import {
  ValuesetFhirVersion,
  ValuesetAbstractTypes,
  ValuesetAccountStatus,
  ValuesetAccountType,
  ValuesetActionCardinalityBehavior,
  ValuesetActionConditionKind,
  ValuesetActionGroupingBehavior,
  ValuesetActionParticipantRole,
  ValuesetActionParticipantType,
  ValuesetActionPrecheckBehavior,
  ValuesetActionRelationshipType,
  ValuesetActionRequiredBehavior,
  ValuesetActionSelectionBehavior,
  ValuesetActionType,
  ValuesetActivityDefinitionCategory,
  ValuesetAdditionalInstructionCodes,
  ValuesetAdditionalmaterials,
  ValuesetAddressType,
  ValuesetAddressUse,
  ValuesetAdjudicationError,
  ValuesetAdjudicationReason,
  ValuesetAdjudication,
  ValuesetAdministrationMethodCodes,
  ValuesetAdministrativeGender,
  ValuesetAdverseEventActuality,
  ValuesetAdverseEventCategory,
  ValuesetAdverseEventCausalityAssess,
  ValuesetAdverseEventCausalityMethod,
  ValuesetAdverseEventOutcome,
  ValuesetAdverseEventSeriousness,
  ValuesetAdverseEventSeverity,
  ValuesetAdverseEventType,
  ValuesetAgeUnits,
  ValuesetAllDistanceUnits,
  ValuesetAllLanguages,
} from "./fixture";
import { z } from "zod/v4";

describe("ValueSet Schema Validation", () => {
  it("should validate ValuesetFhirVersion fixture", () => {
    const result = createValueSetSchema().safeParse(ValuesetFhirVersion);
    if (!result.success) {
      console.error("Validation failed for ValuesetFhirVersion:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetFhirVersion: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAbstractTypes fixture", () => {
    const result = createValueSetSchema().safeParse(ValuesetAbstractTypes);
    if (!result.success) {
      console.error("Validation failed for ValuesetAbstractTypes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAbstractTypes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAccountStatus fixture", () => {
    const result = createValueSetSchema().safeParse(ValuesetAccountStatus);
    if (!result.success) {
      console.error("Validation failed for ValuesetAccountStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAccountStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAccountType fixture", () => {
    const result = createValueSetSchema().safeParse(ValuesetAccountType);
    if (!result.success) {
      console.error("Validation failed for ValuesetAccountType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAccountType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionCardinalityBehavior fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionCardinalityBehavior,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionCardinalityBehavior:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionCardinalityBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionConditionKind fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionConditionKind,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionConditionKind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionConditionKind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionGroupingBehavior fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionGroupingBehavior,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionGroupingBehavior:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionGroupingBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionParticipantRole fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionParticipantRole,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionParticipantRole:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionParticipantRole: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionParticipantType fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionParticipantType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionParticipantType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionParticipantType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionPrecheckBehavior fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionPrecheckBehavior,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionPrecheckBehavior:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionPrecheckBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionRelationshipType fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionRelationshipType,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionRelationshipType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionRelationshipType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionRequiredBehavior fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionRequiredBehavior,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionRequiredBehavior:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionRequiredBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionSelectionBehavior fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActionSelectionBehavior,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetActionSelectionBehavior:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionSelectionBehavior: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActionType fixture", () => {
    const result = createValueSetSchema().safeParse(ValuesetActionType);
    if (!result.success) {
      console.error("Validation failed for ValuesetActionType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActionType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetActivityDefinitionCategory fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetActivityDefinitionCategory,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetActivityDefinitionCategory:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetActivityDefinitionCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdditionalInstructionCodes fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdditionalInstructionCodes,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetAdditionalInstructionCodes:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdditionalInstructionCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdditionalmaterials fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdditionalmaterials,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdditionalmaterials:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdditionalmaterials: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAddressType fixture", () => {
    const result = createValueSetSchema().safeParse(ValuesetAddressType);
    if (!result.success) {
      console.error("Validation failed for ValuesetAddressType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAddressType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAddressUse fixture", () => {
    const result = createValueSetSchema().safeParse(ValuesetAddressUse);
    if (!result.success) {
      console.error("Validation failed for ValuesetAddressUse:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAddressUse: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdjudicationError fixture", () => {
    const result = createValueSetSchema().safeParse(ValuesetAdjudicationError);
    if (!result.success) {
      console.error("Validation failed for ValuesetAdjudicationError:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdjudicationError: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdjudicationReason fixture", () => {
    const result = createValueSetSchema().safeParse(ValuesetAdjudicationReason);
    if (!result.success) {
      console.error("Validation failed for ValuesetAdjudicationReason:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdjudicationReason: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdjudication fixture", () => {
    const result = createValueSetSchema().safeParse(ValuesetAdjudication);
    if (!result.success) {
      console.error("Validation failed for ValuesetAdjudication:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdjudication: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdministrationMethodCodes fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdministrationMethodCodes,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdministrationMethodCodes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdministrationMethodCodes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdministrativeGender fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdministrativeGender,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdministrativeGender:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdministrativeGender: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventActuality fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdverseEventActuality,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdverseEventActuality:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventActuality: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventCategory fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdverseEventCategory,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdverseEventCategory:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventCategory: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventCausalityAssess fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdverseEventCausalityAssess,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetAdverseEventCausalityAssess:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventCausalityAssess: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventCausalityMethod fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdverseEventCausalityMethod,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ValuesetAdverseEventCausalityMethod:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventCausalityMethod: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventOutcome fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdverseEventOutcome,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdverseEventOutcome:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventOutcome: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventSeriousness fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdverseEventSeriousness,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdverseEventSeriousness:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventSeriousness: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventSeverity fixture", () => {
    const result = createValueSetSchema().safeParse(
      ValuesetAdverseEventSeverity,
    );
    if (!result.success) {
      console.error("Validation failed for ValuesetAdverseEventSeverity:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventSeverity: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAdverseEventType fixture", () => {
    const result = createValueSetSchema().safeParse(ValuesetAdverseEventType);
    if (!result.success) {
      console.error("Validation failed for ValuesetAdverseEventType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAdverseEventType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAgeUnits fixture", () => {
    const result = createValueSetSchema().safeParse(ValuesetAgeUnits);
    if (!result.success) {
      console.error("Validation failed for ValuesetAgeUnits:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAgeUnits: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAllDistanceUnits fixture", () => {
    const result = createValueSetSchema().safeParse(ValuesetAllDistanceUnits);
    if (!result.success) {
      console.error("Validation failed for ValuesetAllDistanceUnits:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAllDistanceUnits: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ValuesetAllLanguages fixture", () => {
    const result = createValueSetSchema().safeParse(ValuesetAllLanguages);
    if (!result.success) {
      console.error("Validation failed for ValuesetAllLanguages:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ValuesetAllLanguages: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
