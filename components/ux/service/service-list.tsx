import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { LucideIcon } from 'lucide-react'

export type ServiceListItem = {
  title: string
  icon: LucideIcon
  description: string
  items: string[]
}

export function ServiceList({
  services,
  title,
}: {
  services: ServiceListItem[]
  title?: string
}) {
  return (
    <div>
      <h2 className="font-medium text-3xl tracking-tight md:text-4xl">
        {title}
      </h2>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {services.map(({ description, icon: Icon, items, title }) => (
          <Card className="h-full bg-background" key={title}>
            <CardHeader>
              <Icon className="mb-2 size-8 text-primary" />
              <CardTitle className="text-xl">{title}</CardTitle>
              <p className="pt-2 leading-relaxed text-muted-foreground">
                {description}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc space-y-3 pl-5 text-xs leading-relaxed text-muted-foreground marker:text-primary">
                {items.map((item) => (
                  <li
                    className="border-t pl-1 pt-3 first:border-0 first:pt-0"
                    key={item}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
