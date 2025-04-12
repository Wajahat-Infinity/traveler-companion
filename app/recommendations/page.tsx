import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RecommendationForm } from "./components/recommendation-form"
import { RecommendationResults } from "./components/recommendation-results"

export const metadata: Metadata = {
  title: "AI Destination Recommendations | Traveler Companion Platform",
  description: "Get personalized destination recommendations in Pakistan based on your preferences.",
}

export default function RecommendationsPage() {
  return (
    <div className="min-h-screen">
      <div className="container py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">AI-Powered Destination Recommendations</h1>
          <p className="text-lg text-muted-foreground">
            Tell us about your preferences, and our AI will recommend the perfect destinations in Pakistan for your next
            adventure
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Your Preferences</CardTitle>
                <CardDescription>Help us understand what you're looking for</CardDescription>
              </CardHeader>
              <CardContent>
                <RecommendationForm />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <RecommendationResults />

            <div className="mt-12 space-y-6">
              <h2 className="text-2xl font-bold">Why Use AI Recommendations?</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Personalized Suggestions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Our AI analyzes your preferences, travel history, and interests to suggest destinations that match
                      your unique travel style.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Discover Hidden Gems</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Go beyond the popular tourist spots and discover lesser-known destinations that match your
                      interests.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Save Planning Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Skip hours of research and get instant recommendations tailored to your preferences.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Seasonal Recommendations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Get suggestions based on the best times to visit different destinations in Pakistan.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="text-center mt-8">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href="/destinations">
                    Browse All Destinations <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
