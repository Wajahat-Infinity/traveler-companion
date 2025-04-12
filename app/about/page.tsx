"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Globe, Heart, Mail, MapPin, MessageSquare, Phone, Users } from "lucide-react"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

// Sample team members data
const teamMembers = [
  {
    name: "Ahmed Khan",
    role: "Founder & CEO",
    image: "/images/guides/g5.jpeg",
    bio: "Travel enthusiast with over 15 years of experience exploring Pakistan. Founded Traveler Companion Platform to help others discover the beauty of Pakistan.",
  },
  {
    name: "Fatima Ali",
    role: "Chief Experience Officer",
    image: "/images/guides/g2.jpeg",
    bio: "Former tour guide with extensive knowledge of Pakistani destinations. Passionate about creating authentic and memorable travel experiences.",
  },
  {
    name: "Usman Ahmed",
    role: "Head of Technology",
    image: "/images/guides/g3.jpeg",
    bio: "Tech expert with a love for travel. Developed the matching algorithm that connects travelers with compatible companions and guides.",
  },
  {
    name: "Ayesha Malik",
    role: "Community Manager",
    image: "/images/guides/g4.jpeg",
    bio: "Cultural anthropologist and travel blogger. Manages our community of travelers, guides, and local experts across Pakistan.",
  },
]

// Sample values data
const values = [
  {
    title: "Authentic Experiences",
    description:
      "We believe in connecting travelers with genuine local experiences that showcase the true culture and beauty of Pakistan.",
    icon: Globe,
  },
  {
    title: "Community Connection",
    description:
      "Building meaningful connections between travelers, local guides, and communities is at the heart of what we do.",
    icon: Users,
  },
  {
    title: "Responsible Tourism",
    description:
      "We promote sustainable and responsible travel practices that respect local cultures and protect the environment.",
    icon: Heart,
  },
]

// Sample milestones data
const milestones = [
  {
    year: 2020,
    title: "Company Founded",
    description:
      "Traveler Companion Platform was established with a mission to transform travel experiences in Pakistan.",
  },
  {
    year: 2021,
    title: "Launch of Guide Network",
    description: "Built a network of 100+ verified local guides across major destinations in Pakistan.",
  },
  {
    year: 2022,
    title: "Traveler Matching System",
    description: "Introduced our innovative AI-powered system for matching compatible travel companions.",
  },
  {
    year: 2023,
    title: "Mobile App Launch",
    description: "Released our mobile application for iOS and Android, making it easier to connect on the go.",
  },
  {
    year: 2024,
    title: "10,000 Successful Matches",
    description: "Celebrated 10,000 successful traveler pairings and guide connections across Pakistan.",
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

export default function AboutPage() {
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
    <div className="min-h-screen">
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
              alt={`About us slide ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/40 flex items-center">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              About Traveler Companion Platform
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Connecting travelers with local guides and companions for authentic Pakistani experiences
            </p>
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

      <div className="container py-12">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">Our Mission</h2>
          <p className="text-lg text-muted-foreground text-center">
            At Traveler Companion Platform, we're on a mission to transform how people experience Pakistan. We connect
            travelers with local guides and like-minded companions to create authentic, memorable, and safe travel
            experiences across the country's diverse landscapes and cultures.
          </p>
        </div>

        <Tabs defaultValue="about" className="w-full mb-16">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="about">Our Story</TabsTrigger>
              <TabsTrigger value="values">Our Values</TabsTrigger>
              <TabsTrigger value="team">Our Team</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="about" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">How It All Started</h3>
                <p className="text-muted-foreground mb-4">
                  Traveler Companion Platform was born from a simple observation: Pakistan's incredible landscapes, rich
                  culture, and warm hospitality remained largely undiscovered by many travelers due to lack of reliable
                  information and connections.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our founder, Ahmed Khan, experienced this firsthand during his extensive travels across Pakistan. He
                  often found that the most memorable experiences came from connections with local guides and fellow
                  travelers who shared his interests.
                </p>
                <p className="text-muted-foreground">
                  In 2020, Ahmed assembled a team of travel enthusiasts and tech experts to create a platform that would
                  bridge this gap - connecting travelers with verified local guides and compatible travel companions to
                  enhance their Pakistani adventure.
                </p>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image src="/images/destinations/d2.jpg" alt="Our story" fill className="object-cover" />
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-2xl font-bold mb-6 text-center">Our Journey</h3>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col items-center">
                      <div className="bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 h-10 w-10 rounded-full flex items-center justify-center font-bold">
                        {milestone.year}
                      </div>
                      {index < milestones.length - 1 && (
                        <div className="w-0.5 h-full bg-emerald-100 dark:bg-emerald-900/30 mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h4 className="text-lg font-semibold">{milestone.title}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="values">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">What We Stand For</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our values guide everything we do at Traveler Companion Platform, from how we build our technology to
                how we engage with our community.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-2 hover:border-emerald-500 transition-colors h-full">
                    <CardHeader>
                      <div className="bg-emerald-100 dark:bg-emerald-900/30 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                        <value.icon className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                      </div>
                      <CardTitle>{value.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image src="/images/destinations/d1.jpg" alt="Our commitment" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Our Commitment</h3>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Safety First</h4>
                      <p className="text-muted-foreground">
                        We verify all guides and implement safety measures for traveler matching.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Supporting Local Communities</h4>
                      <p className="text-muted-foreground">
                        We ensure that tourism benefits local communities across Pakistan.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Environmental Responsibility</h4>
                      <p className="text-muted-foreground">
                        We promote sustainable travel practices that protect Pakistan's natural beauty.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Cultural Respect</h4>
                      <p className="text-muted-foreground">
                        We educate travelers about local customs and traditions to foster respectful interactions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="team">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Meet Our Team</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're a diverse team of travel enthusiasts, technology experts, and cultural ambassadors passionate
                about showcasing the best of Pakistan.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden border-2 hover:border-emerald-500 transition-colors h-full">
                    <div className="relative h-64 w-full">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle>{member.name}</CardTitle>
                      <CardDescription>{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline" className="gap-2">
                <Users className="h-4 w-4" />
                Join Our Team
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <p className="text-muted-foreground mb-8">
              Have questions, feedback, or want to learn more about our platform? We'd love to hear from you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 w-10 h-10 flex items-center justify-center rounded-full">
                  <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Our Location</h4>
                  <p className="text-muted-foreground">Blue Area, Islamabad, Pakistan</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 w-10 h-10 flex items-center justify-center rounded-full">
                  <Mail className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Email Us</h4>
                  <p className="text-muted-foreground">info@travelercompanion.pk</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 w-10 h-10 flex items-center justify-center rounded-full">
                  <Phone className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Call Us</h4>
                  <p className="text-muted-foreground">+92 51 1234567</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-emerald-100 dark:bg-emerald-900/30 w-10 h-10 flex items-center justify-center rounded-full">
                  <MessageSquare className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-semibold">Live Chat</h4>
                  <p className="text-muted-foreground">Available 9 AM - 6 PM (PKT)</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input id="name" placeholder="Enter your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Enter message subject" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here" rows={5} />
              </div>

              <Button type="submit" className="bg-emerald-600 hover:bg-emerald-700">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Adventure?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of travelers who have discovered the beauty of Pakistan with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <Link href="/auth/signup">Sign up as traveler</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/vendor/signup">Join as guide</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
