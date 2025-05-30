import type { SpecimenDefinition } from "../../src/v4.0.1/specimendefinition/types";

export const SpecimendefinitionExampleSerumPlasma: SpecimenDefinition = {
  resourceType: "SpecimenDefinition",
  id: "2364",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: 2364</p><p><b>typeCollected</b>: Venous blood specimen <span>(Details : {SNOMED CT code '122555007' = 'Venous blood specimen', given as 'Venous blood specimen'})</span></p><p><b>patientPreparation</b>: 12 hour fasting <span>(Details )</span>, At rest <span>(Details : {SNOMED CT code '263678003' = 'At rest', given as 'At rest'})</span></p><p><b>timeAspect</b>: preferrably morning time</p><blockquote><p><b>typeTested</b></p><p><b>type</b>: Serum specimen <span>(Details : {SNOMED CT code '119364003' = 'Serum specimen', given as 'Serum specimen'})</span></p><p><b>preference</b>: preferred</p><h3>Containers</h3><table><tr><td>-</td><td><b>Material</b></td><td><b>Type</b></td><td><b>Cap</b></td><td><b>MinimumVolume[x]</b></td></tr><tr><td>*</td><td>plastic <span>(Details : {SNOMED CT code '61088005' = 'Plastic', given as 'plastic'})</span></td><td>Evacuated blood collection tube, thrombin/clot activator/gel separator <span>(Details : {SNOMED CT code '702281005' = 'Evacuated blood collection tube, thrombin/clot activator/gel separator', given as 'Evacuated blood collection tube, thrombin/clot activator/gel separator'})</span></td><td>yellow cap <span>(Details : {urn:iso:std:iso:6710:2017 code 'yellow' = 'yellow', given as 'yellow cap'})</span></td><td>2 ml<span> (Details: UCUM code mL = 'mL')</span></td></tr></table><blockquote><p><b>handling</b></p><p><b>temperatureQualifier</b>: Ambient temperature <span>(Details )</span></p><p><b>temperatureRange</b>: 15-25 °C</p><p><b>maxDuration</b>: 60 minute<span> (Details: UCUM code min = 'min')</span></p></blockquote><blockquote><p><b>handling</b></p><p><b>temperatureQualifier</b>: Refrigerated temperature <span>(Details )</span></p><p><b>temperatureRange</b>: 2-8 °C</p><p><b>maxDuration</b>: 8 hour<span> (Details: UCUM code h = 'h')</span></p></blockquote></blockquote><blockquote><p><b>typeTested</b></p><p><b>type</b>: Plasma specimen <span>(Details : {SNOMED CT code '119361006' = 'Plasma specimen', given as 'Plasma specimen'})</span></p><p><b>preference</b>: alternate</p><h3>Containers</h3><table><tr><td>-</td><td><b>Material</b></td><td><b>Type</b></td><td><b>Cap</b></td><td><b>MinimumVolume[x]</b></td></tr><tr><td>*</td><td>glass <span>(Details : {SNOMED CT code '32039001' = 'Glass', given as 'glass'})</span></td><td>Evacuated blood collection tube with heparin lithium and gel separator <span>(Details : {SNOMED CT code '767390000' = 'Evacuated blood collection tube with heparin lithium and gel separator', given as 'Evacuated blood collection tube with heparin lithium and gel separator'})</span></td><td>green cap <span>(Details : {urn:iso:std:iso:6710:2017 code 'green' = 'green', given as 'green cap'})</span></td><td>2 ml<span> (Details: UCUM code mL = 'mL')</span></td></tr></table><p><b>rejectionCriterion</b>: insufficient specimen volume <span>(Details : {http://terminology.hl7.org/CodeSystem/rejection-criteria code 'insufficient' = 'insufficient specimen volume', given as 'insufficient specimen volume'})</span>, hemolized specimen <span>(Details : {http://terminology.hl7.org/CodeSystem/rejection-criteria code 'hemolized' = 'hemolized specimen', given as 'hemolized specimen'})</span></p><blockquote><p><b>handling</b></p><p><b>temperatureQualifier</b>: Ambient temperature <span>(Details )</span></p><p><b>temperatureRange</b>: 15-25 °C</p><p><b>maxDuration</b>: 60 minute<span> (Details: UCUM code min = 'min')</span></p></blockquote><blockquote><p><b>handling</b></p><p><b>temperatureQualifier</b>: Refrigerated temperature <span>(Details )</span></p><p><b>temperatureRange</b>: 2-8 °C</p><p><b>maxDuration</b>: 8 hour<span> (Details: UCUM code h = 'h')</span></p></blockquote></blockquote></div>",
  },
  typeCollected: {
    coding: [
      {
        system: "http://snomed.info/sct",
        code: "122555007",
        display: "Venous blood specimen",
      },
    ],
  },
  patientPreparation: [
    {
      text: "12 hour fasting",
    },
    {
      coding: [
        {
          system: "http://snomed.info/sct",
          code: "263678003",
          display: "At rest",
        },
      ],
    },
  ],
  timeAspect: "preferrably morning time",
  typeTested: [
    {
      type: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "119364003",
            display: "Serum specimen",
          },
        ],
      },
      preference: "preferred",
      container: {
        material: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "61088005",
              display: "plastic",
            },
          ],
        },
        type: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "702281005",
              display:
                "Evacuated blood collection tube, thrombin/clot activator/gel separator",
            },
          ],
        },
        cap: {
          coding: [
            {
              system: "urn:iso:std:iso:6710:2017",
              code: "yellow",
              display: "yellow cap",
            },
          ],
        },
        minimumVolumeQuantity: {
          value: 2,
          unit: "ml",
          system: "http://unitsofmeasure.org",
          code: "mL",
        },
      },
      handling: [
        {
          temperatureQualifier: {
            text: "Ambient temperature",
          },
          temperatureRange: {
            low: {
              value: 15,
              unit: "°C",
              system: "http://unitsofmeasure.org",
              code: "Cel",
            },
            high: {
              value: 25,
              unit: "°C",
              system: "http://unitsofmeasure.org",
              code: "Cel",
            },
          },
          maxDuration: {
            value: 60,
            unit: "minute",
            system: "http://unitsofmeasure.org",
            code: "min",
          },
        },
        {
          temperatureQualifier: {
            text: "Refrigerated temperature",
          },
          temperatureRange: {
            low: {
              value: 2,
              unit: "°C",
              system: "http://unitsofmeasure.org",
              code: "Cel",
            },
            high: {
              value: 8,
              unit: "°C",
              system: "http://unitsofmeasure.org",
              code: "Cel",
            },
          },
          maxDuration: {
            value: 8,
            unit: "hour",
            system: "http://unitsofmeasure.org",
            code: "h",
          },
        },
      ],
    },
    {
      type: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "119361006",
            display: "Plasma specimen",
          },
        ],
      },
      preference: "alternate",
      container: {
        material: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "32039001",
              display: "glass",
            },
          ],
        },
        type: {
          coding: [
            {
              system: "http://snomed.info/sct",
              code: "767390000",
              display:
                "Evacuated blood collection tube with heparin lithium and gel separator",
            },
          ],
        },
        cap: {
          coding: [
            {
              system: "urn:iso:std:iso:6710:2017",
              code: "green",
              display: "green cap",
            },
          ],
        },
        minimumVolumeQuantity: {
          value: 2,
          unit: "ml",
          system: "http://unitsofmeasure.org",
          code: "mL",
        },
      },
      rejectionCriterion: [
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/rejection-criteria",
              code: "insufficient",
              display: "insufficient specimen volume",
            },
          ],
        },
        {
          coding: [
            {
              system:
                "http://terminology.hl7.org/CodeSystem/rejection-criteria",
              code: "hemolized",
              display: "hemolized specimen",
            },
          ],
        },
      ],
      handling: [
        {
          temperatureQualifier: {
            text: "Ambient temperature",
          },
          temperatureRange: {
            low: {
              value: 15,
              unit: "°C",
              system: "http://unitsofmeasure.org",
              code: "Cel",
            },
            high: {
              value: 25,
              unit: "°C",
              system: "http://unitsofmeasure.org",
              code: "Cel",
            },
          },
          maxDuration: {
            value: 60,
            unit: "minute",
            system: "http://unitsofmeasure.org",
            code: "min",
          },
        },
        {
          temperatureQualifier: {
            text: "Refrigerated temperature",
          },
          temperatureRange: {
            low: {
              value: 2,
              unit: "°C",
              system: "http://unitsofmeasure.org",
              code: "Cel",
            },
            high: {
              value: 8,
              unit: "°C",
              system: "http://unitsofmeasure.org",
              code: "Cel",
            },
          },
          maxDuration: {
            value: 8,
            unit: "hour",
            system: "http://unitsofmeasure.org",
            code: "h",
          },
        },
      ],
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
