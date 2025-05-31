import type { NutritionOrder } from "../../src/v4.0.1/nutritionorder/types";

export const NutritionorderExampleCardiacdiet: NutritionOrder = {
  resourceType: "NutritionOrder",
  id: "cardiacdiet",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: cardiacdiet</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><p><b>allergyIntolerance</b>: <a>Cashew Nuts</a></p><p><b>foodPreferenceModifier</b>: Dairy Free <span>(Details : {http://terminology.hl7.org/CodeSystem/diet code 'dairy-free' = 'Dairy Free)</span></p><p><b>excludeFoodModifier</b>: Cashew Nut <span>(Details : {SNOMED CT code '227493005' = 'Cashew nuts', given as 'Cashew Nut'})</span></p><blockquote><p><b>oralDiet</b></p><p><b>type</b>: Low sodium diet <span>(Details : {SNOMED CT code '386619000' = 'Low sodium diet', given as 'Low sodium diet'}; {http://goodhealthhospital.org/diet-type-codes code '1040' = '1040', given as 'Low Sodium Diet'})</span>, Fluid restricted diet <span>(Details : {SNOMED CT code '226208002' = 'Fluid restricted diet', given as 'Fluid restricted diet'}; {http://goodhealthhospital.org/diet-type-codes code '1040' = '1040', given as 'Fluid restricted diet'})</span></p><blockquote><p><b>nutrient</b></p><p><b>modifier</b>: Sodium <span>(Details : {SNOMED CT code '39972003' = 'Sodium', given as 'Sodium'})</span></p><p><b>amount</b>: 2 grams<span> (Details: UCUM code g = 'g')</span></p></blockquote><blockquote><p><b>nutrient</b></p><p><b>modifier</b>: Fluid <span>(Details : {SNOMED CT code '33463005' = 'Fluid', given as 'Fluid'})</span></p><p><b>amount</b>: 1500 milliliter<span> (Details: UCUM code mL = 'mL')</span></p></blockquote><p><b>instruction</b>: Starting on 2/10 breakfast, maximum 400 ml fluids per meal</p></blockquote></div>",
  },
  identifier: [
    {
      system: "http://goodhealthhospital.org/nutrition-requests",
      value: "123",
    },
  ],
  status: "active",
  intent: "order",
  patient: {
    reference: "Patient/example",
    display: "Peter Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Inpatient",
  },
  dateTime: "2014-09-17",
  orderer: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  allergyIntolerance: [
    {
      reference: "AllergyIntolerance/example",
      display: "Cashew Nuts",
    },
  ],
  foodPreferenceModifier: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/diet",
          code: "dairy-free",
        },
      ],
    },
  ],
  excludeFoodModifier: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          version: "20140730",
          code: "227493005",
          display: "Cashew Nut",
        },
      ],
    },
  ],
  oralDiet: {
    type: [
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "386619000",
            display: "Low sodium diet",
          },
          {
            system: "http://goodhealthhospital.org/diet-type-codes",
            code: "1040",
            display: "Low Sodium Diet",
          },
        ],
        text: "Low sodium diet",
      },
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "226208002",
            display: "Fluid restricted diet",
          },
          {
            system: "http://goodhealthhospital.org/diet-type-codes",
            code: "1040",
            display: "Fluid restricted diet",
          },
        ],
        text: "Fluid restricted diet",
      },
    ],
    nutrient: [
      {
        modifier: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "39972003",
              display: "Sodium",
            },
          ],
        },
        amount: {
          value: 2,
          unit: "grams",
          system: "http://unitsofmeasure.org",
          code: "g",
        },
      },
      {
        modifier: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "33463005",
              display: "Fluid",
            },
          ],
        },
        amount: {
          value: 1500,
          unit: "milliliter",
          system: "http://unitsofmeasure.org",
          code: "mL",
        },
      },
    ],
    instruction: "Starting on 2/10 breakfast, maximum 400 ml fluids per meal",
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const NutritionorderExampleDiabeticdiet: NutritionOrder = {
  resourceType: "NutritionOrder",
  id: "diabeticdiet",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: diabeticdiet</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><p><b>allergyIntolerance</b>: <a>Cashew Nuts</a></p><p><b>foodPreferenceModifier</b>: Dairy Free <span>(Details : {http://terminology.hl7.org/CodeSystem/diet code 'dairy-free' = 'Dairy Free)</span></p><p><b>excludeFoodModifier</b>: Cashew Nut <span>(Details : {SNOMED CT code '227493005' = 'Cashew nuts', given as 'Cashew Nut'})</span></p><blockquote><p><b>oralDiet</b></p><p><b>type</b>: DD - Diabetic diet <span>(Details : {SNOMED CT code '160670007' = 'DD - Diabetic diet', given as 'Diabetic diet'}; {http://goodhealthhospital.org/diet-type-codes code '1030' = '1030', given as 'DD - Diabetic diet'})</span></p><p><b>schedule</b>: Starting 10/02/2015, Do 3 per 1 days</p><h3>Nutrients</h3><table><tr><td>-</td><td><b>Modifier</b></td><td><b>Amount</b></td></tr><tr><td>*</td><td>Carbohydrate <span>(Details : {SNOMED CT code '2331003' = 'Carbohydrate', given as 'Carbohydrate'})</span></td><td>75 grams<span> (Details: UCUM code g = 'g')</span></td></tr></table></blockquote></div>",
  },
  identifier: [
    {
      system: "http://goodhealthhospital.org/nutrition-requests",
      value: "123",
    },
  ],
  status: "active",
  intent: "order",
  patient: {
    reference: "Patient/example",
    display: "Peter Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Inpatient",
  },
  dateTime: "2014-09-17",
  orderer: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  allergyIntolerance: [
    {
      reference: "AllergyIntolerance/example",
      display: "Cashew Nuts",
    },
  ],
  foodPreferenceModifier: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/diet",
          code: "dairy-free",
        },
      ],
    },
  ],
  excludeFoodModifier: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          version: "20140730",
          code: "227493005",
          display: "Cashew Nut",
        },
      ],
    },
  ],
  oralDiet: {
    type: [
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "160670007",
            display: "Diabetic diet",
          },
          {
            system: "http://goodhealthhospital.org/diet-type-codes",
            code: "1030",
            display: "DD - Diabetic diet",
          },
        ],
        text: "DD - Diabetic diet",
      },
    ],
    schedule: [
      {
        repeat: {
          boundsPeriod: {
            start: "2015-02-10",
          },
          frequency: 3,
          period: 1,
          periodUnit: "d",
        },
      },
    ],
    nutrient: [
      {
        modifier: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "2331003",
              display: "Carbohydrate",
            },
          ],
        },
        amount: {
          value: 75,
          unit: "grams",
          system: "http://unitsofmeasure.org",
          code: "g",
        },
      },
    ],
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const NutritionorderExampleDiabeticsupplement: NutritionOrder = {
  resourceType: "NutritionOrder",
  id: "diabeticsupplement",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: diabeticsupplement</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><p><b>allergyIntolerance</b>: <a>Cashew Nuts</a></p><p><b>foodPreferenceModifier</b>: Kosher <span>(Details : {http://terminology.hl7.org/CodeSystem/diet code 'kosher' = 'Kosher)</span></p><p><b>excludeFoodModifier</b>: Cashew Nut <span>(Details : {SNOMED CT code '227493005' = 'Cashew nuts', given as 'Cashew Nut'})</span></p><h3>Supplements</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>ProductName</b></td><td><b>Schedule</b></td><td><b>Quantity</b></td></tr><tr><td>*</td><td>Adult diabetic formula <span>(Details : {SNOMED CT code '443051000124104' = 'Adult diabetic specialty formula (product)', given as 'Adult diabetes specialty formula'}; {http://goodhealthhospital.org/supplement-type-codes code '1010' = '1010', given as 'Adult diabetic formula'})</span></td><td>Glucerna</td><td>Starting 10/02/2015 3:00:00 PM, Do Once per 24 hours</td><td>1 8 oz bottle</td></tr></table></div>",
  },
  identifier: [
    {
      system: "http://goodhealthhospital.org/nutrition-requests",
      value: "123",
    },
  ],
  status: "active",
  intent: "order",
  patient: {
    reference: "Patient/example",
    display: "Peter Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Inpatient",
  },
  dateTime: "2014-09-17",
  orderer: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  allergyIntolerance: [
    {
      reference: "AllergyIntolerance/example",
      display: "Cashew Nuts",
    },
  ],
  foodPreferenceModifier: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/diet",
          code: "kosher",
        },
      ],
    },
  ],
  excludeFoodModifier: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          version: "20140730",
          code: "227493005",
          display: "Cashew Nut",
        },
      ],
    },
  ],
  supplement: [
    {
      type: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "443051000124104",
            display: "Adult diabetes specialty formula",
          },
          {
            system: "http://goodhealthhospital.org/supplement-type-codes",
            code: "1010",
            display: "Adult diabetic formula",
          },
        ],
        text: "Adult diabetic formula",
      },
      productName: "Glucerna",
      schedule: [
        {
          repeat: {
            boundsPeriod: {
              start: "2015-02-10T15:00:00Z",
            },
            frequency: 1,
            period: 24,
            periodUnit: "h",
          },
        },
        {
          repeat: {
            duration: 1,
            durationUnit: "h",
            when: ["HS"],
          },
        },
      ],
      quantity: {
        value: 1,
        unit: "8 oz bottle",
      },
    },
  ],
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const NutritionorderExampleEnergysupplement: NutritionOrder = {
  resourceType: "NutritionOrder",
  id: "energysupplement",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: energysupplement</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><p><b>allergyIntolerance</b>: <a>Cashew Nuts</a></p><p><b>foodPreferenceModifier</b>: Kosher <span>(Details : {http://terminology.hl7.org/CodeSystem/diet code 'kosher' = 'Kosher)</span></p><p><b>excludeFoodModifier</b>: Cashew Nut <span>(Details : {SNOMED CT code '227493005' = 'Cashew nuts', given as 'Cashew Nut'})</span></p><h3>Supplements</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>ProductName</b></td><td><b>Schedule</b></td><td><b>Quantity</b></td></tr><tr><td>*</td><td>Adult high energy drink <span>(Details : {SNOMED CT code '442971000124100' = 'Adult high energy formula (product)', given as 'Adult high energy formula'}; {http://goodhealthhospital.org/supplement-type-codes code '1010' = '1010', given as 'Adult high energy drink'})</span></td><td>Ensure</td><td>Starting 10/02/2015, Do 3 per 1 days</td><td>1 8 oz can</td></tr></table></div>",
  },
  identifier: [
    {
      system: "http://goodhealthhospital.org/nutrition-requests",
      value: "123",
    },
  ],
  status: "active",
  intent: "order",
  patient: {
    reference: "Patient/example",
    display: "Peter Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Inpatient",
  },
  dateTime: "2014-09-17",
  orderer: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  allergyIntolerance: [
    {
      reference: "AllergyIntolerance/example",
      display: "Cashew Nuts",
    },
  ],
  foodPreferenceModifier: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/diet",
          code: "kosher",
        },
      ],
    },
  ],
  excludeFoodModifier: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          version: "20140730",
          code: "227493005",
          display: "Cashew Nut",
        },
      ],
    },
  ],
  supplement: [
    {
      type: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "442971000124100",
            display: "Adult high energy formula",
          },
          {
            system: "http://goodhealthhospital.org/supplement-type-codes",
            code: "1010",
            display: "Adult high energy drink",
          },
        ],
        text: "Adult high energy drink",
      },
      productName: "Ensure",
      schedule: [
        {
          repeat: {
            boundsPeriod: {
              start: "2015-02-10",
            },
            frequency: 3,
            period: 1,
            periodUnit: "d",
          },
        },
      ],
      quantity: {
        value: 1,
        unit: "8 oz can",
      },
    },
  ],
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const NutritionorderExampleEnteralbolus: NutritionOrder = {
  resourceType: "NutritionOrder",
  id: "enteralbolus",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: enteralbolus</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><p><b>allergyIntolerance</b>: <a>Cashew Nuts</a></p><p><b>foodPreferenceModifier</b>: Dairy Free <span>(Details : {http://terminology.hl7.org/CodeSystem/diet code 'dairy-free' = 'Dairy Free)</span></p><p><b>excludeFoodModifier</b>: Cashew Nut <span>(Details : {SNOMED CT code '227493005' = 'Cashew nuts', given as 'Cashew Nut'})</span></p><blockquote><p><b>enteralFormula</b></p><p><b>baseFormulaType</b>: Adult high protein formula <span>(Details : {SNOMED CT code '442991000124104' = 'Adult high protein formula (product)', given as 'Adult high protein formula'})</span></p><p><b>baseFormulaProductName</b>: Acme High Protein Formula</p><p><b>additiveType</b>: Lipid <span>(Details : {http://terminology.hl7.org/CodeSystem/entformula-additive code 'lipid' = 'Lipid', given as 'Lipid'})</span></p><p><b>additiveProductName</b>: Acme Lipid Additive</p><p><b>caloricDensity</b>: 1.5 calories per milliliter<span> (Details: UCUM code cal/mL = 'cal/mL')</span></p><p><b>routeofAdministration</b>: Instillation, gastrostomy tube <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration code 'GT' = 'Instillation, gastrostomy tube', given as 'Instillation, gastrostomy tube'})</span></p><h3>Administrations</h3><table><tr><td>-</td><td><b>Schedule</b></td><td><b>Quantity</b></td></tr><tr><td>*</td><td>Starting 17/09/2014 4:00:00 PM, Do Once per 4 hours</td><td>240 milliliters<span> (Details: UCUM code mL = 'mL')</span></td></tr></table><p><b>maxVolumeToDeliver</b>: 1440 milliliter/day<span> (Details: UCUM code mL/d = 'mL/d')</span></p><p><b>administrationInstruction</b>: 240 mls every 4hrs </p></blockquote></div>",
  },
  identifier: [
    {
      system: "http://www.acme.org/nutritionorders",
      value: "123",
    },
  ],
  status: "active",
  intent: "order",
  patient: {
    reference: "Patient/example",
    display: "Peter Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Inpatient",
  },
  dateTime: "2014-09-17",
  orderer: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  allergyIntolerance: [
    {
      reference: "AllergyIntolerance/example",
      display: "Cashew Nuts",
    },
  ],
  foodPreferenceModifier: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/diet",
          code: "dairy-free",
        },
      ],
    },
  ],
  excludeFoodModifier: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          version: "20140730",
          code: "227493005",
          display: "Cashew Nut",
        },
      ],
    },
  ],
  enteralFormula: {
    baseFormulaType: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "442991000124104",
          display: "Adult high protein formula",
        },
      ],
    },
    baseFormulaProductName: "Acme High Protein Formula",
    additiveType: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/entformula-additive",
          code: "lipid",
          display: "Lipid",
        },
      ],
    },
    additiveProductName: "Acme Lipid Additive",
    caloricDensity: {
      value: 1.5,
      unit: "calories per milliliter",
      system: "http://unitsofmeasure.org",
      code: "cal/mL",
    },
    routeofAdministration: {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
          code: "GT",
          display: "Instillation, gastrostomy tube",
        },
      ],
    },
    administration: [
      {
        schedule: {
          repeat: {
            boundsPeriod: {
              start: "2014-09-17T16:00:00Z",
            },
            frequency: 1,
            period: 4,
            periodUnit: "h",
          },
        },
        quantity: {
          value: 240,
          unit: "milliliters",
          system: "http://unitsofmeasure.org",
          code: "mL",
        },
      },
    ],
    maxVolumeToDeliver: {
      value: 1440,
      unit: "milliliter/day",
      system: "http://unitsofmeasure.org",
      code: "mL/d",
    },
    administrationInstruction: "240 mls every 4hrs ",
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const NutritionorderExampleEnteralcontinuous: NutritionOrder = {
  resourceType: "NutritionOrder",
  id: "enteralcontinuous",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: enteralcontinuous</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><blockquote><p><b>enteralFormula</b></p><p><b>baseFormulaType</b>: Diabetic specialty enteral formula <span>(Details : {SNOMED CT code '6547210000124112' = '6547210000124112', given as 'Diabetic specialty enteral formula'})</span></p><p><b>baseFormulaProductName</b>:  Acme Diabetes Formula</p><p><b>caloricDensity</b>: 1 calories per milliliter<span> (Details: UCUM code cal/mL = 'cal/mL')</span></p><p><b>routeofAdministration</b>: Instillation, nasogastric tube <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration code 'NGT' = 'Instillation, nasogastric tube', given as 'Instillation, nasogastric tube'})</span></p><blockquote><p><b>administration</b></p><p><b>schedule</b>: Starting 17/09/2014 7:00:00 AM, Do Once</p><p><b>rate</b>: 60 ml/hr<span> (Details: UCUM code mL/h = 'mL/h')</span></p></blockquote><blockquote><p><b>administration</b></p><p><b>schedule</b>: Starting 17/09/2014 11:00:00 AM, Do Once</p><p><b>rate</b>: 80 ml/hr<span> (Details: UCUM code mL/h = 'mL/h')</span></p></blockquote><blockquote><p><b>administration</b></p><p><b>schedule</b>: Starting 17/09/2014 3:00:00 PM, Do Once</p><p><b>rate</b>: 100 ml/hr<span> (Details: UCUM code mL/h = 'mL/h')</span></p></blockquote><p><b>maxVolumeToDeliver</b>: 880 milliliter/day<span> (Details: UCUM code mL/d = 'mL/d')</span></p><p><b>administrationInstruction</b>: Hold feedings from 7 pm to 7 am. Add MCT oil to increase calories from 1.0 cal/mL to 1.5 cal/mL</p></blockquote></div>",
  },
  identifier: [
    {
      system: "http://www.acme.org/nutritionorders",
      value: "123",
    },
  ],
  status: "active",
  intent: "order",
  patient: {
    reference: "Patient/example",
    display: "Peter Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Inpatient",
  },
  dateTime: "2014-09-17",
  orderer: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  enteralFormula: {
    baseFormulaType: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "6547210000124112",
          display: "Diabetic specialty enteral formula",
        },
      ],
    },
    baseFormulaProductName: " Acme Diabetes Formula",
    caloricDensity: {
      value: 1,
      unit: "calories per milliliter",
      system: "http://unitsofmeasure.org",
      code: "cal/mL",
    },
    routeofAdministration: {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
          code: "NGT",
          display: "Instillation, nasogastric tube",
        },
      ],
    },
    administration: [
      {
        schedule: {
          repeat: {
            boundsPeriod: {
              start: "2014-09-17T07:00:00Z",
            },
          },
        },
        rateQuantity: {
          value: 60,
          unit: "ml/hr",
          system: "http://unitsofmeasure.org",
          code: "mL/h",
        },
      },
      {
        schedule: {
          repeat: {
            boundsPeriod: {
              start: "2014-09-17T11:00:00Z",
            },
          },
        },
        rateQuantity: {
          value: 80,
          unit: "ml/hr",
          system: "http://unitsofmeasure.org",
          code: "mL/h",
        },
      },
      {
        schedule: {
          repeat: {
            boundsPeriod: {
              start: "2014-09-17T15:00:00Z",
            },
          },
        },
        rateQuantity: {
          value: 100,
          unit: "ml/hr",
          system: "http://unitsofmeasure.org",
          code: "mL/h",
        },
      },
    ],
    maxVolumeToDeliver: {
      value: 880,
      unit: "milliliter/day",
      system: "http://unitsofmeasure.org",
      code: "mL/d",
    },
    administrationInstruction:
      "Hold feedings from 7 pm to 7 am. Add MCT oil to increase calories from 1.0 cal/mL to 1.5 cal/mL",
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const NutritionorderExampleFiberrestricteddiet: NutritionOrder = {
  resourceType: "NutritionOrder",
  id: "fiberrestricteddiet",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: fiberrestricteddiet</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><p><b>allergyIntolerance</b>: <a>Cashew Nuts</a></p><p><b>foodPreferenceModifier</b>: Dairy Free <span>(Details : {http://terminology.hl7.org/CodeSystem/diet code 'dairy-free' = 'Dairy Free)</span></p><p><b>excludeFoodModifier</b>: Cashew Nut <span>(Details : {SNOMED CT code '227493005' = 'Cashew nuts', given as 'Cashew Nut'})</span></p><blockquote><p><b>oralDiet</b></p><p><b>type</b>: Fiber restricted diet <span>(Details : {SNOMED CT code '15108003' = 'Restricted fiber diet', given as 'Restricted fiber diet'}; {http://goodhealthhospital.org/diet-type-codes code '1000' = '1000', given as 'Fiber restricted'})</span>, Low fat diet <span>(Details : {SNOMED CT code '16208003' = 'Low fat diet', given as 'Low fat diet'}; {http://goodhealthhospital.org/diet-type-codes code '1100' = '1100', given as 'Low Fat'})</span></p><p><b>schedule</b>: Starting 10/02/2015, Do 3 per 1 days</p><h3>Nutrients</h3><table><tr><td>-</td><td><b>Modifier</b></td><td><b>Amount</b></td></tr><tr><td>*</td><td>Fat <span>(Details : {SNOMED CT code '256674009' = 'Fat', given as 'Fat'})</span></td><td>50 grams<span> (Details: UCUM code g = 'g')</span></td></tr></table></blockquote></div>",
  },
  identifier: [
    {
      system: "http://goodhealthhospital.org/nutrition-requests",
      value: "123",
    },
  ],
  status: "active",
  intent: "order",
  patient: {
    reference: "Patient/example",
    display: "Peter Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Inpatient",
  },
  dateTime: "2014-09-17",
  orderer: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  allergyIntolerance: [
    {
      reference: "AllergyIntolerance/example",
      display: "Cashew Nuts",
    },
  ],
  foodPreferenceModifier: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/diet",
          code: "dairy-free",
        },
      ],
    },
  ],
  excludeFoodModifier: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          version: "20140730",
          code: "227493005",
          display: "Cashew Nut",
        },
      ],
    },
  ],
  oralDiet: {
    type: [
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "15108003",
            display: "Restricted fiber diet",
          },
          {
            system: "http://goodhealthhospital.org/diet-type-codes",
            code: "1000",
            display: "Fiber restricted",
          },
        ],
        text: "Fiber restricted diet",
      },
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "16208003",
            display: "Low fat diet",
          },
          {
            system: "http://goodhealthhospital.org/diet-type-codes",
            code: "1100",
            display: "Low Fat",
          },
        ],
        text: "Low fat diet",
      },
    ],
    schedule: [
      {
        repeat: {
          boundsPeriod: {
            start: "2015-02-10",
          },
          frequency: 3,
          period: 1,
          periodUnit: "d",
        },
      },
    ],
    nutrient: [
      {
        modifier: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "256674009",
              display: "Fat",
            },
          ],
        },
        amount: {
          value: 50,
          unit: "grams",
          system: "http://unitsofmeasure.org",
          code: "g",
        },
      },
    ],
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const NutritionorderExampleInfantenteral: NutritionOrder = {
  resourceType: "NutritionOrder",
  id: "infantenteral",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: infantenteral</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><blockquote><p><b>enteralFormula</b></p><p><b>baseFormulaType</b>: infant formula + iron <span>(Details : {SNOMED CT code '412414007' = 'Infant formula + iron', given as 'infant formula + iron'})</span></p><p><b>baseFormulaProductName</b>: Acme Infant Formula + Iron</p><p><b>additiveType</b>: Carbohydrate <span>(Details : {http://terminology.hl7.org/CodeSystem/entformula-additive code 'carbohydrate' = 'Carbohydrate', given as 'Carbohydrate'})</span></p><p><b>additiveProductName</b>: Acme High Carbohydrate Additive</p><p><b>caloricDensity</b>: 20 calories per ounce<span> (Details: UCUM code cal/[foz_us] = 'cal/foz_us')</span></p><p><b>routeofAdministration</b>: Swallow, oral <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration code 'PO' = 'Swallow, oral', given as 'Swallow, oral'})</span></p><h3>Administrations</h3><table><tr><td>-</td><td><b>Schedule</b></td><td><b>Quantity</b></td></tr><tr><td>*</td><td>Starting 17/09/2014, Do Once per 3 hours</td><td>4 ounces<span> (Details: UCUM code [foz_us] = 'foz_us')</span></td></tr></table><p><b>maxVolumeToDeliver</b>: 32 ounces<span> (Details: UCUM code [foz_us] = 'foz_us')</span></p><p><b>administrationInstruction</b>: Add high calorie high carbohydrate additive to increase cal/oz from 24 cal/oz to 27 cal/oz.</p></blockquote></div>",
  },
  identifier: [
    {
      system: "http://www.acme.org/nutritionorders",
      value: "123",
    },
  ],
  status: "active",
  intent: "order",
  patient: {
    reference: "Patient/example",
    display: "Peter Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Inpatient",
  },
  dateTime: "2014-09-17",
  orderer: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  enteralFormula: {
    baseFormulaType: {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "412414007",
          display: "infant formula + iron",
        },
      ],
    },
    baseFormulaProductName: "Acme Infant Formula + Iron",
    additiveType: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/entformula-additive",
          code: "carbohydrate",
          display: "Carbohydrate",
        },
      ],
    },
    additiveProductName: "Acme High Carbohydrate Additive",
    caloricDensity: {
      value: 20,
      unit: "calories per ounce",
      system: "http://unitsofmeasure.org",
      code: "cal/[foz_us]",
    },
    routeofAdministration: {
      coding: [
        {
          system:
            "http://terminology.hl7.org/CodeSystem/v3-RouteOfAdministration",
          code: "PO",
          display: "Swallow, oral",
          userSelected: true,
        },
      ],
    },
    administration: [
      {
        schedule: {
          repeat: {
            boundsPeriod: {
              start: "2014-09-17",
            },
            frequency: 1,
            period: 3,
            periodUnit: "h",
          },
        },
        quantity: {
          value: 4,
          unit: "ounces",
          system: "http://unitsofmeasure.org",
          code: "[foz_us]",
        },
      },
    ],
    maxVolumeToDeliver: {
      value: 32,
      unit: "ounces",
      system: "http://unitsofmeasure.org",
      code: "[foz_us]",
    },
    administrationInstruction:
      "Add high calorie high carbohydrate additive to increase cal/oz from 24 cal/oz to 27 cal/oz.",
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const NutritionorderExampleProteinsupplement: NutritionOrder = {
  resourceType: "NutritionOrder",
  id: "proteinsupplement",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: proteinsupplement</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><h3>Supplements</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>ProductName</b></td><td><b>Schedule</b></td><td><b>Quantity</b></td><td><b>Instruction</b></td></tr><tr><td>*</td><td>High Protein Powder <span>(Details : {SNOMED CT code '442991000124104' = 'Adult high protein formula (product)', given as 'Adult high protein formula'}; {http://goodhealthhospital.org/supplement-type-codes code '1000' = '1000', given as 'High Protein Powder'})</span></td><td>Beneprotein</td><td>Starting 10/02/2015, Do , at meals</td><td>1 scoop<span> (Details: UCUM code {scoop} = '{scoop}')</span></td><td>Beneprotein 1 scoop TID with meal.starting on  2015-02-10</td></tr></table></div>",
  },
  identifier: [
    {
      system: "http://goodhealthhospital.org/nutrition-requests",
      value: "123",
    },
  ],
  status: "active",
  intent: "order",
  patient: {
    reference: "Patient/example",
    display: "Peter Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Inpatient",
  },
  dateTime: "2014-09-17",
  orderer: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  supplement: [
    {
      type: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "442991000124104",
            display: "Adult high protein formula",
          },
          {
            system: "http://goodhealthhospital.org/supplement-type-codes",
            code: "1000",
            display: "High Protein Powder",
          },
        ],
        text: "High Protein Powder",
      },
      productName: "Beneprotein",
      schedule: [
        {
          repeat: {
            boundsPeriod: {
              start: "2015-02-10",
            },
            when: ["C"],
          },
        },
      ],
      quantity: {
        value: 1,
        unit: "scoop",
        system: "http://unitsofmeasure.org",
        code: "{scoop}",
      },
      instruction: "Beneprotein 1 scoop TID with meal.starting on  2015-02-10",
    },
  ],
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const NutritionorderExamplePureeddietSimple: NutritionOrder = {
  resourceType: "NutritionOrder",
  id: "pureeddiet-simple",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: pureeddiet-simple</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><blockquote><p><b>oralDiet</b></p><p><b>type</b>: Pureed diet <span>(Details : {SNOMED CT code '226211001' = 'Pureed diet', given as 'Pureed diet'}; {http://goodhealthhospital.org/diet-type-codes code '1010' = '1010', given as 'Pureed diet'})</span></p><p><b>schedule</b>: Starting 10/02/2015, Do 3 per 1 days</p><h3>Textures</h3><table><tr><td>-</td><td><b>Modifier</b></td></tr><tr><td>*</td><td>Pureed <span>(Details : {SNOMED CT code '228055009' = 'Liquidized food', given as 'Liquidized food'})</span></td></tr></table><p><b>fluidConsistencyType</b>: Nectar thick liquids <span>(Details : {SNOMED CT code '439021000124105' = 'Dietary liquid consistency - nectar thick liquid (regime/therapy)', given as 'Dietary liquid consistency - nectar thick liquid'})</span></p></blockquote><h3>Supplements</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>ProductName</b></td><td><b>Instruction</b></td></tr><tr><td>*</td><td>Adult high energy pudding <span>(Details : {SNOMED CT code '442971000124100' = 'Adult high energy formula (product)', given as 'Adult high energy formula'}; {http://goodhealthhospital.org/supplement-type-codes code '1040' = '1040', given as 'Adult high energy pudding'})</span></td><td>Ensure Pudding 4 oz container</td><td>Ensure Pudding at breakfast, lunch, supper</td></tr></table></div>",
  },
  identifier: [
    {
      system: "http://goodhealthhospital.org/nutrition-requests",
      value: "123",
    },
  ],
  status: "active",
  intent: "order",
  patient: {
    reference: "Patient/example",
    display: "Peter Chalmers",
  },
  dateTime: "2014-09-17",
  orderer: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  oralDiet: {
    type: [
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "226211001",
            display: "Pureed diet",
          },
          {
            system: "http://goodhealthhospital.org/diet-type-codes",
            code: "1010",
            display: "Pureed diet",
          },
        ],
        text: "Pureed diet",
      },
    ],
    schedule: [
      {
        repeat: {
          boundsPeriod: {
            start: "2015-02-10",
          },
          frequency: 3,
          period: 1,
          periodUnit: "d",
        },
      },
    ],
    texture: [
      {
        modifier: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "228055009",
              display: "Liquidized food",
            },
          ],
          text: "Pureed",
        },
      },
    ],
    fluidConsistencyType: [
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "439021000124105",
            display: "Dietary liquid consistency - nectar thick liquid",
          },
        ],
        text: "Nectar thick liquids",
      },
    ],
  },
  supplement: [
    {
      type: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "442971000124100",
            display: "Adult high energy formula",
          },
          {
            system: "http://goodhealthhospital.org/supplement-type-codes",
            code: "1040",
            display: "Adult high energy pudding",
          },
        ],
        text: "Adult high energy pudding",
      },
      productName: "Ensure Pudding 4 oz container",
      instruction: "Ensure Pudding at breakfast, lunch, supper",
    },
  ],
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const NutritionorderExamplePureeddiet: NutritionOrder = {
  resourceType: "NutritionOrder",
  id: "pureeddiet",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: pureeddiet</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><p><b>allergyIntolerance</b>: <a>Cashew Nuts</a></p><p><b>foodPreferenceModifier</b>: Dairy Free <span>(Details : {http://terminology.hl7.org/CodeSystem/diet code 'dairy-free' = 'Dairy Free)</span></p><p><b>excludeFoodModifier</b>: Cashew Nut <span>(Details : {SNOMED CT code '227493005' = 'Cashew nuts', given as 'Cashew Nut'})</span></p><blockquote><p><b>oralDiet</b></p><p><b>type</b>: Pureed diet <span>(Details : {SNOMED CT code '226211001' = 'Pureed diet', given as 'Pureed diet'}; {http://goodhealthhospital.org/diet-type-codes code '1010' = '1010', given as 'Pureed diet'})</span></p><p><b>schedule</b>: Starting 10/02/2015, Do 3 per 1 days</p><h3>Textures</h3><table><tr><td>-</td><td><b>Modifier</b></td></tr><tr><td>*</td><td>Pureed <span>(Details : {SNOMED CT code '228055009' = 'Liquidized food', given as 'Liquidized food'})</span></td></tr></table><p><b>fluidConsistencyType</b>: Nectar thick liquids <span>(Details : {SNOMED CT code '439021000124105' = 'Dietary liquid consistency - nectar thick liquid (regime/therapy)', given as 'Dietary liquid consistency - nectar thick liquid'})</span></p></blockquote></div>",
  },
  identifier: [
    {
      system: "http://goodhealthhospital.org/nutrition-requests",
      value: "123",
    },
  ],
  status: "active",
  intent: "order",
  patient: {
    reference: "Patient/example",
    display: "Peter Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Inpatient",
  },
  dateTime: "2014-09-17",
  orderer: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  allergyIntolerance: [
    {
      reference: "AllergyIntolerance/example",
      display: "Cashew Nuts",
    },
  ],
  foodPreferenceModifier: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/diet",
          code: "dairy-free",
        },
      ],
    },
  ],
  excludeFoodModifier: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          version: "20140730",
          code: "227493005",
          display: "Cashew Nut",
        },
      ],
    },
  ],
  oralDiet: {
    type: [
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "226211001",
            display: "Pureed diet",
          },
          {
            system: "http://goodhealthhospital.org/diet-type-codes",
            code: "1010",
            display: "Pureed diet",
          },
        ],
        text: "Pureed diet",
      },
    ],
    schedule: [
      {
        repeat: {
          boundsPeriod: {
            start: "2015-02-10",
          },
          frequency: 3,
          period: 1,
          periodUnit: "d",
        },
      },
    ],
    texture: [
      {
        modifier: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "228055009",
              display: "Liquidized food",
            },
          ],
          text: "Pureed",
        },
      },
    ],
    fluidConsistencyType: [
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "439021000124105",
            display: "Dietary liquid consistency - nectar thick liquid",
          },
        ],
        text: "Nectar thick liquids",
      },
    ],
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const NutritionorderExampleRenaldiet: NutritionOrder = {
  resourceType: "NutritionOrder",
  id: "renaldiet",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: renaldiet</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>encounter</b>: <a>Inpatient</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><p><b>allergyIntolerance</b>: <a>Cashew Nuts</a></p><p><b>foodPreferenceModifier</b>: Dairy Free <span>(Details : {http://terminology.hl7.org/CodeSystem/diet code 'dairy-free' = 'Dairy Free)</span></p><p><b>excludeFoodModifier</b>: Cashew Nut <span>(Details : {SNOMED CT code '227493005' = 'Cashew nuts', given as 'Cashew Nut'})</span></p><blockquote><p><b>oralDiet</b></p><p><b>type</b>: Renal Diet <span>(Details : {SNOMED CT code '33489005' = 'Renal disease diet', given as 'Renal diet'}; {http://goodhealthhospital.org/diet-type-codes code '1050' = '1050', given as 'Renal'})</span></p><p><b>schedule</b>: Starting 10/02/2015, Do 3 per 1 days</p><blockquote><p><b>nutrient</b></p><p><b>modifier</b>: Sodium <span>(Details : {SNOMED CT code '39972003' = 'Sodium', given as 'Sodium'})</span></p><p><b>amount</b>: 2 grams<span> (Details: UCUM code g = 'g')</span></p></blockquote><blockquote><p><b>nutrient</b></p><p><b>modifier</b>: Phosphorus <span>(Details : {SNOMED CT code '30820000' = 'Phosphorus', given as 'Phosphorus'})</span></p><p><b>amount</b>: 1000 milligrams<span> (Details: UCUM code mg = 'mg')</span></p></blockquote><blockquote><p><b>nutrient</b></p><p><b>modifier</b>: Potassium <span>(Details : {SNOMED CT code '88480006' = 'Potassium', given as 'Potassium'})</span></p><p><b>amount</b>: 2 grams<span> (Details: UCUM code g = 'g')</span></p></blockquote></blockquote></div>",
  },
  identifier: [
    {
      system: "http://goodhealthhospital.org/nutrition-requests",
      value: "123",
    },
  ],
  status: "active",
  intent: "order",
  patient: {
    reference: "Patient/example",
    display: "Peter Chalmers",
  },
  encounter: {
    reference: "Encounter/example",
    display: "Inpatient",
  },
  dateTime: "2014-09-17",
  orderer: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  allergyIntolerance: [
    {
      reference: "AllergyIntolerance/example",
      display: "Cashew Nuts",
    },
  ],
  foodPreferenceModifier: [
    {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/diet",
          code: "dairy-free",
        },
      ],
    },
  ],
  excludeFoodModifier: [
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          version: "20140730",
          code: "227493005",
          display: "Cashew Nut",
        },
      ],
    },
  ],
  oralDiet: {
    type: [
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "33489005",
            display: "Renal diet",
          },
          {
            system: "http://goodhealthhospital.org/diet-type-codes",
            code: "1050",
            display: "Renal",
          },
        ],
        text: "Renal Diet",
      },
    ],
    schedule: [
      {
        repeat: {
          boundsPeriod: {
            start: "2015-02-10",
          },
          frequency: 3,
          period: 1,
          periodUnit: "d",
        },
      },
    ],
    nutrient: [
      {
        modifier: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "39972003",
              display: "Sodium",
            },
          ],
        },
        amount: {
          value: 2,
          unit: "grams",
          system: "http://unitsofmeasure.org",
          code: "g",
        },
      },
      {
        modifier: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "30820000",
              display: "Phosphorus",
            },
          ],
        },
        amount: {
          value: 1000,
          unit: "milligrams",
          system: "http://unitsofmeasure.org",
          code: "mg",
        },
      },
      {
        modifier: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "88480006",
              display: "Potassium",
            },
          ],
        },
        amount: {
          value: 2,
          unit: "grams",
          system: "http://unitsofmeasure.org",
          code: "g",
        },
      },
    ],
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;

