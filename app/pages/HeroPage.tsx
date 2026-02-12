"use client";

import Image from "next/image";
import { GithubIcon, Linkedin, Mail } from "lucide-react";
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
    icon: <Mail size={20} />,
    href: "mailto:debopamroy.portfolio@gmail.com",
    label: "Email",
  },
  {
    icon: <Linkedin size={20} />,
    href: "https://www.linkedin.com/in/debopamroy8",
    label: "LinkedIn",
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
      className="flex min-h-screen w-full items-center justify-between gap-4 px-8 pt-24"
    >
      {/* Left Content */}
      <div className="flex w-3/5 flex-col gap-6">
        <h1 className="text-5xl leading-tight lg:text-6xl lg:leading-tight">
          <span className="">Hello,</span>{" "}
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

        <p className="max-w-xl text-lg leading-relaxed text-gray-600">
          I build scalable, production-grade applications with TypeScript,
          Next.js, NestJS, Python, and Golang. From enterprise platforms serving
          thousands of users to real-time collaborative tools, I focus on clean
          architecture, performance, and delivering real impact.
        </p>

        <div className="flex items-center gap-4 pt-4">
          {socialLinks.map(({ icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center border-2 text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-black hover:text-white hover:shadow-none transition-all rounded-sm"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Right Illustration */}
      <div className="hidden w-2/5 lg:block">
        <Image
          src="/images/hero_image.svg"
          alt="Developer illustration"
          width={650}
          height={650}
          priority
          draggable={false}
          className="pointer-events-none select-none"
        />
      </div>
    </section>
  );
}
