import { Footer } from '@/components/ux/footer'
import Header from '@/components/ux/header'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-gray-100">
      <Header />
      {children}
      <Footer />
    </section>
  )
}
