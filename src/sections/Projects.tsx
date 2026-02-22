import { projects } from '../data/portfolio'
import { useInView } from '../hooks/useInView'

export default function Projects() {
  const { ref, inView } = useInView()

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Selected work</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink">
            Things I've built
          </h2>
        </div>

        {/* Featured projects */}
        <div className="space-y-6 mb-12">
          {projects
            .filter((p) => p.featured)
            .map((project, i) => (
              <FeaturedProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
        </div>

        {/* Other projects grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects
            .filter((p) => !p.featured)
            .map((project, i) => (
              <SmallProjectCard key={project.id} project={project} index={i} inView={inView} />
            ))}
        </div>
      </div>
    </section>
  )
}

type Project = (typeof projects)[0]

function FeaturedProjectCard({
  project,
  index,
  inView,
}: {
  project: Project
  index: number
  inView: boolean
}) {
  return (
    <div
      className={`group bg-white border border-border rounded-2xl p-8 md:p-10 transition-all duration-700 hover:shadow-lg hover:border-accent/30 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100 + 200}ms` }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            {/* <span className="font-mono text-xs text-stone">{project.year}</span> */}
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="font-mono text-xs px-2 py-0.5 bg-accent/10 text-accent rounded-full">
              Featured
            </span>
          </div>
          <h3 className="font-display text-2xl font-semibold text-ink mb-3 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="font-body text-stone leading-relaxed mb-5 max-w-2xl">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-xs px-2.5 py-1 bg-cream border border-border rounded-full text-stone"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="flex md:flex-col gap-3 shrink-0">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm font-medium px-4 py-2.5 bg-ink text-cream rounded-full hover:bg-accent transition-all duration-300 whitespace-nowrap"
            >
              <ExternalIcon />
              Live demo
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-body text-sm font-medium px-4 py-2.5 border border-border rounded-full text-stone hover:border-ink hover:text-ink transition-all duration-300 whitespace-nowrap"
            >
              <CodeIcon />
              Source
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

function SmallProjectCard({
  project,
  index,
  inView,
}: {
  project: Project
  index: number
  inView: boolean
}) {
  return (
    <div
      className={`group bg-white border border-border rounded-2xl p-6 hover:shadow-md hover:border-accent/30 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100 + 400}ms` }}
    >
      <div className="flex items-start justify-between mb-3">
        <FolderIcon />
        <div className="flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone hover:text-ink transition-colors"
            >
              <ExternalIcon size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone hover:text-ink transition-colors"
            >
              <LinkIcon size={16} />
            </a>
          )}
        </div>
      </div>
      <h3 className="font-display text-lg font-semibold text-ink mb-2 group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="font-body text-sm text-stone leading-relaxed mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.slice(0, 3).map((tag) => (
          <span key={tag} className="font-mono text-xs text-stone/70">
            {tag}
          </span>
        ))}
        {project.tags.length > 3 && (
          <span className="font-mono text-xs text-stone/50">+{project.tags.length - 3}</span>
        )}
      </div>
    </div>
  )
}

function ExternalIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function CodeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function FolderIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C17B3F" strokeWidth="1.5">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  )
}

function LinkIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  )
}
