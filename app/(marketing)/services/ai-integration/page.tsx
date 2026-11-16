import { ServiceFaq } from '@/components/ux/service/service-faq'
import { ServiceHero } from '@/components/ux/service/service-hero'
import {
  ServiceList,
  type ServiceListItem,
} from '@/components/ux/service/service-list'
import { ServiceTimeline } from '@/components/ux/service/service-timeline'
import { Bot, BarChart3, Workflow } from 'lucide-react'

const timelines = [
  {
    title: 'Opportunity Discovery',
    subtitle: 'Phase 1',
    description:
      'We identify the workflows, decisions, and customer experiences where AI can create measurable value without adding unnecessary complexity.',
  },
  {
    title: 'Data & Solution Architecture',
    subtitle: 'Phase 2',
    description:
      'Our team evaluates your data, systems, and security requirements before designing the right combination of models, automations, and integrations.',
  },
  {
    title: 'Prototype & Validate',
    subtitle: 'Phase 3',
    description:
      'We build a focused proof of concept, test it against real scenarios, and refine the experience with your team before production development.',
  },
  {
    title: 'Build & Integrate',
    subtitle: 'Phase 4',
    description:
      'The validated solution is connected to your existing tools with proper access controls, monitoring, fallback behavior, and human oversight.',
  },
  {
    title: 'Measure & Improve',
    subtitle: 'Phase 5',
    description:
      'After launch, we track quality, adoption, and business outcomes so the system continues to improve as your needs and data evolve.',
  },
]

const faq = [
  {
    question: 'Practical AI, Not Hype',
    answer:
      'We focus on useful applications that improve a real workflow, reduce costs, or create a better customer experience.',
  },
  {
    question: 'Secure by Design',
    answer:
      'Data boundaries, permissions, auditability, and human review are considered from the beginning of every implementation.',
  },
  {
    question: 'Built Around Your Stack',
    answer:
      'We integrate with the tools and systems your team already uses instead of forcing you into a disconnected platform.',
  },
  {
    question: 'Clear Business Outcomes',
    answer:
      'Every project starts with measurable goals, giving your team a clear way to evaluate adoption and return on investment.',
  },
]

const services: ServiceListItem[] = [
  {
    title: 'AI-Powered Automation',
    icon: Workflow,
    description:
      'Intelligent workflows that remove repetitive work while keeping your team in control of important decisions.',
    items: [
      'Process Automation: Connect systems and automate multi-step tasks across your operations.',
      'Document Intelligence: Extract, classify, and summarize information from business documents.',
      'Workflow Assistants: Give teams context-aware help inside the tools they use every day.',
      'Human-in-the-Loop Reviews: Add approvals and escalation paths wherever judgment matters.',
    ],
  },
  {
    title: 'Custom AI Applications',
    icon: Bot,
    description:
      'Purpose-built AI experiences that help your customers and employees find answers and take action faster.',
    items: [
      'Knowledge Assistants: Turn trusted internal content into searchable, conversational experiences.',
      'Recommendation Systems: Surface relevant products, content, or next steps using your business data.',
      'Conversational Interfaces: Build natural support and service experiences across web and chat.',
      'AI Feature Integration: Add focused intelligence to existing products without rebuilding them.',
    ],
  },
  {
    title: 'AI Strategy & Optimization',
    icon: BarChart3,
    description:
      'A clear roadmap for adopting AI responsibly, prioritizing the opportunities that matter most to your business.',
    items: [
      'Use-Case Prioritization: Rank initiatives by impact, feasibility, risk, and time to value.',
      'Model Evaluation: Compare quality, cost, speed, and reliability across suitable approaches.',
      'Prompt & Workflow Optimization: Improve consistency and usefulness through structured iteration.',
      'Performance Monitoring: Track accuracy, usage, cost, and feedback after launch.',
    ],
  },
]

function Page() {
  return (
    <main>
      <ServiceHero
        title="AI Integration"
        description="Turn emerging AI capabilities into dependable business advantages with secure, practical solutions integrated into the workflows and products you already use."
      />

      <section className="mx-auto max-w-screen-lg space-y-20 px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <h2 className="font-medium text-4xl leading-[1.15]! tracking-[-0.04em] md:text-[2.75rem]">
            Intelligent by Design
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            AI should make your business more capable, not more complicated. We
            connect the right models and automations to your existing systems
            so your team can work with more speed and confidence.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            From internal knowledge assistants to customer-facing product
            features, every solution is designed around your data, security
            requirements, and measurable business outcomes.
          </p>
        </div>

        <ServiceList title="AI Integration Services" services={services} />
      </section>

      <ServiceTimeline title="Our AI Integration Process" timelines={timelines} />
      <ServiceFaq faq={faq} />
    </main>
  )
}

export default Page
