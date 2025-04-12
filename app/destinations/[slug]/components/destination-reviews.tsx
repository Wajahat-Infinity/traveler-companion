"use client"

import { useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

// Sample review data
const sampleReviews = [
  {
    id: 1,
    name: "Ahmed Khan",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "March 15, 2025",
    comment:
      "Amazing experience! The guide was knowledgeable and friendly. The views were breathtaking and the cultural experiences were authentic. Highly recommend this tour to anyone visiting Pakistan.",
  },
  {
    id: 2,
    name: "Fatima Ali",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    date: "February 28, 2025",
    comment:
      "Great tour overall. The accommodations were comfortable and the food was delicious. The only reason I'm not giving 5 stars is because the weather wasn't ideal, but that's not the tour's fault.",
  },
  {
    id: 3,
    name: "Zainab Malik",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 5,
    date: "January 10, 2025",
    comment:
      "One of the best travel experiences I've had. The local guide shared so many interesting stories and took us to hidden spots that aren't in the typical tourist itinerary. The landscapes were stunning!",
  },
  {
    id: 4,
    name: "Usman Ali",
    avatar: "/placeholder.svg?height=100&width=100",
    rating: 4,
    date: "December 5, 2024",
    comment:
      "Very good experience. The tour was well-organized and the guide was professional. I would have liked a bit more free time to explore on my own, but overall it was a great trip.",
  },
]

interface DestinationReviewsProps {
  destinationName: string
  rating: number
  reviewCount: number
}

export function DestinationReviews({ destinationName, rating, reviewCount }: DestinationReviewsProps) {
  const [showAllReviews, setShowAllReviews] = useState(false)

  // Calculate rating distribution
  const ratingDistribution = {
    5: Math.round(reviewCount * 0.65),
    4: Math.round(reviewCount * 0.25),
    3: Math.round(reviewCount * 0.07),
    2: Math.round(reviewCount * 0.02),
    1: Math.round(reviewCount * 0.01),
  }

  const displayedReviews = showAllReviews ? sampleReviews : sampleReviews.slice(0, 2)

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <div className="flex items-center mr-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-6 w-6 ${
                    star <= Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold">{rating}</span>
            <span className="text-muted-foreground ml-2">({reviewCount} reviews)</span>
          </div>

          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((star) => (
              <div key={star} className="flex items-center">
                <span className="w-12 text-sm">{star} stars</span>
                <Progress
                  value={(ratingDistribution[star as keyof typeof ratingDistribution] / reviewCount) * 100}
                  className="h-2 mx-2 flex-1"
                />
                <span className="w-12 text-sm text-right">
                  {ratingDistribution[star as keyof typeof ratingDistribution]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Review Summary</h3>
          <p className="text-muted-foreground">
            Travelers love {destinationName} for its breathtaking scenery, cultural experiences, and knowledgeable local
            guides. Most reviews mention the authentic experiences and warm hospitality.
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-lg font-semibold">Recent Reviews</h3>

        {displayedReviews.map((review) => (
          <div key={review.id} className="border-b pb-6 last:border-0">
            <div className="flex items-start">
              <div className="relative h-10 w-10 rounded-full overflow-hidden mr-4">
                <Image src={review.avatar || "/placeholder.svg"} alt={review.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center justify-between">
                  <h4 className="font-semibold">{review.name}</h4>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                <div className="flex items-center my-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-4 w-4 ${
                        star <= review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground mt-2">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}

        {!showAllReviews && sampleReviews.length > 2 && (
          <Button variant="outline" onClick={() => setShowAllReviews(true)} className="w-full">
            Show All Reviews
          </Button>
        )}
      </div>
    </div>
  )
}
