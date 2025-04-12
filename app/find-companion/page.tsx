import type { Metadata } from "next"
import Image from "next/image"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { CompanionMatchForm } from "./components/companion-match-form"
import { CompanionPreferences } from "./components/companion-preferences"
import { MatchingAlgorithm } from "./components/matching-algorithm"

export const metadata: Metadata = {
  title: "Find Travel Companions | Traveler Companion Platform",
  description: "Find your perfect travel companion for your next adventure in Pakistan.",
}

// Sample companion data
const companions = [
  {
    id: "companion-1",
    name: "Ahmed Khan",
    age: 28,
    location: "Karachi, Pakistan",
    image: "/placeholder.svg?height=400&width=400",
    destination: "Hunza Valley",
    travelDates: "June 15 - June 22, 2025",
    interests: ["Trekking", "Photography", "Cultural Experiences"],
    languages: ["English", "Urdu"],
    bio: "Adventure enthusiast looking for travel companions to explore the beautiful Hunza Valley. I'm an avid photographer and love trekking and experiencing local cultures.",
    compatibility: 95,
  },
  {
    id: "companion-2",
    name: "Fatima Ali",
    age: 32,
    location: "Lahore, Pakistan",
    image: "/placeholder.svg?height=400&width=400",
    destination: "Skardu",
    travelDates: "July 10 - July 18, 2025",
    interests: ["Hiking", "Camping", "Nature"],
    languages: ["English", "Urdu", "Punjabi"],
    bio: "Nature lover and hiking enthusiast planning a trip to Skardu. Looking for like-minded travelers to share the experience and split costs.",
    compatibility: 88,
  },
  {
    id: "companion-3",
    name: "Usman Ahmed",
    age: 35,
    location: "Islamabad, Pakistan",
    image: "/placeholder.svg?height=400&width=400",
    destination: "Swat Valley",
    travelDates: "August 5 - August 12, 2025",
    interests: ["Fishing", "Hiking", "Local Cuisine"],
    languages: ["English", "Urdu"],
    bio: "Experienced traveler planning a relaxing trip to Swat Valley. Interested in fishing, hiking, and exploring local cuisine. Looking for companions to share the journey.",
    compatibility: 82,
  },
  {
    id: "companion-4",
    name: "Ayesha Malik",
    age: 26,
    location: "Peshawar, Pakistan",
    image: "/placeholder.svg?height=400&width=400",
    destination: "Kalash Valley",
    travelDates: "September 1 - September 8, 2025",
    interests: ["Cultural Experiences", "Photography", "Festivals"],
    languages: ["English", "Urdu", "Pashto"],
    bio: "Cultural enthusiast planning to visit Kalash Valley during a festival. Looking for travel companions interested in cultural experiences and photography.",
    compatibility: 78,
  },
]

export default function FindCompanionPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh]">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Find Travel Companions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Find Your Perfect Travel Companion</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Connect with like-minded travelers for your next adventure
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Where do you want to go?"
                className="pl-10 h-12 rounded-full bg-white/90 backdrop-blur-sm"
              />
              <Button className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10 bg-emerald-600 hover:bg-emerald-700">
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Find Your Travel Match</CardTitle>
              </CardHeader>
              <CardContent>
                <CompanionMatchForm />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">How It Works</h2>
            <MatchingAlgorithm />

            <div className="mt-8">
              <CompanionPreferences />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
