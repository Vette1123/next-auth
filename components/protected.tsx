import React from 'react'
import Link from 'next/link'

import { siteConfig } from '@/config/site'

import { SiteHeader } from './site-header'
import { buttonVariants } from './ui/button'

function ProtectedComponent() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
            Sadge Next.js Starter Template
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground">
            A Next.js starter template with TypeScript, Tailwind CSS, and more.
          </p>
        </div>
        <div className="flex gap-4">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className={buttonVariants()}
          >
            Sadge
          </Link>
          <Link
            target="_blank"
            rel="noreferrer"
            href={siteConfig.links.github}
            className={buttonVariants({ variant: 'outline' })}
          >
            GitHub
          </Link>
        </div>
      </section>
    </div>
  )
}

export default ProtectedComponent
