import type { Practitioner } from "../../src/v4.0.1/practitioner/types";

export const PractitionerExampleF001Evdb: Practitioner = {
  resourceType: "Practitioner",
  id: "f001",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f001</p><p><b>identifier</b>: 938273695 (OFFICIAL), 129IDH4OP733 (USUAL)</p><p><b>name</b>: Eric van den broek (OFFICIAL)</p><p><b>telecom</b>: ph: 0205568263(WORK), E.M.vandenbroek@bmc.nl(WORK), fax: 0205664440(WORK)</p><p><b>address</b>: Galapagosweg 91 Den Burg 9105 PZ NLD (WORK)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 07/12/1975</p></div>',
  },
  identifier: [
    {
      use: "official",
      system: "urn:oid:2.16.528.1.1007.3.1",
      value: "938273695",
    },
    {
      use: "usual",
      system: "urn:oid:2.16.840.1.113883.2.4.6.3",
      value: "129IDH4OP733",
    },
  ],
  name: [
    {
      use: "official",
      family: "van den broek",
      given: ["Eric"],
      suffix: ["MD"],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "0205568263",
      use: "work",
    },
    {
      system: "email",
      value: "E.M.vandenbroek@bmc.nl",
      use: "work",
    },
    {
      system: "fax",
      value: "0205664440",
      use: "work",
    },
  ],
  address: [
    {
      use: "work",
      line: ["Galapagosweg 91"],
      city: "Den Burg",
      postalCode: "9105 PZ",
      country: "NLD",
    },
  ],
  gender: "male",
  birthDate: "1975-12-07",
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

export const PractitionerExampleF002Pv: Practitioner = {
  resourceType: "Practitioner",
  id: "f002",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f002</p><p><b>identifier</b>: 730291637 (OFFICIAL), 174BIP3JH438 (USUAL)</p><p><b>name</b>: Pieter Voigt (OFFICIAL)</p><p><b>telecom</b>: ph: 0205569336(WORK), p.voigt@bmc.nl(WORK), fax: 0205669382(WORK)</p><p><b>address</b>: Galapagosweg 91 Den Burg 9105 PZ NLD (WORK)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 29/04/1979</p></div>',
  },
  identifier: [
    {
      use: "official",
      system: "urn:oid:2.16.528.1.1007.3.1",
      value: "730291637",
    },
    {
      use: "usual",
      system: "urn:oid:2.16.840.1.113883.2.4.6.3",
      value: "174BIP3JH438",
    },
  ],
  name: [
    {
      use: "official",
      family: "Voigt",
      given: ["Pieter"],
      suffix: ["MD"],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "0205569336",
      use: "work",
    },
    {
      system: "email",
      value: "p.voigt@bmc.nl",
      use: "work",
    },
    {
      system: "fax",
      value: "0205669382",
      use: "work",
    },
  ],
  address: [
    {
      use: "work",
      line: ["Galapagosweg 91"],
      city: "Den Burg",
      postalCode: "9105 PZ",
      country: "NLD",
    },
  ],
  gender: "male",
  birthDate: "1979-04-29",
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

