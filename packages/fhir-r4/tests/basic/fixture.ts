import type { Basic } from "../../src/v4.0.1/basic/types";

export const BasicExampleNarrative: Basic = {
  resourceType: "Basic",
  id: "basic-example-narrative",
  text: {
    status: "additional",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <h1>Example Narrative</h1> \n      <h2>Plain HTML, No Styles</h2> \n      <h3>Heading 3</h3>\n      <h4>Heading 4</h4>\n      <h5>Heading 5</h5>\n      <h6>Heading 6</h6>\n      <p>\n        Paragraph. <span>span</span>. <a href="#link">Link</a>. <b>Bold</b>, br:<br/> <em>em</em>, <i>Italics</i>,\n        <strong>strong</strong>, <small>small</small>, <big>big</big> <tt>Teletype Text</tt>, <small>small</small>, \n        <dfn>Definition term</dfn>, <q>q</q>, <var>var</var>.\n        All provided by \n        <abbr title="Health Level 7">HL7</abbr>, for <acronym title="Fast Healthcare Interoperability Resources">FHIR</acronym> (<cite>cite</cite>).\n      </p>\n      <blockquote>\n        <p>Paragraph in a blockquote, with an hr after it:</p>\n      </blockquote>\n      <hr/>\n      <div>\n      <p>Paragraph in a div (<a name="link">Link Target</a>)</p>\n      </div>   \n      <ul>\n        <li>Unordered List Item</li>      \n      </ul>   \n      <ol>\n        <li>Ordered List Item</li>\n      </ol>\n      <dl>\n        <dt>DT Item</dt><dd>DD Item</dd>\n      </dl>\n      <pre>\n        Some Pre Text\n          with a line break\n      </pre>\n      <p>Table:</p>\n      <table>\n        <caption>Table Caption</caption>\n        <colgroup>\n          <col style="background-color:red" span="2"/>\n          <col style="background-color:yellow"/>\n        </colgroup>      \n        <thead>\n          <tr>\n            <th>Head Cell 1</th>\n            <th>Head Cell 2</th>\n            <th>Head Cell 3</th>\n          </tr>\n        </thead>\n        <tfoot>\n          <tr>\n            <td>Foot Cell 1</td>\n            <td>Foot Cell 2</td>\n            <td>Foot Cell 3</td>\n          </tr>\n        </tfoot>\n        <tbody>\n          <tr>\n            <td>Body Cell 1</td>\n            <td>Body Cell 2</td>\n            <td>Body Cell 3</td>\n          </tr>\n        </tbody>\n      </table>\n      <code>Code Block</code>\n      <samp>Sample Block</samp>\n      <h2>External Styles</h2> \n      <h3>Text:</h3> \n      <p>Example Text: <span class="bold">bold</span>, <span class="italics">italics</span>, <span class="underline">underline</span> \n        and <span class="strikethrough">strikethrough</span></p>\n      <p class="left">This paragraph is left aligned. The content should be laid out aligned at the left of the screen. The content should be laid out aligned at the left of the screen. The content should be laid out aligned at the left of the screen. The content should be laid out aligned at the left of the screen. The content should be laid out aligned at the left of the screen. </p>  \n      <p class="right">This paragraph is right aligned. The content should be laid out aligned at the right of the screen. The content should be laid out aligned at the right of the screen. The content should be laid out aligned at the right of the screen. The content should be laid out aligned at the right of the screen. The content should be laid out aligned at the right of the screen. </p>  \n      <p class="center">This paragraph is center aligned. The content should be laid out aligned at the center of the screen. The content should be laid out aligned at the center of the screen. The content should be laid out aligned at the center of the screen. The content should be laid out aligned at the center of the screen. The content should be laid out aligned at the center of the screen. </p>  \n      <p class="justify">This paragraph is justified. The content should be laid out aligned at both the left and right of the screen. The content should be laid out aligned at both the left and right of the screen. The content should be laid out aligned at both the left and right of the screen. The content should be laid out aligned at both the left and right of the screen. The content should be laid out aligned at both the left and right of the screen.  </p>  \n      <h3>Table:</h3> \n      <table>\n        <tr>\n          <td class="border-left">Border Left</td>\n          <td class="border-right">Border Right</td>\n          <td class="border-top">Border Top</td>\n          <td class="border-bottom">Border Bottom</td>\n        </tr>\n      </table>\n      <h3>List:</h3> \n      <ol class="arabic">\n        <li>arabic (Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol class="little-roman">\n        <li>little-roman (Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol class="big-roman">\n        <li>big-roman (Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol class="little-alpha">\n        <li>little-alpha (Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol class="big-alpha">\n        <li>big-alpha (Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ul class="unlist">\n        <li>unlist (Item 1)</li>\n        <li>Item Two</li>\n      </ul>\n      <ul class="disc">\n        <li>disc (Item 1)</li>\n        <li>Item Two</li>\n      </ul>\n      <ul class="circle">\n        <li>circle (Item 1)</li>\n        <li>Item Two</li>\n      </ul>\n      <ul class="square">\n        <li>square (Item 1)</li>\n        <li>Item Two</li>\n      </ul>\n      <h2>Internal Styles</h2>\n      <p>Example Text: <span style="font-weight: bold">bold</span>, <span style="font-style: italics">italics</span>, <span style="text-decoration: underline">underline</span> \n        and <span style="text-decoration: line-through">strikethrough</span>. \n        Font-Family <span style="font-family: serif">Serif</span> and <span style="font-family: sans-serif">Sans Serif</span>, \n        Font-size <span style="font-size: 50%">50%</span> <span style="font-size: 80%">80%</span> <span style="font-size: 150%">150%</span>, \n        Font-Color  <span style="color: navy">Navy</span> <span style="color: maroon">Maroon</span> <span style="color: brown">Brown</span>,\n        Background-color <span style="background-color: aqua">Aqua</span> <span style="color: silver">Silver</span> <span style="color: pink">Pink</span>.\n       </p>\n       <p>\n         Whitespace Control:\n       </p>\n       <p style="white-space: normal">Normal    Whitespace\n          Test, long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long sentence</p>\n       <p style="white-space: nowrap">No-Wrap    Whitespace\n          Test, long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long sentence</p>\n       <p style="white-space: pre">Pre    Whitespace\n          Test, long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long sentence</p>\n       <p style="white-space: pre-line">Pre-Line    Whitespace\n          Test, long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long sentence</p>\n       <p style="white-space: pre-wrap">Pre-Wrap    Whitespace\n          Test, long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long long sentence</p>\n        \n      <p style="text-align: left">This paragraph is left aligned. The content should be laid out aligned at the left of the screen. The content should be laid out aligned at the left of the screen. The content should be laid out aligned at the left of the screen. The content should be laid out aligned at the left of the screen. The content should be laid out aligned at the left of the screen. </p>  \n      <p style="text-align: right">This paragraph is right aligned. The content should be laid out aligned at the right of the screen. The content should be laid out aligned at the right of the screen. The content should be laid out aligned at the right of the screen. The content should be laid out aligned at the right of the screen. The content should be laid out aligned at the right of the screen. </p>  \n      <p style="text-align: center">This paragraph is center aligned. The content should be laid out aligned at the center of the screen. The content should be laid out aligned at the center of the screen. The content should be laid out aligned at the center of the screen. The content should be laid out aligned at the center of the screen. The content should be laid out aligned at the center of the screen. </p>  \n      <p style="text-align: justify">This paragraph is justified. The content should be laid out aligned at both the left and right of the screen. The content should be laid out aligned at both the left and right of the screen. The content should be laid out aligned at both the left and right of the screen. The content should be laid out aligned at both the left and right of the screen. The content should be laid out aligned at both the left and right of the screen.  </p>  \n      \n      <ol style="list-style-type: armenian">\n        <li>armenian (Item 1)</li>\n        <li>Item Two</li>\n      </ol>      \t\n      <ol style="list-style-type: cjk-ideographic">\n        <li>cjk-ideographic\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: decimal">\n        <li>decimal\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: decimal-leading-zero">\n        <li>decimal-leading-zero\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: georgian">\n        <li>georgian\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: hebrew">\n        <li>hebrew\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: hiragana">\n        <li>hiragana\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: hiragana-iroha">\n        <li>hiragana-iroha\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: inherit">\n        <li>inherit\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: katakana">\n        <li>katakana\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: katakana-iroha">\n        <li>katakana-iroha\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: lower-alpha">\n        <li>lower-alpha\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: lower-greek">\n        <li>lower-greek\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: lower-latin">\n        <li>lower-latin\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: lower-roman">\n        <li>lower-roman\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: none">\n        <li>none\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: upper-alpha">\n        <li>upper-alpha\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: upper-latin">\n        <li>upper-latin\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: upper-roman">\n        <li>upper-roman\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      <ol style="list-style-type: upper-roman">\n        <li>upper-roman\t(Item 1)</li>\n        <li>Item Two</li>\n      </ol>\n      \n    </div>',
  },
  code: {
    text: "Example Narrative Tester",
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

export const BasicExample: Basic = {
  resourceType: "Basic",
  id: "referral",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p><b>Patient:</b>Roel</p>\n      <p><b>Requestor:</b>Dokter Bronsig</p>\n      <p><b>Type:</b>Consultation</p>\n      <p><b>Target Date:</b>April 1 - April 31</p>\n      <p>COMPLETED</p>\n      <b>The patient had fever peaks over the last couple of days. He is worried about these peaks.</b>\n    </div>',
  },
  extension: [
    {
      url: "http://example.org/do-not-use/fhir-extensions/referral#requestingPractitioner",
      valueReference: {
        reference: "Practitioner/f201",
        display: "Dokter Bronsig",
      },
    },
    {
      url: "http://example.org/do-not-use/fhir-extensions/referral#notes",
      valueString:
        "The patient had fever peaks over the last couple of days. He is worried about these peaks.",
    },
    {
      url: "http://example.org/do-not-use/fhir-extensions/referral#fulfillingEncounter",
      valueReference: {
        reference: "Encounter/f201",
      },
    },
  ],
  modifierExtension: [
    {
      url: "http://example.org/do-not-use/fhir-extensions/referral#referredForService",
      valueCodeableConcept: {
        coding: [
          {
            system: "http://snomed.info/sct",
            code: "11429006",
            display: "Consultation",
          },
        ],
      },
    },
    {
      url: "http://example.org/do-not-use/fhir-extensions/referral#targetDate",
      valuePeriod: {
        start: "2013-04-01",
        end: "2013-04-15",
      },
    },
    {
      url: "http://example.org/do-not-use/fhir-extensions/referral#status",
      valueCode: "complete",
    },
  ],
  identifier: [
    {
      system: "http://goodhealth.org/basic/identifiers",
      value: "19283746",
    },
  ],
  code: {
    coding: [
      {
        system: "http://terminology.hl7.org/CodeSystem/basic-resource-type",
        code: "referral",
      },
    ],
  },
  subject: {
    reference: "Patient/f201",
    display: "Roel",
  },
  created: "2013-05-14",
  author: {
    reference: "Practitioner/example",
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

export const BasicExample2: Basic = {
  resourceType: "Basic",
  id: "classModel",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <p><b>Class1</b></p>\n      <ul>\n        <li>Attribute1: 1..*</li>\n        <li>Attribute2: 0..1</li>\n      </ul>\n    </div>',
  },
  extension: [
    {
      url: "http://example.org/do-not-use/fhir-extensions/UMLclass",
      extension: [
        {
          url: "name",
          valueString: "Class1",
        },
        {
          url: "attribute",
          extension: [
            {
              url: "name",
              valueString: "attribute1",
            },
            {
              url: "minOccurs",
              valueInteger: 1,
            },
            {
              url: "maxOccurs",
              valueCode: "*",
            },
          ],
        },
        {
          url: "attribute",
          extension: [
            {
              url: "name",
              valueString: "attribute2",
            },
            {
              url: "minOccurs",
              valueInteger: 0,
            },
            {
              url: "maxOccurs",
              valueInteger: 1,
            },
          ],
        },
      ],
    },
  ],
  code: {
    coding: [
      {
        system: "http://example.org/do-not-use/fhir-codes#resourceTypes",
        code: "UMLCLASSMODEL",
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
