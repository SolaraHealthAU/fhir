import { EntrySchema } from './data-elements';
import * as fixtures from './fixtures/data-elements';

describe('generated', () => {
  it('will pass entries', () => {
    expect(EntrySchema.safeParse(fixtures.entry1).success).toBe(true);
    expect(EntrySchema.safeParse(fixtures.entry2).success).toBe(true);
    expect(EntrySchema.safeParse(fixtures.entry3).success).toBe(true);
  });
});
