"use client";

import { useState } from "react";
import { Briefcase, ArrowRight } from "lucide-react";
import ExperienceDetailModal, {
  type ExperienceDetail,
} from "../components/ExperienceDetailModal";

const experiences: ExperienceDetail[] = [
  {
    role: "Senior Software Engineer",
    company: "Precanto",
    type: "Full-time · Remote",
    period: "Nov 2025 – Present",
    location: "Bengaluru, Karnataka, India",
    bullets: [
      "Developed threaded commenting feature with user tagging, RBAC, and nested replies. Integrated email notifications with deep-linking to enable direct navigation to specific comments.",
      "Implemented in-memory caching layer in GO-ETL with four-bucket hash map partitioning for entity and category mappings. Reduced DB queries from O(N) to O(1) per entity, concurrent-safe read access.",
      "Built Vendor Dashboard API endpoints with summary data aggregation and CSV export functionality.",
    ],
    skills: ["Python", "Flask", "Go"],
    documents: [
      // { label: "Experience Letter", href: "/documents/precanto-experience.pdf" },
    ],
  },
  {
    role: "Software Developer",
    company: "MetaSage.ai",
    type: "Full-time · Hybrid",
    period: "Apr 2025 – Oct 2025",
    location: "Bengaluru, Karnataka, India",
    bullets: [
      "Architected enterprise placement platform serving 17,000+ students across 2 universities with 99.9% uptime, implementing RBAC system with Supabase RLS policies for multi-tenant data isolation.",
      "Developed Supabase Edge Functions for AI-powered resume analysis (OpenAI GPT-4), bulk eligibility validation, automated email orchestration with calendar invites, and interview progression workflows processing 10,000+ operations daily.",
      "Engineered CI/CD pipeline with GitHub Actions orchestrating multi-tier deployments: frontend to Vercel (production) and Netlify (staging), backend microservices to GCP Cloud Run and dedicated VMs—achieving zero-downtime releases with automated DNS failover via GoDaddy.",
      "Optimized platform performance implementing 15+ cached service layers with LRU strategies and React Query, reducing API calls by 60% through batched operations and real-time Supabase subscriptions; improved page load times from 3s to 200ms.",
      "Built end-to-end CRM application with Gmail Pub/Sub integration for email subscription management, rate limiting, and Recall.ai for real-time call recording; collaborated with stakeholders across 2 universities.",
      "Implemented comprehensive authentication system with LinkedIn OAuth 2.0 PKCE flow and Google SSO with college-domain validation; integrated PostHog analytics, Sentry error tracking, Incident.io monitoring, and Thena.ai support automation.",
      "Designed responsive UI with shadcn/ui component library, dark mode using next-themes, drag-and-drop Kanban boards with @dnd-kit, bulk CSV/Excel upload validation, and analytics dashboards with recharts for TPO workflows.",
    ],
    skills: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Supabase",
      "PostgreSQL",
      "GCP",
    ],
    documents: [
      // { label: "Experience Letter", href: "/documents/metasage-experience.pdf" },
      // { label: "Relieving Letter", href: "/documents/metasage-relieving.pdf" },
    ],
  },
  {
    role: "Executive Software Developer",
    company: "FeedSense AI Private Limited",
    type: "Full-time",
    period: "Apr 2024 – Apr 2025",
    location: "Kolkata, West Bengal, India",
    bullets: [
      "Crafted and executed multiple commercial models employing Python. Proficiency extends beyond mere model creation, with significant contributions to the backend API, skillfully composed using TypeScript.",
    ],
    skills: ["TypeScript", "PostgreSQL", "Python"],
    documents: [
      // { label: "Promotion Letter", href: "/documents/feedsense-promotion.pdf" },
    ],
  },
  {
    role: "Executive Software Developer",
    company: "FeedSense AI Private Limited",
    type: "Full-time",
    period: "Jul 2023 – Mar 2024",
    location: "Kolkata, West Bengal, India",
    bullets: [
      "Crafted and executed multiple commercial models employing Python. Made significant contributions to the backend API, skillfully composed using TypeScript.",
    ],
    skills: ["TypeScript", "PostgreSQL"],
    documents: [
      // { label: "Experience Letter", href: "/documents/feedsense-experience.pdf" },
    ],
  },
  {
    role: "Software Developer",
    company: "FeedSense AI Private Limited",
    type: "Internship",
    period: "Jan 2023 – Jun 2023",
    location: "Kolkata, West Bengal, India",
    bullets: [
      "Crafted and executed three commercial models employing Python. Made significant contributions to the backend API using TypeScript.",
    ],
    skills: ["PostgreSQL", "Python", "TypeScript"],
    documents: [
      // { label: "Internship Certificate", href: "/documents/feedsense-internship.pdf" },
    ],
  },
  {
    role: "Subject Matter Expert",
    company: "Chegg Inc.",
    type: "Part-time",
    period: "Jun 2022 – Aug 2024",
    location: "Remote",
    bullets: [],
    skills: [],
    documents: [],
  },
  {
    role: "Android Developer",
    company: "Twain Labs",
    type: "Internship",
    period: "Jul 2020 – Oct 2020",
    location: "Remote",
    bullets: [
      "Created an Android application successfully published on Google Play, comprising a private browsing segment and an integrated hub amalgamating various social media platforms into a single, user-friendly interface.",
    ],
    skills: ["Java", "Firebase"],
    documents: [
      // { label: "Internship Certificate", href: "/documents/twainlabs-certificate.pdf" },
    ],
  },
  {
    role: "Android Developer",
    company: "Inventive Cafe India Private Limited",
    type: "Internship",
    period: "Jun 2020 – Sep 2020",
    location: "Remote",
    bullets: [
      "Developed a PDF creation application that generates PDFs by clicking images, created using Java for the Android platform with the assistance of OpenCV.",
    ],
    skills: ["Java", "MySQL"],
    documents: [
      // { label: "Internship Certificate", href: "/documents/inventivecafe-certificate.pdf" },
    ],
  },
  {
    role: "Android Developer",
    company: "Mirazh Media & Entertainment Pvt. Ltd.",
    type: "Internship",
    period: "May 2020 – Jul 2020",
    location: "Remote",
    bullets: [
      "Constructed an Android application for their homepage, in addition to developing a VR application for their educational technology platform.",
    ],
    skills: ["Virtual Reality (VR)", "Java"],
    documents: [
      // { label: "Internship Certificate", href: "/documents/mirazh-certificate.pdf" },
    ],
  },
];

