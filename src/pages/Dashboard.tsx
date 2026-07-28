import { Footer } from "@/components/footer";
import { Navbar } from "../components/navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ListIcon, Plus, Edit3 } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ListingCard } from "@/components/shadComponents/listingCard";
import { NewListingModal } from "@/components/shadComponents/newListingModal";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shadComponents/appSidebar";

export function Dashboard() {
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

  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <div>
          <Navbar limitWidth={false} />
          <section className="mx-auto space-y-6 px-2 py-4">
            <Separator />
            <div className="p-2">
              <h2>Your Products</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-2">
                {productItems.map((item) => (
                  <ListingCard key={item.id} {...item} />
                ))}
                {/* {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <Card size="sm">
                <CardHeader>
                  <Skeleton className="h-4" />
                  <Skeleton className="h-4 w-[90%]" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-20 mb-2" />
                  <Skeleton className="h-8" />
                </CardContent>
              </Card>
            ))} */}
              </div>
            </div>
          </section>
          {/* <Footer /> */}
        </div>
      </SidebarProvider>
    </>
  );
}
