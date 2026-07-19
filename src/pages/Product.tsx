import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Rating } from "@/components/reui/rating";
import { RatingReviewSummary } from "@/components/reuiComponents/ratingReviewSummary";
import { ReviewBox } from "@/components/reviewBox";
import { ProductCarousel } from "@/components/shadComponents/productCarousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ClipboardList, MapPin, MessageCircleMore, Share, ShoppingCart, Star } from "lucide-react";

export function Product() {
  return (
    <>
      <Navbar />
      <br />
      <div className="max-w-5xl mx-auto p-2 text-sm sm:text-base">
        <div className="grid grid-rows-2 sm:grid-flow-col  gap-2 mb-5">
          <ProductCarousel />
          <div className="rounded-lg h-fit border-2 border-gray-200 p-2">
            <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
              <div className="flex gap-2">
                <Skeleton className="w-9 h-9 aspect-square sm:w-12 sm:h-12 rounded-full bg-black/20" />
                <div className="flex flex-col justify-center">
                  <div className="font-bold text-lg">Company name</div>
                  <div className="text-green-600 text-sm">Online</div>
                </div>
              </div>
              <div className="flex gap-1 sm:gap-2">
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="border-gray-700 rounded-sm font-semibold sm:font-normal"
                >
                  Follow
                </Button>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="border-gray-700 rounded-sm sm:h-auto font-semibold sm:font-normal"
                >
                  Visit Store
                </Button>
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <div className="flex  text-xs items-center gap-1">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600 " />
                <span className="text-gray-500">Store Rating:</span>
                <strong>90%</strong>
              </div>
              <div className="flex text-xs items-center gap-1">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                <span className="text-gray-500">Location</span>
                <strong>La Trinidad</strong>
              </div>
              <div className="flex text-xs items-center gap-1">
                <MessageCircleMore className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                <span className="text-gray-500">Chat Reply</span>
                <strong>90%</strong>
              </div>
            </div>
          </div>
          <div className="">
            <h1 className="mb-3">
              <span className="text-xl sm:text-3xl">Orange Banana with ducks and Egg</span>
            </h1>
            <div className="flex md:gap-2 items-center mb-3 text-xs lg:text-base flex-wrap">
              <span className="">120 sold</span>
              <span className="mx-2 h-1 w-1 bg-black rounded-full"></span>
              <span className="">10 stocks</span>
              <span className="mx-2 h-1 w-1 bg-black rounded-full"></span>
              <Rating rating={4.8} size={"sm"} showValue={true} />
              <span className="mx-2 h-1 w-1 bg-black rounded-full"></span>
              <span className="">10 reviews</span>
            </div>
            <span className="text-3xl font-bold">Php70.00</span>
            <div className="flex flex-col">
              <div className="flex flex-col gap-2 mt-9">
                <Button size={"lg"} className="w-full font-bold">
                  Buy
                </Button>
                <Button
                  size={"lg"}
                  variant={"outline"}
                  className="w-full font-bold border-gray-700"
                >
                  Add to cart
                </Button>
              </div>
              <div className="flex justify-between items-center p-2">
                <Button variant={"ghost"} className="flex-1 rounded-none">
                  <MessageCircleMore className="w-5 h-5" />
                  <span>Chat</span>
                </Button>
                <Separator orientation="vertical" />
                <Button variant={"ghost"} className="flex-1 rounded-none">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart</span>
                </Button>
                <Separator orientation="vertical" />
                <Button variant={"ghost"} className="flex-1 rounded-none">
                  <Share className="w-5 h-5" />
                  <span>Share</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <h1>This spacing issue is related with the on the parent grid-rows-2 👆🏿</h1>
        {/*  */}
        <div>
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Button size={"sm"}>Description</Button>
              <Button size={"sm"} variant={"outline"}>
                Review
              </Button>
            </div>
            <Button variant={"ghost"}>
              <ClipboardList className="text-muted-foreground" />
              Report Product
            </Button>
          </div>
          {/* Details */}
          <div>
            <h3 className="my-4">Product Details</h3>
            <p className="text-muted-foreground mb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum veritatis corporis
              molestiae quidem expedita dolorem harum ipsa fugiat totam autem! Voluptas accusamus
              aperiam fugit maxime explicabo iste minima quam illum totam, culpa atque corporis
              molestias aliquid sequi. Eius sint possimus, vitae sunt voluptate, cumque perferendis
              quis, obcaecati reprehenderit eaque molestias!
            </p>
            <div className="flex gap-4">
              <div className="text-muted-foreground">
                <div>Package Dimensions</div>
                <div>Specifications</div>
                <div>Department</div>
              </div>
              <div className="text-muted-foreground">
                <div>:</div>
                <div>:</div>
                <div>:</div>
              </div>
              <div>3.4x5.6x6.7 in; 89 g</div>
            </div>
          </div>
          {/* Reviews */}
          <div>
            <h3 className="my-4">Customer Reviews</h3>
            <div className="border-2 rounded-lg flex p-3 gap-2 flex-wrap flex-col md:flex-row justify-evenly items-center mb-2">
              <div className="flex flex-col items-center gap-2">
                <span className="text-3xl font-semibold">4.6</span>
                <Rating rating={4.6} size="lg" />
                <span className="text-muted-foreground text-xs">Based on 200 reviews</span>
              </div>
              <Separator orientation="vertical" />
              <RatingReviewSummary />
              <Separator orientation="vertical" className="hidden sm:block" />
              <div>
                <div className="flex flex-wrap h-fit gap-1 w-full md:w-auto md:max-w-xs mx-auto">
                  <Button size={"sm"} variant={"default"}>
                    All (10)
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    Pic Review (12)
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    5 Stars (6)
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    4 Stars (3)
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    3 Stars (1)
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    2 Stars (0)
                  </Button>
                  <Button size={"sm"} variant={"outline"}>
                    1 Stars (0)
                  </Button>
                </div>
              </div>
            </div>
            <div className=" sm:columns-2  gap-2 mb-3">
              <ReviewBox reviewText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus ex, voluptate labore possimus accusamus, ullam libero tempora error alias atque doloribus fugiat praesentium maxime beatae! Molestias qui amet debitis quia, perferendis corporis officia odit esse voluptate vel. Vitae ipsam laudantium dolore in iure, quis quos laborum molestias quibusdam, delectus non." />
              <ReviewBox reviewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur facilis doloribus voluptatibus assumenda adipisci, iusto rem tenetur. Illo, aut iure?" />
              <ReviewBox reviewText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate laborum consequatur error. Voluptate, et atque soluta eveniet voluptatem, libero expedita minus dolores officiis voluptatibus reiciendis doloremque in temporibus fuga laboriosam magni, eos placeat tempore est enim quam inventore eius delectus." />
              <ReviewBox reviewText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, doloremque." />
            </div>
            <div className="flex mb-3">
              <Button
                size={"lg"}
                variant={"outline"}
                className="border-gray-500 p-4 mx-auto font-semibold"
              >
                See All Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
