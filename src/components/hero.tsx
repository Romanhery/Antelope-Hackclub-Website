import { JetBrains_Mono, Plus_Jakarta_Sans, Aguafina_Script,Playfair_Display } from "next/font/google"
import  Header from "../components/header";
 
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  // Optional: add italic style if you want an editorial italic look
  style: ["normal", "italic"], 
  variable: "--font-playfair",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin']
})

const aguafinaScript = Aguafina_Script({
  subsets: ['latin-ext'],
  weight: '400'
  
})

export default function Hero(){
    return (
        <div className={` hero-container min-h-screen flex flex-col items-center justify-center text-center -mt-18 w-full`}>
            <h1 className={` ${aguafinaScript.className} font text-[150px] text-amber-50 `}>Veni, Vidi, Feci</h1>
            <p className={` ${jetbrainsMono.className} font text-[25px] text-white`}>I came, I saw, I made</p>
        </div>
    );
}