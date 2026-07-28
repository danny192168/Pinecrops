import {
  Card,
  // CardAction,
  //   CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import { Link } from "react-router";
import { Rating } from "../reui/rating";
import { Skeleton } from "../ui/skeleton";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

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
      <Link to="/product">
        <div className="relative aspect-video">
          <Skeleton className="absolute rounded-none inset-0 z-8 aspect-video bg-black/35" />
          <img
            src={src}
            alt="Product cover"
            className="grid place-items-center relative z-9 aspect-video w-full object-cover"
          />
        </div>

        <CardHeader className="p-1">
          {/* <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction> */}
          <div className="flex gap-2 justify-between">
            <CardTitle className="text-base">{name}</CardTitle>
            <CardTitle>
              <strong>{price}</strong>
            </CardTitle>
          </div>
          <div className="flex justify-between">
            <Rating size="xs" showValue={true} rating={rating} />
            <span className="text-xs font-semibold text-muted-foreground">100 sold</span>
          </div>
          <CardDescription>
            <Tooltip>
              <TooltipTrigger
                render={<span className="text-xs line-clamp-2 overflow-hidden">{description}</span>}
              />
              <TooltipContent>
                <p>{description}</p>
              </TooltipContent>
            </Tooltip>
          </CardDescription>
        </CardHeader>
      </Link>
      <CardFooter className="p-1 mt-auto">
        <Button className="w-full text-xs bg-brownish">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
