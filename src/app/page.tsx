import { JetBrains_Mono, Plus_Jakarta_Sans, Aguafina_Script } from "next/font/google";
import { HeaderJoin } from "@/components/header";
import Hero from "@/components/hero";
import Landing from "@/components/landing";
import BackgroundImage from "@/components/background";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full bg-black caret-transparent">
      <BackgroundImage/>
      <div className="relative z-20">
        <HeaderJoin />
        <Hero />
        <Landing />
      </div>
    </main>
  );
}