"use client";

import { useEffect } from "react";
import { X, FileText, ArrowRight } from "lucide-react";

export interface ExperienceDocument {
  label: string;
  href: string;
}

export interface ExperienceDetail {
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  bullets: string[];
  skills: string[];
  documents?: ExperienceDocument[];
}

interface ExperienceDetailModalProps {
  experience: ExperienceDetail | null;
  onClose: () => void;
}

export default function ExperienceDetailModal({
  experience,
  onClose,
}: ExperienceDetailModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (experience) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [experience]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!experience) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-sm border-2 border-black bg-white p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-sm border-2 border-black transition-colors hover:bg-black hover:text-white"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div className="pr-10">
          <h3 className="text-2xl font-bold">{experience.role}</h3>
          <p className="mt-1 text-lg text-gray-600">
            {experience.company}{" "}
            <span className="text-sm text-gray-400">· {experience.type}</span>
          </p>
          <p className="mt-1 text-sm text-gray-400">
            {experience.period} · {experience.location}
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 h-0.5 w-full bg-gray-100" />

        {/* Detailed Experience */}
        {experience.bullets.length > 0 && (
          <div>
            <h4 className="mb-3 text-sm font-bold tracking-wide uppercase text-gray-500">
              Responsibilities & Achievements
            </h4>
            <ul className="flex flex-col gap-3">
              {experience.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600"
                >
                  <ArrowRight
                    size={14}
                    className="mt-1 shrink-0 text-black"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills */}
        {experience.skills.length > 0 && (
          <div className="mt-6">
            <h4 className="mb-3 text-sm font-bold tracking-wide uppercase text-gray-500">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm border border-black px-2.5 py-1 text-xs font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Documents */}
        {experience.documents && experience.documents.length > 0 && (
          <div className="mt-6">
            <h4 className="mb-3 text-sm font-bold tracking-wide uppercase text-gray-500">
              Documents
            </h4>
            <div className="flex flex-col gap-2">
              {experience.documents.map((doc) => (
                <a
                  key={doc.label}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-sm border-2 border-black px-4 py-3 text-sm font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-black hover:text-white hover:shadow-none"
                >
                  <FileText size={16} />
                  {doc.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
