import type { Metadata } from "next"
import Link from "next/link"
import { CalendarDays, MapPin, MessageSquare, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardNav } from "./components/dashboard-nav"
import { DashboardHeader } from "./components/dashboard-header"
import { RecentBookings } from "./components/recent-bookings"
import { UpcomingTrips } from "./components/upcoming-trips"
import { DashboardStats } from "./components/dashboard-stats"

export const metadata: Metadata = {
  title: "Dashboard | Traveler Companion Platform",
  description: "Manage your trips, bookings, and connections with local guides.",
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DashboardHeader />

      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] py-10">
        <aside className="hidden md:block">
          <DashboardNav />
        </aside>

        <main className="flex flex-col gap-8">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

          <DashboardStats />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Upcoming Trip</CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">Paris, France</div>
                <p className="text-xs text-muted-foreground">June 15 - June 22, 2025</p>
                <div className="mt-4">
                  <Button size="sm" asChild>
                    <Link href="/dashboard/trips/123">View Details</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Travel Companions</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">2 New Matches</div>
                <p className="text-xs text-muted-foreground">Based on your upcoming trip to Paris</p>
                <div className="mt-4">
                  <Button size="sm" asChild>
                    <Link href="/dashboard/companions">View Matches</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Messages</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-lg font-bold">3 Unread</div>
                <p className="text-xs text-muted-foreground">From guides and travel companions</p>
                <div className="mt-4">
                  <Button size="sm" asChild>
                    <Link href="/dashboard/messages">Open Inbox</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <UpcomingTrips />
            <RecentBookings />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Recommended Experiences</CardTitle>
              <CardDescription>Based on your preferences and upcoming trips</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[1, 2, 3].map((i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="h-32 bg-muted" />
                    <CardHeader className="p-4">
                      <CardTitle className="text-base">
                        {i === 1 && "Eiffel Tower Tour with Local Expert"}
                        {i === 2 && "Seine River Dinner Cruise"}
                        {i === 3 && "Louvre Museum Skip-the-Line"}
                      </CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="mr-1 h-3 w-3" />
                        Paris, France
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <div className="flex justify-between items-center">
                        <div className="font-medium">
                          {i === 1 && "$45"}
                          {i === 2 && "$120"}
                          {i === 3 && "$65"}
                        </div>
                        <Button size="sm" variant="outline">
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
