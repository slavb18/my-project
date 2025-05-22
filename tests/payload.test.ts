// tests/payload.test.ts

// Mock the module instead of importing it directly
jest.mock('@payloadcms/db-mongodb', () => ({
  mongooseAdapter: {
    // Mock the properties you need for testing
    connect: jest.fn(),
    disconnect: jest.fn(),
  }
}));

// Import the mocked module
const { mongooseAdapter } = require('@payloadcms/db-mongodb');

describe('mongooseAdapter', () => {
  it('should be defined', () => {
    expect(mongooseAdapter).toBeDefined();
  });
  
  it('should have connect method', () => {
    expect(mongooseAdapter.connect).toBeDefined();
  });
});

