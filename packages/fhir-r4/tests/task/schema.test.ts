import { createTaskSchema } from "../../src";
import {
  TaskExampleFmCancel,
  TaskExampleFmPoll,
  TaskExampleFmRelease,
  TaskExampleFmReprocess,
  TaskExampleFmStatusResp,
  TaskExampleFmStatus,
  TaskExample1,
  TaskExample2,
  TaskExample3,
  TaskExample4,
  TaskExample5,
  TaskExample6,
} from "./fixture";
import { z } from "zod/v4";

describe("Task Schema Validation", () => {
  it("should validate TaskExampleFmCancel fixture", () => {
    const result = createTaskSchema().safeParse(TaskExampleFmCancel);
    if (!result.success) {
      console.error("Validation failed for TaskExampleFmCancel:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TaskExampleFmCancel: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TaskExampleFmPoll fixture", () => {
    const result = createTaskSchema().safeParse(TaskExampleFmPoll);
    if (!result.success) {
      console.error("Validation failed for TaskExampleFmPoll:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TaskExampleFmPoll: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TaskExampleFmRelease fixture", () => {
    const result = createTaskSchema().safeParse(TaskExampleFmRelease);
    if (!result.success) {
      console.error("Validation failed for TaskExampleFmRelease:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TaskExampleFmRelease: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TaskExampleFmReprocess fixture", () => {
    const result = createTaskSchema().safeParse(TaskExampleFmReprocess);
    if (!result.success) {
      console.error("Validation failed for TaskExampleFmReprocess:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TaskExampleFmReprocess: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TaskExampleFmStatusResp fixture", () => {
    const result = createTaskSchema().safeParse(TaskExampleFmStatusResp);
    if (!result.success) {
      console.error("Validation failed for TaskExampleFmStatusResp:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TaskExampleFmStatusResp: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TaskExampleFmStatus fixture", () => {
    const result = createTaskSchema().safeParse(TaskExampleFmStatus);
    if (!result.success) {
      console.error("Validation failed for TaskExampleFmStatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TaskExampleFmStatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TaskExample1 fixture", () => {
    const result = createTaskSchema().safeParse(TaskExample1);
    if (!result.success) {
      console.error("Validation failed for TaskExample1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TaskExample1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TaskExample2 fixture", () => {
    const result = createTaskSchema().safeParse(TaskExample2);
    if (!result.success) {
      console.error("Validation failed for TaskExample2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TaskExample2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TaskExample3 fixture", () => {
    const result = createTaskSchema().safeParse(TaskExample3);
    if (!result.success) {
      console.error("Validation failed for TaskExample3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TaskExample3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TaskExample4 fixture", () => {
    const result = createTaskSchema().safeParse(TaskExample4);
    if (!result.success) {
      console.error("Validation failed for TaskExample4:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TaskExample4: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TaskExample5 fixture", () => {
    const result = createTaskSchema().safeParse(TaskExample5);
    if (!result.success) {
      console.error("Validation failed for TaskExample5:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TaskExample5: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate TaskExample6 fixture", () => {
    const result = createTaskSchema().safeParse(TaskExample6);
    if (!result.success) {
      console.error("Validation failed for TaskExample6:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for TaskExample6: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
