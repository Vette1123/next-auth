'use client'

import React from 'react'
import { signOut } from 'next-auth/react'

import { cn } from '@/lib/utils'

import { Icons } from './icons'
import { buttonVariants } from './ui/button'

function LogoutPage() {
  return (
    <div
      className={cn(
        buttonVariants({
          size: 'icon',
          variant: 'ghost',
        }),
        'cursor-pointer'
      )}
      onClick={() => signOut()}
    >
      <Icons.logout />
      <span className="sr-only">Logout</span>
    </div>
  )
}

export default LogoutPage
