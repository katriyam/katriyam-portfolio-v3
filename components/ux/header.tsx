'use client'

import { buttonVariants } from '@/components/ui/button'
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarLogo,
  NavBody,
  NavItems,
} from '@/components/ux/resizable-navbar'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { useState } from 'react'

const NAVITEMS = [
  {
    name: 'Services',
    link: '/#services',
  },
  {
    name: 'Our Works',
    link: '/#works',
  },
  {
    name: 'About Us',
    link: '/#about',
  },
]

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={NAVITEMS} />
        <Link
          href="/#contact"
          className={cn(buttonVariants({ size: 'lg' }), 'relative')}
        >
          Book a Meeting
        </Link>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {NAVITEMS.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-600 dark:text-neutral-300"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}

          <div className="flex w-full flex-col gap-4">
            <Link
              href="/#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(buttonVariants(), 'relative')}
            >
              Book a Meeting
            </Link>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}
