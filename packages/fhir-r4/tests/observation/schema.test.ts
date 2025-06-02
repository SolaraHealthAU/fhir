import { createObservationSchema } from "../../src";
import {
  ObservationDecimal,
  ObservationExample10minuteApgarScore,
  ObservationExample1minuteApgarScore,
  ObservationExample20minuteApgarScore,
  ObservationExample2minuteApgarScore,
  ObservationExample5minuteApgarScore,
  ObservationExampleTpmtDiplotype,
  ObservationExampleTpmtHaplotypeOne,
  ObservationExampleTpmtHaplotypeTwo,
  ObservationExampleAbdoTender,
  ObservationExampleAlcoholType,
  ObservationExampleBgpanel,
  ObservationExampleBloodgroup,
  ObservationExampleBloodpressureCancel,
  ObservationExampleBloodpressureDar,
  ObservationExampleBloodpressure,
  ObservationExampleBmd,
  ObservationExampleBmiUsingRelated,
  ObservationExampleBmi,
  ObservationExampleBodyHeight,
  ObservationExampleBodyLength,
  ObservationExampleBodyTemperature,
  ObservationExampleClinicalGender,
  ObservationExampleDateLastmp,
  ObservationExampleDiplotype1,
  ObservationExampleEyeColor,
  ObservationExampleF001Glucose,
  ObservationExampleF002Excess,
  ObservationExampleF003Co2,
  ObservationExampleF004Erythrocyte,
  ObservationExampleF005Hemoglobin,
  ObservationExampleF202Temperature,
  ObservationExampleF203Bicarbonate,
  ObservationExampleF204Creatinine,
  ObservationExampleF205Egfr,
  ObservationExampleF206Staphylococcus,
  ObservationExampleGenetics1,
  ObservationExampleGenetics2,
  ObservationExampleGenetics3,
  ObservationExampleGenetics4,
  ObservationExampleGenetics5,
  ObservationExampleGeneticsBrcapat,
  ObservationExampleGlasgowQa,
  ObservationExampleGlasgow,
  ObservationExampleHaplotype1,
  ObservationExampleHaplotype2,
  ObservationExampleHeadCircumference,
  ObservationExampleHeartRate,
  ObservationExampleHerd1,
  ObservationExampleMapSitting,
  ObservationExampleMbp,
  ObservationExamplePhenotype,
  ObservationExampleRespiratoryRate,
  ObservationExampleRhstatus,
  ObservationExampleSampleData,
  ObservationExampleSato2,
  ObservationExampleSecondsmoke,
  ObservationExampleSpirometry,
  ObservationExampleTrachcare,
  ObservationExampleUnsat,
  ObservationExampleVitalsPanel,
  ObservationExampleVomiting,
  ObservationExampleVpOyster,
  ObservationExample,
} from "./fixture";
import { z } from "zod/v4";

