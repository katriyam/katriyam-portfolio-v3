import { ServiceFaq } from '@/components/ux/service/service-faq'
import { ServiceHero } from '@/components/ux/service/service-hero'
import {
  ServiceList,
  type ServiceListItem,
} from '@/components/ux/service/service-list'
import { ServiceTimeline } from '@/components/ux/service/service-timeline'
import { Layout, Palette, PenTool } from 'lucide-react'

const timelines = [
  {
    title: 'Brand Discovery',
    subtitle: 'Phase 1',
    description:
      'We learn about your audience, positioning, competitors, and goals to establish a clear creative direction for the project.',
  },
  {
    title: 'Concepts & Art Direction',
    subtitle: 'Phase 2',
    description:
      'Our designers explore visual territories, typography, color, and composition to find a direction that feels distinct and purposeful.',
  },
  {
    title: 'Design System Development',
    subtitle: 'Phase 3',
    description:
      'We turn the selected direction into practical rules and reusable assets that keep every brand touchpoint consistent.',
  },
  {
    title: 'Production & Refinement',
    subtitle: 'Phase 4',
    description:
      'Final assets are produced for their intended formats, reviewed with your team, and refined to work beautifully across every channel.',
  },
  {
    title: 'Launch & Creative Support',
    subtitle: 'Phase 5',
    description:
      'We deliver organized source files and can continue supporting campaigns, new content, and future brand applications.',
  },
]

const faq = [
  {
    question: 'Strategy Before Decoration',
    answer:
      'Every visual decision is connected to your audience, positioning, and business goals—not just current design trends.',
  },
  {
    question: 'Consistent Brand Systems',
    answer:
      'You receive flexible guidelines and reusable assets that make it easier for your team to create consistently.',
  },
  {
    question: 'Designed for Real Channels',
    answer:
      'We consider how your identity will work across digital products, social media, print, presentations, and campaigns.',
  },
  {
    question: 'Collaborative Creative Process',
    answer:
      'Regular reviews keep the work aligned with your vision while giving our team room to bring strong creative thinking.',
  },
]

const services: ServiceListItem[] = [
  {
    title: 'Brand Identity Design',
    icon: Palette,
    description:
      'Distinctive visual identities that communicate who you are and make your business easier to recognize.',
    items: [
      'Logo Systems: Flexible marks and lockups designed for both small and large applications.',
      'Color & Typography: A considered visual language that supports recognition and readability.',
      'Brand Guidelines: Clear rules that help your team apply the identity with confidence.',
      'Stationery & Presentation Assets: Professional essentials for everyday communication.',
    ],
  },
  {
    title: 'Digital Product Design',
    icon: Layout,
    description:
      'Clear, engaging interfaces that balance visual quality with usability across web and mobile experiences.',
    items: [
      'Website & Landing Page Design: High-converting layouts built around your message and audience.',
      'UI Design Systems: Reusable components that keep digital products cohesive and scalable.',
      'Social Media Templates: On-brand formats that make regular publishing faster and easier.',
      'Marketing & Campaign Creative: Visuals that help launches and promotions stand out.',
    ],
  },
  {
    title: 'Creative Production',
    icon: PenTool,
    description:
      'Polished visual content that helps your brand show up with clarity and confidence everywhere it appears.',
    items: [
      'Illustration & Iconography: Custom visual elements that make complex ideas easier to understand.',
      'Pitch Decks & Reports: Structured, persuasive documents for clients, partners, and investors.',
      'Print & Event Materials: Production-ready assets for campaigns, spaces, and events.',
      'Asset Adaptation: Efficient resizing and localization for the formats your channels require.',
    ],
  },
]

function Page() {
  return (
    <main>
      <ServiceHero
        title="Graphics Design"
        description="Build a memorable visual presence with thoughtful brand identities, digital experiences, and creative assets designed to make your business stand out."
      />

      <section className="mx-auto max-w-screen-lg space-y-20 px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h2 className="font-medium text-4xl leading-[1.15]! tracking-[-0.04em] md:text-[2.75rem]">
            Make Your Brand Matter
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Great design gives people a reason to remember you. We combine
            strategic thinking with expressive visual craft to create brands
            that feel relevant, recognizable, and ready to grow.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Whether you are launching from scratch or evolving an established
            identity, we create a practical system that works across every
            important customer touchpoint.
          </p>
        </div>

        <ServiceList title="Graphics Design Services" services={services} />
      </section>

      <ServiceTimeline title="Our Design Process" timelines={timelines} />
      <ServiceFaq faq={faq} />
    </main>
  )
}

export default Page
