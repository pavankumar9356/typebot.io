import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { getLocaleProps } from '@/locales'
import { authOptions } from './api/auth/[...nextauth]'

export default function Page() {
  return null
}

export const getServerSideProps = getLocaleProps(
  async (context: GetServerSidePropsContext) => {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    )
    if (!session?.user) {
      return {
        redirect: {
          permanent: false,
          destination:
            context.locale !== context.defaultLocale
              ? `/${context.locale}/sigin`
              : '/signin',
        },
      }
    }
    return {
      redirect: {
        permanent: false,
        destination:
          context.locale !== context.defaultLocale
            ? `/${context.locale}/typebots`
            : '/typebots',
      },
    }
  }
)
