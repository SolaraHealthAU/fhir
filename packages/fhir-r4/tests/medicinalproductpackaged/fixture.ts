import type { MedicinalProductPackaged } from "../../src/v4.0.1/medicinalproductpackaged/types";

export const MedicinalproductpackagedExample: MedicinalProductPackaged = {
  resourceType: "MedicinalProductPackaged",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: {PCID}</p><p><b>description</b>: ALU-PVC/PVDC BLISTERS. CARTONS OF 10 FILM-COATED TABLETS. </p><h3>BatchIdentifiers</h3><table><tr><td>-</td><td><b>OuterPackaging</b></td></tr><tr><td>*</td><td>AAF5699</td></tr></table><blockquote><p><b>packageItem</b></p><p><b>type</b>: Carton <span>(Details : {http://ema.europa.eu/example/packageitemcontainertype code 'Carton' = 'Carton)</span></p><p><b>quantity</b>: 1 1</p><p><b>material</b>: PVC <span>(Details : {http://ema.europa.eu/example/packageItemContainerMaterial code 'PVC' = 'PVC)</span>, PVDC <span>(Details : {http://ema.europa.eu/example/packageItemContainerMaterial code 'PVDC' = 'PVDC)</span>, alu <span>(Details : {http://ema.europa.eu/example/packageItemContainerMaterial code 'alu' = 'alu)</span></p><h3>PackageItems</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table><p><b>physicalCharacteristics</b>: </p><p><b>manufacturer</b>: <a>Organization/example</a></p></blockquote></div>",
  },
  identifier: [
    {
      system: "http://ema.europa.eu/example/pcid",
      value: "{PCID}",
    },
  ],
  description: "ALU-PVC/PVDC BLISTERS. CARTONS OF 10 FILM-COATED TABLETS. ",
  batchIdentifier: [
    {
      outerPackaging: {
        system: "http://ema.europa.eu/example/baid1",
        value: "AAF5699",
        period: {
          end: "2016-06-06",
        },
      },
    },
  ],
  packageItem: [
    {
      type: {
        coding: [
          {
            system: "http://ema.europa.eu/example/packageitemcontainertype",
            code: "Carton",
          },
        ],
      },
      quantity: {
        value: 1,
        unit: "1",
      },
      material: [
        {
          coding: [
            {
              system:
                "http://ema.europa.eu/example/packageItemContainerMaterial",
              code: "PVC",
            },
          ],
        },
        {
          coding: [
            {
              system:
                "http://ema.europa.eu/example/packageItemContainerMaterial",
              code: "PVDC",
            },
          ],
        },
        {
          coding: [
            {
              system:
                "http://ema.europa.eu/example/packageItemContainerMaterial",
              code: "alu",
            },
          ],
        },
      ],
      packageItem: [
        {
          type: {
            coding: [
              {
                system: "http://ema.europa.eu/example/packageitemcontainertype",
                code: "Blister",
              },
            ],
          },
          quantity: {
            value: 1,
            unit: "1",
          },
          material: [
            {
              coding: [
                {
                  system:
                    "http://ema.europa.eu/example/packageItemContainerMaterial",
                  code: "Paperboard",
                },
              ],
            },
          ],
          manufacturedItem: [
            {
              reference: "MedicinalProductManufactured/example",
            },
          ],
          physicalCharacteristics: {
            height: {
              value: 125,
              unit: "mm",
            },
            width: {
              value: 45,
              unit: "mm",
            },
          },
          shelfLifeStorage: [
            {
              type: {
                coding: [
                  {
                    system:
                      "http://ema.europa.eu/example/shelfLifeTypePlaceHolder",
                    code: "ShelfLifeofPackagedMedicinalProduct",
                  },
                ],
              },
              period: {
                value: 3,
                unit: "a",
              },
              specialPrecautionsForStorage: [
                {
                  coding: [
                    {
                      system:
                        "http://ema.europa.eu/example/specialprecautionsforstorage",
                      code: "Thismedicinalproductdoesnotrequireanyspecialstoragecondition.",
                    },
                  ],
                },
              ],
            },
          ],
          manufacturer: [
            {
              reference: "Organization/example",
            },
          ],
        },
      ],
      physicalCharacteristics: {
        height: {
          value: 50,
          unit: "mm",
        },
        width: {
          value: 136,
          unit: "mm",
        },
        depth: {
          value: 23.5,
          unit: "mm",
        },
      },
      manufacturer: [
        {
          reference: "Organization/example",
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
