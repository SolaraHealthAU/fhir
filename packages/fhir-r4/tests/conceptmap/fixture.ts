import type { ConceptMap } from "../../src/v4.0.1/conceptmap/types";

export const CmAddressTypeV3: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cm-address-type-v3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>v3.AddressType (http://hl7.org/fhir/ConceptMap/cm-address-type-v3)</h2><p>Mapping from <a href="valueset-address-type.html">http://hl7.org/fhir/ValueSet/address-type</a> to <a href="v3/AddressUse/vs.html">http://terminology.hl7.org/ValueSet/v3-AddressUse</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>postal</td><td>equal</td><td>PST (postal address)</td></tr><tr><td>physical</td><td>equal</td><td>PHYS (physical visit address)</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/cm-address-type-v3",
  version: "4.0.1",
  name: "v3.AddressType",
  title: "v3 map for AddressType",
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  sourceCanonical: "http://hl7.org/fhir/ValueSet/address-type",
  targetCanonical: "http://terminology.hl7.org/ValueSet/v3-AddressUse",
  group: [
    {
      source: "http://hl7.org/fhir/address-type",
      target: "http://terminology.hl7.org/CodeSystem/v3-AddressUse",
      element: [
        {
          code: "postal",
          target: [
            {
              code: "PST",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "physical",
          target: [
            {
              code: "PHYS",
              equivalence: "equal",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const CmAddressUseV2: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cm-address-use-v2",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>v2.AddressUse (http://hl7.org/fhir/ConceptMap/cm-address-use-v2)</h2><p>Mapping from <a href="valueset-address-use.html">http://hl7.org/fhir/ValueSet/address-use</a> to <a href="v2/0190/index.html">http://terminology.hl7.org/ValueSet/v2-0190</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td><td><b>Comment</b></td></tr><tr><td>home</td><td>equivalent</td><td>H (Home)</td><td/></tr><tr><td>work</td><td>equivalent</td><td>O (Office/Business)</td><td/></tr><tr><td>temp (Temporary)</td><td>equivalent</td><td>C (Current Or Temporary)</td><td/></tr><tr><td>old (Old / Incorrect)</td><td>wider</td><td>BA (Bad address)</td><td>unclear about old addresses</td></tr><tr><td>billing</td><td>equivalent</td><td>BI (Billing Address)</td><td/></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/cm-address-use-v2",
  version: "4.0.1",
  name: "v2.AddressUse",
  title: "v2 map for AddressUse",
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  sourceCanonical: "http://hl7.org/fhir/ValueSet/address-use",
  targetCanonical: "http://terminology.hl7.org/ValueSet/v2-0190",
  group: [
    {
      source: "http://hl7.org/fhir/address-use",
      target: "http://terminology.hl7.org/CodeSystem/v2-0190",
      element: [
        {
          code: "home",
          target: [
            {
              code: "H",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "work",
          target: [
            {
              code: "O",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "temp",
          target: [
            {
              code: "C",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "old",
          target: [
            {
              code: "BA",
              equivalence: "wider",
              comment: "unclear about old addresses",
            },
          ],
        },
        {
          code: "billing",
          target: [
            {
              code: "BI",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const CmAddressUseV3: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cm-address-use-v3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>v3.AddressUse (http://hl7.org/fhir/ConceptMap/cm-address-use-v3)</h2><p>Mapping from <a href="valueset-address-use.html">http://hl7.org/fhir/ValueSet/address-use</a> to <a href="v3/AddressUse/vs.html">http://terminology.hl7.org/ValueSet/v3-AddressUse</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><br/><table class="grid"><tr><td colspan="1"><b>Source Concept Details</b></td><td><b>Equivalence</b></td><td colspan="1"><b>Destination Concept Details</b></td><td><b>Comment</b></td></tr><tr><td><b>Code</b> from <a href="codesystem-address-use.html" title="http://hl7.org/fhir/address-use">AddressUse</a></td><td/><td><b>Code</b> from <a href="v3/AddressUse/cs.html" title="http://terminology.hl7.org/CodeSystem/v3-AddressUse">v3 Code System AddressUse</a></td><td/></tr><tr><td>home (Home)</td><td><a href="codesystem-concept-map-equivalence.html#equal">equal</a></td><td>H (home address)</td><td/></tr><tr><td>work (Work)</td><td><a href="codesystem-concept-map-equivalence.html#equal">equal</a></td><td>WP (work place)</td><td/></tr><tr><td>temp (Temporary)</td><td><a href="codesystem-concept-map-equivalence.html#equal">equal</a></td><td>TMP (temporary address)</td><td/></tr><tr><td style="border-bottom-style: none">old (Old / Incorrect)</td><td><a href="codesystem-concept-map-equivalence.html#narrower">narrower</a></td><td>OLD (no longer in use)</td><td>Bad or Old</td></tr><tr><td style="border-top-style: none"/><td><a href="codesystem-concept-map-equivalence.html#narrower">narrower</a></td><td>BAD (bad address)</td><td>Bad or Old</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/cm-address-use-v3",
  version: "4.0.1",
  name: "v3.AddressUse",
  title: "v3 map for AddressUse",
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  sourceCanonical: "http://hl7.org/fhir/ValueSet/address-use",
  targetCanonical: "http://terminology.hl7.org/ValueSet/v3-AddressUse",
  group: [
    {
      source: "http://hl7.org/fhir/address-use",
      target: "http://terminology.hl7.org/CodeSystem/v3-AddressUse",
      element: [
        {
          code: "home",
          target: [
            {
              code: "H",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "work",
          target: [
            {
              code: "WP",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "temp",
          target: [
            {
              code: "TMP",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "old",
          target: [
            {
              code: "OLD",
              equivalence: "narrower",
              comment: "Bad or Old",
            },
            {
              code: "BAD",
              equivalence: "narrower",
              comment: "Bad or Old",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const CmAdministrativeGenderV2: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cm-administrative-gender-v2",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>v2.AdministrativeGender (http://hl7.org/fhir/ConceptMap/cm-administrative-gender-v2)</h2><p>Mapping from <a href="valueset-administrative-gender.html">http://hl7.org/fhir/ValueSet/administrative-gender</a> to <a href="v2/0001/index.html">http://terminology.hl7.org/ValueSet/v2-0001</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project). </p><br/><table class="grid"><tr><td colspan="1"><b>Source Concept Details</b></td><td><b>Equivalence</b></td><td colspan="1"><b>Destination Concept Details</b></td></tr><tr><td><b>Code</b> from <a href="codesystem-administrative-gender.html" title="http://hl7.org/fhir/administrative-gender">AdministrativeGender</a></td><td/><td><b>Code</b> from <a href="v2/0001/index.html" title="http://terminology.hl7.org/CodeSystem/v2-0001">v2 SEX</a></td></tr><tr><td>male (Male)</td><td><a href="codesystem-concept-map-equivalence.html#equal">equal</a></td><td>M (Male)</td></tr><tr><td>female (Female)</td><td><a href="codesystem-concept-map-equivalence.html#equal">equal</a></td><td>F (Female)</td></tr><tr><td style="border-bottom-style: none">other (Other)</td><td><a href="codesystem-concept-map-equivalence.html#wider">wider</a></td><td>A (Ambiguous)</td></tr><tr><td style="border-top-style: none"/><td><a href="codesystem-concept-map-equivalence.html#wider">wider</a></td><td>O (Other)</td></tr><tr><td>unknown (Unknown)</td><td><a href="codesystem-concept-map-equivalence.html#equal">equal</a></td><td>U (Unknown)</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/cm-administrative-gender-v2",
  version: "4.0.1",
  name: "v2.AdministrativeGender",
  title: "v2 map for AdministrativeGender",
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  sourceCanonical: "http://hl7.org/fhir/ValueSet/administrative-gender",
  targetCanonical: "http://terminology.hl7.org/ValueSet/v2-0001",
  group: [
    {
      source: "http://hl7.org/fhir/administrative-gender",
      target: "http://terminology.hl7.org/CodeSystem/v2-0001",
      element: [
        {
          code: "male",
          target: [
            {
              code: "M",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "female",
          target: [
            {
              code: "F",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "other",
          target: [
            {
              code: "A",
              equivalence: "wider",
            },
            {
              code: "O",
              equivalence: "wider",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "U",
              equivalence: "equal",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const CmAdministrativeGenderV3: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cm-administrative-gender-v3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>v3.AdministrativeGender (http://hl7.org/fhir/ConceptMap/cm-administrative-gender-v3)</h2><p>Mapping from <a href="valueset-administrative-gender.html">http://hl7.org/fhir/ValueSet/administrative-gender</a> to <a href="v3/AdministrativeGender/vs.html">http://terminology.hl7.org/ValueSet/v3-AdministrativeGender</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project). </p><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>male</td><td>equal</td><td>M (Male)</td></tr><tr><td>female</td><td>equal</td><td>F (Female)</td></tr><tr><td>other</td><td>wider</td><td>UN (Undifferentiated)</td></tr><tr><td>unknown</td><td>equal</td><td>UNK</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/cm-administrative-gender-v3",
  version: "4.0.1",
  name: "v3.AdministrativeGender",
  title: "v3 map for AdministrativeGender",
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  sourceCanonical: "http://hl7.org/fhir/ValueSet/administrative-gender",
  targetCanonical:
    "http://terminology.hl7.org/ValueSet/v3-AdministrativeGender",
  group: [
    {
      source: "http://hl7.org/fhir/administrative-gender",
      target: "http://terminology.hl7.org/CodeSystem/v3-AdministrativeGender",
      element: [
        {
          code: "male",
          target: [
            {
              code: "M",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "female",
          target: [
            {
              code: "F",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "other",
          target: [
            {
              code: "UN",
              equivalence: "wider",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "UNK",
              equivalence: "equal",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const CmCompositionStatusV3: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cm-composition-status-v3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>v3.CompositionStatus (http://hl7.org/fhir/ConceptMap/cm-composition-status-v3)</h2><p>Mapping from <a href="valueset-composition-status.html">http://hl7.org/fhir/ValueSet/composition-status</a> to <a href="v3/ActStatus/vs.html">http://terminology.hl7.org/ValueSet/v3-ActStatus</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>preliminary</td><td>equivalent</td><td>active</td></tr><tr><td>final</td><td>wider</td><td>completed</td></tr><tr><td>amended</td><td>wider</td><td>completed</td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>nullified</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/cm-composition-status-v3",
  version: "4.0.1",
  name: "v3.CompositionStatus",
  title: "v3 map for CompositionStatus",
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  sourceCanonical: "http://hl7.org/fhir/ValueSet/composition-status",
  targetCanonical: "http://terminology.hl7.org/ValueSet/v3-ActStatus",
  group: [
    {
      source: "http://hl7.org/fhir/composition-status",
      target: "http://terminology.hl7.org/CodeSystem/v3-ActStatus",
      element: [
        {
          code: "preliminary",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "final",
          target: [
            {
              code: "completed",
              equivalence: "wider",
            },
          ],
        },
        {
          code: "amended",
          target: [
            {
              code: "completed",
              equivalence: "wider",
            },
          ],
        },
        {
          code: "entered-in-error",
          target: [
            {
              code: "nullified",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const CmContactPointSystemV2: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cm-contact-point-system-v2",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>v2.ContactPointSystem (http://hl7.org/fhir/ConceptMap/cm-contact-point-system-v2)</h2><p>Mapping from <a href="valueset-contact-point-system.html">http://hl7.org/fhir/ValueSet/contact-point-system</a> to <a href="v2/0202/index.html">http://terminology.hl7.org/ValueSet/v2-0202</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td><td><b>Comment</b></td></tr><tr><td>phone</td><td>equivalent</td><td>PH (Telephone)</td><td/></tr><tr><td>fax</td><td>equivalent</td><td>FX (Fax)</td><td/></tr><tr><td>email</td><td>narrower</td><td>Internet (Internet Address)</td><td>for email addresses</td></tr><tr><td>pager</td><td>equivalent</td><td>BP (Beeper)</td><td/></tr><tr><td>url</td><td>narrower</td><td>Internet (Internet Address)</td><td>for non-email kinds of addresses</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/cm-contact-point-system-v2",
  version: "4.0.1",
  name: "v2.ContactPointSystem",
  title: "v2 map for ContactPointSystem",
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  sourceCanonical: "http://hl7.org/fhir/ValueSet/contact-point-system",
  targetCanonical: "http://terminology.hl7.org/ValueSet/v2-0202",
  group: [
    {
      source: "http://hl7.org/fhir/contact-point-system",
      target: "http://terminology.hl7.org/CodeSystem/v2-0202",
      element: [
        {
          code: "phone",
          target: [
            {
              code: "PH",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "fax",
          target: [
            {
              code: "FX",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "email",
          target: [
            {
              code: "Internet",
              equivalence: "narrower",
              comment: "for email addresses",
            },
          ],
        },
        {
          code: "pager",
          target: [
            {
              code: "BP",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "url",
          target: [
            {
              code: "Internet",
              equivalence: "narrower",
              comment: "for non-email kinds of addresses",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const CmContactPointUseV2: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cm-contact-point-use-v2",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>v2.ContactPointUse (http://hl7.org/fhir/ConceptMap/cm-contact-point-use-v2)</h2><p>Mapping from <a href="valueset-contact-point-use.html">http://hl7.org/fhir/ValueSet/contact-point-use</a> to <a href="v2/0201/index.html">http://terminology.hl7.org/ValueSet/v2-0201</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><br/><table class="grid"><tr><td colspan="1"><b>Source Concept Details</b></td><td><b>Equivalence</b></td><td colspan="1"><b>Destination Concept Details</b></td></tr><tr><td><b>Code</b> from <a href="codesystem-contact-point-use.html" title="http://hl7.org/fhir/contact-point-use">ContactPointUse</a></td><td/><td><b>Code</b> from <a href="v2/0201/index.html" title="http://terminology.hl7.org/CodeSystem/v2-0201">v2 Telecommunication Use Code</a></td></tr><tr><td style="border-bottom-style: none">home (Home)</td><td><a href="codesystem-concept-map-equivalence.html#wider">wider</a></td><td>PRN (Primary Residence Number)</td></tr><tr><td style="border-top-style: none; border-bottom-style: none"/><td><a href="codesystem-concept-map-equivalence.html#wider">wider</a></td><td>ORN (Other Residence Number)</td></tr><tr><td style="border-top-style: none"/><td><a href="codesystem-concept-map-equivalence.html#wider">wider</a></td><td>VHN (Vacation Home Number)</td></tr><tr><td>work (Work)</td><td><a href="codesystem-concept-map-equivalence.html#equivalent">equivalent</a></td><td>WPN (Work Number)</td></tr><tr><td>mobile (Mobile)</td><td><a href="codesystem-concept-map-equivalence.html#equivalent">equivalent</a></td><td>PRS (Personal)</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/cm-contact-point-use-v2",
  version: "4.0.1",
  name: "v2.ContactPointUse",
  title: "v2 map for ContactPointUse",
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  sourceCanonical: "http://hl7.org/fhir/ValueSet/contact-point-use",
  targetCanonical: "http://terminology.hl7.org/ValueSet/v2-0201",
  group: [
    {
      source: "http://hl7.org/fhir/contact-point-use",
      target: "http://terminology.hl7.org/CodeSystem/v2-0201",
      element: [
        {
          code: "home",
          target: [
            {
              code: "PRN",
              equivalence: "wider",
            },
            {
              code: "ORN",
              equivalence: "wider",
            },
            {
              code: "VHN",
              equivalence: "wider",
            },
          ],
        },
        {
          code: "work",
          target: [
            {
              code: "WPN",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "mobile",
          target: [
            {
              code: "PRS",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const CmContactPointUseV3: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cm-contact-point-use-v3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>v3.ContactPointUse (http://hl7.org/fhir/ConceptMap/cm-contact-point-use-v3)</h2><p>Mapping from <a href="valueset-contact-point-use.html">http://hl7.org/fhir/ValueSet/contact-point-use</a> to <a href="v3/AddressUse/vs.html">http://terminology.hl7.org/ValueSet/v3-AddressUse</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><br/><table class="grid"><tr><td colspan="1"><b>Source Concept Details</b></td><td><b>Equivalence</b></td><td colspan="1"><b>Destination Concept Details</b></td><td><b>Comment</b></td></tr><tr><td><b>Code</b> from <a href="codesystem-contact-point-use.html" title="http://hl7.org/fhir/contact-point-use">ContactPointUse</a></td><td/><td><b>Code</b> from <a href="v3/AddressUse/cs.html" title="http://terminology.hl7.org/CodeSystem/v3-AddressUse">v3 Code System AddressUse</a></td><td/></tr><tr><td>home (Home)</td><td><a href="codesystem-concept-map-equivalence.html#equal">equal</a></td><td>H (home address)</td><td/></tr><tr><td>work (Work)</td><td><a href="codesystem-concept-map-equivalence.html#equal">equal</a></td><td>WP (work place)</td><td/></tr><tr><td>temp (Temp)</td><td><a href="codesystem-concept-map-equivalence.html#equal">equal</a></td><td>TMP (temporary address)</td><td/></tr><tr><td style="border-bottom-style: none">old (Old)</td><td><a href="codesystem-concept-map-equivalence.html#narrower">narrower</a></td><td>OLD (no longer in use)</td><td>Old and Bad</td></tr><tr><td style="border-top-style: none"/><td><a href="codesystem-concept-map-equivalence.html#narrower">narrower</a></td><td>BAD (bad address)</td><td>Old and Bad</td></tr><tr><td>mobile (Mobile)</td><td><a href="codesystem-concept-map-equivalence.html#equal">equal</a></td><td>MC (mobile contact))</td><td/></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/cm-contact-point-use-v3",
  version: "4.0.1",
  name: "v3.ContactPointUse",
  title: "v3 map for ContactPointUse",
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  sourceCanonical: "http://hl7.org/fhir/ValueSet/contact-point-use",
  targetCanonical: "http://terminology.hl7.org/ValueSet/v3-AddressUse",
  group: [
    {
      source: "http://hl7.org/fhir/contact-point-use",
      target: "http://terminology.hl7.org/CodeSystem/v3-AddressUse",
      element: [
        {
          code: "home",
          target: [
            {
              code: "H",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "work",
          target: [
            {
              code: "WP",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "temp",
          target: [
            {
              code: "TMP",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "old",
          target: [
            {
              code: "OLD",
              equivalence: "narrower",
              comment: "Old and Bad",
            },
            {
              code: "BAD",
              equivalence: "narrower",
              comment: "Old and Bad",
            },
          ],
        },
        {
          code: "mobile",
          target: [
            {
              code: "MC",
              equivalence: "equal",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const CmDataAbsentReasonV3: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cm-data-absent-reason-v3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>v3.DataAbsentReason (http://hl7.org/fhir/ConceptMap/cm-data-absent-reason-v3)</h2><p>Mapping from <a href="valueset-data-absent-reason.html">http://hl7.org/fhir/ValueSet/data-absent-reason</a> to <a href="v3/NullFlavor/vs.html">http://terminology.hl7.org/ValueSet/v3-NullFlavor</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project). </p><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>unknown</td><td>equal</td><td>UNK (unknown)</td></tr><tr><td>asked-unknown (Asked But Unknown)</td><td>equal</td><td>ASKU (asked but unknown)</td></tr><tr><td>temp-unknown (Temporarily Unknown)</td><td>equal</td><td>NAV (temporarily unavailable)</td></tr><tr><td>not-asked</td><td>equal</td><td>NASK (not asked)</td></tr><tr><td>masked</td><td>equal</td><td>MSK (masked)</td></tr><tr><td>not-applicable</td><td>equal</td><td>NA (not applicable)</td></tr><tr><td>negative-infinity (Negative Infinity (NINF))</td><td>equal</td><td>NINF (negative infinity)</td></tr><tr><td>positive-infinity (Positive Infinity (PINF))</td><td>equal</td><td>PINF (positive infinity)</td></tr><tr><td>not-permitted</td><td>equal</td><td>OTH (other)</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/cm-data-absent-reason-v3",
  version: "4.0.1",
  name: "v3.DataAbsentReason",
  title: "v3 map for DataAbsentReason",
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  sourceCanonical: "http://hl7.org/fhir/ValueSet/data-absent-reason",
  targetCanonical: "http://terminology.hl7.org/ValueSet/v3-NullFlavor",
  group: [
    {
      source: "http://terminology.hl7.org/CodeSystem/data-absent-reason",
      target: "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
      element: [
        {
          code: "unknown",
          target: [
            {
              code: "UNK",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "asked-unknown",
          target: [
            {
              code: "ASKU",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "temp-unknown",
          target: [
            {
              code: "NAV",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "not-asked",
          target: [
            {
              code: "NASK",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "masked",
          target: [
            {
              code: "MSK",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "not-applicable",
          target: [
            {
              code: "NA",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "negative-infinity",
          target: [
            {
              code: "NINF",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "positive-infinity",
          target: [
            {
              code: "PINF",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "not-permitted",
          target: [
            {
              code: "OTH",
              equivalence: "equal",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const CmDetectedissueSeverityV3: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cm-detectedissue-severity-v3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>v3.DetectedIssueSeverity (http://hl7.org/fhir/ConceptMap/cm-detectedissue-severity-v3)</h2><p>Mapping from <a href="valueset-detectedissue-severity.html">http://hl7.org/fhir/ValueSet/detectedissue-severity</a> to <a href="v3/SeverityObservation/vs.html">http://terminology.hl7.org/ValueSet/v3-SeverityObservation</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>high</td><td>equal</td><td>H (High)</td></tr><tr><td>moderate</td><td>equal</td><td>M (Moderate)</td></tr><tr><td>low</td><td>equal</td><td>L (Low)</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/cm-detectedissue-severity-v3",
  version: "4.0.1",
  name: "v3.DetectedIssueSeverity",
  title: "v3 map for DetectedIssueSeverity",
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  sourceCanonical: "http://hl7.org/fhir/ValueSet/detectedissue-severity",
  targetCanonical: "http://terminology.hl7.org/ValueSet/v3-SeverityObservation",
  group: [
    {
      source: "http://hl7.org/fhir/detectedissue-severity",
      target: "http://terminology.hl7.org/CodeSystem/v3-ObservationValue",
      element: [
        {
          code: "high",
          target: [
            {
              code: "H",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "moderate",
          target: [
            {
              code: "M",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "low",
          target: [
            {
              code: "L",
              equivalence: "equal",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const CmDocumentReferenceStatusV3: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cm-document-reference-status-v3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>v3.DocumentReferenceStatus (http://hl7.org/fhir/ConceptMap/cm-document-reference-status-v3)</h2><p>Mapping from <a href="valueset-document-reference-status.html">http://hl7.org/fhir/ValueSet/document-reference-status</a> to <a href="v3/ActStatus/vs.html">http://terminology.hl7.org/ValueSet/v3-ActStatus</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project). </p><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>current</td><td>equivalent</td><td>active</td></tr><tr><td>superseded</td><td>equivalent</td><td>obsolete</td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>nullified</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/cm-document-reference-status-v3",
  version: "4.0.1",
  name: "v3.DocumentReferenceStatus",
  title: "v3 map for DocumentReferenceStatus",
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  sourceCanonical: "http://hl7.org/fhir/ValueSet/document-reference-status",
  targetCanonical: "http://terminology.hl7.org/ValueSet/v3-ActStatus",
  group: [
    {
      source: "http://hl7.org/fhir/document-reference-status",
      target: "http://terminology.hl7.org/CodeSystem/v3-ActStatus",
      element: [
        {
          code: "current",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "superseded",
          target: [
            {
              code: "obsolete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "entered-in-error",
          target: [
            {
              code: "nullified",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const CmNameUseV2: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cm-name-use-v2",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>v2.NameUse (http://hl7.org/fhir/ConceptMap/cm-name-use-v2)</h2><p>Mapping from <a href="valueset-name-use.html">http://hl7.org/fhir/ValueSet/name-use</a> to <a href="v2/0200/index.html">http://terminology.hl7.org/ValueSet/v2-0200</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><br/><table class="grid"><tr><td colspan="1"><b>Source Concept Details</b></td><td><b>Equivalence</b></td><td colspan="1"><b>Destination Concept Details</b></td></tr><tr><td><b>Code</b> from <a href="codesystem-name-use.html" title="http://hl7.org/fhir/name-use">NameUse</a></td><td/><td><b>Code</b> from <a href="v2/0200/index.html" title="http://terminology.hl7.org/CodeSystem/v2-0200">v2 Name Type</a></td></tr><tr><td>usual (Usual)</td><td><a href="codesystem-concept-map-equivalence.html#equivalent">equivalent</a></td><td>D (Customary Name)</td></tr><tr><td>official (Official)</td><td><a href="codesystem-concept-map-equivalence.html#equivalent">equivalent</a></td><td>L (Official Registry Name)</td></tr><tr><td>temp (Temp)</td><td><a href="codesystem-concept-map-equivalence.html#equivalent">equivalent</a></td><td>TEMP (Temporary Name)</td></tr><tr><td>nickname (Nickname)</td><td><a href="codesystem-concept-map-equivalence.html#equivalent">equivalent</a></td><td>N (Nickname)</td></tr><tr><td>anonymous (Anonymous)</td><td><a href="codesystem-concept-map-equivalence.html#equivalent">equivalent</a></td><td>S (Pseudonym)</td></tr><tr><td style="border-bottom-style: none">old (Old)</td><td><a href="codesystem-concept-map-equivalence.html#wider">wider</a></td><td>NOUSE (No Longer To Be Used)</td></tr><tr><td style="border-top-style: none"/><td><a href="codesystem-concept-map-equivalence.html#wider">wider</a></td><td>BAD (Bad Name)</td></tr><tr><td>maiden (Name changed for Marriage)</td><td><a href="codesystem-concept-map-equivalence.html#equivalent">equivalent</a></td><td>M (Maiden Name)</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/cm-name-use-v2",
  version: "4.0.1",
  name: "v2.NameUse",
  title: "v2 map for NameUse",
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  sourceCanonical: "http://hl7.org/fhir/ValueSet/name-use",
  targetCanonical: "http://terminology.hl7.org/ValueSet/v2-0200",
  group: [
    {
      source: "http://hl7.org/fhir/name-use",
      target: "http://terminology.hl7.org/CodeSystem/v2-0200",
      element: [
        {
          code: "usual",
          target: [
            {
              code: "D",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "official",
          target: [
            {
              code: "L",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "temp",
          target: [
            {
              code: "TEMP",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "nickname",
          target: [
            {
              code: "N",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "anonymous",
          target: [
            {
              code: "S",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "old",
          target: [
            {
              code: "NOUSE",
              equivalence: "wider",
            },
            {
              code: "BAD",
              equivalence: "wider",
            },
          ],
        },
        {
          code: "maiden",
          target: [
            {
              code: "M",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const CmNameUseV3: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cm-name-use-v3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>v3.NameUse (http://hl7.org/fhir/ConceptMap/cm-name-use-v3)</h2><p>Mapping from <a href="valueset-name-use.html">http://hl7.org/fhir/ValueSet/name-use</a> to <a href="v3/EntityNameUseR2/vs.html">http://terminology.hl7.org/ValueSet/v3-EntityNameUseR2</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>usual</td><td>equal</td><td>C (customary)</td></tr><tr><td>official</td><td>equal</td><td>OR (official registry name)</td></tr><tr><td>temp</td><td>equal</td><td>T (temporary)</td></tr><tr><td>nickname</td><td>equivalent</td><td>P (Other/Pseudonym/Alias)</td></tr><tr><td>anonymous</td><td>equivalent</td><td>ANON (Anonymous)</td></tr><tr><td>old</td><td>equivalent</td><td>OLD (no longer in use)</td></tr><tr><td>maiden (Name changed for Marriage)</td><td>equal</td><td>M (maiden name)</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/cm-name-use-v3",
  version: "4.0.1",
  name: "v3.NameUse",
  title: "v3 map for NameUse",
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  sourceCanonical: "http://hl7.org/fhir/ValueSet/name-use",
  targetCanonical: "http://terminology.hl7.org/ValueSet/v3-EntityNameUseR2",
  group: [
    {
      source: "http://hl7.org/fhir/name-use",
      target: "http://terminology.hl7.org/CodeSystem/v3-EntityNameUseR2",
      element: [
        {
          code: "usual",
          target: [
            {
              code: "C",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "official",
          target: [
            {
              code: "OR",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "temp",
          target: [
            {
              code: "T",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "nickname",
          target: [
            {
              code: "P",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "anonymous",
          target: [
            {
              code: "ANON",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "old",
          target: [
            {
              code: "OLD",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "maiden",
          target: [
            {
              code: "M",
              equivalence: "equal",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const Conceptmap103: ConceptMap = {
  resourceType: "ConceptMap",
  id: "103",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <h2>SNOMED CT to ICD-10-CM mappings for fracture of ulna (http://hl7.org/fhir/ConceptMap/103)</h2>\n      <p>Mapping from http://snomed.info/sct?fhir_vs to http://hl7.org/fhir/sid/icd-10-us</p>\n      <p>DRAFT (not intended for production usage). Published on 13/06/2012 by HL7, Inc (FHIR project team (example): \n        <a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). Creative Commons 0\n      </p>\n      <div>\n        <p>Example rule-based mappings between SNOMED CT to ICD-10-CM for fracture of ulna</p>\n\n      </div>\n      <br/>\n      <table class="grid">\n        <tr>\n          <td>\n            <b>Source Code</b>\n          </td>\n          <td>\n            <b>Equivalence</b>\n          </td>\n          <td>\n            <b>Destination Code</b>\n          </td>\n          <td>\n            <b>Comment</b>\n          </td>\n        </tr>\n        <tr>\n          <td>263204007 (Fracture of shaft of ulna)</td>\n          <td>narrower</td>\n          <td>S52.209A</td>\n          <td>The target mapping to ICD-10-CM is narrower, since additional patient data on the encounter (initial vs. subsequent) and fracture type is required for a valid ICD-10-CM mapping.</td>\n        </tr>\n        <tr>\n          <td/>\n          <td>narrower</td>\n          <td>S52.209D</td>\n          <td>The target mapping to ICD-10-CM is narrower, since additional patient data on the encounter (initial vs. subsequent), fracture type and healing (for subsequent encounter) is required for a valid ICD-10-CM mapping.</td>\n        </tr>\n      </table>\n    </div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/103",
  identifier: {
    system: "urn:ietf:rfc:3986",
    value: "urn:uuid:53cd62ee-033e-414c-9f58-3ca97b5ffc3b",
  },
  version: "4.0.1",
  name: "SNOMED CT to ICD-10-CM mappings for fracture of ulna",
  status: "draft",
  experimental: true,
  date: "2012-06-13",
  publisher: "HL7, Inc",
  contact: [
    {
      name: "FHIR project team (example)",
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    "Example rule-based mappings between SNOMED CT to ICD-10-CM for fracture of ulna",
  jurisdiction: [
    {
      coding: [
        {
          system: "http://unstats.un.org/unsd/methods/m49/m49.htm",
          code: "840",
          display: "United States of America",
        },
      ],
    },
  ],
  purpose: "Show example rule based mappings",
  copyright: "Creative Commons 0",
  sourceCanonical: "http://snomed.info/sct?fhir_vs",
  targetCanonical: "http://hl7.org/fhir/sid/icd-10-us",
  group: [
    {
      source: "http://snomed.info/sct",
      sourceVersion: "March 2015 US Edition",
      target: "http://hl7.org/fhir/sid/icd-10-us",
      targetVersion: "2015",
      element: [
        {
          code: "263204007",
          target: [
            {
              code: "S52.209A",
              equivalence: "narrower",
              comment:
                "The target mapping to ICD-10-CM is narrower, since additional patient data on the encounter (initial vs. subsequent) and fracture type is required for a valid ICD-10-CM mapping.",
            },
          ],
        },
        {
          target: [
            {
              code: "S52.209D",
              equivalence: "narrower",
              comment:
                "The target mapping to ICD-10-CM is narrower, since additional patient data on the encounter (initial vs. subsequent), fracture type and healing (for subsequent encounter) is required for a valid ICD-10-CM mapping.",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ConceptmapCdshooksIndicator: ConceptMap = {
  resourceType: "ConceptMap",
  id: "cdshooks-indicator",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <h2>IndicatorToRequestPriority (http://cds-hooks.hl7.org/ConceptMap/indicator-to-request-priority)</h2>\n      <p>Mapping from http://cds-hooks.hl7.org/ValueSet/indicator to \n        <a href="valueset-request-priority.html">http://hl7.org/fhir/ValueSet/request-priority</a>\n      </p>\n      <p>DRAFT. Published on ?? by null. </p>\n      <div>\n        <p>This concept map defines a mapping from CDS Hooks indicator to request priority.</p>\n\n      </div>\n      <br/>\n      <table class="grid">\n        <tr>\n          <td>\n            <b>Source Code</b>\n          </td>\n          <td>\n            <b>Equivalence</b>\n          </td>\n          <td>\n            <b>Destination Code</b>\n          </td>\n        </tr>\n        <tr>\n          <td>info</td>\n          <td>equal</td>\n          <td>routine</td>\n        </tr>\n        <tr>\n          <td>warning</td>\n          <td>equal</td>\n          <td>urgent</td>\n        </tr>\n        <tr>\n          <td>critical</td>\n          <td>equal</td>\n          <td>stat</td>\n        </tr>\n      </table>\n    </div>',
  },
  url: "http://cds-hooks.hl7.org/ConceptMap/indicator-to-request-priority",
  name: "IndicatorToRequestPriority",
  status: "draft",
  experimental: false,
  description:
    "This concept map defines a mapping from CDS Hooks indicator to request priority.",
  sourceCanonical: "http://cds-hooks.hl7.org/ValueSet/indicator",
  targetCanonical: "http://hl7.org/fhir/ValueSet/request-priority",
  group: [
    {
      element: [
        {
          code: "info",
          target: [
            {
              code: "routine",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "warning",
          target: [
            {
              code: "urgent",
              equivalence: "equal",
            },
          ],
        },
        {
          code: "critical",
          target: [
            {
              code: "stat",
              equivalence: "equal",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ConceptmapExample2: ConceptMap = {
  resourceType: "ConceptMap",
  id: "example2",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <h2>FHIR-exanple-2 (http://hl7.org/fhir/ConceptMap/example2)</h2>\n      <p>Mapping from http://example.org/fhir/example1 to http://example.org/fhir/example2</p>\n      <p>DRAFT (not intended for production usage). Published on 13/06/2012 by HL7, Inc (FHIR project team (example): \n        <a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). \n      </p>\n      <div>\n        <p>An example mapping</p>\n\n      </div>\n      <br/>\n      <table class="grid">\n        <tr>\n          <td colspan="2">\n            <b>Source Concept Details</b>\n          </td>\n          <td>\n            <b>Equivalence</b>\n          </td>\n          <td colspan="1">\n            <b>Destination Concept Details</b>\n          </td>\n        </tr>\n        <tr>\n          <td>\n            <b>Code</b> from http://example.org/fhir/example1\n          </td>\n          <td>\n            <b>Code</b> from http://example.org/fhir/example3\n          </td>\n          <td/>\n          <td>\n            <b>Code</b> from http://example.org/fhir/example2\n          </td>\n        </tr>\n        <tr>\n          <td>code</td>\n          <td>some-code</td>\n          <td>\n            <a href="codesystem-concept-map-equivalence.html#equivalent">equivalent</a>\n          </td>\n          <td>code2</td>\n        </tr>\n      </table>\n    </div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/example2",
  version: "4.0.1",
  name: "FHIR-exanple-2",
  title: "FHIR Example 2",
  status: "draft",
  experimental: true,
  date: "2012-06-13",
  publisher: "HL7, Inc",
  contact: [
    {
      name: "FHIR project team (example)",
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description: "An example mapping",
  purpose: "To illustrate mapping features",
  sourceUri: "http://example.org/fhir/example1",
  targetUri: "http://example.org/fhir/example2",
  group: [
    {
      source: "http://example.org/fhir/example1",
      target: "http://example.org/fhir/example2",
      element: [
        {
          code: "code",
          display: "Example Code",
          target: [
            {
              code: "code2",
              display: "Some Example Code",
              equivalence: "equivalent",
              dependsOn: [
                {
                  property: "http://example.org/fhir/property-value/example",
                  system: "http://example.org/fhir/example3",
                  value: "some-code",
                  display: "Something Coded",
                },
              ],
            },
          ],
        },
      ],
      unmapped: {
        mode: "other-map",
        url: "http://example.org/fhir/ConceptMap/map2",
      },
    },
  ],
} as const;

export const ConceptmapExample: ConceptMap = {
  resourceType: "ConceptMap",
  id: "101",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <h2>FHIR-v3-Address-Use (http://hl7.org/fhir/ConceptMap/101)</h2>\n      <p>Mapping from \n        <a href="valueset-address-use.html">http://hl7.org/fhir/ValueSet/address-use</a> to \n        <a href="v3/AddressUse/vs.html">http://terminology.hl7.org/ValueSet/v3-AddressUse</a>\n      </p>\n      <p>DRAFT (not intended for production usage). Published on 13/06/2012 by HL7, Inc (FHIR project team (example): \n        <a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). Creative Commons 0\n      </p>\n      <div>\n        <p>A mapping between the FHIR and HL7 v3 AddressUse Code systems</p>\n\n      </div>\n      <br/>\n      <table class="grid">\n        <tr>\n          <td>\n            <b>Source Code</b>\n          </td>\n          <td>\n            <b>Equivalence</b>\n          </td>\n          <td>\n            <b>Destination Code</b>\n          </td>\n          <td>\n            <b>Comment</b>\n          </td>\n        </tr>\n        <tr>\n          <td>home</td>\n          <td>equivalent</td>\n          <td>H (home address)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>work</td>\n          <td>equivalent</td>\n          <td>WP (work place)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>temp (Temporary)</td>\n          <td>equivalent</td>\n          <td>TMP (temporary address)</td>\n          <td/>\n        </tr>\n        <tr>\n          <td>old (Old / Incorrect)</td>\n          <td>disjoint</td>\n          <td>BAD (bad address)</td>\n          <td>In the HL7 v3 AD, old is handled by the usablePeriod element, but you have to provide a time, there\'s no simple equivalent of flagging an address as old</td>\n        </tr>\n      </table>\n    </div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/101",
  identifier: {
    system: "urn:ietf:rfc:3986",
    value: "urn:uuid:53cd62ee-033e-414c-9f58-3ca97b5ffc3b",
  },
  version: "4.0.1",
  name: "FHIR-v3-Address-Use",
  title: "FHIR/v3 Address Use Mapping",
  status: "draft",
  experimental: true,
  date: "2012-06-13",
  publisher: "HL7, Inc",
  contact: [
    {
      name: "FHIR project team (example)",
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description: "A mapping between the FHIR and HL7 v3 AddressUse Code systems",
  useContext: [
    {
      code: {
        system: "http://terminology.hl7.org/CodeSystem/usage-context-type",
        code: "venue",
      },
      valueCodeableConcept: {
        text: "for CCDA Usage",
      },
    },
  ],
  jurisdiction: [
    {
      coding: [
        {
          system: "urn:iso:std:iso:3166",
          code: "US",
        },
      ],
    },
  ],
  purpose: "To help implementers map from HL7 v3/CDA to FHIR",
  copyright: "Creative Commons 0",
  sourceUri: "http://hl7.org/fhir/ValueSet/address-use",
  targetUri: "http://terminology.hl7.org/ValueSet/v3-AddressUse",
  group: [
    {
      source: "http://hl7.org/fhir/address-use",
      target: "http://terminology.hl7.org/CodeSystem/v3-AddressUse",
      element: [
        {
          code: "home",
          display: "home",
          target: [
            {
              code: "H",
              display: "home",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "work",
          display: "work",
          target: [
            {
              code: "WP",
              display: "work place",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "temp",
          display: "temp",
          target: [
            {
              code: "TMP",
              display: "temporary address",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "old",
          display: "old",
          target: [
            {
              code: "BAD",
              display: "bad address",
              equivalence: "disjoint",
              comment:
                "In the HL7 v3 AD, old is handled by the usablePeriod element, but you have to provide a time, there's no simple equivalent of flagging an address as old",
            },
          ],
        },
      ],
      unmapped: {
        mode: "fixed",
        code: "temp",
        display: "temp",
      },
    },
  ],
} as const;

export const ScValuesetAccountStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-account-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AccountStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-account-status)</h2><p>Mapping from <a href="valueset-account-status.html">http://hl7.org/fhir/ValueSet/account-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Indicates whether the account is available to be used.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>on-hold</td><td>equivalent</td><td>suspended</td></tr><tr><td>inactive</td><td>equivalent</td><td>inactive</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-account-status",
  version: "4.0.1",
  name: "AccountStatusCanonicalMap",
  title: 'Canonical Mapping for "AccountStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Indicates whether the account is available to be used."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/account-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/account-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "on-hold",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "inactive",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetAllergyintoleranceClinical: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-allergyintolerance-clinical",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AllergyIntoleranceClinicalStatusCodesCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-allergyintolerance-clinical)</h2><p>Mapping from <a href="valueset-allergyintolerance-clinical.html">http://hl7.org/fhir/ValueSet/allergyintolerance-clinical</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by FHIR Project team (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). </p><div><p>Canonical Mapping for &quot;Preferred value set for AllergyIntolerance Clinical Status.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>inactive</td><td>equivalent</td><td>inactive</td></tr><tr><td>resolved</td><td>equivalent</td><td>resolved</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-allergyintolerance-clinical",
  version: "4.0.1",
  name: "AllergyIntoleranceClinicalStatusCodesCanonicalMap",
  title: 'Canonical Mapping for "AllergyIntolerance Clinical Status Codes"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Preferred value set for AllergyIntolerance Clinical Status."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/allergyintolerance-clinical",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source:
        "http://terminology.hl7.org/CodeSystem/allergyintolerance-clinical",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "inactive",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "resolved",
          target: [
            {
              code: "resolved",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetAllergyintoleranceVerification: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-allergyintolerance-verification",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AllergyIntoleranceVerificationStatusCodesCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-allergyintolerance-verification)</h2><p>Mapping from <a href="valueset-allergyintolerance-verification.html">http://hl7.org/fhir/ValueSet/allergyintolerance-verification</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by FHIR Project team (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). </p><div><p>Canonical Mapping for &quot;Preferred value set for AllergyIntolerance Verification Status.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>unconfirmed</td><td>equivalent</td><td>unconfirmed</td></tr><tr><td>confirmed</td><td>equivalent</td><td>confirmed</td></tr><tr><td>refuted</td><td>equivalent</td><td>refuted</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-allergyintolerance-verification",
  version: "4.0.1",
  name: "AllergyIntoleranceVerificationStatusCodesCanonicalMap",
  title: 'Canonical Mapping for "AllergyIntolerance Verification Status Codes"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Preferred value set for AllergyIntolerance Verification Status."',
  sourceCanonical:
    "http://hl7.org/fhir/ValueSet/allergyintolerance-verification",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source:
        "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unconfirmed",
          target: [
            {
              code: "unconfirmed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "confirmed",
          target: [
            {
              code: "confirmed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "refuted",
          target: [
            {
              code: "refuted",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetAppointmentstatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-appointmentstatus",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>AppointmentStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-appointmentstatus)</h2><p>Mapping from <a href="valueset-appointmentstatus.html">http://hl7.org/fhir/ValueSet/appointmentstatus</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The free/busy status of an appointment.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>proposed,waitlist</td><td>equivalent</td><td>proposed</td></tr><tr><td>pending</td><td>equivalent</td><td>draft</td></tr><tr><td>booked</td><td>equivalent</td><td>accepted</td></tr><tr><td>arrived</td><td>equivalent</td><td>arrived</td></tr><tr><td>noshow</td><td>equivalent</td><td>suspended</td></tr><tr><td>fulfilled</td><td>equivalent</td><td>complete</td></tr><tr><td>cancelled</td><td>equivalent</td><td>abandoned</td></tr><tr><td>checked-in</td><td>equivalent</td><td>partial</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-appointmentstatus",
  version: "4.0.1",
  name: "AppointmentStatusCanonicalMap",
  title: 'Canonical Mapping for "AppointmentStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "The free/busy status of an appointment."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/appointmentstatus",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/appointmentstatus",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "proposed,waitlist",
          target: [
            {
              code: "proposed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "pending",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "booked",
          target: [
            {
              code: "accepted",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "arrived",
          target: [
            {
              code: "arrived",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "noshow",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "fulfilled",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "checked-in",
          target: [
            {
              code: "partial",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetCarePlanActivityStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-care-plan-activity-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>CarePlanActivityStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-care-plan-activity-status)</h2><p>Mapping from <a href="valueset-care-plan-activity-status.html">http://hl7.org/fhir/ValueSet/care-plan-activity-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Codes that reflect the current state of a care plan activity within its overall life cycle.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>not-started</td><td>equivalent</td><td>draft</td></tr><tr><td>scheduled</td><td>equivalent</td><td>accepted</td></tr><tr><td>in-progress</td><td>equivalent</td><td>active</td></tr><tr><td>on-hold</td><td>equivalent</td><td>suspended</td></tr><tr><td>stopped</td><td>equivalent</td><td>failed</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr><tr><td>cancelled</td><td>equivalent</td><td>abandoned</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-care-plan-activity-status",
  version: "4.0.1",
  name: "CarePlanActivityStatusCanonicalMap",
  title: 'Canonical Mapping for "CarePlanActivityStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Codes that reflect the current state of a care plan activity within its overall life cycle."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/care-plan-activity-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/care-plan-activity-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "not-started",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "scheduled",
          target: [
            {
              code: "accepted",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "in-progress",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "on-hold",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "stopped",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetCareTeamStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-care-team-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>CareTeamStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-care-team-status)</h2><p>Mapping from <a href="valueset-care-team-status.html">http://hl7.org/fhir/ValueSet/care-team-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Indicates the status of the care team.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>proposed</td><td>equivalent</td><td>proposed</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>suspended</td><td>equivalent</td><td>suspended</td></tr><tr><td>inactive</td><td>equivalent</td><td>inactive</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-care-team-status",
  version: "4.0.1",
  name: "CareTeamStatusCanonicalMap",
  title: 'Canonical Mapping for "CareTeamStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "Indicates the status of the care team."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/care-team-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/care-team-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "proposed",
          target: [
            {
              code: "proposed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "suspended",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "inactive",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetChargeitemStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-chargeitem-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ChargeItemStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-chargeitem-status)</h2><p>Mapping from <a href="valueset-chargeitem-status.html">http://hl7.org/fhir/ValueSet/chargeitem-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Codes identifying the lifecycle stage of a ChargeItem.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>planned</td><td>equivalent</td><td>planned</td></tr><tr><td>not-billable</td><td>equivalent</td><td>declined</td></tr><tr><td>billable</td><td>equivalent</td><td>active</td></tr><tr><td>aborted</td><td>equivalent</td><td>failed</td></tr><tr><td>billed</td><td>equivalent</td><td>complete</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-chargeitem-status",
  version: "4.0.1",
  name: "ChargeItemStatusCanonicalMap",
  title: 'Canonical Mapping for "ChargeItemStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Codes identifying the lifecycle stage of a ChargeItem."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/chargeitem-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/chargeitem-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "planned",
          target: [
            {
              code: "planned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "not-billable",
          target: [
            {
              code: "declined",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "billable",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "aborted",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "billed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetClinicalimpressionStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-clinicalimpression-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ClinicalImpressionStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-clinicalimpression-status)</h2><p>Mapping from <a href="valueset-clinicalimpression-status.html">http://hl7.org/fhir/ValueSet/clinicalimpression-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 International - Patient Care WG (<a href="http://www.hl7.org/Special/committees/patientcare/">http://www.hl7.org/Special/com...</a>). </p><div><p>Canonical Mapping for &quot;Codes that reflect the current state of a clinical impression within its overall lifecycle.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>preparation</td><td>equivalent</td><td>planned</td></tr><tr><td>in-progress</td><td>equivalent</td><td>active</td></tr><tr><td>on-hold</td><td>equivalent</td><td>suspended</td></tr><tr><td>stopped</td><td>equivalent</td><td>failed</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr><tr><td>not-done</td><td>equivalent</td><td>abandoned</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-clinicalimpression-status",
  version: "4.0.1",
  name: "ClinicalImpressionStatusCanonicalMap",
  title: 'Canonical Mapping for "Clinical Impression Status"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 International - Patient Care WG",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://www.hl7.org/Special/committees/patientcare/",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Codes that reflect the current state of a clinical impression within its overall lifecycle."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/clinicalimpression-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/event-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "preparation",
          target: [
            {
              code: "planned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "in-progress",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "on-hold",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "stopped",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "not-done",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetCompositionStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-composition-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>CompositionStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-composition-status)</h2><p>Mapping from <a href="valueset-composition-status.html">http://hl7.org/fhir/ValueSet/composition-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The workflow/clinical status of the composition.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>preliminary</td><td>equivalent</td><td>draft</td></tr><tr><td>amended</td><td>equivalent</td><td>replaced</td></tr><tr><td>final</td><td>equivalent</td><td>complete</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-composition-status",
  version: "4.0.1",
  name: "CompositionStatusCanonicalMap",
  title: 'Canonical Mapping for "CompositionStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "The workflow/clinical status of the composition."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/composition-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/composition-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "preliminary",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "amended",
          target: [
            {
              code: "replaced",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "final",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetConditionVerStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-condition-ver-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ConditionVerificationStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-condition-ver-status)</h2><p>Mapping from <a href="valueset-condition-ver-status.html">http://hl7.org/fhir/ValueSet/condition-ver-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The verification status to support or decline the clinical status of the condition or diagnosis.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr><tr><td>unconfirmed, provisional</td><td>equivalent</td><td>unconfirmed</td></tr><tr><td>confirmed</td><td>equivalent</td><td>confirmed</td></tr><tr><td>refuted</td><td>equivalent</td><td>refuted</td></tr><tr><td>differential</td><td>equivalent</td><td>differential</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-condition-ver-status",
  version: "4.0.1",
  name: "ConditionVerificationStatusCanonicalMap",
  title: 'Canonical Mapping for "ConditionVerificationStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "The verification status to support or decline the clinical status of the condition or diagnosis."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/condition-ver-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://terminology.hl7.org/CodeSystem/condition-ver-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unconfirmed, provisional",
          target: [
            {
              code: "unconfirmed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "confirmed",
          target: [
            {
              code: "confirmed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "refuted",
          target: [
            {
              code: "refuted",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "differential",
          target: [
            {
              code: "differential",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetConsentStateCodes: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-consent-state-codes",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ConsentStateCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-consent-state-codes)</h2><p>Mapping from <a href="valueset-consent-state-codes.html">http://hl7.org/fhir/ValueSet/consent-state-codes</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Indicates the state of the consent.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>proposed</td><td>equivalent</td><td>proposed</td></tr><tr><td>draft (Pending)</td><td>equivalent</td><td>draft</td></tr><tr><td>rejected</td><td>equivalent</td><td>declined</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>inactive</td><td>equivalent</td><td>inactive</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-consent-state-codes",
  version: "4.0.1",
  name: "ConsentStateCanonicalMap",
  title: 'Canonical Mapping for "ConsentState"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "Indicates the state of the consent."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/consent-state-codes",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/consent-state-codes",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "proposed",
          target: [
            {
              code: "proposed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "draft",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "rejected",
          target: [
            {
              code: "declined",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "inactive",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetContractPublicationstatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-contract-publicationstatus",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ContractResourcePublicationStatusCodesCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-contract-publicationstatus)</h2><p>Mapping from <a href="valueset-contract-publicationstatus.html">http://hl7.org/fhir/ValueSet/contract-publicationstatus</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by Financial Management (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). </p><div><p>Canonical Mapping for &quot;This value set contract specific codes for status.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>offered</td><td>equivalent</td><td>proposed</td></tr><tr><td>negotiable,policy</td><td>equivalent</td><td>draft</td></tr><tr><td>executable,resolved</td><td>equivalent</td><td>active</td></tr><tr><td>disputed</td><td>equivalent</td><td>suspended</td></tr><tr><td>revoked</td><td>equivalent</td><td>failed</td></tr><tr><td>amended,appended,renewed</td><td>equivalent</td><td>replaced</td></tr><tr><td>executed</td><td>equivalent</td><td>complete</td></tr><tr><td>cancelled,rejected,terminated</td><td>equivalent</td><td>abandoned</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-contract-publicationstatus",
  version: "4.0.1",
  name: "ContractResourcePublicationStatusCodesCanonicalMap",
  title: 'Canonical Mapping for "Contract Resource Publication Status codes"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "Financial Management",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "This value set contract specific codes for status."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/contract-publicationstatus",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/contract-publicationstatus",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "offered",
          target: [
            {
              code: "proposed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "negotiable,policy",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "executable,resolved",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "disputed",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "revoked",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "amended,appended,renewed",
          target: [
            {
              code: "replaced",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "executed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled,rejected,terminated",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetContractStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-contract-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ContractResourceStatusCodesCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-contract-status)</h2><p>Mapping from <a href="valueset-contract-status.html">http://hl7.org/fhir/ValueSet/contract-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by Financial Management (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). </p><div><p>Canonical Mapping for &quot;This value set contract specific codes for status.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>offered</td><td>equivalent</td><td>proposed</td></tr><tr><td>negotiable,policy</td><td>equivalent</td><td>draft</td></tr><tr><td>executable,resolved</td><td>equivalent</td><td>active</td></tr><tr><td>disputed</td><td>equivalent</td><td>suspended</td></tr><tr><td>revoked</td><td>equivalent</td><td>failed</td></tr><tr><td>amended,appended,renewed</td><td>equivalent</td><td>replaced</td></tr><tr><td>executed</td><td>equivalent</td><td>complete</td></tr><tr><td>cancelled,rejected,terminated</td><td>equivalent</td><td>abandoned</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-contract-status",
  version: "4.0.1",
  name: "ContractResourceStatusCodesCanonicalMap",
  title: 'Canonical Mapping for "Contract Resource Status Codes"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "Financial Management",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "This value set contract specific codes for status."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/contract-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/contract-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "offered",
          target: [
            {
              code: "proposed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "negotiable,policy",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "executable,resolved",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "disputed",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "revoked",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "amended,appended,renewed",
          target: [
            {
              code: "replaced",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "executed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled,rejected,terminated",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetDeviceStatementStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-device-statement-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>DeviceUseStatementStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-device-statement-status)</h2><p>Mapping from <a href="valueset-device-statement-status.html">http://hl7.org/fhir/ValueSet/device-statement-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;A coded concept indicating the current status of the Device Usage.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>intended</td><td>equivalent</td><td>planned</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>on-hold</td><td>equivalent</td><td>suspended</td></tr><tr><td>stopped</td><td>equivalent</td><td>failed</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-device-statement-status",
  version: "4.0.1",
  name: "DeviceUseStatementStatusCanonicalMap",
  title: 'Canonical Mapping for "DeviceUseStatementStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "A coded concept indicating the current status of the Device Usage."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/device-statement-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/device-statement-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "intended",
          target: [
            {
              code: "planned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "on-hold",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "stopped",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetDeviceStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-device-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>FHIRDeviceStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-device-status)</h2><p>Mapping from <a href="valueset-device-status.html">http://hl7.org/fhir/ValueSet/device-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The availability status of the device.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>inactive</td><td>equivalent</td><td>inactive</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-device-status",
  version: "4.0.1",
  name: "FHIRDeviceStatusCanonicalMap",
  title: 'Canonical Mapping for "FHIRDeviceStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The availability status of the device."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/device-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/device-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "inactive",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetDiagnosticReportStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-diagnostic-report-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>DiagnosticReportStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-diagnostic-report-status)</h2><p>Mapping from <a href="valueset-diagnostic-report-status.html">http://hl7.org/fhir/ValueSet/diagnostic-report-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The status of the diagnostic report.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>partial,preliminary</td><td>equivalent</td><td>draft</td></tr><tr><td>registered</td><td>equivalent</td><td>received</td></tr><tr><td>corrected, amended, appended</td><td>equivalent</td><td>replaced</td></tr><tr><td>final</td><td>equivalent</td><td>complete</td></tr><tr><td>cancelled</td><td>equivalent</td><td>abandoned</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-diagnostic-report-status",
  version: "4.0.1",
  name: "DiagnosticReportStatusCanonicalMap",
  title: 'Canonical Mapping for "DiagnosticReportStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The status of the diagnostic report."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/diagnostic-report-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/diagnostic-report-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "partial,preliminary",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "registered",
          target: [
            {
              code: "received",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "corrected, amended, appended",
          target: [
            {
              code: "replaced",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "final",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetDocumentReferenceStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-document-reference-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>DocumentReferenceStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-document-reference-status)</h2><p>Mapping from <a href="valueset-document-reference-status.html">http://hl7.org/fhir/ValueSet/document-reference-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The status of the document reference.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>current</td><td>equivalent</td><td>active</td></tr><tr><td>superseded</td><td>equivalent</td><td>inactive</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-document-reference-status",
  version: "4.0.1",
  name: "DocumentReferenceStatusCanonicalMap",
  title: 'Canonical Mapping for "DocumentReferenceStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The status of the document reference."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/document-reference-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/document-reference-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "current",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "superseded",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetEncounterLocationStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-encounter-location-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>EncounterLocationStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-encounter-location-status)</h2><p>Mapping from <a href="valueset-encounter-location-status.html">http://hl7.org/fhir/ValueSet/encounter-location-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The status of the location.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>planned</td><td>equivalent</td><td>planned</td></tr><tr><td>reserved</td><td>equivalent</td><td>accepted</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-encounter-location-status",
  version: "4.0.1",
  name: "EncounterLocationStatusCanonicalMap",
  title: 'Canonical Mapping for "EncounterLocationStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The status of the location."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/encounter-location-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/encounter-location-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "planned",
          target: [
            {
              code: "planned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "reserved",
          target: [
            {
              code: "accepted",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetEncounterStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-encounter-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>EncounterStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-encounter-status)</h2><p>Mapping from <a href="valueset-encounter-status.html">http://hl7.org/fhir/ValueSet/encounter-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Current state of the encounter.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>planned</td><td>equivalent</td><td>planned</td></tr><tr><td>triaged</td><td>equivalent</td><td>accepted</td></tr><tr><td>arrived</td><td>equivalent</td><td>arrived</td></tr><tr><td>in-progress</td><td>equivalent</td><td>active</td></tr><tr><td>onleave</td><td>equivalent</td><td>suspended</td></tr><tr><td>finished</td><td>equivalent</td><td>complete</td></tr><tr><td>cancelled</td><td>equivalent</td><td>abandoned</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-encounter-status",
  version: "4.0.1",
  name: "EncounterStatusCanonicalMap",
  title: 'Canonical Mapping for "EncounterStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "Current state of the encounter."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/encounter-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/encounter-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "planned",
          target: [
            {
              code: "planned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "triaged",
          target: [
            {
              code: "accepted",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "arrived",
          target: [
            {
              code: "arrived",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "in-progress",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "onleave",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "finished",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetEndpointStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-endpoint-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>EndpointStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-endpoint-status)</h2><p>Mapping from <a href="valueset-endpoint-status.html">http://hl7.org/fhir/ValueSet/endpoint-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The status of the endpoint.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>test</td><td>equivalent</td><td>draft</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>suspended</td><td>equivalent</td><td>suspended</td></tr><tr><td>error</td><td>equivalent</td><td>failed</td></tr><tr><td>off</td><td>equivalent</td><td>inactive</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-endpoint-status",
  version: "4.0.1",
  name: "EndpointStatusCanonicalMap",
  title: 'Canonical Mapping for "EndpointStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The status of the endpoint."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/endpoint-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/endpoint-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "test",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "suspended",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "error",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "off",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetEpisodeOfCareStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-episode-of-care-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>EpisodeOfCareStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-episode-of-care-status)</h2><p>Mapping from <a href="valueset-episode-of-care-status.html">http://hl7.org/fhir/ValueSet/episode-of-care-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The status of the episode of care.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>planned</td><td>equivalent</td><td>planned</td></tr><tr><td>waitlist</td><td>equivalent</td><td>draft</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>onhold</td><td>equivalent</td><td>suspended</td></tr><tr><td>finished</td><td>equivalent</td><td>complete</td></tr><tr><td>cancelled</td><td>equivalent</td><td>abandoned</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-episode-of-care-status",
  version: "4.0.1",
  name: "EpisodeOfCareStatusCanonicalMap",
  title: 'Canonical Mapping for "EpisodeOfCareStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The status of the episode of care."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/episode-of-care-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/episode-of-care-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "planned",
          target: [
            {
              code: "planned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "waitlist",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "onhold",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "finished",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetEventStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-event-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>EventStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-event-status)</h2><p>Mapping from <a href="valueset-event-status.html">http://hl7.org/fhir/ValueSet/event-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Codes identifying the lifecycle stage of an event.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>preparation</td><td>equivalent</td><td>planned</td></tr><tr><td>in-progress</td><td>equivalent</td><td>active</td></tr><tr><td>on-hold</td><td>equivalent</td><td>suspended</td></tr><tr><td>stopped</td><td>equivalent</td><td>failed</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr><tr><td>not-done</td><td>equivalent</td><td>abandoned</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-event-status",
  version: "4.0.1",
  name: "EventStatusCanonicalMap",
  title: 'Canonical Mapping for "EventStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Codes identifying the lifecycle stage of an event."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/event-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/event-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "preparation",
          target: [
            {
              code: "planned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "in-progress",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "on-hold",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "stopped",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "not-done",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetExplanationofbenefitStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-explanationofbenefit-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ExplanationOfBenefitStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-explanationofbenefit-status)</h2><p>Mapping from <a href="valueset-explanationofbenefit-status.html">http://hl7.org/fhir/ValueSet/explanationofbenefit-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;A code specifying the state of the resource instance.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>draft</td><td>equivalent</td><td>draft</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>cancelled</td><td>equivalent</td><td>abandoned</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-explanationofbenefit-status",
  version: "4.0.1",
  name: "ExplanationOfBenefitStatusCanonicalMap",
  title: 'Canonical Mapping for "ExplanationOfBenefitStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "A code specifying the state of the resource instance."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/explanationofbenefit-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/explanationofbenefit-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "draft",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetFlagStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-flag-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>FlagStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-flag-status)</h2><p>Mapping from <a href="valueset-flag-status.html">http://hl7.org/fhir/ValueSet/flag-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>inactive</td><td>equivalent</td><td>inactive</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-flag-status",
  version: "4.0.1",
  name: "FlagStatusCanonicalMap",
  title: 'Canonical Mapping for "FlagStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Indicates whether this flag is active and needs to be displayed to a user, or whether it is no longer needed or was entered in error."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/flag-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/flag-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "inactive",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetFmStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-fm-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>FinancialResourceStatusCodesCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-fm-status)</h2><p>Mapping from <a href="valueset-fm-status.html">http://hl7.org/fhir/ValueSet/fm-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by Financial Management (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). </p><div><p>Canonical Mapping for &quot;This value set includes Status codes.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>draft</td><td>equivalent</td><td>draft</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>cancelled</td><td>equivalent</td><td>abandoned</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-fm-status",
  version: "4.0.1",
  name: "FinancialResourceStatusCodesCanonicalMap",
  title: 'Canonical Mapping for "Financial Resource Status Codes"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "Financial Management",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "This value set includes Status codes."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/fm-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/fm-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "draft",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetGoalAchievement: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-goal-achievement",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>GoalAchievementStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-goal-achievement)</h2><p>Mapping from <a href="valueset-goal-achievement.html">http://hl7.org/fhir/ValueSet/goal-achievement</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 International - Patient Care WG (<a href="http://www.hl7.org/Special/committees/patientcare/">http://www.hl7.org/Special/com...</a>). </p><div><p>Canonical Mapping for &quot;Describes the progression, or lack thereof, towards the goal against the target.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>in-progress, sustaining, improving, worsening, no-change</td><td>equivalent</td><td>active</td></tr><tr><td>achieved</td><td>equivalent</td><td>complete</td></tr><tr><td>not-attainable</td><td>equivalent</td><td>abandoned</td></tr><tr><td>no-progress, not-achieved</td><td>equivalent</td><td>not-done</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-goal-achievement",
  version: "4.0.1",
  name: "GoalAchievementStatusCanonicalMap",
  title: 'Canonical Mapping for "Goal achievement status"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 International - Patient Care WG",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://www.hl7.org/Special/committees/patientcare/",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Describes the progression, or lack thereof, towards the goal against the target."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/goal-achievement",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://terminology.hl7.org/CodeSystem/goal-achievement",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "in-progress, sustaining, improving, worsening, no-change",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "achieved",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "not-attainable",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "no-progress, not-achieved",
          target: [
            {
              code: "not-done",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetGoalStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-goal-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>GoalLifecycleStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-goal-status)</h2><p>Mapping from <a href="valueset-goal-status.html">http://hl7.org/fhir/ValueSet/goal-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Codes that reflect the current state of a goal and whether the goal is still being targeted.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>proposed</td><td>equivalent</td><td>proposed</td></tr><tr><td>planned</td><td>equivalent</td><td>planned</td></tr><tr><td>rejected</td><td>equivalent</td><td>declined</td></tr><tr><td>accepted</td><td>equivalent</td><td>accepted</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>on-hold</td><td>equivalent</td><td>suspended</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr><tr><td>cancelled</td><td>equivalent</td><td>abandoned</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-goal-status",
  version: "4.0.1",
  name: "GoalLifecycleStatusCanonicalMap",
  title: 'Canonical Mapping for "GoalLifecycleStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Codes that reflect the current state of a goal and whether the goal is still being targeted."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/goal-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/goal-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "proposed",
          target: [
            {
              code: "proposed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "planned",
          target: [
            {
              code: "planned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "rejected",
          target: [
            {
              code: "declined",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "accepted",
          target: [
            {
              code: "accepted",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "on-hold",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetGuidanceResponseStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-guidance-response-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>GuidanceResponseStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-guidance-response-status)</h2><p>Mapping from <a href="valueset-guidance-response-status.html">http://hl7.org/fhir/ValueSet/guidance-response-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The status of a guidance response.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>data-requested</td><td>equivalent</td><td>draft</td></tr><tr><td>data-required</td><td>equivalent</td><td>declined</td></tr><tr><td>in-progress</td><td>equivalent</td><td>active</td></tr><tr><td>failure</td><td>equivalent</td><td>failed</td></tr><tr><td>success</td><td>equivalent</td><td>complete</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-guidance-response-status",
  version: "4.0.1",
  name: "GuidanceResponseStatusCanonicalMap",
  title: 'Canonical Mapping for "GuidanceResponseStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The status of a guidance response."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/guidance-response-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/guidance-response-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "data-requested",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "data-required",
          target: [
            {
              code: "declined",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "in-progress",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "failure",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "success",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetHistoryStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-history-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>FamilyHistoryStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-history-status)</h2><p>Mapping from <a href="valueset-history-status.html">http://hl7.org/fhir/ValueSet/history-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;A code that identifies the status of the family history record.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr><tr><td>health-unknown</td><td>equivalent</td><td>unknown</td></tr><tr><td>partial</td><td>equivalent</td><td>partial</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-history-status",
  version: "4.0.1",
  name: "FamilyHistoryStatusCanonicalMap",
  title: 'Canonical Mapping for "FamilyHistoryStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "A code that identifies the status of the family history record."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/history-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/history-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "health-unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "partial",
          target: [
            {
              code: "partial",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetImagingstudyStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-imagingstudy-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ImagingStudyStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-imagingstudy-status)</h2><p>Mapping from <a href="valueset-imagingstudy-status.html">http://hl7.org/fhir/ValueSet/imagingstudy-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The status of the ImagingStudy.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>registered</td><td>equivalent</td><td>received</td></tr><tr><td>available</td><td>equivalent</td><td>active</td></tr><tr><td>cancelled</td><td>equivalent</td><td>abandoned</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-imagingstudy-status",
  version: "4.0.1",
  name: "ImagingStudyStatusCanonicalMap",
  title: 'Canonical Mapping for "ImagingStudyStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The status of the ImagingStudy."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/imagingstudy-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/imagingstudy-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "registered",
          target: [
            {
              code: "received",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "available",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetImmunizationEvaluationStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-immunization-evaluation-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ImmunizationEvaluationStatusCodesCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-immunization-evaluation-status)</h2><p>Mapping from <a href="valueset-immunization-evaluation-status.html">http://hl7.org/fhir/ValueSet/immunization-evaluation-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by FHIR Project team (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). </p><div><p>Canonical Mapping for &quot;The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the evaluation for vaccine administration event.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-immunization-evaluation-status",
  version: "4.0.1",
  name: "ImmunizationEvaluationStatusCodesCanonicalMap",
  title: 'Canonical Mapping for "Immunization Evaluation Status Codes"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the evaluation for vaccine administration event."',
  sourceCanonical:
    "http://hl7.org/fhir/ValueSet/immunization-evaluation-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetImmunizationStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-immunization-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ImmunizationStatusCodesCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-immunization-status)</h2><p>Mapping from <a href="valueset-immunization-status.html">http://hl7.org/fhir/ValueSet/immunization-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by FHIR Project team (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). </p><div><p>Canonical Mapping for &quot;The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr><tr><td>not-done</td><td>equivalent</td><td>abandoned</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-immunization-status",
  version: "4.0.1",
  name: "ImmunizationStatusCodesCanonicalMap",
  title: 'Canonical Mapping for "Immunization Status Codes"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "The value set to instantiate this attribute should be drawn from a terminologically robust code system that consists of or contains concepts to support describing the current status of the administered dose of vaccine."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/immunization-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/event-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "not-done",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetInvoiceStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-invoice-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>InvoiceStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-invoice-status)</h2><p>Mapping from <a href="valueset-invoice-status.html">http://hl7.org/fhir/ValueSet/invoice-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Codes identifying the lifecycle stage of an Invoice.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>draft</td><td>equivalent</td><td>draft</td></tr><tr><td>issued</td><td>equivalent</td><td>active</td></tr><tr><td>cancelled</td><td>equivalent</td><td>failed</td></tr><tr><td>balanced</td><td>equivalent</td><td>complete</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-invoice-status",
  version: "4.0.1",
  name: "InvoiceStatusCanonicalMap",
  title: 'Canonical Mapping for "InvoiceStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Codes identifying the lifecycle stage of an Invoice."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/invoice-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/invoice-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "draft",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "issued",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "balanced",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetListStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-list-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ListStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-list-status)</h2><p>Mapping from <a href="valueset-list-status.html">http://hl7.org/fhir/ValueSet/list-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The current state of the list.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>current</td><td>equivalent</td><td>active</td></tr><tr><td>retired</td><td>equivalent</td><td>inactive</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-list-status",
  version: "4.0.1",
  name: "ListStatusCanonicalMap",
  title: 'Canonical Mapping for "ListStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The current state of the list."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/list-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/list-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "current",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "retired",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetLocationStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-location-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>LocationStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-location-status)</h2><p>Mapping from <a href="valueset-location-status.html">http://hl7.org/fhir/ValueSet/location-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Indicates whether the location is still in use.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>suspended</td><td>equivalent</td><td>suspended</td></tr><tr><td>inactive</td><td>equivalent</td><td>inactive</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-location-status",
  version: "4.0.1",
  name: "LocationStatusCanonicalMap",
  title: 'Canonical Mapping for "LocationStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Indicates whether the location is still in use."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/location-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/location-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "suspended",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "inactive",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetMeasureReportStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-measure-report-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>MeasureReportStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-measure-report-status)</h2><p>Mapping from <a href="valueset-measure-report-status.html">http://hl7.org/fhir/ValueSet/measure-report-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The status of the measure report.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>pending</td><td>equivalent</td><td>active</td></tr><tr><td>error</td><td>equivalent</td><td>failed</td></tr><tr><td>complete</td><td>equivalent</td><td>complete</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-measure-report-status",
  version: "4.0.1",
  name: "MeasureReportStatusCanonicalMap",
  title: 'Canonical Mapping for "MeasureReportStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The status of the measure report."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/measure-report-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/measure-report-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "pending",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "error",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "complete",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetMedicationAdminStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-medication-admin-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>MedicationAdministration Status CodesCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-medication-admin-status)</h2><p>Mapping from <a href="valueset-medication-admin-status.html">http://hl7.org/fhir/ValueSet/medication-admin-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by FHIR Project team (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). </p><div><p>Canonical Mapping for &quot;MedicationAdministration Status Codes&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>in-progress</td><td>equivalent</td><td>active</td></tr><tr><td>on-hold</td><td>equivalent</td><td>suspended</td></tr><tr><td>stopped</td><td>equivalent</td><td>failed</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr><tr><td>not-done</td><td>equivalent</td><td>not-done</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-medication-admin-status",
  version: "4.0.1",
  name: "MedicationAdministration Status CodesCanonicalMap",
  title: 'Canonical Mapping for "Medication administration  status  codes"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "MedicationAdministration Status Codes"',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/medication-admin-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://terminology.hl7.org/CodeSystem/medication-admin-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "in-progress",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "on-hold",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "stopped",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "not-done",
          target: [
            {
              code: "not-done",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetMedicationStatementStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-medication-statement-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>Medication Status CodesCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-medication-statement-status)</h2><p>Mapping from <a href="valueset-medication-statement-status.html">http://hl7.org/fhir/ValueSet/medication-statement-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by FHIR Project team (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). </p><div><p>Canonical Mapping for &quot;Medication Status Codes&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>intended</td><td>equivalent</td><td>planned</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>on-hold</td><td>equivalent</td><td>suspended</td></tr><tr><td>stopped</td><td>equivalent</td><td>failed</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr><tr><td>not-taken</td><td>equivalent</td><td>not-done</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-medication-statement-status",
  version: "4.0.1",
  name: "Medication Status CodesCanonicalMap",
  title: 'Canonical Mapping for "Medication  status  codes"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "Medication Status Codes"',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/medication-statement-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/CodeSystem/medication-statement-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "intended",
          target: [
            {
              code: "planned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "on-hold",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "stopped",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "not-taken",
          target: [
            {
              code: "not-done",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetMedicationStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-medication-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>Medication Status CodesCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-medication-status)</h2><p>Mapping from <a href="valueset-medication-status.html">http://hl7.org/fhir/ValueSet/medication-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by FHIR Project team (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). </p><div><p>Canonical Mapping for &quot;Medication Status Codes&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>inactive</td><td>equivalent</td><td>inactive</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-medication-status",
  version: "4.0.1",
  name: "Medication Status CodesCanonicalMap",
  title: 'Canonical Mapping for "Medication  status  codes"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "Medication Status Codes"',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/medication-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/CodeSystem/medication-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "inactive",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetMedicationdispenseStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-medicationdispense-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>MedicationDispense Status CodesCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-medicationdispense-status)</h2><p>Mapping from <a href="valueset-medicationdispense-status.html">http://hl7.org/fhir/ValueSet/medicationdispense-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by FHIR Project team (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). </p><div><p>Canonical Mapping for &quot;MedicationDispense Status Codes&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>preparation</td><td>equivalent</td><td>planned</td></tr><tr><td>in-progress</td><td>equivalent</td><td>active</td></tr><tr><td>on-hold</td><td>equivalent</td><td>suspended</td></tr><tr><td>stopped</td><td>equivalent</td><td>failed</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr><tr><td>cancelled, declined</td><td>equivalent</td><td>not-done</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-medicationdispense-status",
  version: "4.0.1",
  name: "MedicationDispense Status CodesCanonicalMap",
  title: 'Canonical Mapping for "Medication dispense  status  codes"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "MedicationDispense Status Codes"',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/medicationdispense-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://terminology.hl7.org/CodeSystem/medicationdispense-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "preparation",
          target: [
            {
              code: "planned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "in-progress",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "on-hold",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "stopped",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled, declined",
          target: [
            {
              code: "not-done",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetMedicationknowledgeStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-medicationknowledge-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>MedicationKnowledge Status CodesCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-medicationknowledge-status)</h2><p>Mapping from <a href="valueset-medicationknowledge-status.html">http://hl7.org/fhir/ValueSet/medicationknowledge-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by FHIR Project team (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). </p><div><p>Canonical Mapping for &quot;MedicationKnowledge Status Codes&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>inactive</td><td>equivalent</td><td>inactive</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-medicationknowledge-status",
  version: "4.0.1",
  name: "MedicationKnowledge Status CodesCanonicalMap",
  title: 'Canonical Mapping for "Medication knowledge  status  codes"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "MedicationKnowledge Status Codes"',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/medicationknowledge-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source:
        "http://terminology.hl7.org/CodeSystem/medicationknowledge-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "inactive",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetMedicationrequestStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-medicationrequest-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>medicationrequest StatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-medicationrequest-status)</h2><p>Mapping from <a href="valueset-medicationrequest-status.html">http://hl7.org/fhir/ValueSet/medicationrequest-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by FHIR Project team (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>). </p><div><p>Canonical Mapping for &quot;MedicationRequest Status Codes&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>draft</td><td>equivalent</td><td>draft</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>on-hold</td><td>equivalent</td><td>suspended</td></tr><tr><td>stopped</td><td>equivalent</td><td>failed</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr><tr><td>cancelled</td><td>equivalent</td><td>abandoned</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-medicationrequest-status",
  version: "4.0.1",
  name: "medicationrequest StatusCanonicalMap",
  title: 'Canonical Mapping for "Medicationrequest  status"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "FHIR Project team",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "MedicationRequest Status Codes"',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/medicationrequest-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/CodeSystem/medicationrequest-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "draft",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "on-hold",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "stopped",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetMetricOperationalStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-metric-operational-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>DeviceMetricOperationalStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-metric-operational-status)</h2><p>Mapping from <a href="valueset-metric-operational-status.html">http://hl7.org/fhir/ValueSet/metric-operational-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Describes the operational status of the DeviceMetric.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>on</td><td>equivalent</td><td>active</td></tr><tr><td>standby</td><td>equivalent</td><td>suspended</td></tr><tr><td>off</td><td>equivalent</td><td>inactive</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-metric-operational-status",
  version: "4.0.1",
  name: "DeviceMetricOperationalStatusCanonicalMap",
  title: 'Canonical Mapping for "DeviceMetricOperationalStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Describes the operational status of the DeviceMetric."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/metric-operational-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/metric-operational-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "on",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "standby",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "off",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetObservationStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-observation-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ObservationStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-observation-status)</h2><p>Mapping from <a href="valueset-observation-status.html">http://hl7.org/fhir/ValueSet/observation-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Codes providing the status of an observation.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>preliminary</td><td>equivalent</td><td>draft</td></tr><tr><td>registered</td><td>equivalent</td><td>received</td></tr><tr><td>corrected, amended</td><td>equivalent</td><td>replaced</td></tr><tr><td>final</td><td>equivalent</td><td>complete</td></tr><tr><td>cancelled</td><td>equivalent</td><td>abandoned</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-observation-status",
  version: "4.0.1",
  name: "ObservationStatusCanonicalMap",
  title: 'Canonical Mapping for "ObservationStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Codes providing the status of an observation."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/observation-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/observation-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "preliminary",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "registered",
          target: [
            {
              code: "received",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "corrected, amended",
          target: [
            {
              code: "replaced",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "final",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetParticipationstatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-participationstatus",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ParticipationStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-participationstatus)</h2><p>Mapping from <a href="valueset-participationstatus.html">http://hl7.org/fhir/ValueSet/participationstatus</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The Participation status of an appointment.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>tentative</td><td>equivalent</td><td>draft</td></tr><tr><td>declined</td><td>equivalent</td><td>declined</td></tr><tr><td>accepted</td><td>equivalent</td><td>accepted</td></tr><tr><td>needs-action</td><td>equivalent</td><td>failed</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-participationstatus",
  version: "4.0.1",
  name: "ParticipationStatusCanonicalMap",
  title: 'Canonical Mapping for "ParticipationStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "The Participation status of an appointment."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/participationstatus",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/participationstatus",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "tentative",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "declined",
          target: [
            {
              code: "declined",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "accepted",
          target: [
            {
              code: "accepted",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "needs-action",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetProductStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-product-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>BiologicallyDerivedProductStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-product-status)</h2><p>Mapping from <a href="valueset-product-status.html">http://hl7.org/fhir/ValueSet/product-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Biologically Derived Product Status.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>available</td><td>equivalent</td><td>active</td></tr><tr><td>unavailable</td><td>equivalent</td><td>busy-unavailable</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-product-status",
  version: "4.0.1",
  name: "BiologicallyDerivedProductStatusCanonicalMap",
  title: 'Canonical Mapping for "BiologicallyDerivedProductStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "Biologically Derived Product Status."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/product-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/product-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "available",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unavailable",
          target: [
            {
              code: "busy-unavailable",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetPublicationStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-publication-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>PublicationStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-publication-status)</h2><p>Mapping from <a href="valueset-publication-status.html">http://hl7.org/fhir/ValueSet/publication-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The lifecycle status of an artifact.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>draft</td><td>equivalent</td><td>draft</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>retired</td><td>equivalent</td><td>inactive</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-publication-status",
  version: "4.0.1",
  name: "PublicationStatusCanonicalMap",
  title: 'Canonical Mapping for "PublicationStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The lifecycle status of an artifact."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/publication-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/publication-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "draft",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "retired",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetQuestionnaireAnswersStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-questionnaire-answers-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>QuestionnaireResponseStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-questionnaire-answers-status)</h2><p>Mapping from <a href="valueset-questionnaire-answers-status.html">http://hl7.org/fhir/ValueSet/questionnaire-answers-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Lifecycle status of the questionnaire response.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>in-progress</td><td>equivalent</td><td>active</td></tr><tr><td>stopped</td><td>equivalent</td><td>failed</td></tr><tr><td>amended</td><td>equivalent</td><td>replaced</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-questionnaire-answers-status",
  version: "4.0.1",
  name: "QuestionnaireResponseStatusCanonicalMap",
  title: 'Canonical Mapping for "QuestionnaireResponseStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Lifecycle status of the questionnaire response."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/questionnaire-answers-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/questionnaire-answers-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "in-progress",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "stopped",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "amended",
          target: [
            {
              code: "replaced",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetReportStatusCodes: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-report-status-codes",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>TestReportStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-report-status-codes)</h2><p>Mapping from <a href="valueset-report-status-codes.html">http://hl7.org/fhir/ValueSet/report-status-codes</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The current status of the test report.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>in-progress</td><td>equivalent</td><td>active</td></tr><tr><td>waiting</td><td>equivalent</td><td>suspended</td></tr><tr><td>stopped</td><td>equivalent</td><td>failed</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-report-status-codes",
  version: "4.0.1",
  name: "TestReportStatusCanonicalMap",
  title: 'Canonical Mapping for "TestReportStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The current status of the test report."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/report-status-codes",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/report-status-codes",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "in-progress",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "waiting",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "stopped",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetRequestStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-request-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>RequestStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-request-status)</h2><p>Mapping from <a href="valueset-request-status.html">http://hl7.org/fhir/ValueSet/request-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Codes identifying the lifecycle stage of a request.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>draft</td><td>equivalent</td><td>draft</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>on-hold</td><td>equivalent</td><td>suspended</td></tr><tr><td>revoked</td><td>equivalent</td><td>failed</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-request-status",
  version: "4.0.1",
  name: "RequestStatusCanonicalMap",
  title: 'Canonical Mapping for "RequestStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Codes identifying the lifecycle stage of a request."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/request-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/request-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "draft",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "on-hold",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "revoked",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetResearchStudyStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-research-study-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ResearchStudyStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-research-study-status)</h2><p>Mapping from <a href="valueset-research-study-status.html">http://hl7.org/fhir/ValueSet/research-study-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Codes that convey the current status of the research study.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>in-review</td><td>equivalent</td><td>draft</td></tr><tr><td>disapproved</td><td>equivalent</td><td>declined</td></tr><tr><td>approved</td><td>equivalent</td><td>accepted</td></tr><tr><td>active, closed-to-accrual, closed-to-accrual-and-intervention</td><td>equivalent</td><td>active</td></tr><tr><td>temporarily-closed-to-accrual, temporarily-closed-to-accrual-and-intervention</td><td>equivalent</td><td>suspended</td></tr><tr><td>completed, administratively-completed</td><td>equivalent</td><td>complete</td></tr><tr><td>withdrawn</td><td>equivalent</td><td>abandoned</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-research-study-status",
  version: "4.0.1",
  name: "ResearchStudyStatusCanonicalMap",
  title: 'Canonical Mapping for "ResearchStudyStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Codes that convey the current status of the research study."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/research-study-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/research-study-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "in-review",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "disapproved",
          target: [
            {
              code: "declined",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "approved",
          target: [
            {
              code: "accepted",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active, closed-to-accrual, closed-to-accrual-and-intervention",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "temporarily-closed-to-accrual, temporarily-closed-to-accrual-and-intervention",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed, administratively-completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "withdrawn",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetResearchSubjectStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-research-subject-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>ResearchSubjectStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-research-subject-status)</h2><p>Mapping from <a href="valueset-research-subject-status.html">http://hl7.org/fhir/ValueSet/research-subject-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Indicates the progression of a study subject through a study.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>candidate, screening, eligible, potential-candidate</td><td>equivalent</td><td>draft</td></tr><tr><td>ineligible</td><td>equivalent</td><td>declined</td></tr><tr><td>on-study, on-study-intervention, on-study-observation</td><td>equivalent</td><td>active</td></tr><tr><td>pending-on-study</td><td>equivalent</td><td>suspended</td></tr><tr><td>withdrawn</td><td>equivalent</td><td>failed</td></tr><tr><td>follow-up</td><td>equivalent</td><td>replaced</td></tr><tr><td>off-study</td><td>equivalent</td><td>complete</td></tr><tr><td>not-registered</td><td>equivalent</td><td>abandoned</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-research-subject-status",
  version: "4.0.1",
  name: "ResearchSubjectStatusCanonicalMap",
  title: 'Canonical Mapping for "ResearchSubjectStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Indicates the progression of a study subject through a study."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/research-subject-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/research-subject-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "candidate, screening, eligible, potential-candidate",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "ineligible",
          target: [
            {
              code: "declined",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "on-study, on-study-intervention, on-study-observation",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "pending-on-study",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "withdrawn",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "follow-up",
          target: [
            {
              code: "replaced",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "off-study",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "not-registered",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetSlotstatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-slotstatus",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>SlotStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-slotstatus)</h2><p>Mapping from <a href="valueset-slotstatus.html">http://hl7.org/fhir/ValueSet/slotstatus</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The free/busy status of the slot.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>busy</td><td>equivalent</td><td>accepted</td></tr><tr><td>busy-tentative (Busy (Tentative))</td><td>equivalent</td><td>unconfirmed</td></tr><tr><td>busy-unavailable (Busy (Unavailable))</td><td>equivalent</td><td>busy-unavailable</td></tr><tr><td>free</td><td>equivalent</td><td>free</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-slotstatus",
  version: "4.0.1",
  name: "SlotStatusCanonicalMap",
  title: 'Canonical Mapping for "SlotStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The free/busy status of the slot."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/slotstatus",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/slotstatus",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "busy",
          target: [
            {
              code: "accepted",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "busy-tentative",
          target: [
            {
              code: "unconfirmed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "busy-unavailable",
          target: [
            {
              code: "busy-unavailable",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "free",
          target: [
            {
              code: "free",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetSpecimenStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-specimen-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>SpecimenStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-specimen-status)</h2><p>Mapping from <a href="valueset-specimen-status.html">http://hl7.org/fhir/ValueSet/specimen-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Codes providing the status/availability of a specimen.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>available</td><td>equivalent</td><td>active</td></tr><tr><td>unsatisfactory</td><td>equivalent</td><td>failed</td></tr><tr><td>unavailable</td><td>equivalent</td><td>inactive</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-specimen-status",
  version: "4.0.1",
  name: "SpecimenStatusCanonicalMap",
  title: 'Canonical Mapping for "SpecimenStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Codes providing the status/availability of a specimen."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/specimen-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/specimen-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "available",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unsatisfactory",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unavailable",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetSubscriptionStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-subscription-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>SubscriptionStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-subscription-status)</h2><p>Mapping from <a href="valueset-subscription-status.html">http://hl7.org/fhir/ValueSet/subscription-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The status of a subscription.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>requested</td><td>equivalent</td><td>requested</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>error</td><td>equivalent</td><td>failed</td></tr><tr><td>off</td><td>equivalent</td><td>inactive</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-subscription-status",
  version: "4.0.1",
  name: "SubscriptionStatusCanonicalMap",
  title: 'Canonical Mapping for "SubscriptionStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The status of a subscription."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/subscription-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/subscription-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "requested",
          target: [
            {
              code: "requested",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "error",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "off",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetSubstanceStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-substance-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>FHIRSubstanceStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-substance-status)</h2><p>Mapping from <a href="valueset-substance-status.html">http://hl7.org/fhir/ValueSet/substance-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;A code to indicate if the substance is actively used.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>inactive</td><td>equivalent</td><td>inactive</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-substance-status",
  version: "4.0.1",
  name: "FHIRSubstanceStatusCanonicalMap",
  title: 'Canonical Mapping for "FHIRSubstanceStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "A code to indicate if the substance is actively used."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/substance-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/substance-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "inactive",
          target: [
            {
              code: "inactive",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetSupplydeliveryStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-supplydelivery-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>SupplyDeliveryStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-supplydelivery-status)</h2><p>Mapping from <a href="valueset-supplydelivery-status.html">http://hl7.org/fhir/ValueSet/supplydelivery-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Status of the supply delivery.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>in-progress</td><td>equivalent</td><td>active</td></tr><tr><td>completed (Delivered)</td><td>equivalent</td><td>complete</td></tr><tr><td>abandoned</td><td>equivalent</td><td>abandoned</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-supplydelivery-status",
  version: "4.0.1",
  name: "SupplyDeliveryStatusCanonicalMap",
  title: 'Canonical Mapping for "SupplyDeliveryStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "Status of the supply delivery."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/supplydelivery-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/supplydelivery-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "in-progress",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "abandoned",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetSupplyrequestStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-supplyrequest-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>SupplyRequestStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-supplyrequest-status)</h2><p>Mapping from <a href="valueset-supplyrequest-status.html">http://hl7.org/fhir/ValueSet/supplyrequest-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Status of the supply request.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>draft</td><td>equivalent</td><td>draft</td></tr><tr><td>active</td><td>equivalent</td><td>active</td></tr><tr><td>suspended</td><td>equivalent</td><td>suspended</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr><tr><td>cancelled</td><td>equivalent</td><td>abandoned</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-supplyrequest-status",
  version: "4.0.1",
  name: "SupplyRequestStatusCanonicalMap",
  title: 'Canonical Mapping for "SupplyRequestStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "Status of the supply request."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/supplyrequest-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/supplyrequest-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "draft",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "active",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "suspended",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetTaskStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-task-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>TaskStatusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-task-status)</h2><p>Mapping from <a href="valueset-task-status.html">http://hl7.org/fhir/ValueSet/task-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 01/11/2019 9:29:23 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The current status of the task.&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>entered-in-error</td><td>equivalent</td><td>error</td></tr><tr><td>draft</td><td>equivalent</td><td>draft</td></tr><tr><td>requested</td><td>equivalent</td><td>requested</td></tr><tr><td>received</td><td>equivalent</td><td>received</td></tr><tr><td>rejected</td><td>equivalent</td><td>declined</td></tr><tr><td>accepted</td><td>equivalent</td><td>accepted</td></tr><tr><td>in-progress</td><td>equivalent</td><td>active</td></tr><tr><td>on-hold</td><td>equivalent</td><td>suspended</td></tr><tr><td>failed</td><td>equivalent</td><td>failed</td></tr><tr><td>completed</td><td>equivalent</td><td>complete</td></tr><tr><td>cancelled</td><td>equivalent</td><td>abandoned</td></tr><tr><td>ready</td><td>equivalent</td><td>on-target</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-task-status",
  version: "4.0.1",
  name: "TaskStatusCanonicalMap",
  title: 'Canonical Mapping for "TaskStatus"',
  status: "draft",
  date: "2019-11-01T09:29:23+11:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The current status of the task."',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/task-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/task-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "entered-in-error",
          target: [
            {
              code: "error",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "draft",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "requested",
          target: [
            {
              code: "requested",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "received",
          target: [
            {
              code: "received",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "rejected",
          target: [
            {
              code: "declined",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "accepted",
          target: [
            {
              code: "accepted",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "in-progress",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "on-hold",
          target: [
            {
              code: "suspended",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "failed",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "completed",
          target: [
            {
              code: "complete",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "cancelled",
          target: [
            {
              code: "abandoned",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "ready",
          target: [
            {
              code: "on-target",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetVerificationresultStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-verificationresult-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>statusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-verificationresult-status)</h2><p>Mapping from <a href="valueset-verificationresult-status.html">http://hl7.org/fhir/ValueSet/verificationresult-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 06/06/2018 12:06:02 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;The validation status of the target&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>attested</td><td>equivalent</td><td>draft</td></tr><tr><td>validated</td><td>equivalent</td><td>accepted</td></tr><tr><td>in-process</td><td>equivalent</td><td>active</td></tr><tr><td>val-fail, reval-fail</td><td>equivalent</td><td>failed</td></tr><tr><td>req-revalid (Requires revalidation)</td><td>equivalent</td><td>replaced</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-verificationresult-status",
  version: "4.0.1",
  name: "statusCanonicalMap",
  title: 'Canonical Mapping for "Status"',
  status: "draft",
  date: "2018-06-06T00:06:02+10:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description: 'Canonical Mapping for "The validation status of the target"',
  sourceCanonical: "http://hl7.org/fhir/ValueSet/verificationresult-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://hl7.org/fhir/CodeSystem/status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "attested",
          target: [
            {
              code: "draft",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "validated",
          target: [
            {
              code: "accepted",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "in-process",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "val-fail, reval-fail",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "req-revalid",
          target: [
            {
              code: "replaced",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;

export const ScValuesetVerificationresultValidationStatus: ConceptMap = {
  resourceType: "ConceptMap",
  id: "sc-verificationresult-validation-status",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><h2>validation-statusCanonicalMap (http://hl7.org/fhir/ConceptMap/sc-verificationresult-validation-status)</h2><p>Mapping from <a href="valueset-verificationresult-validation-status.html">http://hl7.org/fhir/ValueSet/verificationresult-validation-status</a> to <a href="valueset-resource-status.html">http://hl7.org/fhir/ValueSet/resource-status</a></p><p>DRAFT. Published on 06/06/2018 12:06:02 AM by HL7 (FHIR Project) (<a href="http://hl7.org/fhir">http://hl7.org/fhir</a>, <a href="mailto:fhir@lists.hl7.org">fhir@lists.hl7.org</a>). </p><div><p>Canonical Mapping for &quot;Status of the validation of the target against the primary source&quot;</p>\n</div><br/><table class="grid"><tr><td><b>Source Code</b></td><td><b>Equivalence</b></td><td><b>Destination Code</b></td></tr><tr><td>successful</td><td>equivalent</td><td>active</td></tr><tr><td>failed</td><td>equivalent</td><td>failed</td></tr><tr><td>unknown</td><td>equivalent</td><td>unknown</td></tr></table></div>',
  },
  url: "http://hl7.org/fhir/ConceptMap/sc-verificationresult-validation-status",
  version: "4.0.1",
  name: "validation-statusCanonicalMap",
  title: 'Canonical Mapping for "Validation-status"',
  status: "draft",
  date: "2018-06-06T00:06:02+10:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        {
          system: "url",
          value: "http://hl7.org/fhir",
        },
        {
          system: "email",
          value: "fhir@lists.hl7.org",
        },
      ],
    },
  ],
  description:
    'Canonical Mapping for "Status of the validation of the target against the primary source"',
  sourceCanonical:
    "http://hl7.org/fhir/ValueSet/verificationresult-validation-status",
  targetCanonical: "http://hl7.org/fhir/ValueSet/resource-status",
  group: [
    {
      source: "http://terminology.hl7.org/CodeSystem/validation-status",
      target: "http://hl7.org/fhir/resource-status",
      element: [
        {
          code: "successful",
          target: [
            {
              code: "active",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "failed",
          target: [
            {
              code: "failed",
              equivalence: "equivalent",
            },
          ],
        },
        {
          code: "unknown",
          target: [
            {
              code: "unknown",
              equivalence: "equivalent",
            },
          ],
        },
      ],
    },
  ],
} as const;
