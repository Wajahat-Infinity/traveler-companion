import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function RecentBookings() {
  const bookings = [
    {
      id: "B001",
      title: "Eiffel Tower Tour",
      date: "June 16, 2025",
      price: "$45.00",
      status: "confirmed",
    },
    {
      id: "B002",
      title: "Seine River Cruise",
      date: "June 18, 2025",
      price: "$65.00",
      status: "confirmed",
    },
    {
      id: "B003",
      title: "Louvre Museum Skip-the-Line",
      date: "June 20, 2025",
      price: "$25.00",
      status: "pending",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Bookings</CardTitle>
        <CardDescription>Your most recent experience bookings</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bookings.map((booking) => (
            <div key={booking.id} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
              <div className="space-y-1">
                <p className="font-medium">{booking.title}</p>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span>{booking.date}</span>
                  <span className="mx-2">•</span>
                  <span>{booking.price}</span>
                </div>
              </div>
              <div>
                <span
                  className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                    booking.status === "confirmed"
                      ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                      : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                  }`}
                >
                  {booking.status === "confirmed" ? "Confirmed" : "Pending"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="gap-1" asChild>
          <Link href="/dashboard/bookings">
            View all bookings <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
