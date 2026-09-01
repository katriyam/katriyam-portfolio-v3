'use client'

import { buttonVariants } from '@/components/ui/button'
import { Bucket } from '@/components/ux/bucket'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="lg:h-svh flex items-center justify-center py-40 lg:py-0">
      <div className="container flex flex-col lg:flex-row items-center gap-30 md:gap-40 lg:gap-10">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-6xl lg:text-5xl font-semibold text-foreground mb-7">
            <span>Ship your digital problems, </span>
            <span className="text-muted-foreground">We deliver solutions.</span>
          </h2>

          <p className="text-xs md:text-lg lg:text-sm text-muted-foreground mb-4">
            From idea to execution, we turn complex digital challenges into
            powerful solutions. Our team designs, builds, and launches products
            that help your business grow.
          </p>

          <p className="text-xs md:text-lg lg:text-sm text-muted-foreground mb-7">
            Katriyam is a South Korea based outsourcing company with the talent
            pool from Bangladesh.
          </p>

          <Link href="/#contact" className={buttonVariants({ size: 'lg' })}>
            Book A Meeting
          </Link>
        </div>

        <div className="flex-1 w-full h-full">
          <Bucket />
        </div>
      </div>
    </section>
  )
}
