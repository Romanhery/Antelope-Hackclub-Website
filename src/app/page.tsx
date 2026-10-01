import { JetBrains_Mono, Plus_Jakarta_Sans, Aguafina_Script } from "next/font/google"
import { HeaderJoin } from "@/components/header";
import Hero from "@/components/hero"
import Landing from "@/components/landing"

export default function page() {
  return (

    <main className="bg-[#212125]">
      <HeaderJoin />
      <Hero/>
      <Landing />
    </main>
  );
}
