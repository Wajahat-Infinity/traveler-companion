"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Tour {
  id: string
  title: string
  duration: string
  price: string
  description: string
  image: string
}

interface GuideToursProps {
  tours: Tour[]
}

export function GuideTours({ tours }: GuideToursProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {tours.map((tour) => (
        <Card key={tour.id} className="overflow-hidden border-2 hover:border-emerald-500 transition-colors">
          <div className="relative h-48 w-full">
            <Image src={tour.image || "/placeholder.svg"} alt={tour.title} fill className="object-cover" />
          </div>
          <CardHeader>
            <CardTitle>{tour.title}</CardTitle>
            <CardDescription className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {tour.duration}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{tour.description}</p>
            <p className="font-semibold text-lg">{tour.price} per person</p>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-emerald-600 hover:bg-emerald-700" asChild>
              <Link href={`/tours/${tour.id}`}>
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
