import { Salad, User } from "lucide-react";
import { SearchBar } from "./shad/searchBar";
import { Button } from "./ui/button";
import { CartDrawer } from "./shad/cartDrawer";
import { Link } from "react-router";

export function Navbar() {
  return (
    <nav className="bg-gray-700 text-white">
      <div>
        <div className="flex max-w-5xl mx-auto p-2 items-center justify-between gap-2">
          <Link to="/">
            <div className="flex items-center gap-2">
              <div className="grid place-items-center w-8 aspect-square bg-black/70 p-1 rounded-sm ">
                <Salad className="w-5 aspect-square text-green-500" />
              </div>
              <span className="hidden sm:inline text-lg lg:text-xl font-wellfleet font-bold">
                PineCrops
              </span>
            </div>
          </Link>
          <div className="flex items-center space-x-2">
            <SearchBar />
            <Button className="flex items-center gap-2">
              <User />
              <span className="text-xs hidden sm:inline">Account</span>
            </Button>
            <CartDrawer />
          </div>
        </div>
      </div>
    </nav>
  );
}
