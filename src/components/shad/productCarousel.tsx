"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Skeleton } from "../ui/skeleton";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { MapPin, MessageCircleMore, Star } from "lucide-react";

// const boxSize = {
//   md: 15,
//   lg: 20,
// };

export function ProductCarousel() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    // w-8 sm:w-14 md:w-18 lg:w-25
    // {/* w-40 sm:w-62 md:w-78 */}
    <Skeleton className="bg-gray-400">
      {/* <div className="flex gap-2 mb-2">
        <div className="flex flex-col gap-2">
          {[1, 2, 3, 4].map((n) => (
            <Skeleton className="max-w-25 w-[9vw] aspect-square border bg-black/20" />
          ))}
        </div>
        <div>
          <Skeleton className="md:bg-gray-800 w-[39vw] max-w-106 aspect-square border bg-black/20" />
        </div>
      </div> */}
    </Skeleton>
  );
}
