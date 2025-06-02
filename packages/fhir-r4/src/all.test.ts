import { createResourceListSchema } from './all';
import { createAccountSchema } from './v4.0.1/account/schema';

describe('All', () => {
  it('should be provide all resources', () => {
    const allResources = createResourceListSchema();
    const accountSchema = createAccountSchema({ contained: allResources });
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
