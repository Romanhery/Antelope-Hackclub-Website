import { CardImage } from "./card";
import cardData from "@/data/guides.json";

export default function Guides({}) {
  return (
    <section className="w-[80vw] min-h-[85vh] mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center text-white">Programs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((item) => (
          <div
            key={item.link}
            className="scale-95 transition-transform hover:scale-100 flex"
          >
            <CardImage {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}