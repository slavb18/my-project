// tests/payload.ts
import { mongooseAdapter } from '@payloadcms/db-mongodb'

// Simple log to verify it works
console.log('mongooseAdapter is defined:', mongooseAdapter ? 'Yes' : 'No');
console.log('mongooseAdapter properties:', Object.keys(mongooseAdapter));
