import { TeamShowcase } from '@/components/ux/team-showcase'
import { BlogsSection } from '@/components/ux/blogs-section'
import { ContactSection } from '@/components/ux/contact-section'
import { Footer } from '@/components/ux/footer'
import { HeroSection } from '@/components/ux/hero-section'
import { LatestWorksSection } from '@/components/ux/latest-works-section'
import { Services } from '@/components/ux/services'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Services />
      <LatestWorksSection />
      <TeamShowcase />
      <BlogsSection />
      <ContactSection />
    </main>
  )
}
