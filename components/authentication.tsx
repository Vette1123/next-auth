'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useRelativePath } from '@/hooks/useRelativePath'

import AuthLink from './auth-link'

interface AuthenticationPageProps {
  children: React.ReactNode
}

function AuthenticationPage({ children }: AuthenticationPageProps) {
  const pathname = usePathname()
  const { text, href, formLabel } = useRelativePath(pathname)

  return (
    <div className="container relative grid min-h-screen items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <AuthLink href={href} text={text} />
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <Link href="/" className="w-fit">
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Sadge
          </div>
        </Link>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Sadge is the best way to find and share the best
              experiences in the world, Sadge is a way of life.&rdquo;
            </p>
            <footer className="text-sm">Gado</footer>
          </blockquote>
        </div>
        A
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              {formLabel}
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your information below to continue
            </p>
          </div>
          {children}
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
export default AuthenticationPage
