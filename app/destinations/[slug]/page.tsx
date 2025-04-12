import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, Clock, MapPin, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookingForm } from "./components/booking-form"
import { DestinationGallery } from "./components/destination-gallery"
import { DestinationMap } from "./components/destination-map"
import { DestinationReviews } from "./components/destination-reviews"

// This would typically come from a database or API
const getDestinationData = (slug: string) => {
  const destinations = {
    "hunza-valley": {
      name: "Hunza Valley",
      description:
        "Hunza Valley is a mountainous valley in the Gilgit-Baltistan region of Pakistan. The valley is situated at an elevation of 2,438 meters and is surrounded by several high mountain peaks, including Rakaposhi, Ultar Sar, and Ladyfinger Peak.",
      longDescription:
        "Hunza Valley is renowned for its spectacular scenery, with terraced fields, fruit orchards, and traditional villages set against a backdrop of snow-capped mountains. The valley is home to the ancient Baltit Fort, a UNESCO World Heritage site, and is known for the longevity of its inhabitants, who are said to live well into their 90s and beyond. The valley is also famous for its apricots, which are considered among the best in the world.",
      image: "/placeholder.svg?height=600&width=1200",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      rating: 4.9,
      reviews: 124,
      price: "PKR 15,000",
      duration: "5 days",
      location: "Gilgit-Baltistan, Pakistan",
      groupSize: "2-10 people",
      includes: ["Accommodation", "Transportation", "Meals", "Guide", "Entrance fees"],
      excludes: ["Flights", "Personal expenses", "Travel insurance"],
      highlights: [
        "Visit the historic Baltit Fort",
        "Explore Attabad Lake",
        "Trek to Eagle's Nest viewpoint",
        "Experience local Hunza culture",
        "Taste fresh Hunza apricots",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival in Hunza",
          description:
            "Arrive in Hunza and check into your accommodation. Enjoy a welcome dinner with your guide and fellow travelers.",
        },
        {
          day: 2,
          title: "Baltit Fort & Karimabad",
          description:
            "Visit the historic Baltit Fort and explore the charming town of Karimabad with its local markets and traditional architecture.",
        },
        {
          day: 3,
          title: "Attabad Lake",
          description:
            "Spend the day at the stunning Attabad Lake, where you can enjoy boating and take in the breathtaking scenery.",
        },
        {
          day: 4,
          title: "Eagle's Nest & Duikar",
          description:
            "Trek to Eagle's Nest viewpoint for panoramic views of the Hunza Valley and surrounding mountains. Visit the village of Duikar.",
        },
        {
          day: 5,
          title: "Departure",
          description: "After breakfast, depart from Hunza with memories to last a lifetime.",
        },
      ],
      guides: [
        {
          id: 1,
          name: "Ali Hassan",
          image: "/placeholder.svg?height=100&width=100",
          rating: 4.9,
          reviews: 87,
          languages: ["English", "Urdu", "Burushaski"],
        },
        {
          id: 2,
          name: "Fatima Zahra",
          image: "/placeholder.svg?height=100&width=100",
          rating: 4.8,
          reviews: 62,
          languages: ["English", "Urdu", "Shina"],
        },
      ],
    },
    lahore: {
      name: "Lahore",
      description:
        "Lahore is the cultural heart of Pakistan, known for its rich history, vibrant arts scene, and delicious cuisine.",
      longDescription:
        "Lahore, the second-largest city in Pakistan, is a cultural and historical hub with a rich heritage dating back over a millennium. Known as the 'City of Gardens' due to its Mughal-era gardens, Lahore boasts impressive architectural marvels including the Lahore Fort, Badshahi Mosque, and Shalimar Gardens. The walled city of Lahore, with its narrow streets, bustling bazaars, and historic havelis, offers a glimpse into the past. The city is also famous for its food culture, with a wide variety of street food and traditional dishes that attract food lovers from around the world.",
      image: "/placeholder.svg?height=600&width=1200",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      rating: 4.8,
      reviews: 156,
      price: "PKR 8,000",
      duration: "3 days",
      location: "Punjab, Pakistan",
      groupSize: "2-12 people",
      includes: ["Accommodation", "Transportation", "Guide", "Entrance fees"],
      excludes: ["Meals", "Personal expenses", "Travel insurance"],
      highlights: [
        "Explore the historic Lahore Fort",
        "Visit the majestic Badshahi Mosque",
        "Wander through the Walled City",
        "Experience the Food Street",
        "Shop at Anarkali Bazaar",
      ],
      itinerary: [
        {
          day: 1,
          title: "Arrival & Walled City",
          description:
            "Arrive in Lahore and check into your accommodation. Explore the Walled City and visit Delhi Gate, Wazir Khan Mosque, and Shahi Hammam.",
        },
        {
          day: 2,
          title: "Lahore Fort & Badshahi Mosque",
          description:
            "Visit the UNESCO World Heritage sites of Lahore Fort and Badshahi Mosque. Explore Hazuri Bagh and Alamgiri Gate.",
        },
        {
          day: 3,
          title: "Gardens & Museums",
          description:
            "Visit Shalimar Gardens, Lahore Museum, and the Lahore Gallery. Enjoy dinner at Food Street before departure.",
        },
      ],
      guides: [
        {
          id: 3,
          name: "Usman Ali",
          image: "/placeholder.svg?height=100&width=100",
          rating: 4.9,
          reviews: 112,
          languages: ["English", "Urdu", "Punjabi"],
        },
        {
          id: 4,
          name: "Ayesha Khan",
          image: "/placeholder.svg?height=100&width=100",
          rating: 4.7,
          reviews: 78,
          languages: ["English", "Urdu", "Punjabi"],
        },
      ],
    },
    // Add more destinations as needed
  }

  return destinations[slug as keyof typeof destinations] || null
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const destination = getDestinationData(params.slug)

  if (!destination) {
    return {
      title: "Destination Not Found",
      description: "The requested destination could not be found.",
    }
  }

  return {
    title: `${destination.name} | Traveler Companion Platform`,
    description: destination.description,
  }
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const destination = getDestinationData(params.slug)

  if (!destination) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Destination Not Found</h1>
        <p className="mb-8">The destination you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/destinations">
            <ArrowLeft className="mr-2 h-4 w-4" /> Browse All Destinations
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image
          src={destination.image || "/placeholder.svg"}
          alt={destination.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container pb-8 md:pb-12">
            <Link href="/destinations" className="inline-flex items-center text-white mb-4 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to destinations
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{destination.name}</h1>
            <div className="flex items-center text-white gap-2">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-medium">{destination.rating}</span>
                <span className="text-white/80 ml-1">({destination.reviews} reviews)</span>
              </div>
              <span className="text-white/60">•</span>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{destination.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="map">Map</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About {destination.name}</h2>
                  <p className="text-muted-foreground">{destination.longDescription}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Highlights</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {destination.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
                        Duration
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">{destination.duration}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center">
                        <Users className="mr-2 h-4 w-4 text-muted-foreground" />
                        Group Size
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">{destination.groupSize}</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
                        Availability
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-lg font-semibold">Year-round</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-3">What's Included</h3>
                    <ul className="space-y-2">
                      {destination.includes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-emerald-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-3">What's Not Included</h3>
                    <ul className="space-y-2">
                      {destination.excludes.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 mt-1 h-2 w-2 rounded-full bg-red-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Meet Your Guides</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {destination.guides.map((guide) => (
                      <Card key={guide.id}>
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="relative h-16 w-16 rounded-full overflow-hidden">
                              <Image
                                src={guide.image || "/placeholder.svg"}
                                alt={guide.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <h4 className="font-semibold">{guide.name}</h4>
                              <div className="flex items-center text-sm">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                                <span>{guide.rating}</span>
                                <span className="text-muted-foreground ml-1">({guide.reviews} reviews)</span>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">Speaks: {guide.languages.join(", ")}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="itinerary">
                <h2 className="text-2xl font-bold mb-6">Tour Itinerary</h2>
                <div className="space-y-6">
                  {destination.itinerary.map((day) => (
                    <div key={day.day} className="border-l-2 border-emerald-600 pl-4 pb-6">
                      <h3 className="text-xl font-bold">
                        Day {day.day}: {day.title}
                      </h3>
                      <p className="text-muted-foreground mt-2">{day.description}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="gallery">
                <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
                <DestinationGallery images={destination.gallery} />
              </TabsContent>

              <TabsContent value="map">
                <h2 className="text-2xl font-bold mb-6">Location</h2>
                <DestinationMap location={destination.location} />
              </TabsContent>

              <TabsContent value="reviews">
                <h2 className="text-2xl font-bold mb-6">Traveler Reviews</h2>
                <DestinationReviews
                  destinationName={destination.name}
                  rating={destination.rating}
                  reviewCount={destination.reviews}
                />
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <div className="sticky top-24">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Book This Tour</CardTitle>
                  <CardDescription>
                    Starting from <span className="text-lg font-bold text-emerald-600">{destination.price}</span> per
                    person
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BookingForm destinationName={destination.name} price={destination.price} />
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Free cancellation</span> up to 7 days before the experience
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Instant confirmation</span> upon booking
                  </p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
