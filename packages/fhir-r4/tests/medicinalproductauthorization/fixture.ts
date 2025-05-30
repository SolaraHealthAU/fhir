import type { MedicinalProductAuthorization } from "../../src/v4.0.1/medicinalproductauthorization/types";

export const MedicinalproductauthorizationExample: MedicinalProductAuthorization =
  {
    resourceType: "MedicinalProductAuthorization",
    id: "example",
    text: {
      status: "generated",
      div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>identifier</b>: EU/1/11/999/001</p><p><b>country</b>: EU <span>(Details : {http://ema.europa.eu/example/country code 'EU' = 'EU)</span></p><p><b>status</b>: active <span>(Details : {http://ema.europa.eu/example/authorisationstatus code 'active' = 'active)</span></p><p><b>statusDate</b>: 14/01/2015</p><p><b>validityPeriod</b>: 16/08/2015 --&gt; 20/05/2020</p><p><b>dataExclusivityPeriod</b>: 15/08/2010 --&gt; 15/08/2020</p><p><b>dateOfFirstAuthorization</b>: 15/08/2010</p><p><b>internationalBirthDate</b>: 15/08/2010</p><blockquote><p><b>jurisdictionalAuthorization</b></p><p><b>identifier</b>: 123-456-789</p><p><b>country</b>: NO <span>(Details : {http://ema.europa.eu/example/countryCode code 'NO' = 'NO)</span></p></blockquote><blockquote><p><b>jurisdictionalAuthorization</b></p><p><b>identifier</b>: 123-456-123</p><p><b>country</b>: NO <span>(Details : {http://ema.europa.eu/example/countryCode code 'NO' = 'NO)</span></p></blockquote><p><b>holder</b>: <a>Organization/example</a></p><p><b>regulator</b>: <a>Organization/example</a></p><blockquote><p><b>procedure</b></p><p><b>identifier</b>: EMEA/H/C/009999/IA/0099/G</p><p><b>type</b>: VariationTypeIA <span>(Details : {http://ema.europa.eu/example/marketingAuthorisationProcedureType code 'VariationTypeIA' = 'VariationTypeIA)</span></p><p><b>date</b>: 02/08/2015 --&gt; 21/08/2015</p><h3>Applications</h3><table><tr><td>-</td></tr><tr><td>*</td></tr></table></blockquote></div>",
    },
    identifier: [
      {
        system: "http://ema.europa.eu/example/marketingAuthorisationNumber",
        value: "EU/1/11/999/001",
      },
    ],
    country: [
      {
        coding: [
          {
            system: "http://ema.europa.eu/example/country",
            code: "EU",
          },
        ],
      },
    ],
    status: {
      coding: [
        {
          system: "http://ema.europa.eu/example/authorisationstatus",
          code: "active",
        },
      ],
    },
    statusDate: "2015-01-14",
    validityPeriod: {
      start: "2015-08-16",
      end: "2020-05-20",
    },
    dataExclusivityPeriod: {
      start: "2010-08-15",
      end: "2020-08-15",
    },
    dateOfFirstAuthorization: "2010-08-15",
    internationalBirthDate: "2010-08-15",
    jurisdictionalAuthorization: [
      {
        id: "1",
        identifier: [
          {
            system: "http://ema.europa.eu/example/marketingauthorisationnumber",
            value: "123-456-789",
          },
        ],
        country: {
          coding: [
            {
              system: "http://ema.europa.eu/example/countryCode",
              code: "NO",
            },
          ],
        },
      },
      {
        id: "2",
        identifier: [
          {
            system: "http://ema.europa.eu/example/marketingauthorisationnumber",
            value: "123-456-123",
          },
        ],
        country: {
          coding: [
            {
              system: "http://ema.europa.eu/example/countryCode",
              code: "NO",
            },
          ],
        },
      },
    ],
    holder: {
      reference: "Organization/example",
    },
    regulator: {
      reference: "Organization/example",
    },
    procedure: {
      identifier: {
        system: "http://ema.europa.eu/example/procedureidentifier-number",
        value: "EMEA/H/C/009999/IA/0099/G",
      },
      type: {
        coding: [
          {
            system:
              "http://ema.europa.eu/example/marketingAuthorisationProcedureType",
            code: "VariationTypeIA",
          },
        ],
      },
      datePeriod: {
        start: "2015-08-02",
        end: "2015-08-21",
      },
      application: [
        {
          identifier: {
            system: "http://ema.europa.eu/example/applicationidentifier-number",
            value: "IA38G",
          },
          type: {
            coding: [
              {
                system:
                  "http://ema.europa.eu/example/marketingAuthorisationApplicationType",
                code: "GroupTypeIAVariationNotification",
              },
            ],
          },
          dateDateTime: "2015-08-01",
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
