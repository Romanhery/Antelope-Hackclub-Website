import Card from "@/components/galleryCard"
import galleryData from "@/data/gallery.json"
import Header from "@/components/header"

export default function Page(){
    return(
        <main className="bg-[#212125]">
            <Header/>
            <h1>Projects</h1>
            <div className="grid grid-cols-4 gap-10 h- mx-auto">
                {galleryData.map((item) => (
                    <Card
                        key={item.name}
                        name={item.name}
                        link={item.link}
                        image={item.image}
                    />
                ))}
            </div>

        </main>
    );
}