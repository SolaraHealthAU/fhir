import * as z from 'zod';
import type { Bundle, ResourceListType } from '@solarahealth/fhir-r4';
import * as types from '../types';
import * as errors from '../errors';

export class SearchBuilder<
  RT extends ResourceListType,
  ParamsOut, // Type of validated search params
> {
  private paramSchema!: z.ZodTypeAny;
  private listFn!: (
    params: ParamsOut,
    ctx: types.Context,
    req: { query: Record<string, string | string[]> },
  ) => Promise<Bundle>;

  constructor(private readonly rt: RT['resourceType']) {}

  /** Define the Zod schema for validating search parameters */
  params<S extends z.ZodTypeAny>(schema: S) {
    this.paramSchema = schema;
    return this as unknown as SearchBuilder<RT, z.infer<S>>;
  }

  /** Define the async function to fetch the FHIR Bundle directly */
  list(
    fn: (
      params: ParamsOut,
      ctx: types.Context,
      req: { query: Record<string, string | string[]> },
    ) => Promise<Bundle>,
  ) {
    this.listFn = fn;
    return this as unknown as SearchBuilder<RT, ParamsOut>;
  }

  /* ---------- build ---------- */
  build(): types.ResourceSearchTypeHandler<types.Context> {
    if (!this.paramSchema || !this.listFn) {
      throw new Error('SearchBuilder incomplete – params() and list() are required.');
    }

    return async (args: { params: Record<string, string | string[]>; url?: string }, ctx) => {
      // 1️⃣ Validate search parameters
      const parsedParams = (this.paramSchema as z.ZodTypeAny).safeParse(args.params);
      if (!parsedParams.success) {
        throw new errors.BadRequest(`Invalid search parameters: ${parsedParams.error.message}`);
      }
      const validatedParams = parsedParams.data as ParamsOut;

      // 2️⃣ Run list function to get the bundle
      const bundle = await this.listFn(validatedParams, ctx, { query: args.params });

      // 3️⃣ Return the bundle directly
      return bundle;
    };
  }
}

/** SearchBuilder ready marker type */
export type SearchBuilderReady<RT extends ResourceListType, ParamsOut> = SearchBuilder<
  RT,
  ParamsOut
> & {
  build: () => types.ResourceSearchTypeHandler<types.Context>;
};
