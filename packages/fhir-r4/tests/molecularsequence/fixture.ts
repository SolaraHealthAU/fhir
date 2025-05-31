import type { MolecularSequence } from "../../src/v4.0.1/molecularsequence/types";

export const Coord0baseExample: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "coord-0-base",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: coord-0-base</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqString</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>ACGTAGTC</td><td>watson</td><td>0</td><td>8</td></tr></table><blockquote><p><b>variant</b></p><p><b>start</b>: 2</p><p><b>end</b>: 2</p><p><b>observedAllele</b>: ATG</p><p><b>referenceAllele</b>: -</p><p><b>cigar</b>: 3I</p></blockquote><blockquote><p><b>variant</b></p><p><b>start</b>: 4</p><p><b>end</b>: 5</p><p><b>observedAllele</b>: T</p><p><b>referenceAllele</b>: A</p><p><b>cigar</b>: 1M</p></blockquote><blockquote><p><b>variant</b></p><p><b>start</b>: 6</p><p><b>end</b>: 7</p><p><b>observedAllele</b>: -</p><p><b>referenceAllele</b>: T</p><p><b>cigar</b>: 1D</p></blockquote><p><b>observedSeq</b>: ACATGGTAGC</p></div>',
  },
  type: "dna",
  coordinateSystem: 0,
  referenceSeq: {
    referenceSeqString: "ACGTAGTC",
    strand: "watson",
    windowStart: 0,
    windowEnd: 8,
  },
  variant: [
    {
      start: 2,
      end: 2,
      observedAllele: "ATG",
      referenceAllele: "-",
      cigar: "3I",
    },
    {
      start: 4,
      end: 5,
      observedAllele: "T",
      referenceAllele: "A",
      cigar: "1M",
    },
    {
      start: 6,
      end: 7,
      observedAllele: "-",
      referenceAllele: "T",
      cigar: "1D",
    },
  ],
  observedSeq: "ACATGGTAGC",
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

export const Coord1baseExample: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "coord-1-base",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: coord-1-base</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 1</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqString</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>ACGTAGTC</td><td>watson</td><td>1</td><td>8</td></tr></table><blockquote><p><b>variant</b></p><p><b>start</b>: 2</p><p><b>end</b>: 3</p><p><b>observedAllele</b>: ATG</p><p><b>referenceAllele</b>: -</p><p><b>cigar</b>: 3I</p></blockquote><blockquote><p><b>variant</b></p><p><b>start</b>: 5</p><p><b>end</b>: 5</p><p><b>observedAllele</b>: T</p><p><b>referenceAllele</b>: A</p><p><b>cigar</b>: 3I</p></blockquote><blockquote><p><b>variant</b></p><p><b>start</b>: 7</p><p><b>end</b>: 7</p><p><b>observedAllele</b>: -</p><p><b>referenceAllele</b>: T</p><p><b>cigar</b>: 1D</p></blockquote><p><b>observedSeq</b>: ACATGGTAGC</p></div>',
  },
  type: "dna",
  coordinateSystem: 1,
  referenceSeq: {
    referenceSeqString: "ACGTAGTC",
    strand: "watson",
    windowStart: 1,
    windowEnd: 8,
  },
  variant: [
    {
      start: 2,
      end: 3,
      observedAllele: "ATG",
      referenceAllele: "-",
      cigar: "3I",
    },
    {
      start: 5,
      end: 5,
      observedAllele: "T",
      referenceAllele: "A",
      cigar: "3I",
    },
    {
      start: 7,
      end: 7,
      observedAllele: "-",
      referenceAllele: "T",
      cigar: "1D",
    },
  ],
  observedSeq: "ACATGGTAGC",
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

