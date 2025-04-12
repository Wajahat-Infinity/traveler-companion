import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowLeft,
  Calendar,
  Check,
  Clock,
  Globe,
  Languages,
  MapPin,
  MessageSquare,
  Phone,
  Star,
  User,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GuideBookingForm } from "./components/guide-booking-form"
import { GuideReviews } from "./components/guide-reviews"
import { GuideTours } from "./components/guide-tours"

// Sample guide data - in a real app, this would come from a database
const getGuideData = (id: string) => {
  const guides = {
    "guide-1": {
      id: "guide-1",
      name: "Ali Hassan",
      location: "Hunza Valley, Gilgit-Baltistan",
      image: "/placeholder.svg?height=400&width=400",
      coverImage: "/placeholder.svg?height=600&width=1200",
      rating: 4.9,
      reviews: 87,
      languages: ["English", "Urdu", "Burushaski"],
      specialties: ["Trekking", "Cultural Tours", "Photography"],
      experience: 8,
      price: "PKR 5,000",
      availability: "Available",
      description:
        "Experienced mountain guide with deep knowledge of Hunza Valley and surrounding areas. Specializes in trekking, cultural tours, and photography expeditions.",
      longDescription:
        "Born and raised in Hunza Valley, I have been guiding travelers for over 8 years, sharing my knowledge of the local culture, history, and natural beauty of the region. I am passionate about sustainable tourism and ensuring that visitors have authentic experiences while respecting local traditions and the environment. My expertise includes trekking to remote villages, photography expeditions to capture the stunning landscapes, and cultural tours to connect with local communities. I speak English, Urdu, and Burushaski fluently, allowing me to bridge cultural gaps and provide a truly immersive experience for my clients.",
      contactInfo: {
        email: "ali.hassan@example.com",
        phone: "+92 345 1234567",
        response: "Usually responds within 24 hours",
      },
      certifications: [
        "Certified Mountain Guide - Pakistan Alpine Club",
        "First Aid and Wilderness Survival - Red Crescent",
        "Sustainable Tourism Practices - WWF Pakistan",
      ],
      tours: [
        {
          id: "tour-1",
          title: "Hunza Valley Cultural Experience",
          duration: "3 days",
          price: "PKR 15,000",
          description:
            "Immerse yourself in the rich culture of Hunza Valley with visits to traditional villages, ancient forts, and local homes.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: "tour-2",
          title: "Rakaposhi Base Camp Trek",
          duration: "5 days",
          price: "PKR 25,000",
          description:
            "Trek to the base camp of the majestic Rakaposhi mountain, enjoying stunning views and camping in beautiful locations.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: "tour-3",
          title: "Photography Tour of Hunza",
          duration: "4 days",
          price: "PKR 20,000",
          description:
            "Capture the breathtaking landscapes, traditional architecture, and daily life in Hunza Valley with expert guidance.",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    "guide-2": {
      id: "guide-2",
      name: "Fatima Zahra",
      location: "Lahore, Punjab",
      image: "/placeholder.svg?height=400&width=400",
      coverImage: "/placeholder.svg?height=600&width=1200",
      rating: 4.8,
      reviews: 62,
      languages: ["English", "Urdu", "Punjabi"],
      specialties: ["Historical Tours", "Food Tours", "Art & Culture"],
      experience: 6,
      price: "PKR 3,500",
      availability: "Available",
      description:
        "History enthusiast and cultural expert specializing in Lahore's rich heritage. Offers immersive tours of historical sites, local cuisine, and art scenes.",
      longDescription:
        "With a degree in History and a passion for Lahore's cultural heritage, I have been guiding visitors through the walled city and beyond for 6 years. My tours focus on bringing history to life through storytelling, connecting the past with the present, and showcasing the vibrant culture of Lahore. Whether you're interested in Mughal architecture, traditional cuisine, or contemporary art, I can create a personalized experience that matches your interests. I believe that understanding a city's culture is the key to truly appreciating it, and I strive to provide insights that go beyond the typical tourist experience.",
      contactInfo: {
        email: "fatima.zahra@example.com",
        phone: "+92 321 9876543",
        response: "Usually responds within 12 hours",
      },
      certifications: [
        "Licensed Tour Guide - Punjab Tourism Department",
        "Cultural Heritage Preservation - UNESCO Pakistan",
        "Food Safety and Hygiene - Punjab Food Authority",
      ],
      tours: [
        {
          id: "tour-4",
          title: "Walled City Heritage Walk",
          duration: "1 day",
          price: "PKR 3,500",
          description:
            "Explore the historic walled city of Lahore, visiting Delhi Gate, Wazir Khan Mosque, Shahi Hammam, and other architectural marvels.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: "tour-5",
          title: "Lahore Food Trail",
          duration: "1 day",
          price: "PKR 4,000",
          description:
            "Sample the best of Lahore's cuisine, from street food to traditional restaurants, with insights into the culinary history of the region.",
          image: "/placeholder.svg?height=300&width=400",
        },
        {
          id: "tour-6",
          title: "Art and Culture Tour",
          duration: "2 days",
          price: "PKR 7,000",
          description:
            "Visit museums, art galleries, and cultural centers to discover Lahore's vibrant contemporary and traditional art scenes.",
          image: "/placeholder.svg?height=300&width=400",
        },
      ],
    },
    // Add more guides as needed
  }

  return guides[id as keyof typeof guides] || null
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const guide = getGuideData(params.id)

  if (!guide) {
    return {
      title: "Guide Not Found",
      description: "The requested guide could not be found.",
    }
  }

  return {
    title: `${guide.name} - Local Guide | Traveler Companion Platform`,
    description: guide.description,
  }
}

export default function GuideProfilePage({ params }: { params: { id: string } }) {
  const guide = getGuideData(params.id)

  if (!guide) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Guide Not Found</h1>
        <p className="mb-8">The guide you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/local-guides">
            <ArrowLeft className="mr-2 h-4 w-4" /> Browse All Guides
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh]">
        <Image src={guide.coverImage || "/placeholder.svg"} alt={guide.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/40 flex items-end">
          <div className="container pb-8 md:pb-12">
            <Link href="/local-guides" className="inline-flex items-center text-white mb-4 hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to guides
            </Link>
          </div>
        </div>
      </div>

      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col md:flex-row gap-6 mb-8">
              <div className="relative h-32 w-32 rounded-full overflow-hidden border-4 border-white shadow-lg -mt-16 z-10">
                <Image src={guide.image || "/placeholder.svg"} alt={guide.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{guide.name}</h1>
                <div className="flex items-center mb-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mr-1" />
                  <span className="text-muted-foreground">{guide.location}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-medium">{guide.rating}</span>
                    <span className="text-muted-foreground ml-1">({guide.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-muted-foreground mr-1" />
                    <span>{guide.experience} years experience</span>
                  </div>
                </div>
              </div>
            </div>

            <Tabs defaultValue="about" className="w-full">
              <TabsList className="w-full justify-start mb-6">
                <TabsTrigger value="about">About</TabsTrigger>
                <TabsTrigger value="tours">Tours & Experiences</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="about" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">About {guide.name}</h2>
                  <p className="text-muted-foreground">{guide.longDescription}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Languages className="h-5 w-5 mr-2 text-emerald-600" />
                        Languages
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {guide.languages.map((language) => (
                          <li key={language} className="flex items-center">
                            <Check className="h-4 w-4 text-emerald-600 mr-2" />
                            {language}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <User className="h-5 w-5 mr-2 text-emerald-600" />
                        Specialties
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {guide.specialties.map((specialty) => (
                          <li key={specialty} className="flex items-center">
                            <Check className="h-4 w-4 text-emerald-600 mr-2" />
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="h-5 w-5 mr-2 text-emerald-600" />
                      Certifications & Credentials
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {guide.certifications.map((certification, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-emerald-600 mr-2" />
                          {certification}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-emerald-600" />
                      Contact Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <span className="text-muted-foreground w-24">Email:</span>
                        <span>{guide.contactInfo.email}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-muted-foreground w-24">Phone:</span>
                        <span>{guide.contactInfo.phone}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-muted-foreground w-24">Response Time:</span>
                        <span>{guide.contactInfo.response}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="tours">
                <h2 className="text-2xl font-bold mb-6">Tours & Experiences</h2>
                <GuideTours tours={guide.tours} />
              </TabsContent>

              <TabsContent value="reviews">
                <h2 className="text-2xl font-bold mb-6">Traveler Reviews</h2>
                <GuideReviews guideName={guide.name} rating={guide.rating} reviewCount={guide.reviews} />
              </TabsContent>
            </Tabs>
          </div>

          <div>
            <div className="sticky top-24">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle>Book This Guide</CardTitle>
                  <CardDescription>
                    Starting from <span className="text-lg font-bold text-emerald-600">{guide.price}</span> per day
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <GuideBookingForm guideName={guide.name} price={guide.price} />
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

              <div className="mt-4 flex gap-2">
                <Button variant="outline" className="flex-1" asChild>
                  <Link href={`/messages?guide=${guide.id}`}>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Message
                  </Link>
                </Button>
                <Button variant="outline" className="flex-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Check Availability
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
