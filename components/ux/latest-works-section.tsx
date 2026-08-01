import VerticalTabs from './vertical-tabs'

export function LatestWorksSection() {
  return (
    <section className="container pb-40">
      <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-2 mb-10">
        <h2 className="text-3xl md:text-6xl lg:text-5xl font-semibold text-foreground">
          Latest works
        </h2>

        <p className="text-xs md:text-lg lg:text-sm text-muted-foreground">
          From idea to execution, we turn complex digital challenges into
          powerful solutions. Our team designs, builds, and launches products
          that help your business grow.
        </p>
      </div>

      {/* Work Lists */}
      <VerticalTabs />
    </section>
  )
}
