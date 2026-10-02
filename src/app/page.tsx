import { JetBrains_Mono, Plus_Jakarta_Sans, Aguafina_Script } from "next/font/google"
import { HeaderJoin } from "@/components/header";
import Hero from "@/components/hero"
import Landing from "@/components/landing"

export default function page() {
  return (
    <main className="relative min-h-screen bg-[#11050a] overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://hackclub.com/_next/image?url=%2Fassets%2Fbackground.webp&w=3840&q=75&dpl=dpl_3nfv7vSCWzauBe7YJU4hqHWozdP9')] bg-no-repeat [mask-image:radial-gradient(ellipse_at_bottom,black_45%,transparent_85%)] opacity-80" />
      <div className="relative z-10">
        <HeaderJoin />
        <Hero />
        <Landing />
      </div>
    </main>
  );
}