// tests/payload.test.ts
import { mongooseAdapter } from '@payloadcms/db-mongodb';

describe('mongooseAdapter', () => {
  it('should be defined', () => {
    expect(mongooseAdapter).toBeDefined();
  });
});

