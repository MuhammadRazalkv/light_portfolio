import { personalInfo } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono text-xs text-stone">
          © {new Date().getFullYear()} {personalInfo.name}. Designed & built with care.
        </p>
        <p className="font-mono text-xs text-stone/60">
          React · TypeScript · Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
