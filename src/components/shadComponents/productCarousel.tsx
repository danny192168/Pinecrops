"use client";

import { useState } from "react";
// import * as React from "react";

// import { Card, CardContent } from "@/components/ui/card";
// import {
//   // Carousel,
//   // CarouselContent,
//   // CarouselItem,
//   // CarouselNext,
//   // CarouselPrevious,
//   type CarouselApi,
// } from "@/components/ui/carousel";
import { Skeleton } from "../ui/skeleton";
import { ImageCarousel } from "./imageCarousel";
// import { Badge } from "../ui/badge";
// import { Button } from "../ui/button";
// import { MapPin, MessageCircleMore, Star } from "lucide-react";

// const boxSize = {
//   md: 15,
//   lg: 20,
// };

export function ProductCarousel({ productItems }: any) {
  // const [api, setApi] = React.useState<CarouselApi>();
  // const [current, setCurrent] = React.useState(0);
  // const [count, setCount] = React.useState(0);

  // React.useEffect(() => {
  //   if (!api) {
  //     return;
  //   }

  //   setCount(api.scrollSnapList().length);
  //   setCurrent(api.selectedScrollSnap() + 1);

  //   api.on("select", () => {
  //     setCurrent(api.selectedScrollSnap() + 1);
  //   });
  // }, [api]);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    // w-8 sm:w-14 md:w-18 lg:w-25
    // {/* w-40 sm:w-62 md:w-78 */}
    <div className="">
      <div className="flex gap-2 mb-2 md:flex-row flex-col-reverse">
        <div className="flex flex-row md:flex-col gap-2 overflow-scroll">
          {[0, 1, 2, 3, 4].map((n) => (
            <div
              className="max-w-15 w-15 sm:w-[7vw] sm:min-w-12"
              onClick={() => {
                setCurrentImageIndex(n);
              }}
            >
              <img
                className={`aspect-square rounded-sm ${n == currentImageIndex && "p-0.5 border-2 border-[#1a1c37]"}`}
                src={productItems[n].src}
              />
              {/* <Skeleton className=" aspect-square border bg-black/20" /> */}
            </div>
          ))}
        </div>
        {/* Let it be like this for now */}
        <div className="bg-foreground/90 sm:bg-gray-200 md:bg-transparent sm:block overflow-hidden rounded-sm w-full sm:w-90 sm:min-w-44 sm:max-w-80 lg:max-w-120 md:w-[40vw] relative">
          {/* <Skeleton className="absolute w-full aspect-square border" /> */}
          <img
            className="mx-auto h-60 md:h-auto bg-cover"
            src={productItems[currentImageIndex].src}
            alt=""
          />
        </div>
        {/* <ImageCarousel /> */}
      </div>
    </div>
  );
}
