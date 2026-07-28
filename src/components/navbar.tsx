import {
  ChevronDown,
  Languages,
  Package,
  Package2,
  PackageOpenIcon,
  Salad,
  Truck,
  User,
} from "lucide-react";
import { SearchBar } from "./shadComponents/searchBar";
import { Button } from "./ui/button";
import { CartDrawer } from "./shadComponents/cartDrawer";
import { Link } from "react-router";
import { TopNavbarLinks } from "./shadComponents/topNavbarLinks";
import { Separator } from "./ui/separator";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SiBuymeacoffee, SiCashapp, SiGithub, SiPaypal } from "@icons-pack/react-simple-icons";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

type childProps = {
  limitWidth?: boolean | false;
};

export function Navbar({ limitWidth }: childProps) {
  return (
    <nav className="bg-[#1a1c37] text-white sticky z-10 top-0">
      <div>
        <div className="bg-main/0">
          <div
            className={`flex mx-auto px-2 pb-0.5 pt-2 justify-between text-background/70 ${limitWidth ? "max-w-6xl" : ""}`}
          >
            <div className="flex space-x-0">
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button
                      size="xs"
                      variant="ghost"
                      className="hover:bg-transparent pl-0 hover:text-background/50"
                    >
                      Donate
                    </Button>
                  }
                />
                <DropdownMenuContent className="w-40">
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Select Option</DropdownMenuLabel>
                    {/* <DropdownMenuItem>Maya</DropdownMenuItem> */}
                    <DropdownMenuItem>
                      <Link to="https://buymeacoffee.com/danny192168">
                        <img
                          src="Pinecrops/icons/bmc-logo.svg"
                          alt=""
                          className="h-4.5 w-4.5 inline pr-2"
                        />
                        Buy me coffee
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <img src="Pinecrops/icons/paypal-logo.svg" alt="" className="h-4 w-4" />
                      Paypal
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <img src="Pinecrops/icons/maya-short-logo.png" alt="" className="h-4 w-4" />
                      Maya
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link to="https://github.com/danny192168/Pinecrops">
                <Button
                  size="xs"
                  variant="ghost"
                  className="hover:bg-transparent hover:text-background/50"
                >
                  Contribute
                  <SiGithub className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="">
                <Button
                  size="xs"
                  variant="ghost"
                  className="hover:bg-transparent hover:text-background/50"
                >
                  Become a seller
                  {/* <SiGithub className="w-4 h-4" /> */}
                </Button>
              </Link>
              <Link to="">
                <Button
                  size="xs"
                  variant="ghost"
                  className="hover:bg-transparent hover:text-background/50"
                >
                  How to use?
                  {/* <SiGithub className="w-4 h-4" /> */}
                </Button>
              </Link>
            </div>
            <div className="flex text-xs space-x-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="p-1 text-xs rounded-md h-auto bg-transparent! hover:bg-transparent! data-popup-open:bg-transparent! hover:text-background/50">
                      <Languages className="w-4 h-4 mr-1" />
                      Language
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-50">
                        <li>
                          <NavigationMenuItem>
                            <Button variant="ghost" className="w-full justify-start">
                              English
                            </Button>
                          </NavigationMenuItem>
                          <NavigationMenuItem>
                            <Tooltip>
                              <TooltipTrigger
                                render={
                                  <Button
                                    variant="ghost"
                                    className="w-full justify-start text-foreground/60 hover:text-foreground/60"
                                  >
                                    Kankanaey
                                  </Button>
                                }
                              />
                              <TooltipContent>
                                <p>This feature is currently unavailable</p>
                              </TooltipContent>
                            </Tooltip>
                          </NavigationMenuItem>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <div className="flex">
                <Link to="">
                  <Button
                    size="xs"
                    variant="ghost"
                    className="hover:bg-transparent hover:text-background/50"
                  >
                    Log In
                  </Button>
                </Link>
                <Separator orientation="vertical" className="bg-gray-100/60 h-3 my-auto" />
                <Link to="">
                  <Button
                    size="xs"
                    variant="ghost"
                    className="hover:bg-transparent hover:text-background/50"
                  >
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex max-w-6xl mx-auto px-2 py-2 items-center justify-between gap-2">
          <Link to="/">
            <div className="flex items-center gap-2 text-[#46C855]">
              {/* <div className="grid place-items-center w-8 aspect-square bg-black/70 p-1 rounded-sm ">
                <Salad className="w-5 aspect-square text-green-500" />
              </div> */}
              <PackageOpenIcon />
              <span className="hidden sm:inline text-lg lg:text-xl font-wellfleet font-bold">
                PineCrops
              </span>
            </div>
          </Link>
          <div className="flex items-center space-x-3">
            {/* <Button size="lg">Category</Button> */}
            <SearchBar />
            {/* <button className="flex items-center flex-col gap-0 text-gray-300 hover:text-main">
              <User className="w-4.5 h-4.5" />
              <span className="whitespace-nowrap text-xs">Account</span>
            </button> */}
            <CartDrawer />
            <button className="flex items-center flex-col gap-0 text-gray-300 hover:text-main">
              <Package2 className="w-4.5 h-4.5" />
              <span className="whitespace-nowrap text-xs">Orders</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
