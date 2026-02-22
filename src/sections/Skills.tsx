import { skills, experience } from "../data/portfolio";
import { useInView } from "../hooks/useInView";

// export default function Skills() {
//   const { ref, inView } = useInView()

//   return (
//     <section id="skills" className="py-28 px-6 bg-ink">
//       <div className="max-w-6xl mx-auto" ref={ref}>
//         {/* Section header */}
//         <div
//           className={`mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
//         >
//           <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">Expertise</p>
//           <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream">
//             Skills & Experience
//           </h2>
//         </div>

//         <div className="grid md:grid-cols-[1fr_1.2fr] gap-16">
//           {/* Skills grid */}
//           <div>
//             <p className="font-mono text-xs text-stone tracking-widest uppercase mb-6">Technologies</p>
//             <div className="grid grid-cols-1 gap-4">
//               {skills.map((group, i) => (
//                 <div
//                   key={group.category}
//                   className={`transition-all duration-700 ${
//                     inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
//                   }`}
//                   style={{ transitionDelay: `${i * 80 + 200}ms` }}
//                 >
//                   <p className="font-mono text-xs text-accent mb-2">{group.category}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {group.items.map((skill) => (
//                       <span
//                         key={skill}
//                         className="font-body text-sm px-3 py-1 rounded-full border border-white/10 text-stone hover:border-accent/50 hover:text-cream transition-all duration-200 cursor-default"
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Experience timeline */}
//           <div>
//             <p className="font-mono text-xs text-stone tracking-widest uppercase mb-6">Experience</p>
//             <div className="relative">
//               {/* Timeline line */}
//               <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />

//               <div className="space-y-10">
//                 {experience.map((job, i) => (
//                   <div
//                     key={i}
//                     className={`relative pl-8 transition-all duration-700 ${
//                       inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
//                     }`}
//                     style={{ transitionDelay: `${i * 120 + 300}ms` }}
//                   >
//                     {/* Timeline dot */}
//                     <div className="absolute left-[-4px] top-1.5 w-2 h-2 rounded-full bg-accent" />

//                     <div className="flex items-start justify-between gap-4 mb-1">
//                       <h3 className="font-display text-lg font-semibold text-cream">{job.role}</h3>
//                       <span className="font-mono text-xs text-stone shrink-0">{job.period}</span>
//                     </div>
//                     <p className="font-mono text-sm text-accent mb-2">{job.company}</p>
//                     <p className="font-body text-sm text-stone leading-relaxed">{job.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Resume link */}
//             <div
//               className={`mt-10 transition-all duration-700 ${
//                 inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//               }`}
//               style={{ transitionDelay: '600ms' }}
//             >
//               <a
//                 href="#"
//                 className="inline-flex items-center gap-2 font-body text-sm font-medium px-5 py-2.5 border border-white/20 rounded-full text-cream hover:border-accent hover:text-accent transition-all duration-300"
//               >
//                 <DownloadIcon />
//                 Download resume
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

export default function Skills() {
  const { ref, inView } = useInView();

  const highlights = [
    { label: "Projects Built", value: "3+" },
    { label: "LeetCode Problems", value: "100+" },
    { label: "Tech Stack", value: "MERN" },
    { label: "Focus", value: "Scalable Systems" },
  ];

  return (
    <section id="skills" className="py-28 px-6 bg-ink">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
            Expertise
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-cream">
            Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16">
          {/* Skills grid */}
          <div>
            <p className="font-mono text-xs text-stone tracking-widest uppercase mb-6">
              Technologies
            </p>

            <div className="grid grid-cols-1 gap-4">
              {skills.map((group, i) => (
                <div
                  key={group.category}
                  className={`transition-all duration-700 ${
                    inView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-6"
                  }`}
                  style={{ transitionDelay: `${i * 80 + 200}ms` }}
                >
                  <p className="font-mono text-xs text-accent mb-2">
                    {group.category}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="font-body text-sm px-3 py-1 rounded-full border border-white/10 text-stone hover:border-accent/50 hover:text-cream transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Highlights (replaces Experience) */}
          <div>
            <p className="font-mono text-xs text-stone tracking-widest uppercase mb-6">
              Highlights
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={item.label}
                  className={`rounded-2xl border border-white/10 p-6 transition-all duration-700 hover:border-accent/40 ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${i * 120 + 300}ms` }}
                >
                  <p className="font-mono text-xs text-stone mb-2">
                    {item.label}
                  </p>
                  <p className="font-display text-2xl text-cream font-semibold">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Resume link */}
            <div
              className={`mt-10 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <a
                href="/Rasal_MERN_Developer_Resume.pdf"
                download
                className="inline-flex items-center gap-2 font-body text-sm font-medium px-5 py-2.5 border border-white/20 rounded-full text-cream hover:border-accent hover:text-accent transition-all duration-300"
              >
                <DownloadIcon />
                Download resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
