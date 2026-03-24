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
    period: "Nov 2025 – Mar 2026",
    location: "Bengaluru, Karnataka, India",
    bullets: [
      "Developed threaded commenting feature with user tagging, RBAC, and nested replies. Integrated email notifications with deep-linking to enable direct navigation to specific comments.",
      "Implemented in-memory caching layer in GO-ETL with four-bucket hash map partitioning for entity and category mappings. Reduced DB queries from O(N) to O(1) per entity, concurrent-safe read access.",
      "Built Vendor Dashboard API endpoints with summary data aggregation and CSV export functionality.",
    ],
    skills: ["Python", "Flask", "Go", "PostgreSQL", "Redis", "Docker"],
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
      "Python",
      "TypeScript",
      "React.js",
      "NestJS",
      "Supabase",
      "PostgreSQL",
      "GCP",
    ],
    documents: [
      { label: "Experience Letter", href: "/documents/metasage_release_letter.pdf" },
    ],
  },
  {
    role: "Executive Software Developer",
    company: "FeedSense AI Private Limited",
    type: "Full-time · Onsite",
    period: "Apr 2024 – Apr 2025",
    location: "Kolkata, West Bengal, India",
    bullets: [
      "Architected master-slave database replication, significantly reducing read latency and ensuring high availability with consistent data synchronization across multiple instances.",
      "Monitored and maintained bare metal server infrastructure, implementing data security hardening and vulnerability remediation to strengthen system resilience.",
      "Streamlined production deployments by building a CI/CD pipeline with automated security vulnerability scanning and multi-stage quality checks.",
      "Designed and implemented automated failover mechanisms to ensure zero-downtime database switchover during primary node failures.",
      "Built monitoring dashboards and alerting systems to track server health metrics, database performance, and application uptime in real time.",
    ],
    skills: ["TypeScript", "PostgreSQL", "Python", "CI/CD", "GitHub Actions", "Linux", "Docker"],
    documents: [
      { label: "Experience Letter", href: "/documents/feedsense_release_letter.jpg" },
    ],
  },
  {
    role: "Executive Software Developer",
    company: "Vista Intelligence Private Limited",
    type: "Full-time · Onsite",
    period: "Jul 2023 – Mar 2024",
    location: "Kolkata, West Bengal, India",
    bullets: [
      "Built automated trading algorithms for stocks, commodities, and cryptocurrencies that analyzed market data in real time and executed trades based on predefined strategies.",
      "Developed and maintained the backend API in TypeScript, enabling seamless integration with trading engines and efficient high-throughput data handling.",
      "Optimized algorithm performance through rigorous backtesting, live debugging, and iterative tuning—improving profitability while reducing risk exposure in volatile markets.",
      "Collaborated with cross-functional teams including quants and analysts to refine trading strategies and ensure compliance with industry regulations.",
      "Implemented real-time monitoring and alerting for trade execution, tracking slippage, fill rates, and P&L metrics across all asset classes.",
    ],
    skills: ["TypeScript", "PostgreSQL", "Node.js", "REST APIs"],
    documents: [
      { label: "Experience Letter", href: "/documents/vista_intelligence_release_letter.jpg" },
    ],
  },
  {
    role: "Software Developer",
    company: "Vista Intelligence Private Limited",
    type: "Internship · Onsite",
    period: "Jan 2023 – Jun 2023",
    location: "Kolkata, West Bengal, India",
    bullets: [
      "Built real-time data ingestion pipelines to stream market data from external providers into in-house servers.",
      "Implemented data cleaning, validation, and transformation workflows to ensure high-quality datasets for downstream trading algorithms.",
      "Developed automated data quality checks and anomaly detection scripts to flag inconsistencies in incoming market feeds.",
      "Created internal tooling for monitoring pipeline throughput, latency, and error rates across multiple data streams.",
    ],
    skills: ["PostgreSQL", "Python", "TypeScript", "ETL Pipelines"],
    documents: [],
  },
  {
    role: "Android Developer",
    company: "Twain Labs",
    type: "Internship · Remote",
    period: "Jul 2020 – Oct 2020",
    location: " Okhla Industrial Area, New Delhi, India",
    bullets: [
      "Built and published an Android application on Google Play featuring a private browsing module and a unified social media hub aggregating multiple platforms into a single interface.",
      "Worked on multiple Android projects simultaneously, handling end-to-end development from UI design to Play Store deployment.",
      "Integrated Firebase for user authentication, real-time data sync, and push notifications across the application.",
    ],
    skills: ["Java", "Firebase", "Android SDK", "XML"],
    documents: [
      { label: "Experience Letter", href: "/documents/twain_lab_llp_release_letter.pdf" },
    ],
  },
  {
    role: "Android Developer",
    company: "Inventive Cafe India Private Limited",
    type: "Internship · Remote",
    period: "Jun 2020 – Sep 2020",
    location: "Dhakia Kalan, Uttarakhand, India",
    bullets: [
      "Developed a PDF creation application for Android that captures images via the device camera and converts them into formatted PDF documents.",
      "Integrated OpenCV for image processing, including auto-cropping, perspective correction, and enhancement before PDF generation.",
      "Implemented local storage management with MySQL to organize and retrieve generated PDFs efficiently.",
    ],
    skills: ["Java", "MySQL", "OpenCV", "Android SDK"],
    documents: [
      { label: "Experience Letter", href: "/documents/inventive_cafe_release_letter.jpg" },
    ],
  },
  {
    role: "Android Developer",
    company: "Mirazh Media & Entertainment Pvt. Ltd.",
    type: "Internship · Remote",
    period: "May 2020 – Jul 2020",
    location: "Fatehabad, Haryana, India",
    bullets: [
      "Built the \"Overlook\" Android application serving as the company's mobile homepage with dynamic content and navigation.",
      "Developed a VR application for the \"vrmirazh.com\" ed-tech platform, enabling immersive learning experiences on Android devices.",
      "Collaborated with the CTO and design team to translate wireframes into responsive Android layouts and interactive UI components.",
    ],
    skills: ["Virtual Reality (VR)", "Java", "Android SDK"],
    documents: [
      { label: "Experience Letter", href: "/documents/mirazh_media_release_letter.pdf" },
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
        className="flex min-h-screen w-full flex-col gap-6 px-5 py-20 sm:gap-8 sm:px-8 sm:py-24 md:gap-10 lg:gap-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Work <span className="font-bold">Experience</span>
        </h2>

        <div className="relative ml-2 sm:ml-4">
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-3 w-0.5 bg-gray-200 sm:left-4" />

          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-9 sm:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-1 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border-2 border-black bg-white sm:left-2 sm:h-5 sm:w-5">
                  <div className="h-1.5 w-1.5 rounded-full bg-black sm:h-2 sm:w-2" />
                </div>

                {/* Card */}
                <div className="rounded-sm border-2 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:p-5 sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-6">
                  {/* Header */}
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-base font-bold sm:text-lg md:text-xl">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-gray-600 sm:text-base">
                        {exp.company}{" "}
                        <span className="text-xs text-gray-400 sm:text-sm">
                          · {exp.type}
                        </span>
                      </p>
                    </div>
                    <div className="flex shrink-0 items-center gap-1.5 text-xs text-gray-500 sm:gap-2 sm:text-sm">
                      <Briefcase size={12} className="sm:hidden" />
                      <Briefcase size={14} className="hidden sm:block" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <p className="mt-1 text-xs text-gray-400 sm:text-sm">
                    {exp.location}
                  </p>

                  {/* Bullets (show at most 3) */}
                  {exp.bullets.length > 0 && (
                    <ul className="mt-3 flex flex-col gap-1.5 sm:mt-4 sm:gap-2">
                      {exp.bullets.slice(0, 3).map((bullet, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2 text-xs leading-relaxed text-gray-600 sm:text-sm"
                        >
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-black sm:h-1.5 sm:w-1.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Skills */}
                  {exp.skills.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-sm border border-black px-1.5 py-0.5 text-[10px] font-medium sm:px-2 sm:text-xs"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* View Details Button */}
                  {(exp.bullets.length > 3 || (exp.documents && exp.documents.length > 0)) && (
                    <button
                      onClick={() => setSelectedExperience(exp)}
                      className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold transition-all hover:gap-3 sm:mt-5 sm:text-sm"
                    >
                      View Details
                      <ArrowRight size={12} className="sm:hidden" />
                      <ArrowRight size={14} className="hidden sm:block" />
                    </button>
                  )}
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
