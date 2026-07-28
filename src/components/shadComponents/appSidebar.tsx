import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { BadgeCheckIcon, BellIcon, CreditCardIcon, LogOutIcon, Plus } from "lucide-react";
import { NewListingModal } from "./newListingModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function AppSidebar() {
  return (
    <Sidebar className="bg-[#1a1c37] text-white">
      <SidebarHeader className="space-y-3 px-2 pb-4 pt-6">
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <div className="rounded-lg border border-white/10 bg-white/5 p-2">
                <div className="flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarFallback>DD</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-xs font-semibold">Danny Dela Cruz</p>
                  </div>
                </div>
              </div>
            }
          />
          <DropdownMenuContent align="end">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheckIcon />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CreditCardIcon />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <BellIcon />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOutIcon />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Quick actions</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <NewListingModal />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                render={
                  <a href="/buyers" className="flex w-full items-center gap-2 text-white">
                    View buyers
                  </a>
                }
              />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton render={<a href="/dashboard">Dashboard</a>} isActive />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton render={<a href="/listings">My listings</a>} />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton render={<a href="/orders">Orders</a>} />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton render={<a href="/messages">Messages</a>} />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Insights</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton render={<a href="/analytics">Analytics</a>} />
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton render={<a href="/performance">Performance</a>} />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <div className="space-y-2 px-4 pb-4 pt-3">
          <p className="text-xs uppercase tracking-[0.28em] text-white/50">Support</p>
          <p className="text-sm text-white/80">
            Need help with your store? Visit the help center or contact support.
          </p>
          <Button
            size="sm"
            className="w-full bg-background/40 hover:bg-background/80 hover:text-foreground/70"
          >
            Help center
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
