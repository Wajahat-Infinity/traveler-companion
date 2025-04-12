"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Star } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

// Sample recommendation data
const recommendedDestinations = [
  {
    id: "hunza-valley",
    name: "Hunza Valley",
    description:
      "Perfect for nature lovers and adventure seekers with stunning mountain views and rich cultural experiences.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.9,
    price: "PKR 15,000",
    location: "Gilgit-Baltistan",
    matchScore: 98,
    reasons: [
      "Matches your preference for mountain landscapes",
      "Great for photography enthusiasts",
      "Offers cultural experiences you're interested in",
      "Perfect for your selected summer travel dates",
      "Fits your medium trip duration preference",
    ],
  },
  {
    id: "skardu",
    name: "Skardu",
    description:
      "A paradise for trekkers and nature enthusiasts with breathtaking lakes, valleys, and the mighty Karakoram range.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.8,
    price: "PKR 18,000",
    location: "Gilgit-Baltistan",
    matchScore: 92,
    reasons: [
      "Aligns with your adventure seeker travel style",
      "Offers excellent trekking opportunities",
      "Features stunning landscapes for photography",
      "Suitable for your budget range",
      "Good for your preferred trip duration",
    ],
  },
  {
    id: "kalash-valley",
    name: "Kalash Valley",
    description:
      "Experience the unique culture of the Kalash people, with colorful festivals and beautiful mountain scenery.",
    image: "/placeholder.svg?height=400&width=600",
    rating: 4.7,
    price: "PKR 20,000",
    location: "Khyber Pakhtunkhwa",
    matchScore: 85,
    reasons: [
      "Matches your interest in cultural experiences",
      "Offers unique photography opportunities",
      "Features beautiful mountain landscapes",
      "Provides authentic local cuisine experiences",
      "Suitable for your summer travel dates",
    ],
  },
]

export function RecommendationResults() {
  const [expanded, setExpanded] = useState<string | null>(null)

  const toggleExpanded = (id: string) => {
    setExpanded(expanded === id ? null : id)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <div id="recommendation-results">
      <h2 className="text-2xl font-bold mb-6">Your Personalized Recommendations</h2>

      <motion.div className="space-y-6" variants={containerVariants} initial="hidden" animate="visible">
        {recommendedDestinations.map((destination) => (
          <motion.div key={destination.id} variants={itemVariants}>
            <Card className="overflow-hidden border-2 hover:border-emerald-500 transition-colors">
              <div className="flex flex-col md:flex-row">
                <div className="relative h-64 md:h-auto md:w-1/3">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {destination.matchScore}% Match
                  </div>
                </div>
                <div className="flex-1 p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-xl font-bold">{destination.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{destination.location}</span>
                        <span className="mx-2">•</span>
                        <div className="flex items-center">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                          <span>{destination.rating}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-lg font-semibold text-emerald-600">From {destination.price} / day</div>
                  </div>

                  <p className="text-muted-foreground mt-2">{destination.description}</p>

                  <div className="mt-4">
                    <Button
                      variant="link"
                      className="p-0 h-auto text-emerald-600"
                      onClick={() => toggleExpanded(destination.id)}
                    >
                      {expanded === destination.id ? "Hide" : "Show"} why we recommended this
                    </Button>

                    {expanded === destination.id && (
                      <motion.div
                        className="mt-2 space-y-1 text-sm"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <p className="font-medium">Why this matches your preferences:</p>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {destination.reasons.map((reason, index) => (
                            <li key={index}>{reason}</li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
                      <Link href={`/destinations/${destination.id}`}>
                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline">Save for Later</Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
