import { IconCloud } from '@/components/ui/icon-cloud'
import { cn } from '@/lib/utils'

const slugs = [
  'figma',
  'sketch',
  'framer',
  'blender',
  'gimp',
  'inkscape',
  'krita',
  'coreldraw',
  'cinema4d',
  'sketchup',
  'miro',
  'aseprite',
  'boxysvg',
  'sketchfab',
  'dribbble',
  'behance',
  'envato',
  'figma',
  'sketch',
  'framer',
  'blender',
  'gimp',
  'inkscape',
  'krita',
  'coreldraw',
  'cinema4d',
  'sketchup',
  'miro',
  'aseprite',
  'boxysvg',
]

export function IconCloudGraphicsDesign({ className }: { className?: string }) {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  )

  return (
    <div
      className={cn(
        'relative flex size-full items-center justify-center overflow-hidden',
        className,
      )}
    >
      <IconCloud images={images} />
    </div>
  )
}
