# ChatFlow Builder

A modern, full-stack chatbot builder inspired by Typebot. Built with Next.js, TypeScript, Prisma, and PostgreSQL.

## Features

- 🎨 **Visual Flow Builder** - Drag and drop interface for creating chatbots
- 💬 **Multiple Block Types** - Text, Input, Buttons, Conditions, Webhooks
- 🔄 **Real-time Testing** - Test your chatbots instantly
- 📊 **Analytics** - Track conversations and user interactions
- 🚀 **Easy Deployment** - Docker-ready for production

## Tech Stack

### Frontend

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Flow** - Visual flow editor

### Backend

- **Prisma** - Database ORM
- **PostgreSQL** - Database
- **Redis** - Real-time features
- **tRPC** - Type-safe APIs

### DevOps

- **Docker** - Containerization
- **Turbo** - Monorepo build system
- **pnpm** - Package manager

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm
- Docker & Docker Compose

### Installation

1. **Clone and install dependencies**

   ```bash
   git clone <your-repo>
   cd chatflow-builder
   pnpm install
   ```

2. **Start database services**

   ```bash
   pnpm docker:up
   ```

3. **Set up environment**

   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Initialize database**

   ```bash
   pnpm db:generate
   pnpm db:push
   ```

5. **Start development servers**
   ```bash
   pnpm dev
   ```

### Access the applications

- **Builder**: http://localhost:3000
- **Viewer**: http://localhost:3001
- **Database Studio**: `pnpm db:studio`

## Project Structure

```
chatflow-builder/
├── apps/
│   ├── builder/          # Visual chatbot builder (Next.js)
│   └── viewer/           # Chat interface (Next.js)
├── packages/
│   ├── database/         # Prisma schema and client
│   ├── shared/           # Shared types and utilities
│   └── ui/              # Shared UI components
├── docker-compose.yml    # Development services
└── turbo.json           # Monorepo configuration
```

## Development Guide

### Adding New Block Types

1. **Update schema** in `packages/shared/types.ts`
2. **Add database migration** if needed
3. **Create block component** in builder app
4. **Add execution logic** in viewer app

### Key Concepts

- **Blocks**: Individual chatbot components (text, input, etc.)
- **Connections**: Links between blocks defining conversation flow
- **Variables**: Store user inputs and pass data between blocks
- **Conditions**: Branch conversations based on user responses

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details
