import type { TerminologyCapabilities } from "../../src/v4.0.1/terminologycapabilities/types";

export const TerminologycapabilitiesExample: TerminologyCapabilities = {
  resourceType: "TerminologyCapabilities",
  id: "example",
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n\t\t\t<p>The EHR Server supports the following transactions for the resource Person: read, vread, \n        update, history, search(name,gender), create and updates.</p>\n\t\t\t<p>The EHR System supports the following message: admin-notify::Person.</p>\n\t\t\t<p>The EHR Application has a \n        <a href="http://fhir.hl7.org/base/Profilebc054d23-75e1-4dc6-aca5-838b6b1ac81d/_history/b5fdd9fc-b021-4ea1-911a-721a60663796">general document profile</a>.\n      </p>\n\t\t</div>',
  },
  url: "urn:uuid:68D043B5-9ECF-4559-A57A-396E0D452311",
  version: "20130510",
  name: "ACME-EHR",
  title: "ACME EHR capability statement",
  status: "draft",
  experimental: true,
  date: "2012-01-04",
  publisher: "ACME Corporation",
  contact: [
    {
      name: "System Administrator",
      telecom: [
        {
          system: "email",
          value: "wile@acme.org",
        },
      ],
    },
  ],
  description:
    "This is the FHIR capability statement for the main EHR at ACME for the private interface - it does not describe the public interface",
  kind: "instance",
  software: {
    name: "TxServer",
    version: "0.1.2",
  },
  implementation: {
    description: "Acme Terminology Server",
    url: "http://example.org/tx",
  },
  codeSearch: "explicit",
} as const;
