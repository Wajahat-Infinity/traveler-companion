import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function UpcomingTrips() {
  const trips = [
    {
      id: "T001",
      destination: "Paris, France",
      dates: "June 15 - June 22, 2025",
      companions: 0,
      bookings: 3,
    },
    {
      id: "T002",
      destination: "Rome, Italy",
      dates: "August 10 - August 17, 2025",
      companions: 2,
      bookings: 1,
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Trips</CardTitle>
        <CardDescription>Your planned travel itineraries</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {trips.map((trip) => (
            <div key={trip.id} className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-semibold">{trip.destination}</h4>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <CalendarDays className="mr-1 h-3 w-3" />
                    {trip.dates}
                  </div>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/dashboard/trips/${trip.id}`}>Details</Link>
                </Button>
              </div>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center">
                  <span className="font-medium">{trip.bookings}</span>
                  <span className="ml-1 text-muted-foreground">bookings</span>
                </div>
                <div className="flex items-center">
                  <span className="font-medium">{trip.companions}</span>
                  <span className="ml-1 text-muted-foreground">companions</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="gap-1" asChild>
          <Link href="/dashboard/trips">
            View all trips <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
