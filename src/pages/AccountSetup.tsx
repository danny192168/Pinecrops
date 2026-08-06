import React, { useState, useRef } from "react";
import { Camera, MapPin, PackageOpen, ShoppingBasket, Store, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ACCENT = "#8b5e3c";
const HEADER_BG = "#1a1c37";

type Role = "buyer" | "seller" | null;

type ChoiceCardProps = {
  checked: boolean;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  onSelect: () => void;
};

function RadioDot({ checked }: { checked: boolean }) {
  return (
    <span
      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2"
      style={{ borderColor: checked ? ACCENT : "#d6d3d1" }}
    >
      {checked && <span className="h-2 w-2 rounded-full" style={{ backgroundColor: ACCENT }} />}
    </span>
  );
}

function ChoiceCard({ checked, icon: Icon, title, description, onSelect }: ChoiceCardProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group w-full rounded-lg border p-2 text-left transition ${
        checked ? "border-primary bg-primary/10" : "border-border bg-background"
      }`}
    >
      <div className="flex items-center gap-3">
        <Icon className="mt-0.5 shrink-0" style={{ color: checked ? ACCENT : "#a8a29e" }} />
        <div className="flex justify-between flex-1">
          <p className="text-sm font-medium text-foreground">{title}</p>
          <RadioDot checked={checked} />
          {/* <p className="mt-1 text-xs text-muted-foreground">{description}</p> */}
        </div>
      </div>
      {/* <div className="mt-4 flex justify-end"></div> */}
    </button>
  );
}

export default function AccountSetup() {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [role, setRole] = useState<Role>(null);

  const isComplete = username.trim().length > 0 && city.trim().length > 0 && role !== null;

  const handleAvatarPick = () => fileInputRef.current?.click();

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatarPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <title>Account Setup</title>
      <div className="flex min-h-screen items-center justify-center p-2">
        <Card className="w-full max-w-xl overflow-hidden shadow-2xl shadow-slate-900/50 p-0 gap-0">
          <div className="bg-[#1a1c37] p-4 sm:p-8 text-white">
            <div className="flex items-center gap-2 text-main">
              <PackageOpen className="h-5 w-5" />
              <span className="text-xl font-semibold text-white">Pinestore</span>
            </div>
            <p className="mt-2 text-sm text-stone-200">One last step before you dig in.</p>
          </div>

          <CardContent className="p-4 sm:p-8">
            <div className="mb-2">
              <CardTitle className="text-xl font-semibold text-foreground">
                Set up your account
              </CardTitle>
              <CardDescription className="mt-2 text-sm text-muted-foreground">
                Tell us a bit about yourself so we can tailor Pinestore for you.
              </CardDescription>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex flex-col items-center gap-2 m-2">
                <div className="relative h-22 w-22 sm:h-24 sm:w-24">
                  <div className="flex h-22 w-22 sm:h-24 sm:w-24 items-center justify-center overflow-hidden rounded-full border-2">
                    {avatarPreview ? (
                      <img
                        src={avatarPreview}
                        alt="Profile preview"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <User className="h-9 w-9 sm:h-10 sm:w-10 text-stone-400" />
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={handleAvatarPick}
                    aria-label="Upload profile picture"
                    className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white shadow-md hover:opacity-90"
                  >
                    <Camera className="h-4 w-4" />
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </div>
                <button
                  type="button"
                  onClick={handleAvatarPick}
                  className="text-xs font-medium text-primary hover:underline"
                >
                  {avatarPreview ? "Change photo" : "Add a profile photo"}
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="username" className="mb-2">
                    Username
                  </Label>
                  <Input
                    id="username"
                    placeholder="e.g. freshpicks_maria"
                    required
                    value={username}
                    className="rounded-sm"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="city" className="mb-2">
                    City / Municipality
                  </Label>
                  <div className="relative">
                    <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                    <Input
                      id="city"
                      placeholder="e.g. Angeles City"
                      required
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="rounded-sm pl-9"
                    />
                  </div>
                </div>

                <div>
                  <Label className="mb-2">I'm here mainly as a</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <ChoiceCard
                      checked={role === "buyer"}
                      icon={ShoppingBasket}
                      title="Buyer"
                      description="I want to shop for fresh produce"
                      onSelect={() => setRole("buyer")}
                    />
                    <ChoiceCard
                      checked={role === "seller"}
                      icon={Store}
                      title="Seller"
                      description="I want to sell my own produce"
                      onSelect={() => setRole("seller")}
                    />
                  </div>
                </div>
              </div>

              <CardFooter className="p-0">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-brownish"
                  disabled={!isComplete}
                >
                  Finish setup
                </Button>
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
