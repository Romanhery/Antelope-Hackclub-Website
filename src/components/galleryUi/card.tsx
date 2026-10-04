import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CardImageProps {
  name: string;
  link: string;
  image: string;
  description: string;
}

export function CardImage({ name, link, image, description }: CardImageProps) {
  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0 overflow-hidden flex flex-col justify-between h-full">
      <div className="relative aspect-video w-full overflow-hidden bg-neutral-900 flex items-center justify-center">
        <div className="absolute inset-0 z-10 bg-black/25 pointer-events-none" />
        <img
          src={image}
          alt={name}
          className="relative z-20 aspect-video w-full object-contain p-6"
        />
      </div>

      <CardHeader>
        <CardTitle className="text-lg font-semibold">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter>
        <Button className="w-full">
          <a href={link} target="_blank" rel="noopener noreferrer">
            Visit Project
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}