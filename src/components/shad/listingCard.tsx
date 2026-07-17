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

export function ListingCard() {
  return (
    <Card size="sm" className="rounded-lg relative mx-auto w-full max-w-sm pt-0 gap-0">
      <Link to="/Product">
        <div className="absolute inset-0 z-30 aspect-video bg-black/35" />
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Product cover"
          className="grid place-items-center relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />

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
          <CardDescription className="text-xs">Product description</CardDescription>
        </CardHeader>
      </Link>
      <CardFooter className="p-1">
        <Button className="w-full text-xs">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
