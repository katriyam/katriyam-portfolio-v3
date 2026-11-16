import { ServiceFaq } from '@/components/ux/service/service-faq'
import { ServiceHero } from '@/components/ux/service/service-hero'
import {
  ServiceList,
  type ServiceListItem,
} from '@/components/ux/service/service-list'
import { ServiceTimeline } from '@/components/ux/service/service-timeline'
import { BarChart3, Mail, Search } from 'lucide-react'

const timelines = [
  {
    title: 'Goals & Audience Research',
    subtitle: 'Phase 1',
    description:
      'We clarify your growth goals, customer segments, competitive landscape, and the channels most likely to create meaningful results.',
  },
  {
    title: 'Strategy & Channel Planning',
    subtitle: 'Phase 2',
    description:
      'Our team builds a focused roadmap covering messaging, content, campaigns, conversion paths, budgets, and measurement.',
  },
  {
    title: 'Creative & Campaign Setup',
    subtitle: 'Phase 3',
    description:
      'We prepare the landing pages, content, audiences, tracking, and creative assets needed to launch a coordinated campaign.',
  },
  {
    title: 'Launch & Optimization',
    subtitle: 'Phase 4',
    description:
      'Campaigns go live with controlled testing and continuous optimization based on performance data and audience behavior.',
  },
  {
    title: 'Reporting & Growth Planning',
    subtitle: 'Phase 5',
    description:
      'Clear reporting connects activity to business outcomes and gives your team a practical plan for the next growth opportunity.',
  },
]

const faq = [
  {
    question: 'Business-Focused Marketing',
    answer:
      'We connect marketing activity to the outcomes your business actually needs, from qualified leads to stronger customer retention.',
  },
  {
    question: 'Data-Informed Decisions',
    answer:
      'Tracking and reporting give us the evidence needed to invest more in what works and improve what does not.',
  },
  {
    question: 'Consistent Brand Voice',
    answer:
      'Every campaign and piece of content is aligned with your positioning so your audience receives a clear, familiar message.',
  },
  {
    question: 'Long-Term Growth Mindset',
    answer:
      'We balance immediate campaign performance with the content, search visibility, and audience trust that compound over time.',
  },
]

const services: ServiceListItem[] = [
  {
    title: 'Search Engine Marketing',
    icon: Search,
    description:
      'Improve visibility and attract high-intent visitors with search strategies built around the way your customers look for solutions.',
    items: [
      'SEO Strategy: Build a prioritized roadmap for technical health, content, and authority.',
      'Content Optimization: Create useful pages that answer customer questions and support conversion.',
      'Local Search: Improve discoverability for businesses serving specific locations and communities.',
      'Paid Search Campaigns: Reach high-intent audiences with carefully structured and measured campaigns.',
    ],
  },
  {
    title: 'Content & Social Marketing',
    icon: Mail,
    description:
      'Build attention and trust with useful content and consistent communication across the channels your audience values.',
    items: [
      'Content Planning: Turn business priorities into a sustainable calendar of useful stories and campaigns.',
      'Social Media Management: Publish and refine content that grows awareness and engagement.',
      'Email Campaigns: Nurture prospects and customers with timely, relevant communication.',
      'Creative Copywriting: Develop clear messaging for websites, campaigns, ads, and product launches.',
    ],
  },
  {
    title: 'Performance & Analytics',
    icon: BarChart3,
    description:
      'Understand what drives growth and use reliable insights to make every marketing investment more effective.',
    items: [
      'Conversion Tracking: Measure the actions that matter across your website and campaigns.',
      'Funnel Optimization: Find and fix the points where interested visitors drop off.',
      'Campaign Testing: Compare creative, audiences, and offers to improve performance over time.',
      'Monthly Reporting: Turn channel data into concise insights and clear next actions.',
    ],
  },
]

function Page() {
  return (
    <main>
      <ServiceHero
        title="Digital Marketing"
        description="Reach the right people, communicate your value clearly, and turn digital attention into sustainable business growth with a focused marketing strategy."
      />

      <section className="mx-auto max-w-screen-lg space-y-20 px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h2 className="font-medium text-4xl leading-[1.15]! tracking-[-0.04em] md:text-[2.75rem]">
            Marketing That Moves Business
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            More traffic is not the goal on its own. We build marketing
            programs that help the right audience discover your brand, trust
            your expertise, and take the next step.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From search visibility and content to paid campaigns and
            reporting, every activity is connected to a clear growth objective
            and improved through real performance data.
          </p>
        </div>

        <ServiceList title="Digital Marketing Services" services={services} />
      </section>

      <ServiceTimeline title="Our Marketing Process" timelines={timelines} />
      <ServiceFaq faq={faq} />
    </main>
  )
}

export default Page
