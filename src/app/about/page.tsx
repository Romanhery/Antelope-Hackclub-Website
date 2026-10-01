import { JetBrains_Mono, Plus_Jakarta_Sans, Aguafina_Script } from "next/font/google"
import  Header from "@/components/header";
import Hackclub from "@/components/hackclub"

export default function page() {
  return (

    <main className="bg-[#212125]">
      <Header/>
      <Hackclub />
    </main>
  );
}
