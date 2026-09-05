'use client'

import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react'
import Link from 'next/link'

export function ServiceHero({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 py-12">
      <div className="mx-auto grid w-full max-w-screen-xl gap-16 lg:grid-cols-2">
        <div>
          <Badge
            className="rounded-full border-border py-1"
            render={<Link href="#" />}
            variant="secondary"
          >
            Just released v1.0.0 <ArrowUpRight className="ml-1 size-4" />
          </Badge>
          <h1 className="mt-6 max-w-[17ch] font-medium text-4xl leading-[1.2]! tracking-[-0.04em] md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem]">
            {title}
          </h1>
          <p className="mt-4 max-w-[60ch] text-foreground/60 text-lg sm:mt-6 sm:text-xl/normal">
            {description}
          </p>
          <div className="mt-8 flex items-center gap-4 sm:mt-12">
            <Link href="/#contact" className={buttonVariants({ size: 'lg' })}>
              Book A Meeting
            </Link>
            <Link
              href="/#services"
              className={cn(
                buttonVariants({ size: 'lg', variant: 'outline' }),
                'rounded-full shadow-none',
              )}
            >
              <BriefcaseBusiness className="h-5! w-5!" /> Other Services
            </Link>
          </div>
        </div>
        <div className="mt-auto aspect-video w-full rounded-xl bg-accent" />
      </div>
    </div>
  )
}
