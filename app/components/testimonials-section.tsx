"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    location: "Karachi, Pakistan",
    text: "The traveler pairing feature connected me with an amazing travel buddy for my trip to Hunza Valley. We had similar interests and got along perfectly!",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    name: "Fatima Ali",
    location: "Lahore, Pakistan",
    text: "As a local guide in Lahore, this platform has helped me connect with travelers who truly appreciate authentic experiences. The booking system is seamless.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    name: "Zainab Malik",
    location: "Islamabad, Pakistan",
    text: "The AI recommendations were spot on! I discovered hidden gems in Swat Valley that I would have never found on my own. Truly a game-changer for travel planning.",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Travelers Say</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from travelers and local guides who have explored Pakistan with our platform
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="border-2 border-emerald-100 dark:border-emerald-900/30 shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-12 w-12 text-emerald-200 dark:text-emerald-800 mb-4" />
                  <p className="text-xl italic mb-8">{testimonials[current].text}</p>
                  <div className="flex items-center">
                    <div className="relative h-14 w-14 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonials[current].avatar || "/placeholder.svg"}
                        alt={testimonials[current].name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonials[current].name}</h4>
                      <p className="text-muted-foreground">{testimonials[current].location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === current ? "bg-emerald-600" : "bg-emerald-200 dark:bg-emerald-800/30"
                }`}
                onClick={() => {
                  setAutoplay(false)
                  setCurrent(index)
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full"
            onClick={prev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full"
            onClick={next}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