export const MolecularsequenceExample: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><p><b>patient</b>: <a>Patient/example</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NC_000009.11 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NC_000009.11' = 'NC_000009.11)</span></td><td>watson</td><td>22125500</td><td>22125510</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td></tr><tr><td>*</td><td>22125503</td><td>22125504</td><td>C</td><td>G</td></tr></table><h3>Repositories</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Url</b></td><td><b>Name</b></td><td><b>VariantsetId</b></td></tr><tr><td>*</td><td>openapi</td><td><a>http://grch37.rest.ensembl.org/ga4gh/variants/3:rs1333049?content-type=application/json</a></td><td>GA4GH API</td><td>3:rs1333049</td></tr></table></div>",
  },
  type: "dna",
  coordinateSystem: 0,
  patient: {
    reference: "Patient/example",
  },
  referenceSeq: {
    referenceSeqId: {
      coding: [
        {
          system: "http://www.ncbi.nlm.nih.gov/nuccore",
          code: "NC_000009.11",
        },
      ],
    },
    strand: "watson",
    windowStart: 22125500,
    windowEnd: 22125510,
  },
  variant: [
    {
      start: 22125503,
      end: 22125504,
      observedAllele: "C",
      referenceAllele: "G",
    },
  ],
  repository: [
    {
      type: "openapi",
      url: "http://grch37.rest.ensembl.org/ga4gh/variants/3:rs1333049?content-type=application/json",
      name: "GA4GH API",
      variantsetId: "3:rs1333049",
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

export const SequenceComplexVariant: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "sequence-complex-variant",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: sequence-complex-variant</p><p><b>identifier</b>: ?? (OFFICIAL)</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 1</p><p><b>specimen</b>: <a>Molecular Specimen ID: MLD45-Z4-1234</a></p><p><b>device</b>: 12 lead EKG Device Metric</p><p><b>performer</b>: <a>HL7</a></p><p><b>quantity</b>: 25</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NC_000002.12 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NC_000002.12' = 'NC_000002.12)</span></td><td>watson</td><td>128273724</td><td>128273754</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td><td><b>Cigar</b></td></tr><tr><td>*</td><td>128273724</td><td>128273736</td><td>CTCATTGT</td><td>CTCCATTGCATGCGTT</td><td>3M1D4M6N2M</td></tr></table><p><b>readCoverage</b>: 1</p><h3>Repositories</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>DatasetId</b></td><td><b>ReadsetId</b></td></tr><tr><td>*</td><td>other</td><td>Ensembl</td><td>v1beta2</td></tr></table></div>",
  },
  identifier: [
    {
      use: "official",
    },
  ],
  type: "dna",
  coordinateSystem: 1,
  specimen: {
    reference: "Specimen/genetics-example1-somatic",
    display: "Molecular Specimen ID: MLD45-Z4-1234",
  },
  device: {
    display: "12 lead EKG Device Metric",
  },
  performer: {
    reference: "Organization/hl7",
    display: "HL7",
  },
  quantity: {
    value: 25,
  },
  referenceSeq: {
    referenceSeqId: {
      coding: [
        {
          system: "http://www.ncbi.nlm.nih.gov/nuccore",
          code: "NC_000002.12",
        },
      ],
    },
    strand: "watson",
    windowStart: 128273724,
    windowEnd: 128273754,
  },
  variant: [
    {
      start: 128273724,
      end: 128273736,
      observedAllele: "CTCATTGT",
      referenceAllele: "CTCCATTGCATGCGTT",
      cigar: "3M1D4M6N2M",
    },
  ],
  readCoverage: 1,
  repository: [
    {
      type: "other",
      datasetId: "Ensembl",
      readsetId: "v1beta2",
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

export const SequenceExampleTpmtOne: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "example-TPMT-one",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-TPMT-one</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 1</p><p><b>patient</b>: <a>Patient/example</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NT_007592.15 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NT_007592.15' = 'NT_007592.15)</span></td><td>watson</td><td>18130918</td><td>18143955</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td></tr><tr><td>*</td><td>18139214</td><td>18139214</td><td>A</td><td>G</td></tr></table><p><b>observedSeq</b>: T-C-C-C-A-C-C-C</p></div>",
  },
  type: "dna",
  coordinateSystem: 1,
  patient: {
    reference: "Patient/example",
  },
  referenceSeq: {
    referenceSeqId: {
      coding: [
        {
          system: "http://www.ncbi.nlm.nih.gov/nuccore",
          code: "NT_007592.15",
        },
      ],
    },
    strand: "watson",
    windowStart: 18130918,
    windowEnd: 18143955,
  },
  variant: [
    {
      start: 18139214,
      end: 18139214,
      observedAllele: "A",
      referenceAllele: "G",
    },
  ],
  observedSeq: "T-C-C-C-A-C-C-C",
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

