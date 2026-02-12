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
      className="flex min-h-screen w-full items-center gap-16 px-8 py-24"
    >
      {/* Left — Photo */}
      <div className="hidden w-2/5 shrink-0 lg:block">
        <div className="overflow-hidden rounded-sm border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
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

      {/* Right — Content */}
      <div className="flex w-full flex-col gap-6 lg:w-3/5">
        <h2 className="text-5xl lg:text-6xl">
          About <span className="font-bold">Me</span>
        </h2>

        <p className="text-lg leading-relaxed text-gray-600">
          My name is <strong className="text-black">Debopam Roy</strong>, a
          full-stack developer and software engineer with a{" "}
          <strong className="text-black">
            Master&apos;s in Computer Science
          </strong>{" "}
          from Ramakrishna Mission Vivekananda University. I build robust,
          scalable applications using{" "}
          <strong className="text-black">
            TypeScript, Next.js, NestJS, Python and Golang
          </strong>
          , combining clean architecture with user-friendly design.
        </p>

        <div>
          <p className="mb-3 text-lg text-gray-600">
            I&apos;ve delivered full-featured systems like:
          </p>
          <ul className="flex flex-col gap-2">
            {highlights.map(({ name, description }) => (
              <li key={name} className="flex items-start gap-2 text-gray-600">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
                <span>
                  <strong className="text-black">{name}</strong> {description}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-lg leading-relaxed text-gray-600">
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
