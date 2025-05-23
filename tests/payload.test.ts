// tests/payload.test.ts
import { jest } from '@jest/globals';
import { mongooseAdapter } from '@payloadcms/db-mongodb';

describe('mongooseAdapter', () => {
const mockRepo: jest.Mocked<Repo> = {
    create: jest.fn(),
  };
  it('should be defined', () => {
    expect(mongooseAdapter).toBeDefined();
  });
});

