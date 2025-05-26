import type { Interaction } from './types';

export class ResourceTypeNotSupported extends Error {
  constructor(resourceType?: string) {
    const message = resourceType
      ? `Resource type '${resourceType}' is not supported`
      : 'Resource type not found';
    super(message);
    this.name = 'ResourceTypeNotSupported';
  }
}

export class ResourceNotFound extends Error {
  constructor(resourceType: string, id: string) {
    super(`Resource '${resourceType}/ ${id}' not found`);
    this.name = 'ResourceNotFound';
  }
}

export class ResourceGone extends Error {
  constructor(resourceType: string, id: string) {
    super(`Resource '${resourceType}/${id}' has been deleted`);
    this.name = 'ResourceGone';
  }
}

export class ResourceMethodNotAllowed extends Error {
  constructor(interaction: Interaction, resourceType?: string, id?: string) {
    if (resourceType && id) {
      super(`Method '${interaction}' not allowed for resource '${resourceType}/${id}'`);
    } else {
      super(`Method '${interaction}' not allowed`);
    }
    this.name = 'ResourceMethodNotAllowed';
  }
}

export class ResourceFormatNotSupported extends Error {
  constructor(resourceType: string, format: string) {
    super(`Format '${format}' not supported for resource '${resourceType}'`);
    this.name = 'ResourceFormatNotSupported';
  }
}

export class ResourceInvalid extends Error {
  constructor(resourceType: string, message: string) {
    super(`Invalid resource '${resourceType}': ${message}`);
    this.name = 'ResourceInvalid';
  }
}

export class InternalServerError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'InternalServerError';
  }
}

export class BadRequest extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BadRequest';
  }
}

export class NotFound extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NotFound';
  }
}
