import Image from "next/image";

const highlights = [
  {
    name: "Enterprise Placement Platform:",
    description:
      "RBAC, AI resume analysis, serving 17,000+ students with <300ms query performance.",
  },
  {
    name: "Food Ordering Platform:",
    description:
      "Serving 50,000+ MAU with secure payments and live order tracking.",
  },
  {
    name: "Collaborative Code Editor:",
    description:
      "Real-time editing with CRDT (Y.js), Socket.IO, WebRTC, and live compilation.",
  },
  {
    name: "CRM with Gmail Integration:",
    description:
      "Pub/Sub, rate limiting, and real-time call recording via Recall.ai.",
  },
  {
    name: "Portfolio Hedging System:",
    description:
      "Python algorithms using asset Greeks and Beta trends, 80% risk reduction.",
  },
];

export default function AboutPage() {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full flex-col justify-center gap-6 px-5 py-20 sm:px-8 sm:py-24 md:gap-8 lg:flex-row lg:items-center lg:gap-16 lg:px-8"
    >
      {/* Photo — left on mobile (in row with heading), left column on lg */}
      <div className="shrink-0 lg:w-2/5">
        <div className="flex items-start gap-4 sm:gap-6 lg:block">
          {/* Photo */}
          <div className="w-28 shrink-0 sm:w-36 md:w-44 lg:w-full">
            <div className="overflow-hidden rounded-sm border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
              <Image
                src="/images/debopam_roy_image.png"
                alt="Debopam Roy"
                width={500}
                height={600}
                className="pointer-events-none h-auto w-full select-none object-cover grayscale"
                draggable={false}
              />
            </div>
          </div>

          {/* Heading + intro — next to photo on mobile, hidden here on lg (shown below) */}
          <div className="flex flex-col justify-center gap-2 sm:gap-3 lg:hidden">
            <h2 className="text-2xl font-normal sm:text-3xl md:text-4xl">
              About <span className="font-bold">Me</span>
            </h2>
            <p className="text-xs leading-relaxed text-gray-600 sm:text-sm md:text-base">
              My name is <strong className="text-black">Debopam Roy</strong>, a
              full-stack developer and software engineer with a{" "}
              <strong className="text-black">
                Master&apos;s in Computer Science
              </strong>{" "}
              from Ramakrishna Mission Vivekananda University.
            </p>
          </div>
        </div>
      </div>

      {/* Text content */}
      <div className="flex w-full flex-col gap-5 sm:gap-6 lg:w-3/5">
        {/* Heading — only visible on lg (mobile version is next to photo above) */}
        <h2 className="hidden lg:block lg:text-5xl xl:text-6xl">
          About <span className="font-bold">Me</span>
        </h2>

        <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
          I build robust, scalable applications using{" "}
          <strong className="text-black">
            TypeScript, Next.js, NestJS, Python and Golang
          </strong>
          , combining clean architecture with user-friendly design.
        </p>

        <div>
          <p className="mb-3 text-sm text-gray-600 sm:text-base md:text-lg">
            I&apos;ve delivered full-featured systems like:
          </p>
          <ul className="flex flex-col gap-2">
            {highlights.map(({ name, description }) => (
              <li
                key={name}
                className="flex items-start gap-2 text-sm text-gray-600 sm:text-base md:text-lg"
              >
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
                <span>
                  <strong className="text-black">{name}</strong> {description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg">
          I work with{" "}
          <strong className="text-black">
            PostgreSQL, MongoDB, Redis, Docker, and GCP/AWS
          </strong>
          , focusing on building performant backend systems and intuitive
          interfaces that deliver real impact.
        </p>
      </div>
    </section>
  );
}
