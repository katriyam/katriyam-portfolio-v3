'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowLeft01Icon, ArrowRight01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { ArrowUpRightIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import Link from 'next/link'
import { useCallback, useEffect, useState } from 'react'

const SERVICES = [
  {
    id: '01',
    title: 'The Global Founder',
    description:
      'A premier European digital magazine. We handled the complete setup and serve as maintenance partner.',
    image: '/PROJECT-01.png',
    link: 'https://theglobalfounder.com',
  },
  {
    id: '02',
    title: 'Premium Multishop',
    description:
      'We created their full e-commerce website and provided allaround graphic support.',
    image: '/PROJECT-02.png',
    link: 'https://premiummultishop.com',
  },
  {
    id: '03',
    title: 'Sellerket',
    description:
      'An expansive marketplace for influencers. We provided comprehensive support from web to visuals.',
    image: '/PROJECT-03.png',
    link: 'https://www.sellerket.com',
  },
  {
    id: '04',
    title: 'Miracle Invest',
    description:
      'We established their digital presence from the ground up, ensuring a professional corporate identity.',
    image: '/PROJECT-04.png',
    link: 'https://miracleinvest.group',
  },
  {
    id: '05',
    title: 'AA New Auto Electronics',
    description:
      'A robust digital footprint for vehicle services, focusing on trust and clarity.',
    image: '/PROJECT-05.png',
    link: 'https://aanewautoets.com',
  },
]

const AUTO_PLAY_DURATION = 5000

export default function VerticalTabs() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const handleNext = useCallback(() => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % SERVICES.length)
  }, [])

  const handlePrev = useCallback(() => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + SERVICES.length) % SERVICES.length)
  }, [])

  const handleTabClick = (index: number) => {
    if (index === activeIndex) return
    setDirection(index > activeIndex ? 1 : -1)
    setActiveIndex(index)
    setIsPaused(false)
  }

  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      handleNext()
    }, AUTO_PLAY_DURATION)

    return () => clearInterval(interval)
  }, [activeIndex, isPaused, handleNext])

  const variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
      {/* Left Column: Content */}
      <div className="lg:col-span-5 order-2 lg:order-1">
        <div className="flex flex-col space-y-0">
          {SERVICES.map((service, index) => {
            const isActive = activeIndex === index

            return (
              <button
                key={service.id}
                onClick={() => handleTabClick(index)}
                className={cn(
                  'group relative flex items-start gap-4 py-6 md:py-8 text-left transition-all duration-500 border-t border-border/50 first:border-0',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground/60 hover:text-primary',
                )}
              >
                <div className="absolute -left-4 md:-left-6 top-0 bottom-0 w-0.5 bg-muted">
                  {isActive && (
                    <motion.div
                      key={`progress-${index}-${isPaused}`}
                      className="absolute top-0 left-0 w-full bg-primary origin-top"
                      initial={{ height: '0%' }}
                      animate={isPaused ? { height: '0%' } : { height: '100%' }}
                      transition={{
                        duration: AUTO_PLAY_DURATION / 1000,
                        ease: 'linear',
                      }}
                    />
                  )}
                </div>

                <span className="text-[9px] md:text-[10px] font-medium mt-1 tabular-nums opacity-50">
                  /{service.id}
                </span>

                <div className="flex flex-col gap-2 flex-1">
                  <div className="flex items-center gap-4">
                    <span
                      className={cn(
                        'text-xl md:text-3xl font-normal tracking-tight transition-colors duration-500',
                        isActive ? 'text-primary' : '',
                      )}
                    >
                      {service.title}
                    </span>

                    <Link
                      target="_blank"
                      href={service.link}
                      className={buttonVariants({
                        size: 'sm',
                        variant: 'ghost',
                      })}
                    >
                      <ArrowUpRightIcon />
                    </Link>
                  </div>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{
                          duration: 0.3,
                          ease: [0.23, 1, 0.32, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground text-xs md:text-sm font-normal leading-relaxed max-w-sm pb-2">
                          {service.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            )
          })}
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col h-full order-1 lg:order-2">
        <div className="relative group/gallery">
          <div className="relative aspect-16/10 rounded-3xl overflow-hidden bg-muted/30 border border-border/40">
            <AnimatePresence
              initial={false}
              mode="popLayout"
              custom={direction}
            >
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  opacity: { duration: 0.4 },
                  y: { type: 'spring', stiffness: 260, damping: 32 },
                }}
                className="absolute inset-0 w-full h-full cursor-pointer"
                onClick={handleNext}
              >
                <img
                  src={SERVICES[activeIndex].image}
                  alt={SERVICES[activeIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 m-0! p-0! block"
                />

                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/20 via-transparent to-transparent opacity-60" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 flex gap-2 md:gap-3 z-20">
              <Button
                size="icon-lg"
                onClick={(e) => {
                  e.stopPropagation()
                  handlePrev()
                }}
              >
                <HugeiconsIcon icon={ArrowLeft01Icon} size={20} />
              </Button>
              <Button
                size="icon-lg"
                onClick={(e) => {
                  e.stopPropagation()
                  handleNext()
                }}
              >
                <HugeiconsIcon icon={ArrowRight01Icon} size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
