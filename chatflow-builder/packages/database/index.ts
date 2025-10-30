import { PrismaClient } from '@prisma/client'

declare global {
  var __global_for_prisma__:
    | {
        prisma: PrismaClient | undefined
      }
    | undefined
}

const globalForPrisma = globalThis.__global_for_prisma__ ?? {
  prisma: undefined,
}

export const prisma = globalForPrisma.prisma ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalThis.__global_for_prisma__ = globalForPrisma
  globalForPrisma.prisma = prisma
}

export * from '@prisma/client'
