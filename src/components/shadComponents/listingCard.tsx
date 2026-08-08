import {
  Card,
  // CardAction,
  //   CardContent,
  // CardDescription,
  CardFooter,
  // CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { Rating } from "../reui/rating";
import { Skeleton } from "../ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Heart, ShoppingBasketIcon } from "lucide-react";

type ProductCardProps = {
  src: string;
  name: string;
  description: string;
  price: string;
  rating: number;
};

export function ListingCard({ src, name, description, price, rating }: ProductCardProps) {
  return (
    <Card size="sm" className="rounded-lg relative mx-auto w-full max-w-sm pt-0 gap-0">
      <Tooltip>
        <TooltipTrigger
          render={
            <Link to="/product">
              <div className="relative aspect-video">
                <Skeleton className="absolute rounded-none inset-0 z-8 aspect-video bg-black/35" />
                <img
                  src={src}
                  alt="Product cover"
                  className="grid place-items-center relative z-9 aspect-video w-full object-cover"
                />
              </div>

              {/* <CardHeader className="p-1"> */}
              {/* <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction> */}
              <div className="flex gap-2 justify-between p-2">
                <CardTitle className="text-base">{name}</CardTitle>
                <CardTitle>
                  <strong>{price}</strong>
                </CardTitle>
              </div>
              {/* <CardDescription> */}
              {/* </CardDescription> */}
              {/* </CardHeader> */}
            </Link>
          }
        />
        <TooltipContent>
          <p>{description}</p>
        </TooltipContent>
      </Tooltip>
      <CardFooter className="px-2 py-0 mt-auto flex flex-col items-stretch">
        <div className="flex justify-between">
          <Rating size="xs" showValue={true} rating={rating} />
          <div>
            {/* Yes, the "add to cart" looks weird being a basket here but the basket icon looks better here. */}
            <Button variant="ghost" size="icon-sm" className="text-gray-500 hover:text-gray-700">
              <ShoppingBasketIcon />
            </Button>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
