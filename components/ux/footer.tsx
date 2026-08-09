'use client'

import { cn } from '@/lib/utils'
import {
  Facebook01Icon,
  InstagramIcon,
  Linkedin01Icon,
  NewTwitterIcon,
} from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'
import { NavbarLogo } from './resizable-navbar'
import { Separator } from '../ui/separator'

type FooterLink = {
  title: string
  href: string
  icon?: ReactNode
}

type FooterSection = {
  label: string
  links: FooterLink[]
}

const footerLinks: FooterSection[] = [
  {
    label: 'Quick Link',
    links: [
      { title: 'Home', href: '/' },
      { title: 'Services', href: '/#services' },
      { title: 'Latest Works', href: '/#works' },
      { title: 'Articles', href: '/#articles' },
    ],
  },
  {
    label: 'Resource',
    links: [
      { title: 'FAQs', href: '#' },
      { title: 'About Us', href: '#' },
      { title: 'Contact Us', href: '#' },
      { title: 'Sitemap', href: '#' },
    ],
  },
  {
    label: 'Legal',
    links: [
      { title: 'Privacy Policy', href: '#' },
      { title: 'Terms & Conditions', href: '#' },
      { title: 'Cookie Policy', href: '#' },
      { title: 'License', href: '#' },
    ],
  },
  {
    label: 'Social Links',
    links: [
      {
        title: 'Facebook',
        href: 'https://www.facebook.com/katriyam',
        icon: <HugeiconsIcon icon={Facebook01Icon} strokeWidth={2} />,
      },
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/katriyam.official',
        icon: <HugeiconsIcon icon={InstagramIcon} strokeWidth={2} />,
      },
      {
        title: 'X (Twitter)',
        href: 'https://x.com/teamkatriyam',
        icon: <HugeiconsIcon icon={NewTwitterIcon} strokeWidth={2} />,
      },
      {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/company/katriyam',
        icon: <HugeiconsIcon icon={Linkedin01Icon} strokeWidth={2} />,
      },
    ],
  },
]

export function Footer() {
  return (
    <footer
      className={cn(
        'container relative flex flex-col items-center justify-center rounded-t-4xl border-t md:rounded-t-6xl space-y-4',
        'dark:bg-[radial-gradient(35%_128px_at_50%_0%,--theme(--color-foreground/.1),transparent)]',
      )}
    >
      {/* FOR DARK MODE */}
      <div className="absolute top-0 right-1/2 left-1/2 h-px w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground/20 blur" />

      <div className="w-full grid lg:grid-cols-3 gap-20 lg:gap-10 py-6 md:py-8">
        <AnimatedContainer className="space-y-4">
          <NavbarLogo />
          <p className="mt-8 text-muted-foreground text-sm md:mt-0">
            Ship your digital problems, We deliver solutions.
          </p>
        </AnimatedContainer>

        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-y-20 gap-x-4">
          {footerLinks.map((section, index) => (
            <AnimatedContainer delay={0.1 + index * 0.1} key={section.label}>
              <div className="space-y-4">
                <h3 className="text-xs">{section.label}</h3>

                <ul className="space-y-2 text-muted-foreground text-sm">
                  {section.links.map((link) => (
                    <li key={link.title}>
                      <a
                        key={`${section.label}-${link.title}`}
                        href={link.href}
                        className="inline-flex items-center duration-250 hover:text-primary [&_svg]:me-1 [&_svg]:size-4"
                      >
                        {link.icon}
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </div>

      <Separator className="bg-transparent bg-linear-to-r via-border" />

      <p className="text-muted-foreground text-sm text-center py-4">
        &copy; {new Date().getFullYear()} Katriyam, All rights reserved.
      </p>
    </footer>
  )
}

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: {
  delay?: number
  className?: string
  children: ReactNode
}) {
  const shouldReduceMotion = useReducedMotion()

  if (shouldReduceMotion) {
    return children
  }

  return (
    <motion.div
      className={className}
      initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
      transition={{ delay, duration: 0.8 }}
      viewport={{ once: true }}
      whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
    >
      {children}
    </motion.div>
  )
}
