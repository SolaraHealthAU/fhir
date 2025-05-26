import { z } from 'zod';

// --- Extension Schema ---
// Allow multiple value types (valueUrl, valueString, etc.)
const ExtensionSchema = z
  .object({
    url: z.string(),
    valueUrl: z.string().optional(),
    valueString: z.string().optional(),
  })
  .passthrough();

// --- Type Schema ---
// A FHIR type object with possible extensions
const TypeSchema = z
  .object({
    code: z.string(),
    extension: z.array(ExtensionSchema).optional(),
  })
  .passthrough();

// --- Element Snapshot Schema ---
// Represents one element in the snapshot with extra optional keys for extended definitions.
const ElementSnapshotSchema = z
  .object({
    id: z.string(),
    path: z.string(),
    representation: z.array(z.string()).optional(),
    short: z.string().optional(),
    definition: z.string().optional(),
    // Some elements (in human-friendly snapshots) may have extra descriptive keys.
    comment: z.string().optional(),
    requirements: z.string().optional(),
    min: z.number(),
    max: z.string(),
    base: z
      .object({
        path: z.string(),
        min: z.number(),
        max: z.string(),
      })
      .optional(),
    type: z.array(TypeSchema),
    isModifier: z.boolean().optional(),
    isModifierReason: z.string().optional(),
    isSummary: z.boolean().optional(),
    // Binding may be present in some definitions
    binding: z
      .object({
        extension: z.array(ExtensionSchema).optional(),
        strength: z.string(),
        description: z.string().optional(),
        valueSet: z.string().optional(),
      })
      .passthrough()
      .optional(),
    // Mapping can be present on a per-element basis too
    mapping: z
      .array(
        z
          .object({
            identity: z.string(),
            uri: z.string().optional(),
            name: z.string().optional(),
            map: z.string().optional(),
          })
          .passthrough(),
      )
      .optional(),
  })
  .passthrough();

export type ElementSnapshot = z.infer<typeof ElementSnapshotSchema>;

const SnapshotSchema = z.object({
  element: z.array(ElementSnapshotSchema),
});

export type Snapshot = z.infer<typeof SnapshotSchema>;

// --- Contact ---
// For the contact field in a resource.
const ContactTelecomSchema = z
  .object({
    system: z.string(),
    value: z.string(),
  })
  .passthrough();

const ContactSchema = z
  .object({
    telecom: z.array(ContactTelecomSchema),
  })
  .passthrough();

// --- StructureDefinition ---
// A schema for the StructureDefinition resource. Notice the additional optional “mapping” at the resource level.
export const StructureDefinitionSchema = z
  .object({
    resourceType: z.literal('StructureDefinition'),
    id: z.string(),
    meta: z.object({
      lastUpdated: z.string(),
    }),
    url: z.string(),
    version: z.string(),
    name: z.string(),
    title: z.string().optional(),
    status: z.string(), // You can refine this to specific statuses if needed.
    experimental: z.boolean().optional(),
    date: z.string(),
    publisher: z.string(),
    contact: z.array(ContactSchema).optional(),
    description: z.string().optional(),
    purpose: z.string().optional(),
    fhirVersion: z.string(),
    // Optional mapping at the resource level
    mapping: z
      .array(
        z
          .object({
            identity: z.string(),
            uri: z.string(),
            name: z.string(),
          })
          .passthrough(),
      )
      .optional(),
    kind: z.string(),
    abstract: z.boolean(),
    type: z.string(),
    baseDefinition: z.string(),
    derivation: z.string(),
    snapshot: SnapshotSchema,
  })
  .passthrough();

export type StructureDefinition = z.infer<typeof StructureDefinitionSchema>;

// Fallback for other resource types if needed.
const GenericResourceSchema = z
  .object({
    resourceType: z.string(),
  })
  .passthrough();

// Union of the specific resource (StructureDefinition) with a generic fallback.
const ResourceSchema = z.union([StructureDefinitionSchema, GenericResourceSchema]);

// --- Entry Component ---
// The entry in a Bundle may include additional optional fields.
export const EntrySchema = z
  .object({
    fullUrl: z.string(),
    resource: ResourceSchema,
    search: z
      .object({
        mode: z.string().optional(),
        score: z.number().optional(),
      })
      .optional(),
    request: z
      .object({
        method: z.string(),
        url: z.string(),
        ifNoneMatch: z.string().optional(),
        ifModifiedSince: z.string().optional(),
        ifMatch: z.string().optional(),
        ifNoneExist: z.string().optional(),
      })
      .optional(),
    response: z
      .object({
        status: z.string(),
        location: z.string().optional(),
        etag: z.string().optional(),
        lastModified: z.string().optional(),
        outcome: z.any().optional(),
      })
      .optional(),
  })
  .passthrough();

export type Entry = z.infer<typeof EntrySchema>;
// --- Bundle Schema ---
// Example bundle schema that uses the EntrySchema.
export const BundleSchema = z
  .object({
    resourceType: z.literal('Bundle'),
    id: z.string(),
    meta: z.object({
      lastUpdated: z.string(),
    }),
    type: z.string(),
    entry: z.array(EntrySchema),
  })
  .passthrough();
