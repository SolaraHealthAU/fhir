import type { MedicinalProduct } from "../../src/v4.0.1/medicinalproduct/types";
import type { MedicinalProductUndesirableEffect } from "../../src/v4.0.1/medicinalproduct/types";

export const MedicinalproductExample: MedicinalProduct = {
  resourceType: "MedicinalProduct",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: {mpid}</p><p><b>productClassification</b>: WHOAnatomicalTherapeuticChemicalATCClassificationSystem|B01AF02 <span>(Details : {http://ema.europa.eu/example/WHOAnatomicalTherapeuticChemicalATCClassificationSystem code 'WHOAnatomicalTherapeuticChemicalATCClassificationSystem|B01AF02' = 'WHOAnatomicalTherapeuticChemicalATCClassificationSystem|B01AF02)</span></p><p><b>attachedDocument</b>: <a>DocumentReference/example</a></p><p><b>masterFile</b>: <a>DocumentReference/example</a></p><blockquote><p><b>name</b></p><p><b>productName</b>: Equilidem 2.5 mg film-coated tablets</p><blockquote><p><b>namePart</b></p><p><b>part</b>: Equilidem</p><p><b>type</b>: INV (Details: [not stated] code INV = 'INV', stated as 'null')</p></blockquote><blockquote><p><b>namePart</b></p><p><b>part</b>: 2.5 mg</p><p><b>type</b>: STR (Details: [not stated] code STR = 'STR', stated as 'null')</p></blockquote><blockquote><p><b>namePart</b></p><p><b>part</b>: film-coated tablets</p><p><b>type</b>: FRM (Details: [not stated] code FRM = 'FRM', stated as 'null')</p></blockquote><h3>CountryLanguages</h3><table><tr><td>-</td><td><b>Country</b></td><td><b>Jurisdiction</b></td><td><b>Language</b></td></tr><tr><td>*</td><td>EU <span>(Details : {http://ema.europa.eu/example/countryCode code 'EU' = 'EU)</span></td><td>EU <span>(Details : {http://ema.europa.eu/example/jurisdictionCode code 'EU' = 'EU)</span></td><td>EN <span>(Details : {http://ema.europa.eu/example/languageCode code 'EN' = 'EN)</span></td></tr></table></blockquote><h3>ManufacturingBusinessOperations</h3><table><tr><td>-</td><td><b>OperationType</b></td><td><b>AuthorisationReferenceNumber</b></td><td><b>EffectiveDate</b></td><td><b>Manufacturer</b></td><td><b>Regulator</b></td></tr><tr><td>*</td><td>Batchrelease <span>(Details : {http://ema.europa.eu/example/manufacturingOperationType code 'Batchrelease' = 'Batchrelease)</span></td><td>1324TZ</td><td>15/03/2013</td><td><a>Organization/example</a></td><td><a>Organization/example</a></td></tr></table></div>",
  },
  identifier: [
    {
      system: "http://ema.europa.eu/example/MPID",
      value: "{mpid}",
    },
  ],
  productClassification: [
    {
      coding: [
        {
          system:
            "http://ema.europa.eu/example/WHOAnatomicalTherapeuticChemicalATCClassificationSystem",
          code: "WHOAnatomicalTherapeuticChemicalATCClassificationSystem|B01AF02",
        },
      ],
    },
  ],
  attachedDocument: [
    {
      reference: "DocumentReference/example",
    },
  ],
  masterFile: [
    {
      reference: "DocumentReference/example",
    },
  ],
  name: [
    {
      productName: "Equilidem 2.5 mg film-coated tablets",
      namePart: [
        {
          part: "Equilidem",
          type: {
            code: "INV",
          },
        },
        {
          part: "2.5 mg",
          type: {
            code: "STR",
          },
        },
        {
          part: "film-coated tablets",
          type: {
            code: "FRM",
          },
        },
      ],
      countryLanguage: [
        {
          country: {
            coding: [
              {
                system: "http://ema.europa.eu/example/countryCode",
                code: "EU",
              },
            ],
          },
          jurisdiction: {
            coding: [
              {
                system: "http://ema.europa.eu/example/jurisdictionCode",
                code: "EU",
              },
            ],
          },
          language: {
            coding: [
              {
                system: "http://ema.europa.eu/example/languageCode",
                code: "EN",
              },
            ],
          },
        },
      ],
    },
  ],
  manufacturingBusinessOperation: [
    {
      operationType: {
        coding: [
          {
            system: "http://ema.europa.eu/example/manufacturingOperationType",
            code: "Batchrelease",
          },
        ],
      },
      authorisationReferenceNumber: {
        system:
          "http://ema.europa.eu/example/manufacturingAuthorisationReferenceNumber",
        value: "1324TZ",
      },
      effectiveDate: "2013-03-15",
      manufacturer: [
        {
          reference: "Organization/example",
        },
      ],
      regulator: {
        reference: "Organization/example",
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

export const MedicinalproductundesirableeffectExample: MedicinalProductUndesirableEffect =
  {
    resourceType: "MedicinalProductUndesirableEffect",
    id: "example",
    text: {
      status: "generated",
      div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>symptomConditionEffect</b>: Prevention of\\nVTE in adult\\npatients who have\\nundergone\\nelective hip or\\nknee replacement\\nsurgery (VTEp) <span>(Details : {http://ema.europa.eu/example/undesirableeffectassymptom-condition-effect code 'Anaemia' = 'Anaemia)</span></p><p><b>classification</b>: Bloodandlymphaticsystemdisorders <span>(Details : {http://ema.europa.eu/example/symptom-condition-effectclassification code 'Bloodandlymphaticsystemdisorders' = 'Bloodandlymphaticsystemdisorders)</span></p><p><b>frequencyOfOccurrence</b>: Common <span>(Details : {http://ema.europa.eu/example/frequencyofoccurrence code 'Common' = 'Common)</span></p></div>",
    },
    symptomConditionEffect: {
      coding: [
        {
          system:
            "http://ema.europa.eu/example/undesirableeffectassymptom-condition-effect",
          code: "Anaemia",
        },
      ],
      text: "Prevention of\\nVTE in adult\\npatients who have\\nundergone\\nelective hip or\\nknee replacement\\nsurgery (VTEp)",
    },
    classification: {
      coding: [
        {
          system:
            "http://ema.europa.eu/example/symptom-condition-effectclassification",
          code: "Bloodandlymphaticsystemdisorders",
        },
      ],
    },
    frequencyOfOccurrence: {
      coding: [
        {
          system: "http://ema.europa.eu/example/frequencyofoccurrence",
          code: "Common",
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
