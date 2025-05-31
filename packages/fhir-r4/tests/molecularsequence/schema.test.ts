import { createMolecularSequenceSchema } from "../../src";
import {
  Coord0baseExample,
  Coord1baseExample,
  MolecularsequenceExample,
  SequenceComplexVariant,
  SequenceExampleTpmtOne,
  SequenceExampleTpmtTwo,
  SequenceExampleFdaComparisons,
  SequenceExampleFdaVcfeval,
  SequenceExampleFda,
  SequenceExamplePgx1,
  SequenceExamplePgx2,
  SequenceGeneticsExampleBreastcancer,
  SequenceGraphicExample1,
  SequenceGraphicExample2,
  SequenceGraphicExample3,
  SequenceGraphicExample4,
  SequenceGraphicExample5,
} from "./fixture";
import { z } from "zod/v4";

describe("MolecularSequence Schema Validation", () => {
  it("should validate Coord0baseExample fixture", () => {
    const result = createMolecularSequenceSchema().safeParse(Coord0baseExample);
    if (!result.success) {
      console.error("Validation failed for Coord0baseExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Coord0baseExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate Coord1baseExample fixture", () => {
    const result = createMolecularSequenceSchema().safeParse(Coord1baseExample);
    if (!result.success) {
      console.error("Validation failed for Coord1baseExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for Coord1baseExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate MolecularsequenceExample fixture", () => {
    const result = createMolecularSequenceSchema().safeParse(
      MolecularsequenceExample,
    );
    if (!result.success) {
      console.error("Validation failed for MolecularsequenceExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for MolecularsequenceExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SequenceComplexVariant fixture", () => {
    const result = createMolecularSequenceSchema().safeParse(
      SequenceComplexVariant,
    );
    if (!result.success) {
      console.error("Validation failed for SequenceComplexVariant:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SequenceComplexVariant: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SequenceExampleTpmtOne fixture", () => {
    const result = createMolecularSequenceSchema().safeParse(
      SequenceExampleTpmtOne,
    );
    if (!result.success) {
      console.error("Validation failed for SequenceExampleTpmtOne:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SequenceExampleTpmtOne: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SequenceExampleTpmtTwo fixture", () => {
    const result = createMolecularSequenceSchema().safeParse(
      SequenceExampleTpmtTwo,
    );
    if (!result.success) {
      console.error("Validation failed for SequenceExampleTpmtTwo:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SequenceExampleTpmtTwo: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SequenceExampleFdaComparisons fixture", () => {
    const result = createMolecularSequenceSchema().safeParse(
      SequenceExampleFdaComparisons,
    );
    if (!result.success) {
      console.error("Validation failed for SequenceExampleFdaComparisons:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SequenceExampleFdaComparisons: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SequenceExampleFdaVcfeval fixture", () => {
    const result = createMolecularSequenceSchema().safeParse(
      SequenceExampleFdaVcfeval,
    );
    if (!result.success) {
      console.error("Validation failed for SequenceExampleFdaVcfeval:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SequenceExampleFdaVcfeval: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SequenceExampleFda fixture", () => {
    const result =
      createMolecularSequenceSchema().safeParse(SequenceExampleFda);
    if (!result.success) {
      console.error("Validation failed for SequenceExampleFda:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SequenceExampleFda: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SequenceExamplePgx1 fixture", () => {
    const result =
      createMolecularSequenceSchema().safeParse(SequenceExamplePgx1);
    if (!result.success) {
      console.error("Validation failed for SequenceExamplePgx1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SequenceExamplePgx1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SequenceExamplePgx2 fixture", () => {
    const result =
      createMolecularSequenceSchema().safeParse(SequenceExamplePgx2);
    if (!result.success) {
      console.error("Validation failed for SequenceExamplePgx2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SequenceExamplePgx2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SequenceGeneticsExampleBreastcancer fixture", () => {
    const result = createMolecularSequenceSchema().safeParse(
      SequenceGeneticsExampleBreastcancer,
    );
    if (!result.success) {
      console.error(
        "Validation failed for SequenceGeneticsExampleBreastcancer:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SequenceGeneticsExampleBreastcancer: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SequenceGraphicExample1 fixture", () => {
    const result = createMolecularSequenceSchema().safeParse(
      SequenceGraphicExample1,
    );
    if (!result.success) {
      console.error("Validation failed for SequenceGraphicExample1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SequenceGraphicExample1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SequenceGraphicExample2 fixture", () => {
    const result = createMolecularSequenceSchema().safeParse(
      SequenceGraphicExample2,
    );
    if (!result.success) {
      console.error("Validation failed for SequenceGraphicExample2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SequenceGraphicExample2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SequenceGraphicExample3 fixture", () => {
    const result = createMolecularSequenceSchema().safeParse(
      SequenceGraphicExample3,
    );
    if (!result.success) {
      console.error("Validation failed for SequenceGraphicExample3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SequenceGraphicExample3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SequenceGraphicExample4 fixture", () => {
    const result = createMolecularSequenceSchema().safeParse(
      SequenceGraphicExample4,
    );
    if (!result.success) {
      console.error("Validation failed for SequenceGraphicExample4:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SequenceGraphicExample4: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate SequenceGraphicExample5 fixture", () => {
    const result = createMolecularSequenceSchema().safeParse(
      SequenceGraphicExample5,
    );
    if (!result.success) {
      console.error("Validation failed for SequenceGraphicExample5:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for SequenceGraphicExample5: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