export const SequenceExampleTpmtTwo: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "example-TPMT-two",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-TPMT-two</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 1</p><p><b>patient</b>: <a>Patient/example</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NT_007592.15 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NT_007592.15' = 'NT_007592.15)</span></td><td>watson</td><td>18130918</td><td>18143955</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td></tr><tr><td>*</td><td>18131012</td><td>18131012</td><td>T</td><td>C</td></tr></table><p><b>observedSeq</b>: T-C-T-C-G-C-C-C</p></div>",
  },
  type: "dna",
  coordinateSystem: 1,
  patient: {
    reference: "Patient/example",
  },
  referenceSeq: {
    referenceSeqId: {
      coding: [
        {
          system: "http://www.ncbi.nlm.nih.gov/nuccore",
          code: "NT_007592.15",
        },
      ],
    },
    strand: "watson",
    windowStart: 18130918,
    windowEnd: 18143955,
  },
  variant: [
    {
      start: 18131012,
      end: 18131012,
      observedAllele: "T",
      referenceAllele: "C",
    },
  ],
  observedSeq: "T-C-T-C-G-C-C-C",
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

export const SequenceExampleFdaComparisons: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "fda-vcf-comparison",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: fda-vcf-comparison</p><p><b>coordinateSystem</b>: 1</p><p><b>patient</b>: <a>Patient/example</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NC_000001.11 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NC_000001.11' = 'NC_000001.11)</span></td><td>watson</td><td>10453</td><td>101770080</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td></tr><tr><td>*</td><td>13116</td><td>13117</td><td>T</td><td>G</td></tr></table><h3>Qualities</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>StandardSequence</b></td><td><b>Start</b></td><td><b>End</b></td><td><b>Score</b></td><td><b>Method</b></td><td><b>TruthTP</b></td><td><b>TruthFN</b></td><td><b>QueryFP</b></td><td><b>GtFP</b></td><td><b>Precision</b></td><td><b>FScore</b></td></tr><tr><td>*</td><td>unknown</td><td>file-BkZxBZ00bpJVk2q6x43b1YBx <span>(Details : {https://precision.fda.gov/files/ code 'file-BkZxBZ00bpJVk2q6x43b1YBx' = 'file-BkZxBZ00bpJVk2q6x43b1YBx)</span></td><td>10453</td><td>101770080</td><td>5.000</td><td>VCF Comparison <span>(Details : {https://precision.fda.gov/apps/ code 'app-BqB9XZ8006ZZ2g5KzGXP3fpq' = 'app-BqB9XZ8006ZZ2g5KzGXP3fpq)</span></td><td>129481</td><td>3168</td><td>1507</td><td>2186</td><td>0.9885</td><td>0.9823</td></tr></table><h3>Repositories</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Url</b></td><td><b>Name</b></td></tr><tr><td>*</td><td>login</td><td><a>https://precision.fda.gov/comparisons/1850</a></td><td>FDA</td></tr></table></div>",
  },
  coordinateSystem: 1,
  patient: {
    reference: "Patient/example",
  },
  referenceSeq: {
    referenceSeqId: {
      coding: [
        {
          system: "http://www.ncbi.nlm.nih.gov/nuccore",
          code: "NC_000001.11",
        },
      ],
    },
    strand: "watson",
    windowStart: 10453,
    windowEnd: 101770080,
  },
  variant: [
    {
      start: 13116,
      end: 13117,
      observedAllele: "T",
      referenceAllele: "G",
    },
  ],
  quality: [
    {
      type: "unknown",
      standardSequence: {
        coding: [
          {
            system: "https://precision.fda.gov/files/",
            code: "file-BkZxBZ00bpJVk2q6x43b1YBx",
          },
        ],
      },
      start: 10453,
      end: 101770080,
      score: {
        value: 5,
      },
      method: {
        coding: [
          {
            system: "https://precision.fda.gov/apps/",
            code: "app-BqB9XZ8006ZZ2g5KzGXP3fpq",
          },
        ],
        text: "VCF Comparison",
      },
      truthTP: 129481,
      truthFN: 3168,
      queryFP: 1507,
      gtFP: 2186,
      precision: 0.9885,
      fScore: 0.9823,
    },
  ],
  repository: [
    {
      type: "login",
      url: "https://precision.fda.gov/comparisons/1850",
      name: "FDA",
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

export const SequenceExampleFdaVcfeval: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "fda-vcfeval-comparison",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: fda-vcfeval-comparison</p><p><b>coordinateSystem</b>: 1</p><p><b>patient</b>: <a>Patient/example</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NC_000001.11 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NC_000001.11' = 'NC_000001.11)</span></td><td>watson</td><td>10453</td><td>101770080</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td></tr><tr><td>*</td><td>13116</td><td>13117</td><td>T</td><td>G</td></tr></table><blockquote><p><b>quality</b></p><p><b>type</b>: indel</p><p><b>standardSequence</b>: file-BkZxBZ00bpJVk2q6x43b1YBx <span>(Details : {https://precision.fda.gov/files/ code 'file-BkZxBZ00bpJVk2q6x43b1YBx' = 'file-BkZxBZ00bpJVk2q6x43b1YBx)</span></p><p><b>start</b>: 10453</p><p><b>end</b>: 101770080</p><p><b>method</b>: Vcfeval + Hap.py Comparison <span>(Details : {https://precision.fda.gov/apps/ code 'app-BxfGF8j02pBZzZxbzZxP725P' = 'app-BxfGF8j02pBZzZxbzZxP725P)</span></p><p><b>truthTP</b>: 7749</p><p><b>truthFN</b>: 2554</p><p><b>queryFP</b>: 10670</p><p><b>gtFP</b>: 2186</p><p><b>precision</b>: 0.428005</p><p><b>recall</b>: 0.752111</p></blockquote><blockquote><p><b>quality</b></p><p><b>type</b>: snp</p><p><b>standardSequence</b>: file-BkZxBZ00bpJVk2q6x43b1YBx <span>(Details : {https://precision.fda.gov/files/ code 'file-BkZxBZ00bpJVk2q6x43b1YBx' = 'file-BkZxBZ00bpJVk2q6x43b1YBx)</span></p><p><b>start</b>: 10453</p><p><b>end</b>: 101770080</p><p><b>method</b>: Vcfeval + Hap.py Comparison <span>(Details : {https://precision.fda.gov/apps/ code 'app-BxfGF8j02pBZzZxbzZxP725P' = 'app-BxfGF8j02pBZzZxbzZxP725P)</span></p><p><b>truthTP</b>: 92106</p><p><b>truthFN</b>: 1247</p><p><b>queryFP</b>: 21744</p><p><b>gtFP</b>: 493</p><p><b>precision</b>: 0.808602</p><p><b>recall</b>: 0.986642</p></blockquote><h3>Repositories</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Url</b></td><td><b>Name</b></td></tr><tr><td>*</td><td>login</td><td><a>https://precision.fda.gov/jobs/job-ByxYPx809jFVy21KJG74Jg3Y</a></td><td>FDA</td></tr></table></div>",
  },
  coordinateSystem: 1,
  patient: {
    reference: "Patient/example",
  },
  referenceSeq: {
    referenceSeqId: {
      coding: [
        {
          system: "http://www.ncbi.nlm.nih.gov/nuccore",
          code: "NC_000001.11",
        },
      ],
    },
    strand: "watson",
    windowStart: 10453,
    windowEnd: 101770080,
  },
  variant: [
    {
      start: 13116,
      end: 13117,
      observedAllele: "T",
      referenceAllele: "G",
    },
  ],
  quality: [
    {
      type: "indel",
      standardSequence: {
        coding: [
          {
            system: "https://precision.fda.gov/files/",
            code: "file-BkZxBZ00bpJVk2q6x43b1YBx",
          },
        ],
      },
      start: 10453,
      end: 101770080,
      method: {
        coding: [
          {
            system: "https://precision.fda.gov/apps/",
            code: "app-BxfGF8j02pBZzZxbzZxP725P",
          },
        ],
        text: "Vcfeval + Hap.py Comparison",
      },
      truthTP: 7749,
      truthFN: 2554,
      queryFP: 10670,
      gtFP: 2186,
      precision: 0.428005,
      recall: 0.752111,
    },
    {
      type: "snp",
      standardSequence: {
        coding: [
          {
            system: "https://precision.fda.gov/files/",
            code: "file-BkZxBZ00bpJVk2q6x43b1YBx",
          },
        ],
      },
      start: 10453,
      end: 101770080,
      method: {
        coding: [
          {
            system: "https://precision.fda.gov/apps/",
            code: "app-BxfGF8j02pBZzZxbzZxP725P",
          },
        ],
        text: "Vcfeval + Hap.py Comparison",
      },
      truthTP: 92106,
      truthFN: 1247,
      queryFP: 21744,
      gtFP: 493,
      precision: 0.808602,
      recall: 0.986642,
    },
  ],
  repository: [
    {
      type: "login",
      url: "https://precision.fda.gov/jobs/job-ByxYPx809jFVy21KJG74Jg3Y",
      name: "FDA",
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

export const SequenceExampleFda: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "fda-example",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: fda-example</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 1</p><p><b>patient</b>: <a>Patient/example</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NC_000001.11 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NC_000001.11' = 'NC_000001.11)</span></td><td>watson</td><td>10453</td><td>101770080</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td></tr><tr><td>*</td><td>13116</td><td>13117</td><td>T</td><td>G</td></tr></table><h3>Qualities</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>StandardSequence</b></td><td><b>Start</b></td><td><b>End</b></td><td><b>Method</b></td><td><b>TruthTP</b></td><td><b>QueryTP</b></td><td><b>TruthFN</b></td><td><b>QueryFP</b></td><td><b>GtFP</b></td><td><b>Precision</b></td><td><b>Recall</b></td><td><b>FScore</b></td></tr><tr><td>*</td><td>snp</td><td>file-Bk50V4Q0qVb65P0v2VPbfYPZ <span>(Details : {https://precision.fda.gov/files/ code 'file-Bk50V4Q0qVb65P0v2VPbfYPZ' = 'file-Bk50V4Q0qVb65P0v2VPbfYPZ)</span></td><td>10453</td><td>101770080</td><td>Vcfeval + Hap.py Comparison <span>(Details : {https://precision.fda.gov/jobs/ code 'job-ByxYPx809jFVy21KJG74Jg3Y' = 'job-ByxYPx809jFVy21KJG74Jg3Y)</span></td><td>7749</td><td>7984</td><td>2554</td><td>10670</td><td>2186</td><td>0.428005</td><td>0.752111</td><td>0.545551</td></tr></table><h3>Repositories</h3><table><tr><td>-</td><td><b>Type</b></td><td><b>Url</b></td><td><b>Name</b></td><td><b>VariantsetId</b></td></tr><tr><td>*</td><td>login</td><td><a>https://precision.fda.gov/files/file-Bx37ZK009P4bX5g3qjkFZV38</a></td><td>FDA</td><td>file-Bx37ZK009P4bX5g3qjkFZV38</td></tr></table></div>",
  },
  type: "dna",
  coordinateSystem: 1,
  patient: {
    reference: "Patient/example",
  },
  referenceSeq: {
    referenceSeqId: {
      coding: [
        {
          system: "http://www.ncbi.nlm.nih.gov/nuccore",
          code: "NC_000001.11",
        },
      ],
    },
    strand: "watson",
    windowStart: 10453,
    windowEnd: 101770080,
  },
  variant: [
    {
      start: 13116,
      end: 13117,
      observedAllele: "T",
      referenceAllele: "G",
    },
  ],
  quality: [
    {
      type: "snp",
      standardSequence: {
        coding: [
          {
            system: "https://precision.fda.gov/files/",
            code: "file-Bk50V4Q0qVb65P0v2VPbfYPZ",
          },
        ],
      },
      start: 10453,
      end: 101770080,
      method: {
        coding: [
          {
            system: "https://precision.fda.gov/jobs/",
            code: "job-ByxYPx809jFVy21KJG74Jg3Y",
          },
        ],
        text: "Vcfeval + Hap.py Comparison",
      },
      truthTP: 7749,
      queryTP: 7984,
      truthFN: 2554,
      queryFP: 10670,
      gtFP: 2186,
      precision: 0.428005,
      recall: 0.752111,
      fScore: 0.545551,
    },
  ],
  repository: [
    {
      type: "login",
      url: "https://precision.fda.gov/files/file-Bx37ZK009P4bX5g3qjkFZV38",
      name: "FDA",
      variantsetId: "file-Bx37ZK009P4bX5g3qjkFZV38",
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

export const SequenceExamplePgx1: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "example-pgx-1",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-pgx-1</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><p><b>patient</b>: <a>Patient/example</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>Orientation</b></td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>sense</td><td>NG_007726.3 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NG_007726.3' = 'NG_007726.3)</span></td><td>watson</td><td>55227970</td><td>55227980</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td><td><b>VariantPointer</b></td></tr><tr><td>*</td><td>55227976</td><td>55227977</td><td>G</td><td>T</td><td><a>Target Haplotype Observation</a></td></tr></table></div>",
  },
  type: "dna",
  coordinateSystem: 0,
  patient: {
    reference: "Patient/example",
  },
  referenceSeq: {
    orientation: "sense",
    referenceSeqId: {
      coding: [
        {
          system: "http://www.ncbi.nlm.nih.gov/nuccore",
          code: "NG_007726.3",
        },
      ],
    },
    strand: "watson",
    windowStart: 55227970,
    windowEnd: 55227980,
  },
  variant: [
    {
      start: 55227976,
      end: 55227977,
      observedAllele: "G",
      referenceAllele: "T",
      variantPointer: {
        reference: "Observation/example-haplotype1",
        display: "Target Haplotype Observation",
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

export const SequenceExamplePgx2: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "example-pgx-2",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: example-pgx-2</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><p><b>patient</b>: <a>Patient/example</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>Orientation</b></td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>sense</td><td>NG_007726.3 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NG_007726.3' = 'NG_007726.3)</span></td><td>watson</td><td>55227970</td><td>55227980</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td><td><b>VariantPointer</b></td></tr><tr><td>*</td><td>55227978</td><td>55227979</td><td>G</td><td>T</td><td><a>Target Haplotype Observation</a></td></tr></table></div>",
  },
  type: "dna",
  coordinateSystem: 0,
  patient: {
    reference: "Patient/example",
  },
  referenceSeq: {
    orientation: "sense",
    referenceSeqId: {
      coding: [
        {
          system: "http://www.ncbi.nlm.nih.gov/nuccore",
          code: "NG_007726.3",
        },
      ],
    },
    strand: "watson",
    windowStart: 55227970,
    windowEnd: 55227980,
  },
  variant: [
    {
      start: 55227978,
      end: 55227979,
      observedAllele: "G",
      referenceAllele: "T",
      variantPointer: {
        reference: "Observation/example-haplotype2",
        display: "Target Haplotype Observation",
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

export const SequenceGeneticsExampleBreastcancer: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "breastcancer",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: breastcancer</p><p><b>type</b>: rna</p><p><b>coordinateSystem</b>: 0</p><p><b>patient</b>: <a>Patient/brcapat</a></p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>Homo sapiens BRCA2, DNA repair associated (BRCA2), mRNA <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore/ code 'NM_000059.3' = 'NM_000059.3', given as 'Homo sapiens BRCA2, DNA repair associated (BRCA2), mRNA'})</span></td><td>101488058</td><td>101499444</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td></tr><tr><td>*</td><td>32316186</td><td>32316187</td><td>A</td><td>C</td></tr></table></div>",
  },
  type: "rna",
  coordinateSystem: 0,
  patient: {
    reference: "Patient/brcapat",
  },
  referenceSeq: {
    referenceSeqId: {
      coding: [
        {
          system: "http://www.ncbi.nlm.nih.gov/nuccore/",
          code: "NM_000059.3",
          display: "Homo sapiens BRCA2, DNA repair associated (BRCA2), mRNA",
        },
      ],
    },
    windowStart: 101488058,
    windowEnd: 101499444,
  },
  variant: [
    {
      start: 32316186,
      end: 32316187,
      observedAllele: "A",
      referenceAllele: "C",
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

export const SequenceGraphicExample1: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "graphic-example-1",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: graphic-example-1</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NC_000002.12 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NC_000002.12' = 'NC_000002.12)</span></td><td>watson</td><td>128273724</td><td>128273732</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td><td><b>Cigar</b></td></tr><tr><td>*</td><td>128273725</td><td>128273726</td><td>G</td><td>T</td><td>1M</td></tr></table><p><b>pointer</b>: <a>MolecularSequence/graphic-example-2</a></p></div>",
  },
  type: "dna",
  coordinateSystem: 0,
  referenceSeq: {
    referenceSeqId: {
      coding: [
        {
          system: "http://www.ncbi.nlm.nih.gov/nuccore",
          code: "NC_000002.12",
        },
      ],
    },
    strand: "watson",
    windowStart: 128273724,
    windowEnd: 128273732,
  },
  variant: [
    {
      start: 128273725,
      end: 128273726,
      observedAllele: "G",
      referenceAllele: "T",
      cigar: "1M",
    },
  ],
  pointer: [
    {
      reference: "MolecularSequence/graphic-example-2",
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

export const SequenceGraphicExample2: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "graphic-example-2",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: graphic-example-2</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqString</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>CGCCATTG</td><td>watson</td><td>0</td><td>8</td></tr></table><p><b>pointer</b>: <a>MolecularSequence/graphic-example-3</a></p></div>',
  },
  type: "dna",
  coordinateSystem: 0,
  referenceSeq: {
    referenceSeqString: "CGCCATTG",
    strand: "watson",
    windowStart: 0,
    windowEnd: 8,
  },
  pointer: [
    {
      reference: "MolecularSequence/graphic-example-3",
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

export const SequenceGraphicExample3: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "graphic-example-3",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: graphic-example-3</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqPointer</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td><a>MolecularSequence/graphic-example-5</a></td><td>watson</td><td>128273732</td><td>128273736</td></tr></table><h3>Variants</h3><table><tr><td>-</td><td><b>Start</b></td><td><b>End</b></td><td><b>ObservedAllele</b></td><td><b>ReferenceAllele</b></td><td><b>Cigar</b></td></tr><tr><td>*</td><td>1282737234</td><td>128273736</td><td>GA</td><td>AT</td><td>2M</td></tr></table><p><b>pointer</b>: <a>MolecularSequence/graphic-example-4</a></p></div>',
  },
  type: "dna",
  coordinateSystem: 0,
  referenceSeq: {
    referenceSeqPointer: {
      reference: "MolecularSequence/graphic-example-5",
    },
    strand: "watson",
    windowStart: 128273732,
    windowEnd: 128273736,
  },
  variant: [
    {
      start: 1282737234,
      end: 128273736,
      observedAllele: "GA",
      referenceAllele: "AT",
      cigar: "2M",
    },
  ],
  pointer: [
    {
      reference: "MolecularSequence/graphic-example-4",
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

export const SequenceGraphicExample4: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "graphic-example-4",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: graphic-example-4</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>Chromosome</b></td><td><b>GenomeBuild</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>chromosome 2 <span>(Details : {http://terminology.hl7.org/CodeSystem/chromosome-human code '2' = 'chromosome 2', given as 'chromosome 2'})</span></td><td>GRCh 38</td><td>watson</td><td>128273736</td><td>128273740</td></tr></table></div>",
  },
  type: "dna",
  coordinateSystem: 0,
  referenceSeq: {
    chromosome: {
      coding: [
        {
          system: "http://terminology.hl7.org/CodeSystem/chromosome-human",
          code: "2",
          display: "chromosome 2",
        },
      ],
    },
    genomeBuild: "GRCh 38",
    strand: "watson",
    windowStart: 128273736,
    windowEnd: 128273740,
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

export const SequenceGraphicExample5: MolecularSequence = {
  resourceType: "MolecularSequence",
  id: "graphic-example-5",
  text: {
    status: "generated",
    div: "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: graphic-example-5</p><p><b>type</b>: dna</p><p><b>coordinateSystem</b>: 0</p><h3>ReferenceSeqs</h3><table><tr><td>-</td><td><b>ReferenceSeqId</b></td><td><b>Strand</b></td><td><b>WindowStart</b></td><td><b>WindowEnd</b></td></tr><tr><td>*</td><td>NC_000002.12 <span>(Details : {http://www.ncbi.nlm.nih.gov/nuccore code 'NC_000002.12' = 'NC_000002.12)</span></td><td>watson</td><td>128273732</td><td>128273736</td></tr></table></div>",
  },
  type: "dna",
  coordinateSystem: 0,
  referenceSeq: {
    referenceSeqId: {
      coding: [
        {
          system: "http://www.ncbi.nlm.nih.gov/nuccore",
          code: "NC_000002.12",
        },
      ],
    },
    strand: "watson",
    windowStart: 128273732,
    windowEnd: 128273736,
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
