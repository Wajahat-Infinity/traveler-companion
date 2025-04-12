import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, Coffee, MapPin, Star, Utensils, Wifi } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HotelBookingForm } from "./components/hotel-booking-form"
import { HotelGallery } from "./components/hotel-gallery"
import { HotelMap } from "./components/hotel-map"
import { HotelReviews } from "./components/hotel-reviews"
import { HotelRooms } from "./components/hotel-rooms"

// Sample hotel data - in a real app, this would come from a database
const getHotelData = (id: string) => {
  const hotels = {
    "hotel-1": {
      id: "hotel-1",
      name: "Serena Hotel",
      location: "Islamabad",
      address: "Khayaban-e-Suhrawardy, G-5, Islamabad",
      image: "/placeholder.svg?height=600&width=1200",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      rating: 4.8,
      reviews: 245,
      price: "PKR 25,000",
      description: "Luxury hotel in the heart of Islamabad with stunning views of the Margalla Hills.",
      longDescription:
        "Nestled in the heart of Pakistan's capital city, Serena Hotel Islamabad offers a luxurious retreat with stunning views of the Margalla Hills. This 5-star hotel combines traditional Pakistani architecture with modern amenities to create an elegant and comfortable atmosphere for both business and leisure travelers. The hotel features beautifully landscaped gardens, a serene swimming pool, and multiple dining options serving local and international cuisine. With its central location, guests can easily access key attractions, government offices, and diplomatic enclaves.",
      amenities: [
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
        "Conference Facilities",
        "Concierge Service",
      ],
      rooms: [
        {
          id: "room-1",
          name: "Deluxe Room",
          description: "Spacious room with a king-size bed and city views.",
          price: "PKR 25,000",
          capacity: "2 Adults",
          amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar"],
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: "room-2",
          name: "Executive Suite",
          description: "Luxurious suite with separate living area and mountain views.",
          price: "PKR 40,000",
          capacity: "2 Adults, 2 Children",
          amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Jacuzzi"],
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: "room-3",
          name: "Presidential Suite",
          description: "Our most luxurious accommodation with panoramic views and butler service.",
          price: "PKR 75,000",
          capacity: "4 Adults",
          amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Jacuzzi", "Butler Service"],
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
      dining: [
        {
          name: "Zamana Restaurant",
          cuisine: "International",
          description: "All-day dining restaurant offering international cuisine with a Pakistani twist.",
        },
        {
          name: "Dawat Restaurant",
          cuisine: "Pakistani",
          description: "Authentic Pakistani cuisine featuring regional specialties and traditional recipes.",
        },
      ],
      policies: {
        checkIn: "2:00 PM",
        checkOut: "12:00 PM",
        cancellation: "Free cancellation up to 24 hours before check-in.",
        children: "Children of all ages are welcome.",
        pets: "Pets are not allowed.",
      },
    },
    "hotel-2": {
      id: "hotel-2",
      name: "Pearl Continental",
      location: "Lahore",
      address: "Shahrah-e-Quaid-e-Azam, Lahore",
      image: "/placeholder.svg?height=600&width=1200",
      gallery: [
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
        "/placeholder.svg?height=400&width=600",
      ],
      rating: 4.7,
      reviews: 189,
      price: "PKR 22,000",
      description: "Elegant hotel in Lahore offering world-class amenities and exceptional service.",
      longDescription:
        "Pearl Continental Lahore stands as an iconic landmark in the cultural heart of Pakistan. This luxury hotel combines traditional hospitality with modern comforts, offering guests a truly memorable stay. Located in the center of Lahore, the hotel provides easy access to historical sites, shopping districts, and business centers. The property features elegantly appointed rooms and suites, multiple dining options serving local and international cuisine, and comprehensive facilities for business and leisure travelers. With its warm service and attention to detail, Pearl Continental Lahore has established itself as a premier destination for discerning travelers.",
      amenities: [
        "Free WiFi",
        "Swimming Pool",
        "Restaurant",
        "Business Center",
        "Fitness Center",
        "Spa",
        "Room Service",
        "Airport Shuttle",
        "Free Parking",
        "Air Conditioning",
      ],
      rooms: [
        {
          id: "room-4",
          name: "Deluxe Room",
          description: "Comfortable room with modern amenities and city views.",
          price: "PKR 22,000",
          capacity: "2 Adults",
          amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar"],
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: "room-5",
          name: "Executive Room",
          description: "Spacious room with executive lounge access and premium amenities.",
          price: "PKR 35,000",
          capacity: "2 Adults",
          amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Lounge Access"],
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: "room-6",
          name: "Suite",
          description: "Luxurious suite with separate living area and panoramic city views.",
          price: "PKR 55,000",
          capacity: "2 Adults, 2 Children",
          amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Jacuzzi"],
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
      dining: [
        {
          name: "Marco Polo Restaurant",
          cuisine: "International",
          description: "Fine dining restaurant offering a diverse menu of international favorites.",
        },
        {
          name: "Dumpukht",
          cuisine: "Pakistani",
          description: "Authentic Pakistani cuisine prepared using traditional cooking methods.",
        },
      ],
      policies: {
        checkIn: "2:00 PM",
        checkOut: "12:00 PM",
        cancellation: "Free cancellation up to 24 hours before check-in.",
        children: "Children of all ages are welcome.",
        pets: "Pets are not allowed.",
      },
    },
    // Add more hotels as needed
  }

  return hotels[id as keyof typeof hotels] || null
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const hotel = getHotelData(params.id)

  if (!hotel) {
    return {
      title: "Hotel Not Found",
      description: "The requested hotel could not be found.",
    }
  }

  return {
    title: `${hotel.name} - ${hotel.location} | Traveler Companion Platform`,
    description: hotel.description,
  }
}

export default function HotelDetailPage({ params }: { params: { id: string } }) {
  const hotel = getHotelData(params.id)

  if (!hotel) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Hotel Not Found</h1>
        <p className="mb-8">The hotel you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/hotels">
            <ArrowLeft className="mr-2 h-4 w-4" /> Browse All Hotels
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] lg:h-[70vh]">
        <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container pb-8 md:pb-12">
            <Link href="/hotels" className="inline-flex items-center text-white mb-4 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to hotels
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{hotel.name}</h1>
            <div className="flex items-center text-white gap-2">
              <div className="flex items-center">
                <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="font-medium">{hotel.rating}</span>
                <span className="text-white/80 ml-1">({hotel.reviews} reviews)</span>
              </div>
              <span className="text-white/60">•</span>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{hotel.location}</span>
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
                <TabsTrigger value="rooms">Rooms</TabsTrigger>
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="gallery">Gallery</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About {hotel.name}</h2>
                  <p className="text-muted-foreground">{hotel.longDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Hotel Policies</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Check-in</span>
                        <span className="font-medium">{hotel.policies.checkIn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Check-out</span>
                        <span className="font-medium">{hotel.policies.checkOut}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Cancellation</span>
                        <span className="font-medium">{hotel.policies.cancellation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Children</span>
                        <span className="font-medium">{hotel.policies.children}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Pets</span>
                        <span className="font-medium">{hotel.policies.pets}</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Dining Options</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {hotel.dining.map((restaurant, index) => (
                        <div key={index} className="space-y-1">
                          <div className="flex items-center">
                            <Utensils className="h-4 w-4 text-emerald-600 mr-2" />
                            <h3 className="font-semibold">{restaurant.name}</h3>
                          </div>
                          <p className="text-sm text-muted-foreground ml-6">
                            <span className="font-medium">{restaurant.cuisine}</span> - {restaurant.description}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Popular Amenities</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {hotel.amenities.slice(0, 6).map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        {amenity === "Free WiFi" && <Wifi className="h-4 w-4 text-emerald-600 mr-2" />}
                        {amenity === "Restaurant" && <Utensils className="h-4 w-4 text-emerald-600 mr-2" />}
                        {amenity === "Coffee" && <Coffee className="h-4 w-4 text-emerald-600 mr-2" />}
                        {!["Free WiFi", "Restaurant", "Coffee"].includes(amenity) && (
                          <Check className="h-4 w-4 text-emerald-600 mr-2" />
                        )}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="rooms">
                <h2 className="text-2xl font-bold mb-6">Available Rooms</h2>
                <HotelRooms rooms={hotel.rooms} />
              </TabsContent>

              <TabsContent value="amenities">
                <h2 className="text-2xl font-bold mb-6">Hotel Amenities</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {hotel.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center p-4 border rounded-md">
                      {amenity === "Free WiFi" && <Wifi className="h-5 w-5 text-emerald-600 mr-3" />}
                      {amenity === "Restaurant" && <Utensils className="h-5 w-5 text-emerald-600 mr-3" />}
                      {amenity === "Coffee" && <Coffee className="h-5 w-5 text-emerald-600 mr-3" />}
                      {!["Free WiFi", "Restaurant", "Coffee"].includes(amenity) && (
                        <Check className="h-5 w-5 text-emerald-600 mr-3" />
                      )}
                      <span className="font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="gallery">
                <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
                <HotelGallery images={hotel.gallery} />
              </TabsContent>

              <TabsContent value="location">
                <h2 className="text-2xl font-bold mb-6">Location</h2>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    <MapPin className="h-4 w-4 inline mr-2" />
                    {hotel.address}
                  </p>
                  <HotelMap location={hotel.location} address={hotel.address} />
                </div>
              </TabsContent>

              <TabsContent value="reviews">
                <h2 className="text-2xl font-bold mb-6">Guest Reviews</h2>
                <HotelReviews hotelName={hotel.name} rating={hotel.rating} reviewCount={hotel.reviews} />
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <div className="sticky top-24">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Book Your Stay</CardTitle>
                  <CardDescription>
                    Starting from <span className="text-lg font-bold text-emerald-600">{hotel.price}</span> per night
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <HotelBookingForm hotelName={hotel.name} price={hotel.price} />
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-2 border-t pt-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Free cancellation</span> up to 24 hours before check-in
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">No payment needed today</span> - pay at the property
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
