"use client";

import * as React from "react";
// import { toast } from "sonner";

import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldLabel,
  FieldTitle,
} from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MoreHorizontalIcon, ShoppingCart } from "lucide-react";
import { QuantityNumberField } from "../reuiComponents/quantityNumberField";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Skeleton } from "../ui/skeleton";

const cartItems = [
  {
    label: "Cabbage",
    description: "A green cabbage with green inside and outside with parts of white",
    badge: "Fastest",
  },
  {
    label: "Sagada Coffee",
    description: "Sagada-grown coffee. Dark roasted",
  },
  {
    label: "Baguio Strawberry Jam",
    description: "150mg bottle BSJ meow cat",
  },
  {
    label: "Pinecrops",
    description: "I need to ask you people. The logistics of this idea is not very practical",
  },
  {
    label: "Carrots",
    description:
      "Long carrots with fine natural orange color. Manila delivery will be delivered via Victory Liner",
  },
];

export function CartDrawer() {
  const [open, setOpen] = React.useState(false);
  const isMobile = useIsMobile();

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
      showSwipeHandle={isMobile}
      swipeDirection={isMobile ? "down" : "right"}
    >
      <DrawerTrigger
        render={
          <Button>
            <ShoppingCart />
            <span className="hidden sm:inline text-xs">cart</span>
          </Button>
        }
      />
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Pick a delivery time</DrawerTitle>
          <DrawerDescription>We&apos;ll prepare your order as soon as possible.</DrawerDescription>
        </DrawerHeader>
        <div className="flex-1 scroll-fade overflow-y-auto p-4">
          <RadioGroup
            value=""
            onValueChange={() => {
              alert();
            }}
            className="gap-2"
          >
            {cartItems.map((item) => (
              <FieldLabel key="" htmlFor="">
                <Field orientation="horizontal">
                  <FieldContent>
                    <div className="flex gap-2">
                      <Skeleton
                        className="w-20 h-20 bg-gray-400 shrink-0
                      "
                      />
                      <div className="min-w-0">
                        <FieldTitle className="flex items-center gap-2">
                          {item.label}
                          {item.badge ? <Badge variant="default">{item.badge}</Badge> : null}
                        </FieldTitle>
                        <FieldDescription>{item.description}</FieldDescription>
                      </div>
                    </div>
                  </FieldContent>
                  <RadioGroupItem value="" id="" />
                </Field>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Quantity</TableHead>
                      <TableHead>Unit Price</TableHead>
                      <TableHead>Total Price</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        <QuantityNumberField />
                      </TableCell>
                      <TableCell>P45.00</TableCell>
                      <TableCell>P180.00</TableCell>
                      <TableCell className="text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            render={
                              <Button variant="ghost" size="icon" className="size-8">
                                <MoreHorizontalIcon />
                                <span className="sr-only">Open menu</span>
                              </Button>
                            }
                          />
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Product</DropdownMenuItem>
                            {/* <DropdownMenuItem>Duplicate</DropdownMenuItem> */}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem variant="destructive">Delete</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </FieldLabel>
            ))}
          </RadioGroup>
        </div>
        <DrawerFooter>
          <div className="w-full flex-col flex gap-1">
            <div>
              <span className="text-lg">Total (1 item): </span>
              <strong className="text-lg">180.00</strong>
            </div>
            <div className="w-full gap-2 flex flex-col">
              <DrawerClose render={<Button variant="outline">Cancel</Button>} />
              <Button className="h-[34px]">Confirm Delivery Time</Button>
            </div>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
