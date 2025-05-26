import * as z from 'zod';
import type { KnownResource } from '@solarahealth/fhir-r4';
import * as types from '../types';

type IdOf<S extends z.ZodTypeAny> = z.infer<S> & string;

export class ReadBuilder<
  RT extends KnownResource,
  C extends types.Context,
  SId extends z.ZodTypeAny | null = null,
> {
  private idSchema!: SId;
  private idPre?: (raw: string) => string;
  private retrieve!: (id: IdOf<NonNullable<SId>>, ctx: C) => Promise<types.Resource<RT>>;

  constructor(private readonly rt: RT) {}

  /** id() – canonical‑ID schema + optional pre‑processor */
  id<S extends z.ZodTypeAny>(schema: S, pre?: (raw: string) => string) {
    this.idSchema = schema as unknown as SId;
    this.idPre = pre;
    return this as unknown as ReadBuilder<RT, C, SId>;
  }

  /** retrieve() – DB lookup fn returning FHIR resource */
  retrieveWith(fn: (id: IdOf<NonNullable<SId>>, ctx: C) => Promise<types.Resource<RT>>) {
    this.retrieve = fn;
    return this as unknown as ReadBuilder<RT, C, SId>;
  }

  /* ---------- build ---------- */
  build(): types.ResourceReadHandler<RT, C> {
    if (!this.idSchema || !this.retrieve) {
      throw new Error('ReadBuilder incomplete – you must call id() and retrieveWith()');
    }

    return async (args, ctx: C) => {
      // 1️⃣ canonicalise + validate id
      const raw = this.idPre ? this.idPre(args.id) : args.id;
      const canonical = (this.idSchema as z.ZodTypeAny).parse(raw) as IdOf<NonNullable<SId>>;

      // 2️⃣ fetch FHIR resource
      const fhirRes = await this.retrieve(canonical, ctx);

      return fhirRes;
    };
  }
}

/** Read‑builder ready marker type */
export type ReadBuilderReady<
  RT extends KnownResource,
  C extends types.Context,
  SId extends z.ZodTypeAny,
> = ReadBuilder<RT, C, SId> & {
  build: () => types.ResourceReadHandler<RT, C>;
};