export default function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceDetail | null>(null);

  return (
    <>
      <section
        id="experience"
        className="flex min-h-screen w-full flex-col gap-12 px-8 py-24"
      >
        <h2 className="text-5xl lg:text-6xl">
          Work <span className="font-bold">Experience</span>
        </h2>

        <div className="relative ml-4">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-4 w-0.5 bg-gray-200" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12">
                {/* Timeline dot */}
                <div className="absolute left-2 top-1.5 flex h-5 w-5 items-center justify-center rounded-full border-2 border-black bg-white">
                  <div className="h-2 w-2 rounded-full bg-black" />
                </div>

                {/* Card */}
                <div className="rounded-sm border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-shadow hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <p className="text-base text-gray-600">
                        {exp.company}{" "}
                        <span className="text-sm text-gray-400">
                          · {exp.type}
                        </span>
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2 text-sm text-gray-500">
                      <Briefcase size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="mt-1 text-sm text-gray-400">{exp.location}</p>

                  {/* Bullets */}
                  {exp.bullets.length > 0 && (
                    <ul className="mt-4 flex flex-col gap-2">
                      {exp.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-sm leading-relaxed text-gray-600"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills */}
                  {exp.skills.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-sm border border-black px-2 py-0.5 text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* View Details Button */}
                  <button
                    onClick={() => setSelectedExperience(exp)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold transition-all hover:gap-3"
                  >
                    View Details
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExperienceDetailModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </>
  );
}
