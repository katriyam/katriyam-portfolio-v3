'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { FaLinkedinIn, FaTwitter, FaBehance, FaInstagram } from 'react-icons/fa'

export interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  social?: {
    twitter?: string
    linkedin?: string
    instagram?: string
    behance?: string
  }
}

const DEFAULT_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Tabassum N. Haque',
    role: 'CEO & Co-Founder',
    image: '/TEAM-MEMBER-1.webp',
    social: {
      linkedin: 'https://www.linkedin.com/in/tabassum-n-haque',
      twitter: 'https://x.com/tabbytalks90',
    },
  },
  {
    id: '2',
    name: 'Rafiqur Rahman Priyam',
    role: 'Managing Director & Co-Founder',
    image: '/TEAM-MEMBER-2.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/rafiqurrahmanpriyam',
      twitter: 'https://x.com/rrpriyam',
      instagram: 'https://www.instagram.com/rafiqurrahmanpriyam',
    },
  },
  {
    id: '3',
    name: 'Monzoor Morshed Mahmud',
    role: 'CTO',
    image: '/TEAM-MEMBER-3.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/monzoor-morshed/',
    },
  },
  {
    id: '5',
    name: 'Vasiliki Panayi',
    role: 'Head of Growth & Marketing',
    image: '/TEAM-MEMBER-4.webp',
    social: {
      linkedin: 'linkedin.com/in/vasiliki-panayi',
    },
  },
  {
    id: '4',
    name: 'Md Ahnaf Abir',
    role: 'Software Engineer',
    image: '/TEAM-MEMBER-4.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/ahnafabir11',
      twitter: 'https://x.com/ahnafabir11',
      instagram: 'https://www.instagram.com/ahnafabir11',
    },
  },
]

interface TeamShowcaseProps {
  members?: TeamMember[]
}

export function TeamShowcase({ members = DEFAULT_MEMBERS }: TeamShowcaseProps) {
  const [hoveredId, setHoveredId] = useState<string | null>(null)

  const col1 = members.filter((_, i) => i % 3 === 1)
  const col2 = members.filter((_, i) => i % 3 === 0)
  const col3 = members.filter((_, i) => i % 3 === 2)

  return (
    <section className="flex md:flex-row flex-col justify-center items-start gap-8 md:gap-10 lg:gap-14 pb-40 w-full font-sans select-none container">
      {/* ── Left: photo grid ── */}
      <div className="flex gap-2 md:gap-3 pb-1 md:pb-0 overflow-x-auto shrink-0">
        {/* Column 1 */}
        <div className="flex flex-col gap-2 md:gap-3">
          {col1.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-27.5 sm:w-32.5 md:w-38.75 h-30 sm:h-35 md:h-41.25"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-2 md:gap-3 mt-12 sm:mt-14 md:mt-17">
          {col2.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-30.5 sm:w-36.25 md:w-43 h-33 sm:h-38.75 md:h-45.5"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-2 md:gap-3 mt-5.5 sm:mt-6.5 md:mt-8">
          {col3.map((member) => (
            <PhotoCard
              key={member.id}
              member={member}
              className="w-28.75 sm:w-34 md:w-40.5 h-31.25 sm:h-36.5 md:h-43"
              hoveredId={hoveredId}
              onHover={setHoveredId}
            />
          ))}
        </div>
      </div>

      {/* ── Right: member name list*/}
      <div className="flex md:flex flex-col md:flex-col gap-4 md:gap-5 sm:grid sm:grid-cols-2 pt-0 md:pt-2">
        {members.map((member) => (
          <MemberRow
            key={member.id}
            member={member}
            hoveredId={hoveredId}
            onHover={setHoveredId}
          />
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────
   Photo card 
───────────────────────────────────────── */

function PhotoCard({
  member,
  className,
  hoveredId,
  onHover,
}: {
  member: TeamMember
  className: string
  hoveredId: string | null
  onHover: (id: string | null) => void
}) {
  const isActive = hoveredId === member.id
  const isDimmed = hoveredId !== null && !isActive

  return (
    <div
      className={cn(
        'rounded-xl overflow-hidden transition-opacity duration-400 cursor-pointer shrink-0',
        className,
        isDimmed ? 'opacity-60' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full h-full object-cover transition-[filter] duration-500"
        style={{
          filter: isActive
            ? 'grayscale(0) brightness(1)'
            : 'grayscale(1) brightness(0.77)',
        }}
      />
    </div>
  )
}

/* ─────────────────────────────────────────
   Member name section
───────────────────────────────────────── */

function MemberRow({
  member,
  hoveredId,
  onHover,
}: {
  member: TeamMember
  hoveredId: string | null
  onHover: (id: string | null) => void
}) {
  const isActive = hoveredId === member.id
  const isDimmed = hoveredId !== null && !isActive
  const hasSocial =
    member.social?.twitter ??
    member.social?.linkedin ??
    member.social?.instagram ??
    member.social?.behance

  return (
    <div
      id="about"
      className={cn(
        'transition-opacity duration-300 cursor-pointer',
        isDimmed ? 'opacity-50' : 'opacity-100',
      )}
      onMouseEnter={() => onHover(member.id)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Name + social*/}
      <div className="flex items-center gap-2.5">
        <span
          className={cn(
            'rounded-[5px] w-4 h-3 transition-all duration-300 shrink-0',
            isActive ? 'bg-primary w-5' : 'bg-primary/25',
          )}
        />
        <span
          className={cn(
            'font-semibold md:text-[18px] text-base leading-none tracking-tight transition-colors duration-300',
            isActive ? 'text-foreground' : 'text-foreground/80',
          )}
        >
          {member.name}
        </span>

        {/* Social icons */}
        {hasSocial && (
          <div
            className={cn(
              'flex items-center gap-1.5 ml-0.5 transition-all duration-200',
              isActive
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-2 pointer-events-none',
            )}
          >
            {member.social?.twitter && (
              <a
                href={member.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:bg-primary/10 p-1 rounded text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-150"
                title="X / Twitter"
              >
                <FaTwitter size={10} />
              </a>
            )}
            {member.social?.linkedin && (
              <a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:bg-primary/10 p-1 rounded text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-150"
                title="LinkedIn"
              >
                <FaLinkedinIn size={10} />
              </a>
            )}
            {member.social?.instagram && (
              <a
                href={member.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:bg-primary/10 p-1 rounded text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-150"
                title="Instagram"
              >
                <FaInstagram size={10} />
              </a>
            )}
            {member.social?.behance && (
              <a
                href={member.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hover:bg-primary/10 p-1 rounded text-muted-foreground hover:text-primary hover:scale-110 transition-all duration-150"
                title="Behance"
              >
                <FaBehance size={10} />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Role */}
      <p className="mt-1.5 pl-6.75 font-medium text-muted-foreground text-xs uppercase tracking-[0.2em]">
        {member.role}
      </p>
    </div>
  )
}
