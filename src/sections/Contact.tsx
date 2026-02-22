import { useState } from "react";
import { personalInfo } from "../data/portfolio";
import { useInView } from "../hooks/useInView";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const { ref, inView } = useInView();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try { 
      await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          title: "New Contact Message",
          name: formState.name,
          email: formState.email,
          message: `${formState.message}\nby: ${formState.email}`,
          time: new Date().toLocaleString(),
        },
        import.meta.env.VITE_PUBLIC_KEY,
      );
      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          {/* Left */}
          <div
            className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
              Get in touch
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-ink mb-6">
              Let's work together
            </h2>
            <p className="font-body text-stone leading-relaxed mb-8">
              Whether you have a project in mind, a role you think I'd be a
              great fit for, or just want to say hi — I'd love to hear from you.
            </p>

            <div className="space-y-4">
              <ContactDetail
                icon={<EmailIcon />}
                label="Email"
                value={personalInfo.email}
                href={`mailto:${personalInfo.email}`}
              />
              <ContactDetail
                icon={<LocationIconSm />}
                label="Location"
                value={personalInfo.location}
              />
              <ContactDetail
                icon={<StatusIcon />}
                label="Status"
                value={personalInfo.availability}
                accent
              />
            </div>
          </div>

          {/* Right — Form */}
          <div
            className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="bg-white border border-border rounded-2xl p-8 shadow-sm space-y-5"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-mono text-xs text-stone block mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      className="w-full font-body text-sm px-4 py-3 bg-cream border border-border rounded-xl text-ink placeholder-stone/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-xs text-stone block mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@acme.com"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full font-body text-sm px-4 py-3 bg-cream border border-border rounded-xl text-ink placeholder-stone/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="font-mono text-xs text-stone block mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    placeholder="Tell me about your project or opportunity..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full font-body text-sm px-4 py-3 bg-cream border border-border rounded-xl text-ink placeholder-stone/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-body font-medium py-3 bg-ink text-cream rounded-xl hover:bg-accent transition-all duration-300 text-sm"
                >
                  Send message →
                </button>
              </form>
            ) : (
              <div className="bg-white border border-border rounded-2xl p-10 shadow-sm flex flex-col items-center justify-center text-center min-h-[300px]">
                <div className="w-14 h-14 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-4">
                  <CheckIcon />
                </div>
                <h3 className="font-display text-2xl font-semibold text-ink mb-2">
                  Message sent!
                </h3>
                <p className="font-body text-stone text-sm">
                  Thanks for reaching out. I'll get back to you within 1–2
                  business days.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactDetail({
  icon,
  label,
  value,
  href,
  accent,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
  accent?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-3 group">
      <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-stone group-hover:border-accent group-hover:text-accent transition-colors">
        {icon}
      </div>
      <div>
        <p className="font-mono text-xs text-stone">{label}</p>
        <p
          className={`font-body text-sm font-medium ${accent ? "text-green-600" : "text-ink"}`}
        >
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    <div>{content}</div>
  );
}

function EmailIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function LocationIconSm() {
  return (
    <svg
      width="14"
      height="14"
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

function StatusIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#22c55e"
      strokeWidth="2.5"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
