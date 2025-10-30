import NextAuth, { type AuthOptions } from 'next-auth'
import type { NextApiRequest, NextApiResponse } from 'next'
import { customAdapter } from '../../../features/auth/api/customAdapter'
import { prisma } from '@chatflow/database'

const providers: any[] = []

export const authOptions: AuthOptions = {
  adapter: customAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET,
  providers,
  session: {
    strategy: 'database',
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return await NextAuth(req, res, authOptions)
}
