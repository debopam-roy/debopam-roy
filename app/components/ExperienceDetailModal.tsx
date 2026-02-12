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
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 px-3 backdrop-blur-sm sm:items-center sm:px-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-t-sm border-2 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:rounded-sm sm:p-6 sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 flex h-7 w-7 items-center justify-center rounded-sm border-2 border-black transition-colors hover:bg-black hover:text-white sm:top-4 sm:right-4 sm:h-8 sm:w-8"
          aria-label="Close"
        >
          <X size={14} className="sm:hidden" />
          <X size={16} className="hidden sm:block" />
        </button>

        {/* Header */}
        <div className="pr-8 sm:pr-10">
          <h3 className="text-lg font-bold sm:text-xl md:text-2xl">
            {experience.role}
          </h3>
          <p className="mt-1 text-sm text-gray-600 sm:text-base md:text-lg">
            {experience.company}{" "}
            <span className="text-xs text-gray-400 sm:text-sm">
              · {experience.type}
            </span>
          </p>
          <p className="mt-1 text-xs text-gray-400 sm:text-sm">
            {experience.period} · {experience.location}
          </p>
        </div>

        {/* Divider */}
        <div className="my-4 h-0.5 w-full bg-gray-100 sm:my-6" />

        {/* Detailed Experience */}
        {experience.bullets.length > 0 && (
          <div>
            <h4 className="mb-2 text-xs font-bold tracking-wide uppercase text-gray-500 sm:mb-3 sm:text-sm">
              Responsibilities & Achievements
            </h4>
            <ul className="flex flex-col gap-2 sm:gap-3">
              {experience.bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs leading-relaxed text-gray-600 sm:gap-2.5 sm:text-sm"
                >
                  <ArrowRight
                    size={12}
                    className="mt-0.5 shrink-0 text-black sm:hidden"
                  />
                  <ArrowRight
                    size={14}
                    className="mt-1 hidden shrink-0 text-black sm:block"
                  />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills */}
        {experience.skills.length > 0 && (
          <div className="mt-4 sm:mt-6">
            <h4 className="mb-2 text-xs font-bold tracking-wide uppercase text-gray-500 sm:mb-3 sm:text-sm">
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {experience.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-sm border border-black px-2 py-0.5 text-[10px] font-medium sm:px-2.5 sm:py-1 sm:text-xs"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Documents */}
        {experience.documents && experience.documents.length > 0 && (
          <div className="mt-4 sm:mt-6">
            <h4 className="mb-2 text-xs font-bold tracking-wide uppercase text-gray-500 sm:mb-3 sm:text-sm">
              Documents
            </h4>
            <div className="flex flex-col gap-2">
              {experience.documents.map((doc) => (
                <a
                  key={doc.label}
                  href={doc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 rounded-sm border-2 border-black px-3 py-2.5 text-xs font-medium shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all hover:bg-black hover:text-white hover:shadow-none sm:gap-3 sm:px-4 sm:py-3 sm:text-sm"
                >
                  <FileText size={14} className="sm:hidden" />
                  <FileText size={16} className="hidden sm:block" />
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