describe("Observation Group Schema Validation", () => {
  it("should validate ObservationDecimal fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(ObservationDecimal);
    if (!result.success) {
      console.error("Validation failed for ObservationDecimal:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationDecimal: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExample10minuteApgarScore fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExample10minuteApgarScore,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationExample10minuteApgarScore:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExample10minuteApgarScore: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExample1minuteApgarScore fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExample1minuteApgarScore,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationExample1minuteApgarScore:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExample1minuteApgarScore: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExample20minuteApgarScore fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExample20minuteApgarScore,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationExample20minuteApgarScore:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExample20minuteApgarScore: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExample2minuteApgarScore fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExample2minuteApgarScore,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationExample2minuteApgarScore:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExample2minuteApgarScore: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExample5minuteApgarScore fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExample5minuteApgarScore,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationExample5minuteApgarScore:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExample5minuteApgarScore: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleTpmtDiplotype fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleTpmtDiplotype,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleTpmtDiplotype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleTpmtDiplotype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleTpmtHaplotypeOne fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleTpmtHaplotypeOne,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationExampleTpmtHaplotypeOne:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleTpmtHaplotypeOne: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleTpmtHaplotypeTwo fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleTpmtHaplotypeTwo,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationExampleTpmtHaplotypeTwo:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleTpmtHaplotypeTwo: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleAbdoTender fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleAbdoTender,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleAbdoTender:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleAbdoTender: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleAlcoholType fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleAlcoholType,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleAlcoholType:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleAlcoholType: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleBgpanel fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleBgpanel,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleBgpanel:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleBgpanel: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleBloodgroup fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleBloodgroup,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleBloodgroup:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleBloodgroup: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleBloodpressureCancel fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleBloodpressureCancel,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationExampleBloodpressureCancel:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleBloodpressureCancel: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleBloodpressureDar fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleBloodpressureDar,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationExampleBloodpressureDar:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleBloodpressureDar: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleBloodpressure fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleBloodpressure,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleBloodpressure:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleBloodpressure: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleBmd fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(ObservationExampleBmd);
    if (!result.success) {
      console.error("Validation failed for ObservationExampleBmd:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleBmd: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleBmiUsingRelated fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleBmiUsingRelated,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleBmiUsingRelated:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleBmiUsingRelated: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleBmi fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(ObservationExampleBmi);
    if (!result.success) {
      console.error("Validation failed for ObservationExampleBmi:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleBmi: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleBodyHeight fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleBodyHeight,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleBodyHeight:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleBodyHeight: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleBodyLength fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleBodyLength,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleBodyLength:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleBodyLength: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleBodyTemperature fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleBodyTemperature,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleBodyTemperature:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleBodyTemperature: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleClinicalGender fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleClinicalGender,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleClinicalGender:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleClinicalGender: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleDateLastmp fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleDateLastmp,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleDateLastmp:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleDateLastmp: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleDiplotype1 fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleDiplotype1,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleDiplotype1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleDiplotype1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleEyeColor fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleEyeColor,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleEyeColor:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleEyeColor: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleF001Glucose fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleF001Glucose,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleF001Glucose:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleF001Glucose: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleF002Excess fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleF002Excess,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleF002Excess:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleF002Excess: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleF003Co2 fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleF003Co2,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleF003Co2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleF003Co2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleF004Erythrocyte fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleF004Erythrocyte,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleF004Erythrocyte:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleF004Erythrocyte: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleF005Hemoglobin fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleF005Hemoglobin,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleF005Hemoglobin:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleF005Hemoglobin: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleF202Temperature fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleF202Temperature,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleF202Temperature:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleF202Temperature: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleF203Bicarbonate fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleF203Bicarbonate,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleF203Bicarbonate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleF203Bicarbonate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleF204Creatinine fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleF204Creatinine,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleF204Creatinine:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleF204Creatinine: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleF205Egfr fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleF205Egfr,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleF205Egfr:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleF205Egfr: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleF206Staphylococcus fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleF206Staphylococcus,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationExampleF206Staphylococcus:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleF206Staphylococcus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleGenetics1 fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleGenetics1,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleGenetics1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleGenetics1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleGenetics2 fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleGenetics2,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleGenetics2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleGenetics2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleGenetics3 fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleGenetics3,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleGenetics3:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleGenetics3: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleGenetics4 fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleGenetics4,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleGenetics4:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleGenetics4: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleGenetics5 fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleGenetics5,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleGenetics5:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleGenetics5: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleGeneticsBrcapat fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleGeneticsBrcapat,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleGeneticsBrcapat:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleGeneticsBrcapat: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleGlasgowQa fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleGlasgowQa,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleGlasgowQa:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleGlasgowQa: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleGlasgow fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleGlasgow,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleGlasgow:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleGlasgow: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleHaplotype1 fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleHaplotype1,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleHaplotype1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleHaplotype1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleHaplotype2 fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleHaplotype2,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleHaplotype2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleHaplotype2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleHeadCircumference fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleHeadCircumference,
    );
    if (!result.success) {
      console.error(
        "Validation failed for ObservationExampleHeadCircumference:",
      );
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleHeadCircumference: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleHeartRate fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleHeartRate,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleHeartRate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleHeartRate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleHerd1 fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(ObservationExampleHerd1);
    if (!result.success) {
      console.error("Validation failed for ObservationExampleHerd1:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleHerd1: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleMapSitting fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleMapSitting,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleMapSitting:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleMapSitting: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleMbp fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(ObservationExampleMbp);
    if (!result.success) {
      console.error("Validation failed for ObservationExampleMbp:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleMbp: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExamplePhenotype fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExamplePhenotype,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExamplePhenotype:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExamplePhenotype: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleRespiratoryRate fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleRespiratoryRate,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleRespiratoryRate:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleRespiratoryRate: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleRhstatus fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleRhstatus,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleRhstatus:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleRhstatus: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleSampleData fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleSampleData,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleSampleData:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleSampleData: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleSato2 fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(ObservationExampleSato2);
    if (!result.success) {
      console.error("Validation failed for ObservationExampleSato2:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleSato2: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleSecondsmoke fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleSecondsmoke,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleSecondsmoke:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleSecondsmoke: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleSpirometry fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleSpirometry,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleSpirometry:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleSpirometry: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleTrachcare fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleTrachcare,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleTrachcare:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleTrachcare: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleUnsat fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(ObservationExampleUnsat);
    if (!result.success) {
      console.error("Validation failed for ObservationExampleUnsat:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleUnsat: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleVitalsPanel fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleVitalsPanel,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleVitalsPanel:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleVitalsPanel: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleVomiting fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleVomiting,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleVomiting:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleVomiting: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExampleVpOyster fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(
      ObservationExampleVpOyster,
    );
    if (!result.success) {
      console.error("Validation failed for ObservationExampleVpOyster:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExampleVpOyster: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });

  it("should validate ObservationExample fixture (Observation)", () => {
    const result = createObservationSchema().safeParse(ObservationExample);
    if (!result.success) {
      console.error("Validation failed for ObservationExample:");
      console.error(JSON.stringify(z.treeifyError(result.error), null, 2));
      throw new Error(
        `Schema validation failed for ObservationExample: ${result.error.message}`,
      );
    }
    expect(result.success).toBe(true);
  });
});
