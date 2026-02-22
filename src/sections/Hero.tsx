import { personalInfo } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col justify-center pt-16 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-indigo-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center">
        {/* ================= LEFT ================= */}
        <div>
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 border border-slate-200 rounded-full bg-white/70 backdrop-blur-sm shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs text-stone">
              {personalInfo.availability}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-5xl md:text-7xl font-semibold text-ink leading-[1.05] mb-6 animate-fade-up"
            style={{
              animationDelay: "0.1s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            Hi, I'm{" "}
            <span className="text-black italic">
              {personalInfo.name.split(" ")[0]}
            </span>
            <br />
            <span className="text-stone font-normal">Software Engineer</span>
          </h1>

          {/* Tagline */}
          <p
            className="font-body text-xl text-stone leading-relaxed max-w-xl mb-6 animate-fade-up"
            style={{
              animationDelay: "0.2s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            {personalInfo.bio}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4 animate-fade-up"
            style={{
              animationDelay: "0.3s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <a
              href="#projects"
              className="font-body font-medium px-6 py-3 bg-black text-white rounded-full hover:bg-indigo-700 hover:shadow-md transition-all duration-300 text-sm"
            >
              View my work
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="font-body font-medium px-6 py-3 border border-slate-300 rounded-full text-ink hover:border-indigo-500 hover:text-indigo-600 transition-all duration-300 text-sm"
            >
              Get in touch
            </a>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-6 mt-10 animate-fade-up"
            style={{
              animationDelay: "0.4s",
              opacity: 0,
              animationFillMode: "forwards",
            }}
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-stone hover:text-indigo-600 transition-colors flex items-center gap-1.5 group"
            >
              <GithubIcon />
              <span className="group-hover:underline">GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-stone hover:text-indigo-600 transition-colors flex items-center gap-1.5 group"
            >
              <LinkedinIcon />
              <span className="group-hover:underline">LinkedIn</span>
            </a>
          </div>
        </div>

        {/* ================= RIGHT CARD ================= */}
        <div className="order-last md:order-none flex justify-center md:block mt-12 md:mt-0">
          <div className="relative w-64 sm:w-72 group">
            {/* Decorative background */}
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border border-indigo-200 bg-indigo-50/40 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2" />

            {/* Main card */}
            <div className="relative bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Avatar */}
              <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 ring-2 ring-indigo-100">
                <img
                  src="/profile.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
                <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-white/20 to-transparent" />
              </div>

              <p className="font-display text-xl font-semibold text-ink mb-1 tracking-tight">
                {personalInfo.name}
              </p>

              <p className="font-mono text-xs text-indigo-600 mb-4">
                {personalInfo.role}
              </p>

              <div className="flex items-center gap-1.5 text-stone">
                <LocationIcon />
                <span className="font-mono text-xs">
                  {personalInfo.location}
                </span>
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200/70" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex justify-center mt-16 animate-bounce">
        <a
          href="#projects"
          className="text-stone hover:text-indigo-600 transition-colors"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M10 4v12M4 10l6 6 6-6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-display text-xl font-semibold text-ink">{value}</p>
      <p className="font-mono text-xs text-stone">{label}</p>
    </div>
  );
}

function GithubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

// function TwitterIcon() {
//   return (
//     <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
//       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
//     </svg>
//   );
// }

function LocationIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
