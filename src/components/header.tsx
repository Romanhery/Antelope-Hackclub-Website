import { Plus_Jakarta_Sans } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import Join from "../components/join"

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin']
})

export default function Header(){
    return (
        <header className="w-full grid grid-cols-3 items-center text-[#FFF4E8] bg-transparent z-100">
            <div className="flex items-center justify-start">
                <Link href={"https://antelope-hackclub.vercel.app"} target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/logo.svg"
                        width={200}
                        height={200}
                        alt="Antelope hackclub"
                        className=" ml-10 mt-5"
                    />
                </Link>
            </div>
            
            <nav className={`${plusJakartaSans.className} p-4 gap-8 flex justify-center mt-5 transform-flat`}>
                <Link className="hover:font-bold text-[20px] hover:-translate-y-1/4" href="/">Home</Link>
                <Link className="hover:font-bold text-[20px] hover:-translate-y-1/4" href="/gallery">Gallery</Link>
                <Link className="hover:font-bold text-[20px] hover:-translate-y-1/4" href="/guides">Guides</Link>
                <Link className="hover:font-bold text-[20px] hover:-translate-y-1/4" href="/about">About</Link>
            </nav>
        </header>
    );
}

export function HeaderJoin(){
    return (
        <header className="w-full grid grid-cols-3 items-center text-[#FFF4E8] bg-transparent z-100">
            <div className="flex items-center justify-start">
                <Link href={"https://antelope-hackclub.vercel.app"} target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/logo.svg"
                        width={200}
                        height={200}
                        alt="Antelope hackclub"
                        className=" ml-10 mt-5"
                    />
                </Link>
            </div>
            
            <nav className={`${plusJakartaSans.className} p-4 gap-8 flex justify-center mt-5 transform-flat`}>
                <Link className="hover:font-bold text-[20px] hover:-translate-y-1/4" href="/">Home</Link>
                <Link className="hover:font-bold text-[20px] hover:-translate-y-1/4" href="/gallery">Gallery</Link>
                <Link className="hover:font-bold text-[20px] hover:-translate-y-1/4" href="/guides">Guides</Link>
                <Link className="hover:font-bold text-[20px] hover:-translate-y-1/4" href="/about">About</Link>
            </nav>

            <Join />
        </header>
    );
}