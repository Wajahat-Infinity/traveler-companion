import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Filter, MapPin, Star, Wifi } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"
import { HotelSearchForm } from "./components/hotel-search-form"

export const metadata: Metadata = {
  title: "Hotels | Traveler Companion Platform",
  description: "Find and book hotels across Pakistan for your next adventure.",
}

// Sample hotel data
const hotels = [
  {
    id: "hotel-1",
    name: "Serena Hotel",
    location: "Islamabad",
    image: "/images/hotels/h1.jpeg",
    rating: 4.8,
    reviews: 245,
    price: "PKR 25,000",
    amenities: ["Free WiFi", "Swimming Pool", "Restaurant", "Spa", "Fitness Center"],
    description: "Luxury hotel in the heart of Islamabad with stunning views of the Margalla Hills.",
  },
  {
    id: "hotel-2",
    name: "Pearl Continental",
    location: "Lahore",
    image: "/images/hotels/h2.jpeg",
    rating: 4.7,
    reviews: 189,
    price: "PKR 22,000",
    amenities: ["Free WiFi", "Swimming Pool", "Restaurant", "Business Center", "Fitness Center"],
    description: "Elegant hotel in Lahore offering world-class amenities and exceptional service.",
  },
  {
    id: "hotel-3",
    name: "Hunza Serena Inn",
    location: "Hunza Valley",
    image: "/images/hotels/h3.jpeg",
    rating: 4.9,
    reviews: 156,
    price: "PKR 18,000",
    amenities: ["Free WiFi", "Restaurant", "Mountain Views", "Garden", "Room Service"],
    description: "Charming inn with breathtaking views of the Hunza Valley and surrounding mountains.",
  },
  {
    id: "hotel-4",
    name: "Shangrila Resort",
    location: "Skardu",
    image: "/images/hotels/h1.jpeg",
    rating: 4.8,
    reviews: 210,
    price: "PKR 20,000",
    amenities: ["Free WiFi", "Restaurant", "Lake Views", "Garden", "Boating"],
    description: "Iconic resort situated on the shores of Lower Kachura Lake with stunning mountain views.",
  },
  {
    id: "hotel-5",
    name: "Avari Towers",
    location: "Karachi",
    image: "/images/hotels/h2.jpeg",
    rating: 4.6,
    reviews: 178,
    price: "PKR 24,000",
    amenities: ["Free WiFi", "Swimming Pool", "Restaurant", "Business Center", "Fitness Center"],
    description: "Modern hotel in the heart of Karachi offering luxury accommodations and excellent service.",
  },
  {
    id: "hotel-6",
    name: "Luxus Grand Hotel",
    location: "Swat Valley",
    image: "/images/hotels/h3.jpeg",
    rating: 4.5,
    reviews: 132,
    price: "PKR 15,000",
    amenities: ["Free WiFi", "Restaurant", "Mountain Views", "Garden", "Room Service"],
    description: "Comfortable hotel in Swat Valley with beautiful views and warm hospitality.",
  },
]

// Sample locations for filter
const locations = [
  "Islamabad",
  "Lahore",
  "Karachi",
  "Peshawar",
  "Quetta",
  "Hunza Valley",
  "Skardu",
  "Swat Valley",
  "Murree",
  "Naran",
]

// Sample amenities for filter
const amenities = [
  "Free WiFi",
  "Swimming Pool",
  "Restaurant",
  "Spa",
  "Fitness Center",
  "Business Center",
  "Room Service",
  "Airport Shuttle",
  "Free Parking",
  "Air Conditioning",
]

export default function HotelsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <Image src="/images/hotels/h1.jpeg" alt="Hotels in Pakistan" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Find Your Perfect Stay</h1>
              <p className="text-xl text-white/80 mb-8">
                Discover and book hotels across Pakistan for your next adventure
              </p>

              <Card className="bg-white/95 backdrop-blur-sm">
                <CardContent className="p-6">
                  <HotelSearchForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">{hotels.length} Hotels Available</h2>

          <div className="flex items-center gap-4">
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rating</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
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
                  <SheetTitle>Filter Hotels</SheetTitle>
                  <SheetDescription>Refine your search to find the perfect hotel</SheetDescription>
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
                    <h3 className="text-sm font-medium">Price Range (PKR per night)</h3>
                    <Slider defaultValue={[0, 30000]} max={50000} step={1000} className="py-4" />
                    <div className="flex items-center justify-between">
                      <span>PKR 0</span>
                      <span>PKR 50,000+</span>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Star Rating</h3>
                    <RadioGroup defaultValue="any">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="any" id="rating-any" />
                        <Label htmlFor="rating-any">Any rating</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="5" id="rating-5" />
                        <Label htmlFor="rating-5">5 stars</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="4" id="rating-4" />
                        <Label htmlFor="rating-4">4 stars & above</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="3" id="rating-3" />
                        <Label htmlFor="rating-3">3 stars & above</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Amenities</h3>
                    <div className="space-y-2">
                      {amenities.slice(0, 6).map((amenity) => (
                        <div key={amenity} className="flex items-center space-x-2">
                          <Checkbox id={`amenity-${amenity}`} />
                          <Label htmlFor={`amenity-${amenity}`}>{amenity}</Label>
                        </div>
                      ))}
                    </div>
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
          {hotels.map((hotel) => (
            <Card
              key={hotel.id}
              className="overflow-hidden h-full flex flex-col border-2 hover:border-emerald-500 transition-colors"
            >
              <div className="relative h-48 w-full">
                <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{hotel.name}</CardTitle>
                  <div className="flex items-center text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm">{hotel.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{hotel.location}</span>
                </div>
                <CardDescription>{hotel.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.slice(0, 3).map((amenity) => (
                    <span
                      key={amenity}
                      className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:text-emerald-300"
                    >
                      {amenity === "Free WiFi" && <Wifi className="h-3 w-3 mr-1" />}
                      {amenity}
                    </span>
                  ))}
                  {hotel.amenities.length > 3 && (
                    <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                      +{hotel.amenities.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-muted-foreground">{hotel.reviews} reviews</div>
                  <div className="font-semibold text-lg">
                    {hotel.price} <span className="text-sm font-normal text-muted-foreground">/ night</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href={`/hotels/${hotel.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
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
