import { createOperationDefinitionSchema } from "../../src";
import {
  OperationActivitydefinitionApply,
  OperationActivitydefinitionDataRequirements,
  OperationCapabilitystatementConforms,
  OperationCapabilitystatementImplements,
  OperationCapabilitystatementSubset,
  OperationCapabilitystatementVersions,
  OperationChargeitemdefinitionApply,
  OperationClaimSubmit,
  OperationCodesystemFindMatches,
  OperationCodesystemLookup,
  OperationCodesystemSubsumes,
  OperationCodesystemValidateCode,
  OperationCompositionDocument,
  OperationConceptmapClosure,
  OperationConceptmapTranslate,
  OperationCoverageeligibilityrequestSubmit,
  OperationEncounterEverything,
  OperationGroupEverything,
  OperationLibraryDataRequirements,
  OperationListFind,
  OperationMeasureCareGaps,
  OperationMeasureCollectData,
  OperationMeasureDataRequirements,
  OperationMeasureEvaluateMeasure,
  OperationMeasureSubmitData,
  OperationMedicinalproductEverything,
  OperationMessageheaderProcessMessage,
  OperationNamingsystemPreferredId,
  OperationObservationLastn,
  OperationObservationStats,
  OperationPatientEverything,
  OperationPatientMatch,
  OperationPlandefinitionApply,
  OperationPlandefinitionDataRequirements,
  OperationResourceConvert,
  OperationResourceGraph,
  OperationResourceGraphql,
  OperationResourceMetaAdd,
  OperationResourceMetaDelete,
  OperationResourceMeta,
  OperationResourceValidate,
  OperationStructuredefinitionQuestionnaire,
  OperationStructuredefinitionSnapshot,
  OperationStructuremapTransform,
  OperationValuesetExpand,
  OperationValuesetValidateCode,
  OperationdefinitionExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Operationdefinition Group Schema Validation", () => {
  it("should validate OperationActivitydefinitionApply fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationActivitydefinitionApply,
    );
    if (!result.success) {
      console.error("Validation failed for OperationActivitydefinitionApply:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationActivitydefinitionApply: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationActivitydefinitionDataRequirements fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationActivitydefinitionDataRequirements,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OperationActivitydefinitionDataRequirements:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationActivitydefinitionDataRequirements: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationCapabilitystatementConforms fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationCapabilitystatementConforms,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OperationCapabilitystatementConforms:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationCapabilitystatementConforms: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationCapabilitystatementImplements fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationCapabilitystatementImplements,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OperationCapabilitystatementImplements:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationCapabilitystatementImplements: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationCapabilitystatementSubset fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationCapabilitystatementSubset,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OperationCapabilitystatementSubset:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationCapabilitystatementSubset: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationCapabilitystatementVersions fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationCapabilitystatementVersions,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OperationCapabilitystatementVersions:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationCapabilitystatementVersions: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationChargeitemdefinitionApply fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationChargeitemdefinitionApply,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OperationChargeitemdefinitionApply:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationChargeitemdefinitionApply: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationClaimSubmit fixture (OperationDefinition)", () => {
    const result =
      createOperationDefinitionSchema().safeParse(OperationClaimSubmit);
    if (!result.success) {
      console.error("Validation failed for OperationClaimSubmit:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationClaimSubmit: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationCodesystemFindMatches fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationCodesystemFindMatches,
    );
    if (!result.success) {
      console.error("Validation failed for OperationCodesystemFindMatches:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationCodesystemFindMatches: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationCodesystemLookup fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationCodesystemLookup,
    );
    if (!result.success) {
      console.error("Validation failed for OperationCodesystemLookup:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationCodesystemLookup: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationCodesystemSubsumes fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationCodesystemSubsumes,
    );
    if (!result.success) {
      console.error("Validation failed for OperationCodesystemSubsumes:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationCodesystemSubsumes: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationCodesystemValidateCode fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationCodesystemValidateCode,
    );
    if (!result.success) {
      console.error("Validation failed for OperationCodesystemValidateCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationCodesystemValidateCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationCompositionDocument fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationCompositionDocument,
    );
    if (!result.success) {
      console.error("Validation failed for OperationCompositionDocument:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationCompositionDocument: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationConceptmapClosure fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationConceptmapClosure,
    );
    if (!result.success) {
      console.error("Validation failed for OperationConceptmapClosure:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationConceptmapClosure: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationConceptmapTranslate fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationConceptmapTranslate,
    );
    if (!result.success) {
      console.error("Validation failed for OperationConceptmapTranslate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationConceptmapTranslate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationCoverageeligibilityrequestSubmit fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationCoverageeligibilityrequestSubmit,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OperationCoverageeligibilityrequestSubmit:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationCoverageeligibilityrequestSubmit: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationEncounterEverything fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationEncounterEverything,
    );
    if (!result.success) {
      console.error("Validation failed for OperationEncounterEverything:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationEncounterEverything: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationGroupEverything fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationGroupEverything,
    );
    if (!result.success) {
      console.error("Validation failed for OperationGroupEverything:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationGroupEverything: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationLibraryDataRequirements fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationLibraryDataRequirements,
    );
    if (!result.success) {
      console.error("Validation failed for OperationLibraryDataRequirements:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationLibraryDataRequirements: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationListFind fixture (OperationDefinition)", () => {
    const result =
      createOperationDefinitionSchema().safeParse(OperationListFind);
    if (!result.success) {
      console.error("Validation failed for OperationListFind:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationListFind: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationMeasureCareGaps fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationMeasureCareGaps,
    );
    if (!result.success) {
      console.error("Validation failed for OperationMeasureCareGaps:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationMeasureCareGaps: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationMeasureCollectData fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationMeasureCollectData,
    );
    if (!result.success) {
      console.error("Validation failed for OperationMeasureCollectData:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationMeasureCollectData: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationMeasureDataRequirements fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationMeasureDataRequirements,
    );
    if (!result.success) {
      console.error("Validation failed for OperationMeasureDataRequirements:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationMeasureDataRequirements: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationMeasureEvaluateMeasure fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationMeasureEvaluateMeasure,
    );
    if (!result.success) {
      console.error("Validation failed for OperationMeasureEvaluateMeasure:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationMeasureEvaluateMeasure: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationMeasureSubmitData fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationMeasureSubmitData,
    );
    if (!result.success) {
      console.error("Validation failed for OperationMeasureSubmitData:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationMeasureSubmitData: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationMedicinalproductEverything fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationMedicinalproductEverything,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OperationMedicinalproductEverything:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationMedicinalproductEverything: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationMessageheaderProcessMessage fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationMessageheaderProcessMessage,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OperationMessageheaderProcessMessage:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationMessageheaderProcessMessage: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationNamingsystemPreferredId fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationNamingsystemPreferredId,
    );
    if (!result.success) {
      console.error("Validation failed for OperationNamingsystemPreferredId:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationNamingsystemPreferredId: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationObservationLastn fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationObservationLastn,
    );
    if (!result.success) {
      console.error("Validation failed for OperationObservationLastn:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationObservationLastn: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationObservationStats fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationObservationStats,
    );
    if (!result.success) {
      console.error("Validation failed for OperationObservationStats:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationObservationStats: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationPatientEverything fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationPatientEverything,
    );
    if (!result.success) {
      console.error("Validation failed for OperationPatientEverything:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationPatientEverything: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationPatientMatch fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationPatientMatch,
    );
    if (!result.success) {
      console.error("Validation failed for OperationPatientMatch:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationPatientMatch: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationPlandefinitionApply fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationPlandefinitionApply,
    );
    if (!result.success) {
      console.error("Validation failed for OperationPlandefinitionApply:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationPlandefinitionApply: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationPlandefinitionDataRequirements fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationPlandefinitionDataRequirements,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OperationPlandefinitionDataRequirements:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationPlandefinitionDataRequirements: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationResourceConvert fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationResourceConvert,
    );
    if (!result.success) {
      console.error("Validation failed for OperationResourceConvert:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationResourceConvert: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationResourceGraph fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationResourceGraph,
    );
    if (!result.success) {
      console.error("Validation failed for OperationResourceGraph:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationResourceGraph: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationResourceGraphql fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationResourceGraphql,
    );
    if (!result.success) {
      console.error("Validation failed for OperationResourceGraphql:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationResourceGraphql: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationResourceMetaAdd fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationResourceMetaAdd,
    );
    if (!result.success) {
      console.error("Validation failed for OperationResourceMetaAdd:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationResourceMetaAdd: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationResourceMetaDelete fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationResourceMetaDelete,
    );
    if (!result.success) {
      console.error("Validation failed for OperationResourceMetaDelete:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationResourceMetaDelete: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationResourceMeta fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationResourceMeta,
    );
    if (!result.success) {
      console.error("Validation failed for OperationResourceMeta:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationResourceMeta: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationResourceValidate fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationResourceValidate,
    );
    if (!result.success) {
      console.error("Validation failed for OperationResourceValidate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationResourceValidate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationStructuredefinitionQuestionnaire fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationStructuredefinitionQuestionnaire,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OperationStructuredefinitionQuestionnaire:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationStructuredefinitionQuestionnaire: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationStructuredefinitionSnapshot fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationStructuredefinitionSnapshot,
    );
    if (!result.success) {
      console.error(
        "Validation failed for OperationStructuredefinitionSnapshot:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationStructuredefinitionSnapshot: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationStructuremapTransform fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationStructuremapTransform,
    );
    if (!result.success) {
      console.error("Validation failed for OperationStructuremapTransform:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationStructuremapTransform: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationValuesetExpand fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationValuesetExpand,
    );
    if (!result.success) {
      console.error("Validation failed for OperationValuesetExpand:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationValuesetExpand: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationValuesetValidateCode fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationValuesetValidateCode,
    );
    if (!result.success) {
      console.error("Validation failed for OperationValuesetValidateCode:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationValuesetValidateCode: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate OperationdefinitionExample fixture (OperationDefinition)", () => {
    const result = createOperationDefinitionSchema().safeParse(
      OperationdefinitionExample,
    );
    if (!result.success) {
      console.error("Validation failed for OperationdefinitionExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for OperationdefinitionExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
