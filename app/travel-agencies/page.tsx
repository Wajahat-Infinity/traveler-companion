import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Filter, Globe, MapPin, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export const metadata: Metadata = {
  title: "Travel Agencies | Traveler Companion Platform",
  description: "Find and connect with trusted travel agencies in Pakistan for your next adventure.",
}

// Sample travel agency data
const agencies = [
  {
    id: "agency-1",
    name: "Pakistan Tours & Travels",
    location: "Islamabad",
    image: "/placeholder.svg?height=400&width=600",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    reviews: 156,
    specialties: ["Adventure Tours", "Cultural Tours", "Custom Itineraries"],
    description: "Leading travel agency in Pakistan specializing in adventure and cultural tours across the country.",
    established: 2005,
    website: "https://example.com",
  },
  {
    id: "agency-2",
    name: "Karakoram Adventures",
    location: "Gilgit",
    image: "/placeholder.svg?height=400&width=600",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    reviews: 189,
    specialties: ["Trekking", "Mountaineering", "Expedition Support"],
    description:
      "Specialized agency for trekking and mountaineering expeditions in the Karakoram and Himalayan ranges.",
    established: 1998,
    website: "https://example.com",
  },
  {
    id: "agency-3",
    name: "Discover Pakistan",
    location: "Lahore",
    image: "/placeholder.svg?height=400&width=600",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.7,
    reviews: 124,
    specialties: ["Cultural Tours", "Historical Sites", "Food Tours"],
    description:
      "Focused on showcasing Pakistan's rich cultural heritage and historical sites with expert local guides.",
    established: 2010,
    website: "https://example.com",
  },
  {
    id: "agency-4",
    name: "Coastal Explorers",
    location: "Karachi",
    image: "/placeholder.svg?height=400&width=600",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.6,
    reviews: 98,
    specialties: ["Beach Tours", "Coastal Adventures", "Marine Life"],
    description: "Specialized in coastal tours and marine adventures along Pakistan's Arabian Sea coastline.",
    established: 2012,
    website: "https://example.com",
  },
  {
    id: "agency-5",
    name: "Northern Pakistan Tours",
    location: "Hunza",
    image: "/placeholder.svg?height=400&width=600",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    reviews: 210,
    specialties: ["Scenic Tours", "Photography Tours", "Cultural Immersion"],
    description: "Expert agency for exploring the breathtaking landscapes and cultures of Northern Pakistan.",
    established: 2008,
    website: "https://example.com",
  },
  {
    id: "agency-6",
    name: "Pakistan Luxury Travel",
    location: "Islamabad",
    image: "/placeholder.svg?height=400&width=600",
    logo: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    reviews: 87,
    specialties: ["Luxury Tours", "VIP Services", "Helicopter Tours"],
    description: "Premium travel agency offering luxury experiences and VIP services throughout Pakistan.",
    established: 2015,
    website: "https://example.com",
  },
]

// Sample locations for filter
const locations = [
  "Islamabad",
  "Lahore",
  "Karachi",
  "Gilgit",
  "Hunza",
  "Skardu",
  "Peshawar",
  "Quetta",
  "Multan",
  "Faisalabad",
]

// Sample specialties for filter
const specialties = [
  "Adventure Tours",
  "Cultural Tours",
  "Trekking",
  "Mountaineering",
  "Historical Sites",
  "Food Tours",
  "Beach Tours",
  "Luxury Tours",
  "Photography Tours",
  "Custom Itineraries",
]

export default function TravelAgenciesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/placeholder.svg?height=800&width=1600"
          alt="Travel Agencies in Pakistan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Travel Agencies in Pakistan</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Connect with trusted travel agencies for expertly planned tours and experiences
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search agencies by name or specialty"
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
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">{agencies.length} Travel Agencies Available</h2>

          <div className="flex items-center gap-4">
            <Select defaultValue="rating">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rating</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
                <SelectItem value="established-new">Newest</SelectItem>
                <SelectItem value="established-old">Oldest</SelectItem>
              </SelectContent>
            </Select>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" /> Filters
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px] overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>Filter Agencies</SheetTitle>
                  <SheetDescription>Refine your search to find the perfect travel agency</SheetDescription>
                </SheetHeader>

                <div className="py-6 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Location</h3>
                    <div className="space-y-2">
                      {locations.slice(0, 6).map((location) => (
                        <div key={location} className="flex items-center space-x-2">
                          <Checkbox id={`location-${location}`} />
                          <Label htmlFor={`location-${location}`}>{location}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Specialties</h3>
                    <div className="space-y-2">
                      {specialties.slice(0, 6).map((specialty) => (
                        <div key={specialty} className="flex items-center space-x-2">
                          <Checkbox id={`specialty-${specialty}`} />
                          <Label htmlFor={`specialty-${specialty}`}>{specialty}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Rating</h3>
                    <RadioGroup defaultValue="any">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="any" id="rating-any" />
                        <Label htmlFor="rating-any">Any rating</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4.5+" id="rating-4.5" />
                        <Label htmlFor="rating-4.5">4.5 and above</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4+" id="rating-4" />
                        <Label htmlFor="rating-4">4.0 and above</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Years in Business</h3>
                    <RadioGroup defaultValue="any">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="any" id="years-any" />
                        <Label htmlFor="years-any">Any</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="10+" id="years-10" />
                        <Label htmlFor="years-10">10+ years</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5+" id="years-5" />
                        <Label htmlFor="years-5">5+ years</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex justify-between pt-4">
                    <Button variant="outline">Reset Filters</Button>
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Apply Filters</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agencies.map((agency) => (
            <Card
              key={agency.id}
              className="overflow-hidden h-full flex flex-col border-2 hover:border-emerald-500 transition-colors"
            >
              <div className="relative h-48 w-full">
                <Image src={agency.image || "/placeholder.svg"} alt={agency.name} fill className="object-cover" />
                <div className="absolute bottom-4 left-4">
                  <div className="relative h-16 w-16 rounded-full overflow-hidden border-4 border-white">
                    <Image
                      src={agency.logo || "/placeholder.svg"}
                      alt={`${agency.name} logo`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{agency.name}</CardTitle>
                  <div className="flex items-center text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm">{agency.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{agency.location}</span>
                  <span className="mx-2">•</span>
                  <span>Est. {agency.established}</span>
                </div>
                <CardDescription className="mt-2">{agency.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="flex flex-wrap gap-2">
                  {agency.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:text-emerald-300"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-sm">
                  <Globe className="h-4 w-4 text-muted-foreground mr-1" />
                  <a
                    href={agency.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href={`/travel-agencies/${agency.id}`}>
                    View Agency <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
