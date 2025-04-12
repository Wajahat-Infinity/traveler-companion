"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, User } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CompanionMatchForm } from "../find-companion/components/companion-match-form"
import { Sidebar } from "./components/sidebar"

// Sample companion data
const companions = [
  {
    id: "companion-1",
    name: "Ahmed Khan",
    age: 28,
    location: "Karachi, Pakistan",
    image: "/images/guides/g4.jpeg",
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
    image: "/images/guides/g2.jpeg",
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
    image: "/images/guides/g5.jpeg",
    destination: "Swat Valley",
    travelDates: "August 5 - August 12, 2025",
    interests: ["Fishing", "Hiking", "Local Cuisine"],
    languages: ["English", "Urdu"],
    bio: "Experienced traveler planning a relaxing trip to Swat Valley. Interested in fishing, hiking, and exploring local cuisine. Looking for companions to share the journey.",
    compatibility: 82,
  },
]

// Slider images
const sliderImages = [
  "/images/destinations/d1.jpg",
  "/images/destinations/d2.jpg",
  "/images/destinations/d3.jpg",
  "/images/slides/s1.jpg",
  "/images/slides/s2.jpg",
]

export default function TravelerPairingPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Function to reset the timeout
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderImages.length)
    }, 5000)

    return () => {
      resetTimeout()
    }
  }, [currentSlide])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section with Image Slider */}
      <div className="relative h-[40vh] md:h-[50vh]">
        {sliderImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img || "/placeholder.svg"}
              alt={`Travel slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Find Travel Companions</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Connect with like-minded travelers for your next adventure in Pakistan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
                <Link href="#find-matches">Find Matches</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                Browse Travelers
              </Button>
            </div>
          </div>
        </div>

        {/* Slider indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                index === currentSlide ? "bg-white" : "bg-white/40"
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-1">
        <Sidebar />

        <div className="flex-1 container py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12" id="find-matches">
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle>Find Your Travel Match</CardTitle>
                  <CardDescription>
                    Tell us about your travel plans and we'll find compatible companions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CompanionMatchForm />
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-6">{companions.length} Potential Matches</h2>

              <div className="space-y-6">
                {companions.map((companion) => (
                  <motion.div
                    key={companion.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="overflow-hidden border-2 hover:border-emerald-500 transition-colors">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative h-64 md:h-auto md:w-1/3">
                          <Image
                            src={companion.image || "/placeholder.svg"}
                            alt={companion.name}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {companion.compatibility}% Match
                          </div>
                        </div>
                        <div className="flex-1 p-6">
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-xl font-bold">{companion.name}</h3>
                              <p className="text-muted-foreground">
                                {companion.age} years • {companion.location}
                              </p>
                            </div>
                          </div>

                          <div className="space-y-4 mt-4">
                            <div className="flex items-start gap-2">
                              <MapPin className="h-5 w-5 text-emerald-600 mt-0.5" />
                              <div>
                                <p className="font-medium">Traveling to</p>
                                <p>{companion.destination}</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-2">
                              <Calendar className="h-5 w-5 text-emerald-600 mt-0.5" />
                              <div>
                                <p className="font-medium">Travel Dates</p>
                                <p>{companion.travelDates}</p>
                              </div>
                            </div>

                            <div className="flex items-start gap-2">
                              <User className="h-5 w-5 text-emerald-600 mt-0.5" />
                              <div>
                                <p className="font-medium">Interests</p>
                                <p>{companion.interests.join(", ")}</p>
                              </div>
                            </div>
                          </div>

                          <p className="mt-4 text-muted-foreground">{companion.bio}</p>

                          <div className="flex gap-3 mt-6">
                            <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
                              <Link href={`/traveler-pairing/${companion.id}`}>View Profile</Link>
                            </Button>
                            <Button variant="outline">Send Message</Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
