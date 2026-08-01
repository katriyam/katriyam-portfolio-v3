import { TeamShowcase } from '@/components/team-showcase'
import { BlogsSection } from '@/components/ux/blogs-section'
import { ContactSection } from '@/components/ux/contact-section'
import { Footer } from '@/components/ux/footer'
import { HeroSection } from '@/components/ux/hero-section'
import { LatestWorksSection } from '@/components/ux/latest-works-section'
import { Services } from '@/components/ux/services'

export default function Home() {
  return (
    <main className="bg-gray-100">
      <HeroSection />
      <Services />
      <LatestWorksSection />
      <BlogsSection />
      <TeamShowcase />
      <ContactSection />
      <Footer />
    </main>
  )
}
