import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function ListingsCarousel() {
  return (
    <Carousel className="m-2 lg:m-0 mb-2 overflow-hidden lg:overflow-auto" opts={{ loop: true }}>
      <CarouselContent className="">
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className="p-0">
                <CardContent className="flex items-center justify-center p-0">
                  {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                  <img
                    src="https://storage.ghost.io/c/d5/56/d5565e70-3c67-4547-9c79-7758ce6fc700/content/images/size/w1304/format/webp/2025/04/115930283_158308232583416_3282527992727043292_n.jpg"
                    alt=""
                    className="object-cover aspect-4/1 min-h-35 w-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
