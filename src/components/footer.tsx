import { Salad } from "lucide-react";
import { Link } from "react-router";
import { Separator } from "./ui/separator";
import { SiFacebook, SiGithub, SiGmail } from "@icons-pack/react-simple-icons";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <div className="bg-gray-800 mt-auto pt-8 text-white">
      <div className="max-w-6xl mx-auto mb-1">
        <div className="flex justify-between flex-wrap">
          {/* company logo and slogan and networks */}
          <div className="flex flex-col gap-2 p-2 justify-between w-full lg:w-auto">
            <div>
              <Link to="/">
                <div className="flex items-center gap-2 mb-2">
                  <div className="grid place-items-center w-8 aspect-square bg-black/70 p-1 rounded-sm ">
                    <Salad className="w-5 aspect-square text-green-500" />
                  </div>
                  <span className="text-lg lg:text-xl font-wellfleet font-bold">PineCrops</span>
                </div>
              </Link>
              <h3 className="text-lg">"A shortGeneric company slogan"</h3>
            </div>
            {/* Networks */}
            <div className="flex gap-4 text-gray-500 my-2">
              <Link to="#">
                <SiFacebook size={22} />
              </Link>
              <Link to="#">
                <SiGithub size={22} />
              </Link>
              <Link to="#">
                <SiGmail size={22} />
              </Link>
            </div>
          </div>
          {/* Links */}

          <div className="mx-2">
            <div className="font-extrabold text-gray-500">Links</div>
            <ul>
              <li className="flex flex-col">
                <Link to="#">
                  <Button variant={"link"} className="text-gray-300 p-0">
                    Home
                  </Button>
                </Link>
                <Link to="#">
                  <Button variant={"link"} className="text-gray-300 p-0">
                    Listings
                  </Button>
                </Link>
                <Link to="#">
                  <Button variant={"link"} className="text-gray-300 p-0">
                    Support
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-2">
            <div className="font-extrabold text-gray-500">Sell</div>
            <ul>
              <li className="flex flex-col">
                <Link to={"/#"}>
                  <Button variant={"link"} className="text-gray-300 p-0">
                    Seller Education Center
                  </Button>
                </Link>
                <Link to={"/#"}>
                  <Button variant={"link"} className="text-gray-300 p-0">
                    Register Official store
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="mx-2">
            <div className="font-extrabold text-gray-500">Contact Us</div>
            <ul>
              <li className="flex flex-col">
                <Link to={"/#"}>
                  <Button variant={"link"} className="text-gray-300 p-0">
                    XXX XXX, Session Road, Baguio
                  </Button>
                </Link>
                <Link to={"/#"}>
                  <Button variant={"link"} className="text-gray-300 p-0">
                    pinecrops@protonmail.com
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Separator className="bg-gray-700" />
      <div className="flex flex-col gap-2 items-center p-2">
        <span className="text-gray-500 text-md">©PineCrops 2026, All rights reserved</span>
      </div>
    </div>
  );
}
