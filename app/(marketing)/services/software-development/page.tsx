import { ServiceFaq } from '@/components/ux/service/service-faq'
import { ServiceHero } from '@/components/ux/service/service-hero'
import {
  ServiceList,
  type ServiceListItem,
} from '@/components/ux/service/service-list'
import { ServiceTimeline } from '@/components/ux/service/service-timeline'
import { Code2, Globe, Smartphone } from 'lucide-react'

const timelines = [
  {
    title: 'Discovery & Requirements Mapping',
    subtitle: 'Phase 1',
    description:
      'We dive into your operational workflows, user personas, and technical requirements to define a comprehensive scope, technical specification, and roadmap.',
  },
  {
    title: 'Architecture & UX Prototyping',
    subtitle: 'Phase 2',
    description:
      'Our design and tech teams map database schemas, API contracts, and interactive wireframes so you validate the user experience before writing production code.',
  },
  {
    title: 'Sprint-Based Agile Development',
    subtitle: 'Phase 3',
    description:
      'We build in iterative milestones with continuous client check-ins, allowing you to track progress, test features early, and adapt to evolving priorities.',
  },
  {
    title: 'Quality Assurance & Security Audits',
    subtitle: 'Phase 4',
    description:
      'Rigorous automated testing, cross-browser audits, load testing, and vulnerability checks ensure your product launches stable, secure, and bug-free.',
  },
  {
    title: 'Deployment & Lifecycle Support',
    subtitle: 'Phase 5',
    description:
      'We handle CI/CD pipeline setup, cloud infrastructure provisioning, and post-launch maintenance to guarantee maximum uptime and smooth scaling.',
  },
]

const faq = [
  {
    question: '100% Requirement-Driven',
    answer:
      'No generic templates or one-size-fits-all bundles; your business priorities dictate our technical architecture.',
  },
  {
    question: 'Complete Code & IP Ownership',
    answer:
      'You own 100% of your source code, infrastructure configurations, and intellectual property from day one.',
  },
  {
    question: 'Transparent Communication',
    answer:
      'Direct collaboration with engineering leads through structured sprints, clear demos, and shared milestone tracking.',
  },
  {
    question: 'Scalable Tech Foundations',
    answer:
      'Modern, well-documented frameworks designed to easily accommodate new features and engineering hires as your company grows.',
  },
]

const services: ServiceListItem[] = [
  {
    title: 'Custom Software Development',
    icon: Code2,
    description:
      'Purpose-built software designed to solve complex business challenges and eliminate workflow bottlenecks.',
    items: [
      'Enterprise Workflow Automation: Eliminate repetitive tasks with systems built to mirror your exact operational logic.',
      'Legacy System Modernization: Refactor or rebuild outdated software into secure, modular, cloud-ready applications.',
      'API & Systems Integration: Connect disparate platforms, ERPs, and third-party tools into a cohesive data ecosystem.',
      'Data Security & Role Governance: Enterprise-grade authentication, encryption, and granular permission controls built-in.',
    ],
  },
  {
    title: 'Web Application Development',
    icon: Globe,
    description:
      'Fast, responsive, and secure web applications built to deliver seamless user experiences and scale under load.',
    items: [
      'Single-Page & Progressive Web Apps (PWA): Fluid, desktop-like responsiveness directly inside modern browsers.',
      'SaaS Platform Engineering: Scalable multi-tenant architectures equipped with subscription handling, user isolation, and analytics.',
      'Client & Vendor Portals: Secure, branded dashboards that streamline client interactions and document management.',
      'Performance & Core Web Vitals: Clean, optimized code designed for lightning-fast loading speeds and search-engine visibility.',
    ],
  },
  {
    title: 'Mobile App Development',
    icon: Smartphone,
    description:
      'Native and cross-platform mobile solutions engineered for intuitive interaction, high engagement, and zero lag across iOS and Android.',
    items: [
      'Cross-Platform Engineering (Flutter/React Native): Single-codebase efficiency delivering native-grade speed and feel on both major platforms.',
      'Native iOS & Android Builds: Tailored specifically for hardware-intensive requirements, offline caching, and deep OS integrations.',
      'Intuitive UX/UI Design: Mobile interfaces designed around thumb-friendly flows, reducing friction and user abandonment.',
      'App Store Launch & Governance: End-to-end management through Apple App Store and Google Play approval pipelines.',
    ],
  },
]

function Page() {
  return (
    <main>
      <ServiceHero
        title="Software Development"
        description="From high-performance web platforms to intuitive mobile apps, Katriyam builds bespoke digital products engineered around your exact operational needs, business logic, and growth milestones."
      />

      <section className="mx-auto max-w-screen-lg px-6 py-20 md:py-28 space-y-20">
        <div className="max-w-3xl">
          <h2 className="font-medium text-4xl leading-[1.15]! tracking-[-0.04em] md:text-[2.75rem]">
            Tailored Engineering
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Off-the-shelf software forces your business to adapt to its
            limitations. At Katriyam, we do the reverse:{' '}
            <strong className="font-medium text-foreground">
              we build the technology around your workflow.
            </strong>
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Whether you need to automate complex internal operations, launch a
            market-facing mobile product, or replace legacy architecture, every
            solution is architected from scratch to match your specific
            functional requirements, security standards, and scalability goals.
          </p>
        </div>

        <ServiceList title="Core Development Services" services={services} />
      </section>

      <ServiceTimeline title="Our Development Process" timelines={timelines} />

      <ServiceFaq faq={faq} />
    </main>
  )
}

export default Page
