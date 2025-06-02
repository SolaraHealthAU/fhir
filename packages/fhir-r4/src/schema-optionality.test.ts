import { createBundleSchema } from './v4.0.1/bundle/schema';
import { createAccountSchema } from './v4.0.1/account/schema';
import { createOperationOutcomeSchema } from './v4.0.1/operationoutcome/schema';
import type { Account } from './v4.0.1/account/types';
import { makeResourceList } from './utils';
import { createPatientSchema } from './v4.0.1/patient/schema';

describe('Bundle', () => {
  it('BundleEntry.resource should be typed correctly', () => {
    const accountSchema = createAccountSchema();
    const account: Account = { resourceType: 'Account', id: '123', status: 'active' };
    expect(accountSchema.safeParse(account).success).toBe(true);
    const bundle = createBundleSchema({ resource: createAccountSchema() });
    const result = bundle.safeParse({
      resourceType: 'Bundle',
      type: 'searchset',
      entry: [{ resource: account }],
    });
    expect(result.success).toBe(true);
    expect(result.data?.entry?.[0].resource?.resourceType).toBe('Account');
  });
  it('BundleEntry.response.outcome and BundleEntry.resource should be typed correctly', () => {
    const union = makeResourceList(createOperationOutcomeSchema(), createAccountSchema());
    const bundle = createBundleSchema({
      outcome: union,
      resource: union,
    });
    const result = bundle.safeParse({
      resourceType: 'Bundle',
      type: 'searchset',
      entry: [
        {
          resource: { resourceType: 'Account', id: '123', status: 'active' },
          response: { outcome: { resourceType: 'OperationOutcome' } },
        },
      ],
    });
    expect(result.success).toBe(true);
    expect(result.data?.entry?.[0].resource?.resourceType).toBe('Account');
    expect(result.data?.entry?.[0].response?.outcome?.resourceType).toBe('OperationOutcome');
  });
});

describe('Account', () => {
  it('Account.contained should be typed correctly', () => {
    const accountSchema = createAccountSchema({ contained: createPatientSchema() });
    const account: Account = { resourceType: 'Account', id: '123', status: 'active' };
    expect(accountSchema.safeParse(account).success).toBe(true);
    const result = accountSchema.safeParse({
      resourceType: 'Account',
      id: '123',
      status: 'active',
      contained: [
        { resourceType: 'Patient', id: '456', name: [{ given: ['John'], family: 'Doe' }] },
      ],
    });
    expect(result.success).toBe(true);
    expect(result.data?.contained?.[0].resourceType).toBe('Patient');
  });
});