export const NutritionorderExampleTextureModified: NutritionOrder = {
  resourceType: "NutritionOrder",
  id: "texturemodified",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: texturemodified</p><p><b>identifier</b>: 123</p><p><b>status</b>: active</p><p><b>intent</b>: order</p><p><b>patient</b>: <a>Peter Chalmers</a></p><p><b>dateTime</b>: 17/09/2014</p><p><b>orderer</b>: <a>Dr Adam Careful</a></p><blockquote><p><b>oralDiet</b></p><p><b>type</b>: Texture modified diet <span>(Details : {SNOMED CT code '435801000124108' = 'Texture modified diet (regime/therapy)', given as 'Texture modified diet'}; {http://goodhealthhospital.org/diet-type-codes code '1010' = '1010', given as 'Texture modified diet'})</span></p><p><b>schedule</b>: Starting 10/02/2015, Do 3 per 1 days</p><h3>Textures</h3><table><tr><td>-</td><td><b>Modifier</b></td><td><b>FoodType</b></td></tr><tr><td>*</td><td>Regular, Chopped Meat <span>(Details : {SNOMED CT code '228049004' = 'Chopped food', given as 'Chopped food'})</span></td><td>Regular, Chopped Meat <span>(Details : {SNOMED CT code '28647000' = 'Meat', given as 'Meat'})</span></td></tr></table></blockquote></div>",
  },
  identifier: [
    {
      system: "http://goodhealthhospital.org/nutrition-requests",
      value: "123",
    },
  ],
  status: "active",
  intent: "order",
  patient: {
    reference: "Patient/example",
    display: "Peter Chalmers",
  },
  dateTime: "2014-09-17",
  orderer: {
    reference: "Practitioner/example",
    display: "Dr Adam Careful",
  },
  oralDiet: {
    type: [
      {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "435801000124108",
            display: "Texture modified diet",
          },
          {
            system: "http://goodhealthhospital.org/diet-type-codes",
            code: "1010",
            display: "Texture modified diet",
          },
        ],
        text: "Texture modified diet",
      },
    ],
    schedule: [
      {
        repeat: {
          boundsPeriod: {
            start: "2015-02-10",
          },
          frequency: 3,
          period: 1,
          periodUnit: "d",
        },
      },
    ],
    texture: [
      {
        modifier: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "228049004",
              display: "Chopped food",
            },
          ],
          text: "Regular, Chopped Meat",
        },
        foodType: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "28647000",
              display: "Meat",
            },
          ],
          text: "Regular, Chopped Meat",
        },
      },
    ],
  },
  meta: {
    tag: [
      {
        system: "http://terminology.hl7.org/CodeSystem/v3-ActReason",
        code: "HTEST",
        display: "test health data",
      },
    ],
  },
} as const;
