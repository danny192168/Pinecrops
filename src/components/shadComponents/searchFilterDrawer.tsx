import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Settings2 } from "lucide-react";

export function SearchFilterDrawer() {
  return (
    <Drawer swipeDirection="left">
      <DrawerTrigger
        render={
          <Button size="lg" variant="outline">
            <Settings2 />
            Refine results
          </Button>
        }
      />
      <DrawerContent className="bg-[#1a1c37] text-white">
        <DrawerHeader>
          <DrawerTitle className="text-white">Refine results</DrawerTitle>
          <DrawerDescription className="text-white/70">
            Sort products and narrow the list by rating, price, and category.
          </DrawerDescription>
        </DrawerHeader>

        <div className="flex-1 space-y-4 overflow-auto p-4">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-sm font-semibold text-white">Sort by rating</p>
            <RadioGroup defaultValue="rating-high-low" className="mt-2 gap-2">
              <label className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-white/90">
                <RadioGroupItem value="rating-high-low" id="rating-high-low" />
                <span>High to low</span>
              </label>
              <label className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-white/90">
                <RadioGroupItem value="rating-low-high" id="rating-low-high" />
                <span>Low to high</span>
              </label>
            </RadioGroup>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-sm font-semibold text-white">Sort by price</p>
            <RadioGroup defaultValue="price-high-low" className="mt-2 gap-2">
              <label className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-white/90">
                <RadioGroupItem value="price-high-low" id="price-high-low" />
                <span>High to low</span>
              </label>
              <label className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-sm text-white/90">
                <RadioGroupItem value="price-low-high" id="price-low-high" />
                <span>Low to high</span>
              </label>
            </RadioGroup>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-sm font-semibold text-white">Category</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                className="justify-start border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                Vegetables
              </Button>
              <Button
                variant="outline"
                className="justify-start border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                Fruits
              </Button>
              <Button
                variant="outline"
                className="justify-start border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                Bundle
              </Button>
              <Button
                variant="outline"
                className="justify-start border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                Fresh picks
              </Button>
            </div>
          </section>

          <section className="rounded-2xl border border-white/10 bg-white/5 p-3">
            <p className="text-sm font-semibold text-white">Price range</p>
            <div className="mt-3 space-y-3">
              <div>
                <Label htmlFor="min-price" className="text-xs text-white/70">
                  Minimum price
                </Label>
                <Input
                  min={0}
                  id="min-price"
                  type="number"
                  inputMode="numeric"
                  defaultValue={0}
                  pattern="[0-9]*"
                  className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/40  [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </div>
              <div>
                <Label htmlFor="max-price" className="text-xs text-white/70">
                  Maximum price
                </Label>
                <Input
                  min={0}
                  id="max-price"
                  type="number"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  defaultValue={500}
                  className="mt-1 border-white/10 bg-white/5 text-white placeholder:text-white/40 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                />
              </div>
            </div>
          </section>
        </div>

        <DrawerFooter className="gap-2 border-t border-white/10 bg-[#1a1c37] p-2">
          <DrawerClose
            render={
              <Button
                variant="outline"
                className="border-white/10 bg-white/5 text-white hover:bg-white/10"
              >
                Clear
              </Button>
            }
          />
          <DrawerClose
            render={
              <Button className="bg-white text-[#1a1c37] hover:bg-white/90">Show results</Button>
            }
          />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
