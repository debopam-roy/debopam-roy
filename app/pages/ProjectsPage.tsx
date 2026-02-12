import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Swaadly",
    client: "Freelance (Remote: Offsite)",
    period: "Dec 2025 – Jan 2026",
    type: "Full Time",
    description:
      "A comprehensive food delivery SaaS platform serving over 50,000+ monthly active users with high reliability and performance.",
    highlights: [
      "Built using Next.js frontend and NestJS backend with microservices architecture on GCP",
      "PostgreSQL for transactional data and Redis for caching and session management",
      "Secure Payment Integration with multi-gateway payment processing (PCI compliant)",
      "Dynamic pricing system with promotional code validation (Coupon & Discount Engine)",
      "Real-time order status updates using Socket.IO/WebRTC for customers and delivery personnel",
      "Multi-tenant system supporting multiple restaurants with individual dashboards and inventory management",
      "Reduced page load times from 3s to 200ms through strategic caching and Cloudflare CDN",
    ],
    skills: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "GCP",
      "Socket.IO",
      "WebRTC",
    ],
    link: "https://swaadly.com",
  },
  {
    title: "Soul Paradise Travels",
    client: "Freelance (Remote: Offsite)",
    period: "Oct 2025 – Dec 2025",
    type: "Full Time",
    description:
      "An end-to-end travel management platform serving both retail customers and travel agency partners with integrated booking capabilities across multiple travel services.",
    highlights: [
      "Developed using Next.js for responsive frontend and NestJS backend with PostgreSQL database",
      "Implemented RESTful APIs with third-party integrations for real-time travel data and booking confirmations",
      "Flight Booking System with real-time flight search, price comparison, and instant booking",
      "Hotel Reservations with property listings, availability checks, room selection, and secure booking workflow",
      "Travel Insurance integration with providers offering coverage options during checkout",
      "Dual User Types: Separate portals for retail customers (B2C) and travel agencies (B2B) with customized pricing and commission structures",
    ],
    skills: ["Next.js", "NestJS", "PostgreSQL", "REST APIs"],
    link: "https://soulparadisetravels.com",
  },
  {
    title: "CRM Application",
    client: "End Users (Remote: Offsite)",
    period: "Sep 2025 – Present",
    type: "Full Time",
    description:
      "A microservice-based system for customer relationship management integrating with other applications.",
    highlights: [
      "Connects multiple Gmail accounts using Google Pub/Sub API for real-time inbox updates",
      "Automated email subscription management and communication tracking",
      "Built with NestJS microservices implementing rate limiting and request debouncing for API quota management",
      "Integrates Recall.ai for real-time call recording and AI-powered transcription",
      "Multi-account Gmail integration with OAuth authentication",
      "Automated inbox monitoring, intelligent rate limiting, AI-powered call transcription",
      "Deployed using Docker and automated CI/CD pipelines in Google Cloud Console",
    ],
    skills: [
      "NestJS",
      "Google Pub/Sub",
      "Docker",
      "GCP",
      "Recall.ai",
      "OAuth",
    ],
  },
  {
    title: "RecruitSage",
    client: "End Users (Remote: Offsite)",
    period: "Apr 2025 – Sep 2025",
    type: "Full Time",
    description:
      "A full-stack placement management SaaS platform for campus recruitment workflows serving 17,000+ students across universities.",
    highlights: [
      "Multi-tenant architecture using PostgreSQL row-level security policies for complete data isolation",
      "Backend uses NestJS microservices and Supabase Edge Functions for AI-powered resume analysis with OpenAI",
      "Bulk eligibility validation, automated email orchestration, and real-time notifications",
      "Frontend leverages React, TypeScript, shadcn/ui, and Tailwind CSS for responsive UI",
      "Automated CI/CD pipelines deploying to Vercel, Netlify, and GCP Cloud Run",
      "Monitoring via Sentry and PostHog with OAuth authentication",
      "Strategic caching with Redis and React Query for sub-200ms performance",
    ],
    skills: [
      "React",
      "TypeScript",
      "NestJS",
      "Supabase",
      "PostgreSQL",
      "Redis",
      "GCP",
    ],
  },
  {
    title: "Hedging Calculator",
    client: "Personal Project",
    period: "Nov 2024 – Dec 2024",
    type: "Full Time",
    description:
      "A financial tool that helps users optimize investment portfolios and minimize risks.",
    highlights: [
      "Users can input their portfolio value or choose from: Suggested Portfolio, Nifty-Fifty, or Auto Allocation",
      "Suggested Portfolio: Expert-recommended allocation",
      "Nifty-Fifty: Equal distribution across 50 Nifty assets",
      "Auto Allocation: Divides total investment equally among 50 assets",
      "Provides tailored hedging strategies to reduce risks, especially during low-profit periods",
    ],
    skills: ["Python", "Finance", "Data Analysis"],
  },
  {
    title: "Expenza",
    client: "Personal Project",
    period: "Sep 2024 – Oct 2024",
    type: "Part Time",
    description:
      "A web application to track and visualize expenses and savings with interactive charts and intuitive card views.",
    highlights: [
      "Integrated secure cloud storage for cross-device data synchronization",
      "Added features like tagging, searching, and sorting to streamline expense management",
      "Interactive charts for visualizing spending patterns and savings goals",
    ],
    skills: ["Web Development", "Cloud Storage", "Data Visualization"],
  },
  {
    title: "CodeFlow",
    client: "Personal Project",
    period: "Jun 2024 – Present",
    type: "Part Time",
    description:
      "A fully socket-driven real-time collaborative code editor designed to support multiple programming languages with integrated live code compilation.",
    highlights: [
      "Built for high-performance, enabling multiple users to collaborate on code simultaneously with minimal latency",
      "Secure user authentication for controlled access",
      "Multi-language support with runtime environments for instant feedback",
      "Simplified UI/UX focused on usability and productivity",
      "Serves as a complete solution for online technical meetings, combining collaboration, code execution, and communication",
    ],
    skills: ["Socket.IO", "WebRTC", "React", "Node.js"],
  },
  {
    title: "Messenger for Messages, Chat",
    client: "Twain Lab LLP (Offsite)",
    period: "Jun 2020 – Oct 2020",
    type: "Full Time",
    description:
      "An Android application that consolidates all social media platforms into one app, eliminating the need for multiple installations and saving phone storage.",
    highlights: [
      "Incognito browsing with session-based history deletion, ensuring privacy by clearing all data upon app closure",
      "Published on Google Play Store",
    ],
    skills: ["Android", "Java"],
    link: "https://play.google.com/store/apps/details?id=facebook.lite.facebook.messenger.social&pcampaignid=web_share",
  },
];

