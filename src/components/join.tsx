import Link from "next/link"
import Image from "next/image"

export default function Join() {
    return(
        <div className="flex justify-end mr-10 mt-5">
            <Link href={"https://discord.gg/5MXWtp5Xq"} target="_blank">
                <Image
                    src="/join.svg"
                    width={250}
                    height={250}
                    alt="Join Discord"
                    className="hover:scale-105"
                />
            </Link>
        </div>
    );
}