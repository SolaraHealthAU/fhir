import * as FhirR4 from './index';

describe('Root Exports', () => {
  it('should generate a valid account schema', () => {
    // Basic account assertion
    expect(FhirR4.createAccountSchema).toBeDefined();
    const schema = FhirR4.createAccountSchema();
    expect(schema).toBeDefined();
    // Simple type check
    const account: FhirR4.Account = {
      resourceType: 'Account',
      id: '123',
      status: 'active',
    };
    // Validate the type
    const result = schema.safeParse(account);
    expect(result.success).toBe(true);
  });
});
