import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ListingCard } from "@/components/shadComponents/listingCard";
import { ListingNavLinks } from "@/components/shadComponents/listingNavLinks";
// import { ListingsCarousel } from "@/components/shadComponents/listingsCarousel";

const productItems = [
  {
    id: "chayote",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D100078370757244&f=1&nofb=1&ipt=04bfb3b6b6e216078b140b2ae9c181751443f7798921f6cd6d5d6abcc8368479",
    name: 'Chayote "Sayote"',
    description:
      "Fresh chayote squash with tender flesh, perfect for stir-fries, stews, and local Filipino dishes.",
    price: "P60.00",
    rating: 4.7,
    category: ["vegetable"],
  },
  {
    id: "bell-pepper",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.rappler.com%2F520CDCB48ED34396AE2416A565C280A2%2Fimg%2F333012F82AEA47A68DFC2534762F55ED%2FBaguio-vegetables-September-9-2018.jpg&f=1&nofb=1&ipt=14aada4d2ba2b59bed4256e03e48ece3cf24b43eebe1ddec847f0cd6f482d261",
    name: "Bell Pepper",
    description:
      "Bright and crunchy bell peppers with sweet flesh, great for salads, grilling, and stir-fries.",
    price: "P35.50",
    rating: 4.6,
    category: ["vegetable"],
  },
  {
    id: "green-cabbage",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flookaside.fbsbx.com%2Flookaside%2Fcrawler%2Fmedia%2F%3Fmedia_id%3D781958613951803&f=1&nofb=1&ipt=ef97f304441b4e7a72b6cc6eeb8b9f421955a142b4809f69894844095be0e6c7",
    name: "Green Cabbage",
    description:
      "Crisp green cabbage heads ideal for coleslaw, soups, and hearty vegetable dishes.",
    price: "P42.00",
    rating: 4.3,
    category: ["vegetable"],
  },
  {
    id: "sagada-coffee",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdown-ph.img.susercontent.com%2Ffile%2Fph-11134207-7qukz-lf8j1ygtih0469&f=1&nofb=1&ipt=ca1ce2784e72875505ead8d878b1e66c758d4bb2cfa72f9d82015b199aa30d7a",
    name: "Sagada Coffee",
    description:
      "Rich locally roasted coffee beans from Sagada with bright citrus notes and a smooth finish. Rich locally roasted coffee beans from Sagada with bright citrus notes and a smooth finish. Rich locally roasted coffee beans from Sagada with bright citrus notes and a smooth finish. ",
    price: "P120.00",
    rating: 4.5,
    category: ["packaged", "sagada"],
  },
  {
    id: "baguio-jam",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fph-test-11.slatic.net%2Fp%2F70a1898c3628da61542b2cb675d02c51.png&f=1&nofb=1&ipt=be8b761c8196d2ee0e7d9a01ce50ee9b937427836016af12b2f2b421604db3b7",
    name: "Special Baguio Jam",
    description: "Sweet berry jam made from fresh Baguio fruit, perfect for toast and desserts.",
    price: "P220.00",
    rating: 4.4,
    category: ["packaged", "baguio"],
  },
  {
    id: "etag-smoked-meat",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flzd-img-global.slatic.net%2Fg%2Fff%2Fkf%2FS4f32bd5840e746549dd3ce0f3be33ead2.jpg_720x720q80.jpg&f=1&nofb=1&ipt=eb9ff778a4e7943fd9b2be06a90df253310be707a1dd4f8ac2996b4e8f976e0c",
    name: "Sagada Etag Smoked Meat",
    description:
      "Traditional smoked etag meat from Sagada with deep savory flavor for heirloom Filipino recipes.",
    price: "P380.00",
    rating: 4.6,
    category: ["packaged"],
  },
  {
    id: "carrot",
    src: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia.philstar.com%2Fphotos%2F2024%2F01%2F03%2Fcarrots2023-12-2716-44-36_2024-01-03_22-33-52.jpg&f=1&nofb=1&ipt=b3eb5d4c7be243facfe17015e78d6abfd846fc35e653839db6b324ae023b87a0",
    name: "High land carrot",
    description:
      "Traditional smoked etag meat from Sagada with deep savory flavor for heirloom Filipino recipes.",
    price: "P380.00",
    rating: 4.6,
    category: ["packaged"],
  },
];

export function Listings() {
  return (
    <>
      <title>Listings</title>
      <Navbar limitWidth={true} />
      <section className="max-w-6xl mx-auto">
        {/* <ListingsCarousel /> */}
        <ListingNavLinks />
        <h1 className="p-2">Best Sellers</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
          {productItems.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>

        {/* <h2>
          Section that has horizontally-aligned icons and labels for you to naviaget certain places.
          Tags to limit output. Add a Nav for b2b. B2B features with somethings that indicates it as
          "wholesale".
        </h2> */}
        {/* <ul>
          <li>Some carausel on listtings/landing page</li>
          <li>On product page, add bread crumbs</li>
        </ul> */}
        <h1 className="p-2">Vegetables</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
          {productItems.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
        <h1 className="p-2">Packaged Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-2 p-2">
          {productItems.map((item) => (
            <ListingCard key={item.id} {...item} />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
