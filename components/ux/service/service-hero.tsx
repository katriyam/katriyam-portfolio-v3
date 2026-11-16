'use client'

import { Badge } from '@/components/ui/badge'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const serviceImages: Record<string, string> = {
  'AI Integration':
    'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&q=85',
  'Software Development':
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=85',
  'Digital Marketing':
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85',
  'Graphics Design':
    'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=85',
}

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
        <div className="relative mt-auto aspect-video w-full overflow-hidden rounded-xl bg-accent">
          <Image
            src={
              serviceImages[title] ??
              'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=85'
            }
            alt={`${title} service`}
            className="object-cover"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </div>
    </div>
  )
}
