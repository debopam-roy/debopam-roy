"use client";

import { useState } from "react";
import {
  Mail,
  Linkedin,
  Phone,
  Coffee,
  Send,
  MessageSquare,
  Briefcase,
  Sparkles,
} from "lucide-react";

const contactReasons = [
  {
    icon: <MessageSquare size={20} />,
    label: "Small Talk",
    value: "small-talk",
  },
  {
    icon: <Briefcase size={20} />,
    label: "Freelance Project",
    value: "freelance",
  },

  {
    icon: <Sparkles size={20} />,
    label: "Feedback / Criticism",
    value: "feedback",
  },
];

const socialLinks = [
  {
    icon: <Mail size={20} />,
    href: "mailto:debopamroy.portfolio@gmail.com",
    label: "debopamroy.portfolio@gmail.com",
    name: "Email",
  },
  {
    icon: <Phone size={20} />,
    href: "tel:+916290060688",
    label: "(+91) 62900-60688",
    name: "Phone",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/debopamroy8",
    label: "linkedin.com/in/debopamroy8",
    name: "LinkedIn",
  },
];

export default function ContactPage() {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Compose mailto link as a fallback (no backend needed)
    const subject = selectedReason
      ? `Portfolio Contact — ${contactReasons.find((r) => r.value === selectedReason)?.label}`
      : "Portfolio Contact";
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    const mailto = `mailto:debopamroy.portfolio@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailto, "_blank");
    setStatus("sent");

    setTimeout(() => {
      setStatus("idle");
      setFormData({ name: "", email: "", message: "" });
      setSelectedReason(null);
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="flex min-h-screen w-full flex-col gap-12 px-8 pt-24 pb-5"
    >
      <div>
        <h2 className="text-5xl lg:text-6xl">
          Get In <span className="font-bold">Touch</span>
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
          Whether you want to discuss a freelance project, have a casual
          conversation, sponsor me a cup of coffee for my work, or simply
          share your honest feedback — my inbox is always open.
        </p>
      </div>

      <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
        {/* Left — Contact Form */}
        <div className="w-full lg:w-3/5">
          {/* Reason Chips */}
          <p className="mb-3 text-sm font-bold uppercase tracking-wider text-gray-500">
            What brings you here?
          </p>
          <div className="mb-8 flex flex-wrap gap-3">
            {contactReasons.map(({ icon, label, value }) => (
              <button
                key={value}
                type="button"
                onClick={() =>
                  setSelectedReason(selectedReason === value ? null : value)
                }
                className={`flex items-center gap-2 rounded-sm border-2 border-black px-4 py-2 text-sm font-medium transition-all ${
                  selectedReason === value
                    ? "bg-black text-white shadow-none"
                    : "bg-white text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)]"
                }`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:gap-4">
              <div className="flex w-full flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-bold uppercase tracking-wider text-gray-500"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="rounded-sm border-2 border-black px-4 py-3 text-sm outline-none transition-shadow focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>
              <div className="flex w-full flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-bold uppercase tracking-wider text-gray-500"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="rounded-sm border-2 border-black px-4 py-3 text-sm outline-none transition-shadow focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="message"
                className="text-sm font-bold uppercase tracking-wider text-gray-500"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows={6}
                placeholder="What's on your mind?"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="resize-none rounded-sm border-2 border-black px-4 py-3 text-sm outline-none transition-shadow focus:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="flex w-fit items-center gap-2 rounded-sm border-2 border-black bg-black px-8 py-3 font-bold text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] transition-all hover:shadow-none disabled:cursor-not-allowed disabled:opacity-50"
            >
              {status === "sending" ? (
                "Opening mail client..."
              ) : status === "sent" ? (
                "Sent! Thank you"
              ) : (
                <>
                  Send Message <Send size={16} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Right — Socials & Info */}
        <div className="flex w-full flex-col gap-8 lg:w-2/5">
          {/* Direct Links */}
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-500">
              Or reach me directly
            </p>
            <div className="flex flex-col gap-4">
              {socialLinks.map(({ icon, href, label, name }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-sm border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-black hover:text-white hover:shadow-none"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border-2 border-current">
                    {icon}
                  </span>
                  <div>
                    <p className="text-sm font-bold">{name}</p>
                    <p className="text-sm text-gray-500 group-hover:text-gray-300">
                      {label}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Coffee Card */}
          <div className="rounded-sm border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center gap-3">
              <Coffee size={24} />
              <h3 className="text-lg font-bold">Sponsor a Coffee</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              If my work has helped you or you simply appreciate what I do,
              consider buying me a coffee. Every cup fuels the next line of
              code!
            </p>
            <a
              href="https://buymeacoffee.com/debopam"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-sm border-2 border-black bg-white px-5 py-2.5 text-sm font-bold transition-all shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:shadow-none"
            >
              <Coffee size={16} />
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t-2 border-black pt-6">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Debopam Roy. All rights reserved.
        </p>
        <p className="text-sm text-gray-600">
          Designed & built with passion and a lot of coffee.
        </p>
      </div>
    </section>
  );
}
