"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample destination data for Pakistan
const destinations = {
  popular: [
    {
      id: "hunza-valley",
      name: "Hunza Valley",
      description: "Explore the breathtaking landscapes and rich culture",
      image: "/images/destinations/d2.jpg",
      rating: 4.9,
      price: "PKR 15,000",
      location: "Gilgit-Baltistan",
    },
    {
      id: "lahore",
      name: "Lahore",
      description: "Discover the historical wonders of the Walled City",
      image: "/images/destinations/d3.jpg",
      rating: 4.8,
      price: "PKR 8,000",
      location: "Punjab",
    },
    {
      id: "swat",
      name: "Swat Valley",
      description: "Experience the 'Switzerland of Pakistan' with local guides",
      image: "/images/destinations/d1.jpg",
      rating: 4.7,
      price: "PKR 12,000",
      location: "Khyber Pakhtunkhwa",
    },
  ],
  trending: [
    {
      id: "murree",
      name: "Murree",
      description: "Enjoy the hill station with panoramic mountain views",
      image: "/images/slides/s2.jpg",
      rating: 4.6,
      price: "PKR 7,500",
      location: "Punjab",
    },
    {
      id: "skardu",
      name: "Skardu",
      description: "Visit the gateway to the mighty Karakoram mountain range",
      image: "/images/slides/s3.jpg",
      rating: 4.9,
      price: "PKR 18,000",
      location: "Gilgit-Baltistan",
    },
    {
      id: "islamabad",
      name: "Islamabad",
      description: "Tour the beautiful capital city with its modern architecture",
      image: "/images/slides/s1.jpg",
      rating: 4.5,
      price: "PKR 6,000",
      location: "Islamabad Capital Territory",
    },
  ],
  recommended: [
    {
      id: "kalash-valley",
      name: "Kalash Valley",
      description: "Discover the unique culture of the Kalash people",
      image: "/images/destinations/d2.jpg",
      rating: 4.8,
      price: "PKR 20,000",
      location: "Khyber Pakhtunkhwa",
    },
    {
      id: "fairy-meadows",
      name: "Fairy Meadows",
      description: "Camp with stunning views of Nanga Parbat",
      image: "/images/destinations/d1.jpg",
      rating: 4.9,
      price: "PKR 16,000",
      location: "Gilgit-Baltistan",
    },
    {
      id: "peshawar",
      name: "Peshawar",
      description: "Explore one of the oldest cities in South Asia",
      image: "/images/destinations/d3.jpg",
      rating: 4.6,
      price: "PKR 9,000",
      location: "Khyber Pakhtunkhwa",
    },
  ],
}

export function FeaturedDestinations() {
  const [activeTab, setActiveTab] = useState("popular")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
    <section className="py-20 bg-emerald-50/50 dark:bg-emerald-950/10">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Destinations in Pakistan</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked Pakistani destinations with verified local guides and unique experiences
          </p>
        </div>

        <Tabs defaultValue="popular" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(destinations).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate={activeTab === key ? "visible" : "hidden"}
              >
                {items.map((destination, index) => (
                  <motion.div
                    key={destination.id}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <Card className="overflow-hidden h-full flex flex-col border-2 hover:border-emerald-500 transition-colors">
                      <div className="relative h-48 w-full">
                        <Image
                          src={destination.image || "/placeholder.svg"}
                          alt={destination.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <CardTitle>{destination.name}</CardTitle>
                          <div className="flex items-center text-amber-500">
                            <Star className="h-4 w-4 fill-current" />
                            <span className="ml-1 text-sm">{destination.rating}</span>
                          </div>
                        </div>
                        <CardDescription>{destination.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <p className="font-semibold text-lg">From {destination.price} / day</p>
                      </CardContent>
                      <CardFooter className="pt-0">
                        <Button className="bg-emerald-600 hover:bg-emerald-700" asChild>
                          <Link href={`/destinations/${destination.id}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link href="/destinations">
              View all destinations <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
