import Link from "next/link"
import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SignUpForm } from "./components/signup-form"

export const metadata: Metadata = {
  title: "Sign Up | Traveler Companion Platform",
  description: "Create an account to start your journey with us.",
}

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40 py-12">
      <div className="container flex flex-col items-center justify-center">
        <Link href="/" className="mb-8 flex items-center space-x-2">
          <span className="text-2xl font-bold text-emerald-600">Traveler</span>
          <span className="text-lg font-medium">Companion</span>
        </Link>

        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription>Enter your details below to create your account</CardDescription>
          </CardHeader>
          <CardContent>
            <SignUpForm />
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link href="/terms" className="underline underline-offset-4 hover:text-primary">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline underline-offset-4 hover:text-primary">
                Privacy Policy
              </Link>
              .
            </div>
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-emerald-600 underline underline-offset-4 hover:text-emerald-700">
                Sign in
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
