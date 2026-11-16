import { BentoCard, BentoGrid } from '@/components/ui/bento-grid'
import { BotIcon, CodeXmlIcon, PaletteIcon, Share2Icon } from 'lucide-react'
import { AnimatedBeamAi } from './animated-beam-ai'
import { TerminalSoftwareDevelopment } from './terminal-software-development'
import { IconCloudGraphicsDesign } from './icon-cloud-graphics-design'
import { OrbitingCirclesDigitalMarketing } from './orbiting-circles-digital-marketing'

const features = [
  {
    Icon: CodeXmlIcon,
    name: 'Software Development',
    description: 'Build scalable digital products',
    cta: 'Learn More',
    href: '/services/software-development',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <TerminalSoftwareDevelopment className="absolute top-5 left-5 mask-[linear-gradient(to_top,transparent_30%,#000_100%)] scale-98 group-hover:scale-100 transition-all duration-300 ease-out" />
    ),
  },
  {
    Icon: BotIcon,
    name: 'AI Integration',
    description: 'Intelligent automation for businesses',
    cta: 'Learn More',
    href: '/services/ai-integration',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <AnimatedBeamAi className="absolute mask-[linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 transition-all duration-300 ease-out" />
    ),
  },
  {
    Icon: PaletteIcon,
    name: 'Graphics Design',
    description: 'Designs that elevate brands',
    cta: 'Learn More',
    href: '/services/graphics-design',
    className: 'col-span-3 lg:col-span-1',
    background: (
      <IconCloudGraphicsDesign className="absolute -top-10 -right-10 mask-[linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 transition-all duration-300 ease-out" />
    ),
  },
  {
    Icon: Share2Icon,
    name: 'Digital Marketing',
    description: 'Grow your online presence',
    cta: 'Learn More',
    href: '/services/digital-marketing',
    className: 'col-span-3 lg:col-span-2',
    background: (
      <OrbitingCirclesDigitalMarketing className="absolute -top-10 -right-30 mask-[linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105 transition-all duration-300 ease-out" />
    ),
  },
]

export function Services() {
  return (
    <section id="services" className="container pb-40">
      <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-2 mb-10">
        <h2 className="text-3xl md:text-6xl lg:text-5xl font-semibold text-foreground">
          Services we provide
        </h2>

        <p className="text-xs md:text-lg lg:text-sm text-muted-foreground">
          From idea to execution, we turn complex digital challenges into
          powerful solutions. Our team designs, builds, and launches products
          that help your business grow.
        </p>
      </div>

      <BentoGrid>
        {features.map((feature, idx) => (
          <BentoCard key={idx} {...feature} />
        ))}
      </BentoGrid>
    </section>
  )
}
