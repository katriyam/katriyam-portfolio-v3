import { BlogCard } from './blog-card'

export function BlogsSection() {
  return (
    <section className="container pb-40">
      <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left space-y-2 mb-10">
        <h2 className="text-3xl md:text-6xl lg:text-5xl font-semibold text-foreground">
          Latest Blogs
        </h2>

        <p className="text-xs md:text-lg lg:text-sm text-muted-foreground">
          From idea to execution, we turn complex digital challenges into
          powerful solutions. Our team designs, builds, and launches products
          that help your business grow.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </section>
  )
}
