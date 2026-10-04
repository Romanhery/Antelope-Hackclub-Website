import Image from "next/image";

export default function BackgroundImage(){
    return(
        <div className="fixed inset-0 z-0 pointer-events-none ">
            <Image 
                src="/background.webp"
                alt="Background"
                fill
                priority
                sizes="100vw"
                className="mask-[image:radial-gradient(ellipse_at_bottom,transparent_0%,black_100%)]"
            />
      </div> 
    );
}