export const PractitionerExampleF003Mv: Practitioner = {
  resourceType: "Practitioner",
  id: "f003",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f003</p><p><b>identifier</b>: 846100293 (OFFICIAL), 243HID3RT938 (USUAL)</p><p><b>name</b>: Marc Versteegh (OFFICIAL)</p><p><b>telecom</b>: ph: 0205562431(WORK), m.versteegh@bmc.nl(WORK), fax: 0205662948(WORK)</p><p><b>address</b>: Galapagosweg 91 Amsterdam 1105 AZ NLD (WORK)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 01/07/1963</p><p><b>communication</b>: Dutch <span>(Details : {urn:ietf:bcp:47 code 'nl' = 'Dutch', given as 'Dutch'})</span></p></div>",
  },
  identifier: [
    {
      use: "official",
      system: "urn:oid:2.16.528.1.1007.3.1",
      value: "846100293",
    },
    {
      use: "usual",
      system: "urn:oid:2.16.840.1.113883.2.4.6.3",
      value: "243HID3RT938",
    },
  ],
  name: [
    {
      use: "official",
      family: "Versteegh",
      given: ["Marc"],
      suffix: ["MD"],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "0205562431",
      use: "work",
    },
    {
      system: "email",
      value: "m.versteegh@bmc.nl",
      use: "work",
    },
    {
      system: "fax",
      value: "0205662948",
      use: "work",
    },
  ],
  address: [
    {
      use: "work",
      line: ["Galapagosweg 91"],
      city: "Amsterdam",
      postalCode: "1105 AZ",
      country: "NLD",
    },
  ],
  gender: "male",
  birthDate: "1963-07-01",
  communication: [
    {
      coding: [
        {
          system: "urn:ietf:bcp:47",
          code: "nl",
          display: "Dutch",
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

export const PractitionerExampleF004Rb: Practitioner = {
  resourceType: "Practitioner",
  id: "f004",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f004</p><p><b>identifier</b>: 118265112 (OFFICIAL), 523ASA1LK927 (USUAL)</p><p><b>name</b>: Ronald Briet (OFFICIAL)</p><p><b>telecom</b>: ph: 0205569273(WORK), r.briet@bmc.nl(WORK), fax: 0205664440(WORK)</p><p><b>address</b>: Galapagosweg 91 Amsterdam 1105 AZ NLD (WORK)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 04/02/1980</p><p><b>communication</b>: Language <span>(Details : {urn:ietf:bcp:47 code 'nl' = 'Dutch', given as 'Netherlands'})</span></p></div>",
  },
  identifier: [
    {
      use: "official",
      system: "urn:oid:2.16.528.1.1007.3.1",
      value: "118265112",
    },
    {
      use: "usual",
      system: "urn:oid:2.16.840.1.113883.2.4.6.3",
      value: "523ASA1LK927",
    },
  ],
  name: [
    {
      use: "official",
      family: "Briet",
      given: ["Ronald"],
      suffix: ["MD"],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "0205569273",
      use: "work",
    },
    {
      system: "email",
      value: "r.briet@bmc.nl",
      use: "work",
    },
    {
      system: "fax",
      value: "0205664440",
      use: "work",
    },
  ],
  address: [
    {
      use: "work",
      line: ["Galapagosweg 91"],
      city: "Amsterdam",
      postalCode: "1105 AZ",
      country: "NLD",
    },
  ],
  gender: "male",
  birthDate: "1980-02-04",
  communication: [
    {
      coding: [
        {
          system: "urn:ietf:bcp:47",
          code: "nl",
          display: "Netherlands",
        },
      ],
      text: "Language",
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

export const PractitionerExampleF005Al: Practitioner = {
  resourceType: "Practitioner",
  id: "f005",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f005</p><p><b>identifier</b>: 118265112 (OFFICIAL), 191REW8WE916 (USUAL)</p><p><b>name</b>: Langeveld Anne (OFFICIAL)</p><p><b>telecom</b>: ph: 0205563847(WORK), a.langeveld@bmc.nl(WORK), fax: 0205668916(WORK)</p><p><b>address</b>: Galapagosweg 9 Amsterdam 1105 AZ NLD (WORK)</p><p><b>gender</b>: female</p><p><b>birthDate</b>: 11/03/1959</p><p><b>photo</b>: </p><p><b>communication</b>: France <span>(Details : {urn:ietf:bcp:47 code 'fr' = 'French', given as 'France'})</span></p></div>",
  },
  identifier: [
    {
      use: "official",
      system: "urn:oid:2.16.528.1.1007.3.1",
      value: "118265112",
    },
    {
      use: "usual",
      system: "urn:oid:2.16.840.1.113883.2.4.6.3",
      value: "191REW8WE916",
    },
  ],
  name: [
    {
      use: "official",
      family: "Anne",
      given: ["Langeveld"],
      suffix: ["MD"],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "0205563847",
      use: "work",
    },
    {
      system: "email",
      value: "a.langeveld@bmc.nl",
      use: "work",
    },
    {
      system: "fax",
      value: "0205668916",
      use: "work",
    },
  ],
  address: [
    {
      use: "work",
      line: ["Galapagosweg 9"],
      city: "Amsterdam",
      postalCode: "1105 AZ",
      country: "NLD",
    },
  ],
  gender: "female",
  birthDate: "1959-03-11",
  photo: [
    {
      contentType: "image/jpeg",
      data: "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",
    },
  ],
  communication: [
    {
      coding: [
        {
          system: "urn:ietf:bcp:47",
          code: "fr",
          display: "France",
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

export const PractitionerExampleF006Rvdb: Practitioner = {
  resourceType: "Practitioner",
  id: "f006",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f006</p><p><b>identifier</b>: 937223645 (OFFICIAL), 134IDY41W988 (USUAL)</p><p><b>name</b>: Rob van den Berk (OFFICIAL)</p><p><b>telecom</b>: ph: 0205569288(WORK), R.A.vandenberk@bmc.nl(WORK), fax: 0205664987(WORK)</p><p><b>address</b>: Galapagosweg 91 Den Burg 9105 PZ NLD (WORK)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 07/12/1975</p></div>',
  },
  identifier: [
    {
      use: "official",
      system: "urn:oid:2.16.528.1.1007.3.1",
      value: "937223645",
    },
    {
      use: "usual",
      system: "urn:oid:2.16.840.1.113883.2.4.6.3",
      value: "134IDY41W988",
    },
  ],
  name: [
    {
      use: "official",
      family: "van den Berk",
      given: ["Rob"],
      suffix: ["MD"],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "0205569288",
      use: "work",
    },
    {
      system: "email",
      value: "R.A.vandenberk@bmc.nl",
      use: "work",
    },
    {
      system: "fax",
      value: "0205664987",
      use: "work",
    },
  ],
  address: [
    {
      use: "work",
      line: ["Galapagosweg 91"],
      city: "Den Burg",
      postalCode: "9105 PZ",
      country: "NLD",
    },
  ],
  gender: "male",
  birthDate: "1975-12-07",
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

export const PractitionerExampleF007Sh: Practitioner = {
  resourceType: "Practitioner",
  id: "f007",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f007</p><p><b>identifier</b>: 874635264 (OFFICIAL), 567IUI51C154 (USUAL)</p><p><b>name</b>: Simone Heps (OFFICIAL)</p><p><b>telecom</b>: ph: 020556936(WORK), S.M.Heps@bmc.nl(WORK), fax: 0205669283(WORK)</p><p><b>address</b>: Galapagosweg 91 Den Burg 9105 PZ NLD (WORK)</p><p><b>gender</b>: female</p><p><b>birthDate</b>: 07/11/1971</p></div>',
  },
  identifier: [
    {
      use: "official",
      system: "urn:oid:2.16.528.1.1007.3.1",
      value: "874635264",
    },
    {
      use: "usual",
      system: "urn:oid:2.16.840.1.113883.2.4.6.3",
      value: "567IUI51C154",
    },
  ],
  name: [
    {
      use: "official",
      family: "Heps",
      given: ["Simone"],
      suffix: ["MD"],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "020556936",
      use: "work",
    },
    {
      system: "email",
      value: "S.M.Heps@bmc.nl",
      use: "work",
    },
    {
      system: "fax",
      value: "0205669283",
      use: "work",
    },
  ],
  address: [
    {
      use: "work",
      line: ["Galapagosweg 91"],
      city: "Den Burg",
      postalCode: "9105 PZ",
      country: "NLD",
    },
  ],
  gender: "female",
  birthDate: "1971-11-07",
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

export const PractitionerExampleF201Ab: Practitioner = {
  resourceType: "Practitioner",
  id: "f201",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f201</p><p><b>identifier</b>: UZI-nummer = 12345678901 (OFFICIAL)</p><p><b>active</b>: true</p><p><b>name</b>: Dokter Bronsig(OFFICIAL)</p><p><b>telecom</b>: ph: +31715269111(WORK)</p><p><b>address</b>: Walvisbaai 3 C4 - Automatisering Den helder 2333ZA NLD (WORK)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 24/12/1956</p><h3>Qualifications</h3><table><tr><td>-</td><td><b>Code</b></td></tr><tr><td>*</td><td>Pulmonologist <span>(Details : {SNOMED CT code '41672002' = 'Respiratory disease specialist', given as 'Pulmonologist'})</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
      type: {
        text: "UZI-nummer",
      },
      system: "urn:oid:2.16.528.1.1007.3.1",
      value: "12345678901",
    },
  ],
  active: true,
  name: [
    {
      use: "official",
      text: "Dokter Bronsig",
      family: "Bronsig",
      given: ["Arend"],
      prefix: ["Dr."],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "+31715269111",
      use: "work",
    },
  ],
  address: [
    {
      use: "work",
      line: ["Walvisbaai 3", "C4 - Automatisering"],
      city: "Den helder",
      postalCode: "2333ZA",
      country: "NLD",
    },
  ],
  gender: "male",
  birthDate: "1956-12-24",
  qualification: [
    {
      code: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "41672002",
            display: "Pulmonologist",
          },
        ],
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

export const PractitionerExampleF202Lm: Practitioner = {
  resourceType: "Practitioner",
  id: "f202",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f202</p><p><b>identifier</b>: UZI-nummer = 12345678902 (OFFICIAL), BIG-nummer = 12345678902 (OFFICIAL)</p><p><b>active</b>: true</p><p><b>name</b>: Luigi Maas(OFFICIAL)</p><p><b>telecom</b>: ph: +31715269111(WORK)</p><p><b>address</b>: Walvisbaai 3 C4 - Automatisering Den helder 2333ZA NLD (WORK)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 12/06/1960</p></div>',
  },
  identifier: [
    {
      use: "official",
      type: {
        text: "UZI-nummer",
      },
      system: "urn:oid:2.16.528.1.1007.3.1",
      value: "12345678902",
    },
    {
      use: "official",
      type: {
        text: "BIG-nummer",
      },
      system: "https://www.bigregister.nl/",
      value: "12345678902",
    },
  ],
  active: true,
  name: [
    {
      use: "official",
      text: "Luigi Maas",
      family: "Maas",
      given: ["Luigi"],
      prefix: ["Dr."],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "+31715269111",
      use: "work",
    },
  ],
  address: [
    {
      use: "work",
      line: ["Walvisbaai 3", "C4 - Automatisering"],
      city: "Den helder",
      postalCode: "2333ZA",
      country: "NLD",
    },
  ],
  gender: "male",
  birthDate: "1960-06-12",
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

export const PractitionerExampleF203Jvg: Practitioner = {
  resourceType: "Practitioner",
  id: "f203",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f203</p><p><b>identifier</b>: UZI-nummer = 12345678903 (OFFICIAL), BIG-nummer = 12345678903 (OFFICIAL)</p><p><b>active</b>: true</p><p><b>name</b>: Juri van Gelder(OFFICIAL)</p><p><b>telecom</b>: ph: +31715269111(WORK)</p><p><b>address</b>: Walvisbaai 3 Den helder 2333ZA NLD (WORK)</p><p><b>gender</b>: male</p><p><b>birthDate</b>: 20/04/1983</p></div>',
  },
  identifier: [
    {
      use: "official",
      type: {
        text: "UZI-nummer",
      },
      system: "urn:oid:2.16.528.1.1007.3.1",
      value: "12345678903",
    },
    {
      use: "official",
      type: {
        text: "BIG-nummer",
      },
      system: "https://www.bigregister.nl/",
      value: "12345678903",
    },
  ],
  active: true,
  name: [
    {
      use: "official",
      text: "Juri van Gelder",
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "+31715269111",
      use: "work",
    },
  ],
  address: [
    {
      use: "work",
      line: ["Walvisbaai 3"],
      city: "Den helder",
      postalCode: "2333ZA",
      country: "NLD",
    },
  ],
  gender: "male",
  birthDate: "1983-04-20",
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

export const PractitionerExampleF204Ce: Practitioner = {
  resourceType: "Practitioner",
  id: "f204",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f204</p><p><b>identifier</b>: UZI-nummer = 12345678904 (OFFICIAL)</p><p><b>name</b>: Carla Espinosa</p><p><b>telecom</b>: ph: +31715262169(WORK)</p><p><b>address</b>: Walvisbaai 3 Den helder 2333ZA NLD (WORK)</p><p><b>gender</b>: female</p><p><b>birthDate</b>: 05/11/1967</p></div>',
  },
  identifier: [
    {
      use: "official",
      type: {
        text: "UZI-nummer",
      },
      system: "urn:oid:2.16.528.1.1007.3.1",
      value: "12345678904",
    },
  ],
  name: [
    {
      use: "usual",
      text: "Carla Espinosa",
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "+31715262169",
      use: "work",
    },
  ],
  address: [
    {
      use: "work",
      line: ["Walvisbaai 3"],
      city: "Den helder",
      postalCode: "2333ZA",
      country: "NLD",
    },
  ],
  gender: "female",
  birthDate: "1967-11-05",
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

export const PractitionerExampleXcdaAuthor: Practitioner = {
  resourceType: "Practitioner",
  id: "xcda-author",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Harold Hippocrates, MD</p>\n    </div>',
  },
  name: [
    {
      family: "Hippocrates",
      given: ["Harold"],
      suffix: ["MD"],
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

export const PractitionerExampleXcda1: Practitioner = {
  resourceType: "Practitioner",
  id: "xcda1",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: xcda1</p><p><b>identifier</b>: D234123 (OFFICIAL)</p><p><b>name</b>: Sherry Dopplemeyer </p><p><b>telecom</b>: john.doe@healthcare.example.org</p></div>',
  },
  identifier: [
    {
      use: "official",
      system: "http://healthcare.example.org/identifiers/staff",
      value: "D234123",
    },
  ],
  name: [
    {
      family: "Dopplemeyer",
      given: ["Sherry"],
    },
  ],
  telecom: [
    {
      system: "email",
      value: "john.doe@healthcare.example.org",
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

export const PractitionerExample: Practitioner = {
  resourceType: "Practitioner",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p>Dr Adam Careful is a Referring Practitioner for Acme Hospital from 1-Jan 2012 to 31-Mar\n        2012</p>\n    </div>',
  },
  identifier: [
    {
      system: "http://www.acme.org/practitioners",
      value: "23",
    },
  ],
  active: true,
  name: [
    {
      family: "Careful",
      given: ["Adam"],
      prefix: ["Dr"],
    },
  ],
  address: [
    {
      use: "home",
      line: ["534 Erewhon St"],
      city: "PleasantVille",
      state: "Vic",
      postalCode: "3999",
    },
  ],
  qualification: [
    {
      identifier: [
        {
          system: "http://example.org/UniversityIdentifier",
          value: "12345",
        },
      ],
      code: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0360/2.7",
            code: "BS",
            display: "Bachelor of Science",
          },
        ],
        text: "Bachelor of Science",
      },
      period: {
        start: "1995",
      },
      issuer: {
        display: "Example University",
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
