import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ListingCard } from "@/components/shad/listingCard";
import { ListingNavLinks } from "@/components/shad/listingNavLinks";

export function Listings() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl mx-auto">
        <ListingNavLinks />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 m-2">
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
      </div>
      <Footer />
    </>
  );
}
