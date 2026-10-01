import Link from "next/link"
import Image from "next/image"
import { JetBrains_Mono, Plus_Jakarta_Sans, Aguafina_Script } from "next/font/google"

interface CardProps {
  name: string;
  link: string;
  image: string;
}

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin']
})

export default function Card({ name, link, image }: CardProps){
    return(
        <div className="flex flex-col items-center relative aspect-square w-full">
            <Link href={`${link}`} target="_blank" className="">
                <div className="relative aspect-square w-full">
                     <Image
                        src={image}
                        alt={name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33w"
                        className={`{plusJakartaSans.className} p-4 bg-gray-900 object-contain aspect-sqaure rounded-2xl border-1 border-white`}
                    />
                </div>
                <h3>{name}</h3>
            </Link>
        </div>
    );
}