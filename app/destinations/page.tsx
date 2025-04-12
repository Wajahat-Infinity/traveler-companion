import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Destinations | Traveler Companion Platform",
  description: "Explore the most beautiful destinations in Pakistan with local guides and authentic experiences.",
}

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
  mountains: [
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
      id: "deosai-plains",
      name: "Deosai Plains",
      description: "Explore the second-highest plateau in the world",
      image: "/images/destinations/d2.jpg",
      rating: 4.8,
      price: "PKR 14,000",
      location: "Gilgit-Baltistan",
    },
    {
      id: "naltar-valley",
      name: "Naltar Valley",
      description: "Visit the colorful lakes and lush forests",
      image: "/images/slides/s3.jpg",
      rating: 4.7,
      price: "PKR 13,000",
      location: "Gilgit-Baltistan",
    },
    {
      id: "kaghan-valley",
      name: "Kaghan Valley",
      description: "Discover the beautiful valley with lakes and meadows",
      image: "/images/slides/s2.jpg",
      rating: 4.6,
      price: "PKR 10,000",
      location: "Khyber Pakhtunkhwa",
    },
  ],
  cultural: [
    {
      id: "peshawar",
      name: "Peshawar",
      description: "Explore one of the oldest cities in South Asia",
      image: "/images/destinations/d3.jpg",
      rating: 4.6,
      price: "PKR 9,000",
      location: "Khyber Pakhtunkhwa",
    },
    {
      id: "multan",
      name: "Multan",
      description: "Visit the City of Saints with its historic shrines",
      image: "/images/slides/s1.jpg",
      rating: 4.5,
      price: "PKR 7,000",
      location: "Punjab",
    },
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
      id: "mohenjo-daro",
      name: "Mohenjo-daro",
      description: "Explore the ancient Indus Valley Civilization ruins",
      image: "/images/destinations/d1.jpg",
      rating: 4.7,
      price: "PKR 12,000",
      location: "Sindh",
    },
  ],
  beaches: [
    {
      id: "kund-malir",
      name: "Kund Malir Beach",
      description: "Relax on one of Pakistan's most beautiful beaches",
      image: "/images/destinations/d2.jpg",
      rating: 4.5,
      price: "PKR 8,000",
      location: "Balochistan",
    },
    {
      id: "hawkes-bay",
      name: "Hawke's Bay",
      description: "Enjoy the sandy beaches near Karachi",
      image: "/images/destinations/d1.jpg",
      rating: 4.3,
      price: "PKR 5,000",
      location: "Sindh",
    },
    {
      id: "french-beach",
      name: "French Beach",
      description: "Experience the secluded beach with clear waters",
      image: "/images/slides/s3.jpg",
      rating: 4.4,
      price: "PKR 6,000",
      location: "Sindh",
    },
    {
      id: "gwadar",
      name: "Gwadar",
      description: "Visit the port city with its beautiful coastline",
      image: "/images/destinations/d3.jpg",
      rating: 4.6,
      price: "PKR 15,000",
      location: "Balochistan",
    },
  ],
}

export default function DestinationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <Image src="/images/destinations/d1.jpg" alt="Pakistan Destinations" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Explore Pakistan</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Discover the most beautiful destinations in Pakistan with local guides and authentic experiences
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search destinations, cities, or experiences"
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
        <Tabs defaultValue="popular" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="popular">Popular</TabsTrigger>
              <TabsTrigger value="mountains">Mountains</TabsTrigger>
              <TabsTrigger value="cultural">Cultural</TabsTrigger>
              <TabsTrigger value="beaches">Beaches</TabsTrigger>
            </TabsList>
          </div>

          {Object.entries(destinations).map(([key, items]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items.map((destination) => (
                  <Card
                    key={destination.id}
                    className="overflow-hidden h-full flex flex-col border-2 hover:border-emerald-500 transition-colors"
                  >
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
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3 mr-1" />
                        <span>{destination.location}</span>
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
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
