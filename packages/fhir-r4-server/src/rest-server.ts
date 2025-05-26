import { Router, RequestHandler } from 'express';
import type {
  Context,
  CapabilityStatement,
  ExpressContextFunction,
  CapabilityStatementInteractionOption,
} from './types';
import * as controllers from './controllers/controllers';
import type { KnownResource } from '@solarahealth/fhir-r4';

export const init = <C extends Context>(options: Options<C>): RestServer<C> => {
  // Create a mapping for rest resources and interactions
  const restResourceTypeInteractionMapping: Map<
    KnownResource,
    Map<
      CapabilityStatementInteractionOption<KnownResource, C>['code'],
      CapabilityStatementInteractionOption<KnownResource, C>
    >
  > = new Map();
  options.capabilities.rest?.forEach((rest) => {
    rest.resource?.forEach((resource) => {
      const interactionMapping = new Map<
        CapabilityStatementInteractionOption<KnownResource, C>['code'],
        CapabilityStatementInteractionOption<KnownResource, C>
      >();
      resource.interaction?.forEach((interaction) => {
        interactionMapping.set(interaction.code, interaction);
      });
      restResourceTypeInteractionMapping.set(resource.type, interactionMapping);
    });
  });

  return {
    options,
    obtainRestResourceInteractionOption: <
      R extends KnownResource,
      I extends CapabilityStatementInteractionOption<R, C>['code'],
    >(
      resourceType: R,
      interactionCode: I,
    ) => {
      const restResource = restResourceTypeInteractionMapping.get(resourceType);
      if (restResource != null) {
        const interaction = restResource.get(interactionCode);
        if (interaction != null && interaction.code === interactionCode) {
          return interaction as CapabilityStatementInteractionOption<R, C> & { code: I };
        }
      }
      return null;
    },
  };
};

export type RestServer<C extends Context> = {
  options: Options<C>;
  obtainRestResourceInteractionOption: <
    R extends KnownResource,
    I extends CapabilityStatementInteractionOption<R, C>['code'],
  >(
    resourceType: R,
    interactionCode: I,
  ) => (CapabilityStatementInteractionOption<R, C> & { code: I }) | null;
};

type Fhir = {
  objToXml: (obj: object) => string;
};

export type Options<C extends Context> = {
  fhir?: Fhir;
  capabilities: CapabilityStatement<C>;
};

export type ExpressMiddlewareOptions<C extends Context> = {
  context: ExpressContextFunction<C>;
};

export function expressMiddleware<C extends Context>(
  server: RestServer<C>,
  options: ExpressMiddlewareOptions<C>,
): RequestHandler {
  const router = Router({ mergeParams: true });
  controllers.init({
    router,
    server,
    context: options.context,
  });
  return router;
}
