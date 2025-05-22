# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Payload CMS website template built with Next.js. It's a full-stack application that includes:

- A Payload CMS backend with MongoDB database
- A Next.js frontend with App Router
- TailwindCSS for styling
- TypeScript throughout

## Command Reference

### Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Production development (build and start)
pnpm dev:prod

# Lint code
pnpm lint

# Fix linting issues
pnpm lint:fix

# Generate TypeScript types from Payload schema
pnpm generate:types

# Generate import map for Payload admin
pnpm generate:importmap
```

### Production

```bash
# Build the application for production
pnpm build

# Start the production server
pnpm start
```

### Database

The application uses MongoDB by default:

```bash
# Connect to the MongoDB database
# Note: You need to have MongoDB installed locally or use Docker
# The default connection string is: mongodb://127.0.0.1/my-project
```

### Testing

The project uses tsx for running TypeScript tests directly:

```bash
# Run the payload test file
npx tsx tests/payload.ts

# Note: While Jest is configured in jest.config.js, "npx jest tests/payload.test.ts" doesn't work correctly
```

### Docker

The project includes Docker configuration for both development and production:

```bash
# Development with Docker Compose
docker-compose up

# Build a production Docker image
docker build -t my-project .

# Run the production Docker image
docker run -p 3000:3000 my-project
```

## Architecture

### Core Components

1. **Payload CMS Backend**
   - Located in `src/payload.config.ts`
   - Collections: Pages, Posts, Media, Categories, Users
   - Globals: Header, Footer

2. **Next.js Frontend**
   - App Router in `src/app/`
   - Frontend routes in `src/app/(frontend)/`
   - Admin routes in `src/app/(payload)/`

3. **Content Structure**
   - Pages and Posts use a layout builder pattern
   - Layout blocks defined in `src/blocks/`
   - Hero components in `src/heros/`

4. **Features**
   - Draft Preview and Live Preview
   - SEO (using Payload SEO plugin)
   - Search (using Payload Search plugin)
   - Redirects (using Payload Redirects plugin)
   - Scheduled Publishing

### Data Flow

1. Content is created and managed in the Payload CMS admin panel
2. Next.js fetches data from Payload API for rendering
3. On-demand revalidation updates the frontend when content changes

## Environment Configuration

The application requires the following environment variables (copy from `.env.example`):

```
PREVIEW_SECRET=YOUR_SECRET_HERE
CRON_SECRET=YOUR_CRON_SECRET_HERE
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
PAYLOAD_SECRET=your-secret-here
DATABASE_URI=mongodb://127.0.0.1/my-project
```