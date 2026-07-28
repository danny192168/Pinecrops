import * as React from "react";
// import { Navbar } from "../components/navbar";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { SiGoogle } from "@icons-pack/react-simple-icons";
import { PackageOpen } from "lucide-react";

export function Authentication() {
  const [mode, setMode] = React.useState<"signin" | "signup">("signin");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* <Navbar /> */}
      {/* <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-md items-center justify-center px-4 py-10 sm:px-6 lg:px-8"> */}
      <main className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-xl items-center justify-center p-4">
        <Card className="w-full overflow-hidden shadow-2xl shadow-slate-900/50 p-0 gap-0">
          <div className="flex flex-col justify-between bg-[#1a1c37] p-4 sm:p-6 lg:p-10 text-background">
            <div className="flex items-center gap-2">
              <PackageOpen className="h-5 w-5 text-main" />
              <span className="text-xl font-semibold">Pinestore</span>
            </div>
            <p className="mt-2 text-sm text-stone-200">One last step before you dig in.</p>
          </div>

          <CardContent className="w-md max-w-full mx-auto my-5 md:my-8">
            <CardHeader className="p-0 mb-4">
              <div>
                <CardTitle className="text-xl font-semibold">
                  {mode === "signin" ? "Sign in" : "Sign up"}
                </CardTitle>
                <p className="text-sm text-foreground/70">
                  {mode === "signin"
                    ? "Use your account email and password."
                    : "Create a new account to manage your listings."}
                </p>
              </div>
            </CardHeader>
            <div className="grid grid-cols-2 rounded-md bg-muted p-0.5 mb-4">
              <Button
                variant={mode === "signin" ? "default" : "ghost"}
                onClick={() => setMode("signin")}
                className={`rounded-md ${mode === "signin" && "bg-brownish"}`}
              >
                Sign in
              </Button>
              <Button
                variant={mode === "signup" ? "default" : "ghost"}
                onClick={() => setMode("signup")}
                className={`rounded-md ${mode === "signup" && "bg-brownish"}`}
              >
                Sign up
              </Button>
            </div>
            <form className="space-y-6 mb-3" onSubmit={(event) => event.preventDefault()}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="rounded-md"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                    className="rounded-md"
                  />
                </div>
                {mode === "signup" ? (
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm password</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Repeat your password"
                      required
                    />
                  </div>
                ) : null}
              </div>

              <Button type="submit" className="w-full bg-brownish" size="lg">
                {mode === "signin" ? "Sign in" : "Create account"}
              </Button>
            </form>

            <div className="space-y-3 mb-3">
              <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <span className="h-px flex-1 bg-border" />
                <span>or continue with</span>
                <span className="h-px flex-1 bg-border" />
              </div>
              <Button
                type="button"
                variant="outline"
                className="flex w-full items-center justify-center gap-2"
              >
                <SiGoogle className="size-4" />
                Continue with Google
              </Button>
            </div>

            <div className="text-foreground/60 text-sm text-center">
              {mode === "signin" ? (
                <p>
                  New here?{" "}
                  <button
                    type="button"
                    className="font-medium text-primary hover:text-main"
                    onClick={() => setMode("signup")}
                  >
                    Create account
                  </button>{" "}
                </p>
              ) : (
                <p>
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="font-medium text-primary hover:text-main"
                    onClick={() => setMode("signin")}
                  >
                    Sign in
                  </button>{" "}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
