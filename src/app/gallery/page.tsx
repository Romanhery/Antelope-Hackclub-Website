import { JetBrains_Mono, Plus_Jakarta_Sans, Aguafina_Script } from "next/font/google";
import Header from "@/components/header";
import BackgroundImage from "@/components/background";
import Gallery from "@/components/galleryUi/gallery";

export default function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      <BackgroundImage/>
        <div className="relative z-20">
            <Header />
            <div className="flex flex-1 items-center justify-center w-full">
          <Gallery />
        </div>
        </div>
    </main>
  );
}