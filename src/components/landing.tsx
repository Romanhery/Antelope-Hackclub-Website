import Image from "next/image";
import { JetBrains_Mono, Plus_Jakarta_Sans, Aguafina_Script } from "next/font/google"
import Link from "next/link";

const plusJakartaSans= Plus_Jakarta_Sans({
  subsets: ['latin']
})

const jetbrainsMono= JetBrains_Mono({
  subsets: ['latin']
})

export default function Landing(){
    return(
        <div>
            <h1 className={`-mb-40 ${plusJakartaSans.className} font text-[50px] font-bold w-full text-center`}>Programs!</h1>
            <div className={`  hero-container min-h-screen flex flex-col items-center justify-center text-center w-full`}>
                
                <div className="grid grid-cols-2 gap-10 w-full max-w-[500]">
                    <div className=" relative aspect-square bg-amber-600 rounded-4xl p-8 flex items-center justify-center overflow-hidden">
                            <Image
                                src={"https://boba.hackclub.com/images/logo.svg"}
                                alt="Boba Drops"
                                fill
                                className="object-contain p-6"
                            />
                        
                            <div className={`${jetbrainsMono} font-bold hover:scale-[1.1] absolute bottom-6 flex items-center bg-[#FFFDD0] text-black rounded-3xl pt-1 pb-1 p-2`}>
                                <Link href={"https://boba.hackclub.com/"} target="_blank">
                                <span>Start Now &rarr;</span>
                                </Link>
                            </div>
                            
                        
                        
                    </div>
                    
                    <div className=" relative aspect-square bg-purple-600 rounded-4xl p-8 flex items-center justify-center overflow-hidden">
                            <Image
                                src={"https://swirl.hackclub.com/assets/svg/swirl-text.svg"}
                                alt="Swirl"
                                fill
                                className="object-contain p-6"
                            />

                            <div className="font-bold hover:scale-[1.1] absolute bottom-6 flex items-center bg-[#FFFDD0] text-black rounded-3xl pt-1 pb-1 p-2">
                                <Link href={"https://swirl.hackclub.com/"} target="_blank">
                                    <span>Start Now &rarr;</span>
                                </Link>
                            </div>
                    </div>
                </div>
            </div>
            <div>
        </div>
        <div className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 w-full text-white">
      <h1 className={`${plusJakartaSans.className} text-6xl font-bold tracking-tight leading-[1.05] max-w-5xl`}>
        Design, <span className="text-[#ec3750]">Build</span> ,Ship !
      </h1>

      <p className="mt-6 max-w-2xl text-base sm:text-lg md:text-xl text-zinc-400 leading-relaxed font-normal">
        No lectures. No busywork. Just the tools, parts, and community to build what you want.
      </p>
      <div className="font-bold hover:scale-[1.1] absolute bottom-40 flex items-center bg-[#FFFDD0] text-black rounded-3xl pt-2 pb-2 p-4">
        <Link href={"https://clubs.hackclub.com/auth/member?join=N95WSZ"} target="_blank">
            <span>Start Now &rarr;</span>
        </Link>
       </div>
    </div>
    </div>
    );
    
}