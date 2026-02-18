"use client";

import Image from "next/image";
import { GithubIcon } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Architect", "Consultant", "Developer"];

function useTypewriter(words: string[], typingSpeed = 150, deletingSpeed = 100, pauseDuration = 2000) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(currentWord.slice(0, text.length + 1));
          if (text.length + 1 === currentWord.length) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
            return;
          }
        } else {
          setText(currentWord.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setIsDeleting(false);
            setWordIndex((prev) => (prev + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => clearTimeout(timeout);
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed, pauseDuration]);

  return text;
}

const socialLinks = [
  {
    icon: <Image src="/images/leetcode_logo.svg" alt="LeetCode" width={20} height={20} className="group-hover:hidden" />,
    hoverIcon: <Image src="/images/leetcode_logo_selected.svg" alt="LeetCode" width={20} height={20} className="hidden group-hover:block" />,
    href: "https://leetcode.com/debo_roy10",
    label: "LeetCode",
  },
  {
    icon: <Image src="/images/codeforces_logo.svg" alt="Codeforces" width={20} height={20} className="group-hover:hidden" />,
    hoverIcon: <Image src="/images/codeforces_logo_selected.svg" alt="Codeforces" width={20} height={20} className="hidden group-hover:block" />,
    href: "https://codeforces.com/profile/debo_roy",
    label: "Codeforces",
  },
  {
    icon: <GithubIcon size={20} />,
    href: "https://github.com/debopam-roy",
    label: "GitHub",
  },
];

export default function HeroPage() {
  const typedText = useTypewriter(roles);

  return (
    <section
      id="hero"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-4 px-5 pt-20 sm:gap-6 sm:px-8 sm:pt-24 md:gap-8 md:px-12 lg:flex-row lg:justify-between lg:gap-4 lg:px-8"
    >
      {/* Illustration — shown on top for mobile/tablet, right side on desktop */}
      <div className="flex shrink-0 items-center justify-center lg:order-2 lg:w-2/5">
        <Image
          src="/images/hero_image.svg"
          alt="Developer illustration"
          width={750}
          height={750}
          priority
          draggable={false}
          className="pointer-events-none select-none"
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 lg:order-1 lg:w-3/5">
        <h1 className="text-2xl leading-tight sm:text-3xl md:text-[2.75rem] md:leading-tight lg:text-5xl xl:text-6xl xl:leading-tight">
          <span>Hello,</span>{" "}
          <span className="font-bold">I am Debopam Roy</span>
          <br />
          <span className="font-black">Software </span>
          <span>
            {typedText}
            <span className="inline-block w-0.75 h-[1em] bg-black align-middle ml-1 animate-blink" />
          </span>
          <br />
          <span>Based In </span>
          <span className="font-black">India.</span>
        </h1>

        <p className="max-w-xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
          I build scalable, production-grade applications with TypeScript,
          Next.js, NestJS, Python, and Golang. From enterprise platforms serving
          thousands of users to real-time collaborative tools, I focus on clean
          architecture, performance, and delivering real impact.
        </p>

        <div className="flex items-center gap-3 pt-2 sm:gap-4 sm:pt-4">
          {socialLinks.map(({ icon, hoverIcon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group flex h-10 w-10 items-center justify-center border-2 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:shadow-none transition-all rounded-sm sm:h-12 sm:w-12"
            >
              {icon}
              {hoverIcon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
