import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Filter, MapPin, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Slider } from "@/components/ui/slider"

export const metadata: Metadata = {
  title: "Local Guides | Traveler Companion Platform",
  description: "Find and book experienced local guides in Pakistan for authentic travel experiences.",
}

// Sample guide data
const guides = [
  {
    id: "guide-1",
    name: "Ali Hassan",
    location: "Hunza Valley, Gilgit-Baltistan",
    image: "/images/guides/g1.jpeg",
    rating: 4.9,
    reviews: 87,
    languages: ["English", "Urdu", "Burushaski"],
    specialties: ["Trekking", "Cultural Tours", "Photography"],
    experience: 8,
    price: "PKR 5,000",
    availability: "Available",
    description:
      "Experienced mountain guide with deep knowledge of Hunza Valley and surrounding areas. Specializes in trekking, cultural tours, and photography expeditions.",
  },
  {
    id: "guide-2",
    name: "Fatima Zahra",
    location: "Lahore, Punjab",
    image: "/images/guides/g2.jpeg",
    rating: 4.8,
    reviews: 62,
    languages: ["English", "Urdu", "Punjabi"],
    specialties: ["Historical Tours", "Food Tours", "Art & Culture"],
    experience: 6,
    price: "PKR 3,500",
    availability: "Available",
    description:
      "History enthusiast and cultural expert specializing in Lahore's rich heritage. Offers immersive tours of historical sites, local cuisine, and art scenes.",
  },
  {
    id: "guide-3",
    name: "Imran Khan",
    location: "Swat Valley, Khyber Pakhtunkhwa",
    image: "/images/guides/g3.jpeg",
    rating: 4.7,
    reviews: 45,
    languages: ["English", "Urdu", "Pashto"],
    specialties: ["Adventure Tours", "Nature Walks", "Wildlife"],
    experience: 10,
    price: "PKR 4,500",
    availability: "Available",
    description:
      "Adventure guide with extensive knowledge of Swat Valley's natural beauty. Expert in wildlife spotting, nature walks, and adventure activities.",
  },
  {
    id: "guide-4",
    name: "Ayesha Malik",
    location: "Islamabad, Capital Territory",
    image: "/images/guides/g4.jpeg",
    rating: 4.9,
    reviews: 73,
    languages: ["English", "Urdu", "French"],
    specialties: ["City Tours", "Day Trips", "Custom Itineraries"],
    experience: 5,
    price: "PKR 4,000",
    availability: "Available",
    description:
      "Professional guide offering personalized tours of Islamabad and surrounding areas. Specializes in creating custom itineraries tailored to your interests.",
  },
  {
    id: "guide-5",
    name: "Usman Ali",
    location: "Karachi, Sindh",
    image: "/images/guides/g5.jpeg",
    rating: 4.6,
    reviews: 58,
    languages: ["English", "Urdu", "Sindhi"],
    specialties: ["Beach Tours", "City Exploration", "Food Tours"],
    experience: 7,
    price: "PKR 3,800",
    availability: "Available",
    description:
      "Karachi native with extensive knowledge of the city's hidden gems. Offers tours of beaches, historical sites, and the best local eateries.",
  },
  {
    id: "guide-6",
    name: "Zainab Khan",
    location: "Skardu, Gilgit-Baltistan",
    image: "/images/guides/g1.jpeg",
    rating: 4.9,
    reviews: 41,
    languages: ["English", "Urdu", "Balti"],
    specialties: ["Mountain Expeditions", "Cultural Tours", "Photography"],
    experience: 9,
    price: "PKR 5,500",
    availability: "Available",
    description:
      "Mountain guide with expertise in Skardu and the Karakoram range. Offers expeditions, cultural tours, and photography trips in one of Pakistan's most beautiful regions.",
  },
]

// Sample locations for filter
const locations = [
  "Gilgit-Baltistan",
  "Punjab",
  "Khyber Pakhtunkhwa",
  "Sindh",
  "Balochistan",
  "Islamabad Capital Territory",
  "Azad Kashmir",
]

// Sample specialties for filter
const specialties = [
  "Trekking",
  "Cultural Tours",
  "Historical Tours",
  "Food Tours",
  "Photography",
  "Adventure Tours",
  "Wildlife",
  "City Tours",
  "Mountain Expeditions",
  "Beach Tours",
]

// Sample languages for filter
const languages = [
  "English",
  "Urdu",
  "Punjabi",
  "Sindhi",
  "Pashto",
  "Balochi",
  "Burushaski",
  "Balti",
  "Shina",
  "French",
  "German",
  "Chinese",
]

export default function LocalGuidesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/images/destinations/d2.jpg"
          alt="Local Guides in Pakistan"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Local Guides in Pakistan</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Connect with experienced local guides for authentic and immersive travel experiences
            </p>
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search guides by name, location, or specialty"
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
          <h2 className="text-2xl font-bold">{guides.length} Local Guides Available</h2>

          <div className="flex items-center gap-4">
            <Select defaultValue="recommended">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recommended">Recommended</SelectItem>
                <SelectItem value="rating-high">Highest Rating</SelectItem>
                <SelectItem value="price-low">Lowest Price</SelectItem>
                <SelectItem value="price-high">Highest Price</SelectItem>
                <SelectItem value="experience">Most Experienced</SelectItem>
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
                  <SheetTitle>Filter Guides</SheetTitle>
                  <SheetDescription>Refine your search to find the perfect guide</SheetDescription>
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
                    <h3 className="text-sm font-medium">Languages</h3>
                    <div className="space-y-2">
                      {languages.slice(0, 6).map((language) => (
                        <div key={language} className="flex items-center space-x-2">
                          <Checkbox id={`language-${language}`} />
                          <Label htmlFor={`language-${language}`}>{language}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Price Range (PKR per day)</h3>
                    <Slider defaultValue={[0, 10000]} max={10000} step={500} className="py-4" />
                    <div className="flex items-center justify-between">
                      <span>PKR 0</span>
                      <span>PKR 10,000+</span>
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
          {guides.map((guide) => (
            <Card
              key={guide.id}
              className="overflow-hidden h-full flex flex-col border-2 hover:border-emerald-500 transition-colors"
            >
              <div className="relative h-64 w-full">
                <Image src={guide.image || "/placeholder.svg"} alt={guide.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{guide.name}</CardTitle>
                  <div className="flex items-center text-amber-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="ml-1 text-sm">{guide.rating}</span>
                  </div>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="h-3 w-3 mr-1" />
                  <span>{guide.location}</span>
                </div>
                <CardDescription className="mt-2">{guide.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="flex flex-wrap gap-2">
                  {guide.specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="inline-flex items-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 px-2.5 py-0.5 text-xs font-medium text-emerald-800 dark:text-emerald-300"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Languages:</span>
                    <span>{guide.languages.join(", ")}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Experience:</span>
                    <span>{guide.experience} years</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Price:</span>
                    <span className="font-semibold">{guide.price} / day</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
                  <Link href={`/local-guides/${guide.id}`}>
                    View Profile <ArrowRight className="ml-2 h-4 w-4" />
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
