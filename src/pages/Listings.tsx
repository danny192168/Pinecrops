import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ListingCard } from "@/components/shadComponents/listingCard";
import { ListingNavLinks } from "@/components/shadComponents/listingNavLinks";
import { ListingsCarousel } from "@/components/shadComponents/listingsCarousel";

export function Listings() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto">
        <br />
        {/* <ListingsCarousel /> */}
        <ListingNavLinks />
        <h1 className="p-2 lg:p-0 mb-2">Best Sellers</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 m-2 lg:m-0">
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
          <ListingCard />
        </div>

        <h2>
          Section that has horizontally-aligned icons and labels for you to naviaget certain places.
          Tags to limit output. Add a Nav for b2b. B2B features with somethings that indicates it as
          "wholesale".
        </h2>
        <ul>
          <li>Some carausel on listtings/landing page</li>
          <li>On product page, add bread crumbs</li>
        </ul>
      </div>
      <Footer />
    </>
  );
}
