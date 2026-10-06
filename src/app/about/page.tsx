import { JetBrains_Mono, Plus_Jakarta_Sans, Aguafina_Script } from "next/font/google";
import Header from "@/components/header";
import Link from "next/link";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const aguafinaScript = Aguafina_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-aguafina",
});

export default function AboutPage() {
  return (
    <main
      className={`min-h-screen bg-[#212125] text-zinc-100 selection:bg-rose-500/30 selection:text-rose-200 ${plusJakartaSans.variable} ${jetbrainsMono.variable} ${aguafinaScript.variable} font-sans`}
    >
      <Header />

      <section className="relative mx-auto max-w-5xl px-6 pt-16 pb-24 md:pt-24 md:pb-32">
        {/* Subtle Ambient Glow */}
        <div className="pointer-events-none absolute -top-10 left-1/2 -z-10 h-72 w-96 -translate-x-1/2 rounded-full bg-rose-500/10 blur-[120px]" />

        {/* Hero / Header */}
        <div className="space-y-4">

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            We don’t just learn code. <br />
            <span className="font-serif italic font-normal text-rose-400 font-aguafina text-5xl sm:text-7xl">
              We ship things.
            </span>
          </h1>

          <p className="max-w-2xl text-base text-zinc-400 sm:text-lg leading-relaxed pt-2">
            Antelope Hack Club is a student-run collective of builders, hackers,
            designers, and hardware tinkerers. We build real projects, solder
            circuits, write open-source code, and solve genuine engineering
            challenges.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 backdrop-blur-sm transition-colors hover:border-zinc-700">
            <div className="font-mono text-xs uppercase tracking-wider text-rose-400">
              01 / Build
            </div>
            <h3 className="mt-3 text-lg font-semibold text-zinc-100">
              Zero Lectures
            </h3>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              No multiple-choice tests or dry slide decks. Bring an idea, open your
              editor or CAD workspace, and turn it into working hardware or software.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 backdrop-blur-sm transition-colors hover:border-zinc-700">
            <div className="font-mono text-xs uppercase tracking-wider text-amber-400">
              02 / Stack
            </div>
            <h3 className="mt-3 text-lg font-semibold text-zinc-100">
              Hardware + Code
            </h3>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              From full-stack web platforms and game mechanics to custom mechanical
              keyboards, PCB routing, and microcontroller firmware.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800/80 bg-zinc-900/50 p-6 backdrop-blur-sm transition-colors hover:border-zinc-700">
            <div className="font-mono text-xs uppercase tracking-wider text-emerald-400">
              03 / Network
            </div>
            <h3 className="mt-3 text-lg font-semibold text-zinc-100">
              Global Network
            </h3>
            <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              Backed by Hack Club Global, granting members access to grants,
              free hardware perks, global hackathons, and thousands of teenage makers.
            </p>
          </div>
        </div>

        {/* Deep Dive Narrative Section */}
        <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 sm:p-12">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl">
              Who We Are & What We Do
            </h2>
            <div className="space-y-4 text-zinc-300 leading-relaxed text-sm sm:text-base font-normal">
              <p>
                Founded at Antelope High School, our chapter is built for anyone
                obsessed with creating things from scratch. Whether you’re
                compiling your first program, routing a two-layer PCB in KiCad,
                or writing full-stack web applications, you belong here.
              </p>
              <p>
                Every week, we organize project sprints, collaborate on open-source
                repositories, run soldering and prototyping workshops, and prepare
                for high-energy hackathons. We care about shipping real tools that
                people can interact with in the physical and digital world.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Link
                href="https://hackclub.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-100 px-5 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-white active:scale-95"
              >
                Learn About Hack Club
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>

              <div className="font-mono text-xs text-zinc-500">
                Meets on Mondays at Antelope High
              </div>
            </div>
          </div>
        </div>

        {/* Footer info tag */}
        <div className="mt-16 border-t border-zinc-800/80 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-mono">
          <p>© {new Date().getFullYear()} Antelope Hack Club. Open source and student-led.</p>
          <div className="flex gap-4">
            <span className="text-zinc-400">Antelope, CA</span>
          </div>
        </div>
      </section>
    </main>
  );
}