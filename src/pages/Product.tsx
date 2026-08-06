import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { Rating } from "@/components/reui/rating";
import { RatingReviewSummary } from "@/components/reuiComponents/ratingReviewSummary";
import { ReviewBox } from "@/components/reviewBox";
import { ListingCard } from "@/components/shadComponents/listingCard";
import { ProductCarousel } from "@/components/shadComponents/productCarousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ClipboardList, MapPin, MessageCircleMore, Share, ShoppingCart, Star } from "lucide-react";

const productItems = [
  {
    id: "chayote",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100078370757244&f=1&nofb=1&ipt=04bfb3b6b6e216078b140b2ae9c181751443f7798921f6cd6d5d6abcc8368479",
    name: 'Chayote "Sayote"',
    description:
      "Fresh chayote squash with tender flesh, perfect for stir-fries, stews, and local Filipino dishes.",
    price: "P60.00",
    rating: 4.7,
    tags: ["vegetable"],
  },
  {
    id: "bell-pepper",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.rappler.com%2F520CDCB48ED34396AE2416A565C280A2%2Fimg%2F333012F82AEA47A68DFC2534762F55ED%2FBaguio-vegetables-September-9-2018.jpg&f=1&nofb=1&ipt=14aada4d2ba2b59bed4256e03e48ece3cf24b43eebe1ddec847f0cd6f482d261",
    name: "Bell Pepper",
    description:
      "Bright and crunchy bell peppers with sweet flesh, great for salads, grilling, and stir-fries.",
    price: "P35.50",
    rating: 4.6,
    tags: ["vegetable"],
  },
  {
    id: "green-cabbage",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D781958613951803&f=1&nofb=1&ipt=ef97f304441b4e7a72b6cc6eeb8b9f421955a142b4809f69894844095be0e6c7",
    name: "Green Cabbage",
    description:
      "Crisp green cabbage heads ideal for coleslaw, soups, and hearty vegetable dishes.",
    price: "P42.00",
    rating: 4.3,
    tags: ["vegetable"],
  },
  {
    id: "sagada-coffee",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdown-ph.img.susercontent.com%2Ffile%2Fph-11134207-7qukz-lf8j1ygtih0469&f=1&nofb=1&ipt=ca1ce2784e72875505ead8d878b1e66c758d4bb2cfa72f9d82015b199aa30d7a",
    name: "Sagada Coffee",
    description:
      "Rich locally roasted coffee beans from Sagada with bright citrus notes and a smooth finish. Rich locally roasted coffee beans from Sagada with bright citrus notes and a smooth finish. Rich locally roasted coffee beans from Sagada with bright citrus notes and a smooth finish. ",
    price: "P120.00",
    rating: 4.5,
    tags: ["packaged", "sagada"],
  },
  {
    id: "baguio-jam",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fph-test-11.slatic.net%2Fp%2F70a1898c3628da61542b2cb675d02c51.png&f=1&nofb=1&ipt=be8b761c8196d2ee0e7d9a01ce50ee9b937427836016af12b2f2b421604db3b7",
    name: "Special Baguio Jam",
    description: "Sweet berry jam made from fresh Baguio fruit, perfect for toast and desserts.",
    price: "P220.00",
    rating: 4.4,
    tags: ["packaged", "baguio"],
  },
  {
    id: "etag-smoked-meat",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flzd-img-global.slatic.net%2Fg%2Fff%2Fkf%2FS4f32bd5840e746549dd3ce0f3be33ead2.jpg_720x720q80.jpg&f=1&nofb=1&ipt=eb9ff778a4e7943fd9b2be06a90df253310be707a1dd4f8ac2996b4e8f976e0c",
    name: "Sagada Etag Smoked Meat",
    description:
      "Traditional smoked etag meat from Sagada with deep savory flavor for heirloom Filipino recipes.",
    price: "P380.00",
    rating: 4.6,
    tags: ["packaged"],
  },
  {
    id: "carrot",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.philstar.com%2Fphotos%2F2024%2F01%2F03%2Fcarrots2023-12-2716-44-36_2024-01-03_22-33-52.jpg&f=1&nofb=1&ipt=b3eb5d4c7be243facfe17015e78d6abfd846fc35e653839db6b324ae023b87a0",
    name: "High land carrot",
    description:
      "Traditional smoked etag meat from Sagada with deep savory flavor for heirloom Filipino recipes.",
    price: "P380.00",
    rating: 4.6,
    tags: ["packaged"],
  },
];

export function Product() {
  return (
    <>
      <title>Product Details</title>
      <Navbar limitWidth={true} />
      {/* <br /> */}
      <div className="max-w-6xl mx-auto p-2 text-sm sm:text-base">
        <div className="grid sm:grid-flow-col  gap-2 mb-5">
          <ProductCarousel productItems={productItems} />

          <div className="">
            <h1 className="mb-3">
              <span className="text-xl sm:text-2xl">Orange Banana with ducks and Egg</span>
            </h1>
            <div className="flex md:gap-2 items-center mb-3 text-xs lg:text-base text-foreground/40 flex-wrap">
              <span className="">120 sold</span>
              <span className="mx-2 h-1 w-1 bg-foreground/40 rounded-full"></span>
              <span className="">10 stocks</span>
              <span className="mx-2 h-1 w-1 bg-foreground/40 rounded-full"></span>
              <Rating rating={4.8} size={"sm"} showValue={true} />
              <span className="mx-2 h-1 w-1 bg-foreground/40 rounded-full"></span>
              <span className="">10 reviews</span>
            </div>
            <span className="text-2xl font-bold text-main">Php70.00</span>
            <div className="flex flex-col">
              <div className="grid grid-cols-2 gap-2 mt-9">
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
            <div className="rounded-lg h-fit border-2 border-gray-200 p-2 mb-4">
              <div className="flex justify-between items-center flex-wrap gap-2 mb-2">
                <div className="flex gap-2">
                  <Skeleton className="w-9 h-9 aspect-square sm:w-12 sm:h-12 rounded-full bg-black/20" />
                  <div className="flex flex-col justify-center">
                    <div className="font-bold">Company name</div>
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
          </div>
        </div>

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
            <p className="text-muted-foreground mb-2 text-sm font-light">
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

          {/* related products */}
          <Separator />
          <br />
          <h2 className="text-2xl! font-bold! mb-4">Suggested Products</h2>
          <div className="grid gap-2 grid-cols-3 sm:grid-cols-4 lg:grid-cols-5">
            {productItems.map((item) => (
              <ListingCard key={item.id} {...item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