export default function ProjectsPage() {
  return (
    <section
      id="projects"
      className="flex min-h-screen w-full flex-col gap-6 px-5 py-20 sm:gap-8 sm:px-8 sm:py-24 md:gap-10 lg:gap-12"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
        My <span className="font-bold">Projects</span>
      </h2>

      <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <div
            key={i}
            className="group flex flex-col rounded-sm border-2 border-black p-4 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-shadow hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:p-5 sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-6"
          >
            {/* Header */}
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <h3 className="text-base font-bold sm:text-lg md:text-xl">{project.title}</h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title}`}
                  className="shrink-0 text-gray-400 transition-colors hover:text-black"
                >
                  <ExternalLink size={16} className="sm:hidden" />
                  <ExternalLink size={18} className="hidden sm:block" />
                </a>
              )}
            </div>

            <p className="text-xs text-gray-500 sm:text-sm">{project.client}</p>
            <p className="mt-0.5 text-xs text-gray-400 sm:text-sm">
              {project.period} ({project.type})
            </p>

            {/* Description */}
            <p className="mt-3 text-xs leading-relaxed text-gray-600 sm:mt-4 sm:text-sm">
              {project.description}
            </p>

            {/* Highlights */}
            <ul className="mt-3 flex flex-col gap-1 sm:mt-4 sm:gap-1.5">
              {project.highlights.map((highlight, j) => (
                <li
                  key={j}
                  className="flex items-start gap-2 text-xs leading-relaxed text-gray-600 sm:text-sm"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-black sm:h-1.5 sm:w-1.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* Skills */}
            <div className="mt-auto flex flex-wrap gap-1.5 pt-3 sm:gap-2 sm:pt-4">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm border border-black px-1.5 py-0.5 text-[10px] font-medium sm:px-2 sm:text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
