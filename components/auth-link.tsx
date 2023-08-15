import React from 'react'
import Link, { LinkProps } from 'next/link'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

interface Props extends React.HTMLAttributes<HTMLAnchorElement>, LinkProps {
  href: string
  text: string
}

function AuthLink({ href, text, ...props }: Props): JSX.Element {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: 'ghost' }),
        'absolute right-4 top-4 md:right-8 md:top-8'
      )}
      {...props}
    >
      {text}
    </Link>
  )
}

export default AuthLink
