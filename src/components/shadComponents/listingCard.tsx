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

export function ListingCard() {
  return (
    <Card size="sm" className="rounded-lg relative mx-auto w-full max-w-sm pt-0 gap-0">
      <Link to="/product">
        <div className="relative aspect-video">
          <Skeleton className="absolute inset-0 z-20 aspect-video bg-black/35" />
          <img
            src="https://philnews.ph/wp-content/uploads/2022/09/cabbage.jpg"
            alt="Product cover"
            className="grid place-items-center relative z-30 aspect-video w-full object-cover"
          />
        </div>

        <CardHeader className="p-1">
          {/* <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction> */}
          <div className="flex gap-2 justify-between">
            <CardTitle className="text-xs">Cabbage</CardTitle>
            <CardTitle>
              <strong>$2.00</strong>
            </CardTitle>
          </div>
          <div>
            <Rating size="xs" showValue={true} rating={4.5} />
          </div>
          <CardDescription className="text-xs">Product description</CardDescription>
        </CardHeader>
      </Link>
      <CardFooter className="p-1">
        <Button className="w-full text-xs">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
