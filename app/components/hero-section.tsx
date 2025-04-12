"use client"

import { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

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
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const popularDestinations = [
    { name: "Hunza Valley", href: "/destinations/hunza-valley" },
    { name: "Lahore", href: "/destinations/lahore" },
    { name: "Swat", href: "/destinations/swat" },
    { name: "Islamabad", href: "/destinations/islamabad" },
  ]

  // Using the slide images for the hero section background
  const slideImages = ["/images/slides/s1.jpg", "/images/slides/s2.jpg", "/images/slides/s3.jpg"]

  return (
    <section className="relative bg-gradient-to-b from-emerald-50 to-background dark:from-emerald-950/20 dark:to-background pt-20 pb-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={slideImages[0] || "/placeholder.svg"}
            alt="Pakistan Landscape"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" variants={itemVariants}>
            Discover the beauty of <span className="text-emerald-600 dark:text-emerald-400">Pakistan</span>
          </motion.h1>
          <motion.p className="mt-6 text-xl text-muted-foreground max-w-2xl" variants={itemVariants}>
            Connect with verified local guides, find travel companions, and get personalized recommendations for your
            next adventure in Pakistan.
          </motion.p>

          <motion.div className="mt-10 w-full max-w-md" variants={itemVariants}>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Where in Pakistan do you want to go?"
                className="pl-10 h-12 rounded-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button
                className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full h-10 bg-emerald-600 hover:bg-emerald-700"
                onClick={() => {
                  if (searchQuery) {
                    // Handle search
                    console.log("Searching for:", searchQuery)
                  }
                }}
              >
                Search
              </Button>
            </div>
          </motion.div>

          <motion.div className="mt-8 flex flex-wrap gap-4 justify-center" variants={itemVariants}>
            {popularDestinations.map((destination) => (
              <Button key={destination.name} variant="outline" asChild>
                <Link href={destination.href}>{destination.name}</Link>
              </Button>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-emerald-200/30 dark:bg-emerald-900/20"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        />
        <motion.div
          className="absolute top-40 -left-20 w-60 h-60 rounded-full bg-emerald-100/40 dark:bg-emerald-800/10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        />
      </div>
    </section>
  )
}
