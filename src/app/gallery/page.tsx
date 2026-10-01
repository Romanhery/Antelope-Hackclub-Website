import Card from "@/components/galleryCard";
import galleryData from "@/data/gallery.json";
import Header from "@/components/header";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#212125] text-white">
      <Header />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 tracking-tight">
          Projects
        </h1>

        {/* Responsive grid: 1 col on mobile, 2 on tablet, 4 on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryData.map((item) => (
            <Card
              key={item.name}
              name={item.name}
              link={item.link}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}