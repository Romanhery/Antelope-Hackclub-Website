import Image from "next/image";
import Link from "next/link";
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
});

export interface GalleryCardProps {
  name: string;
  link: string;
  image: string;
  bgColor?: string; // Example: "bg-amber-600", "bg-purple-600", "bg-zinc-900"
  buttonText?: string;
  className?: string; // Optional wrapper styles (e.g., custom max-width)
}

export default function GalleryCardCard({
  name,
  link,
  image,
  bgColor = "bg-zinc-800",
  buttonText = "Start Now →",
  className = "",
}: GalleryCardProps) {
  return (
    <div
      className={`relative aspect-square w-full ${bgColor} rounded-3xl md:rounded-4xl p-8 flex items-center justify-center overflow-hidden shadow-lg group ${className}`}
    >
      <Image
        src={image}
        alt={name}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-contain p-6 transition-transform duration-300 group-hover:scale-105 select-none"
      />

      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${jetbrainsMono.className} absolute bottom-6 z-10 font-bold bg-[#FFFDD0] text-black text-sm md:text-base rounded-3xl px-4 py-1.5 shadow-md transition-all duration-200 hover:scale-105 active:scale-95`}
      >
        <span>{buttonText}</span>
      </Link>
    </div>
  );
}