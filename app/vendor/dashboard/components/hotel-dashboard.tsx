import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BedDouble, Calendar, CreditCard, Percent, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VendorNav } from "./vendor-nav"
import { OccupancyChart } from "./occupancy-chart"
import { RevenueSourceChart } from "./revenue-source-chart"
import { RoomDistributionChart } from "./room-distribution-chart"
import { AgeDistributionChart } from "./age-distribution-chart"
import { GeographicDistributionChart } from "./geographic-distribution-chart"

export default function HotelDashboard() {
  return (
    <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] pb-10">
      <aside className="hidden md:block">
        <VendorNav />
      </aside>

      <main className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hotel Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your hotel management dashboard.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
              <Percent className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78.5%</div>
              <Progress value={78.5} className="mt-2" />
              <p className="text-xs text-muted-foreground mt-2">+5.2% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue Per Room</CardTitle>
              <CreditCard className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">PKR 12,450</div>
              <p className="text-xs text-muted-foreground">+8.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Check-ins</CardTitle>
              <Calendar className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">For the next 7 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Stay</CardTitle>
              <BedDouble className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.2 days</div>
              <p className="text-xs text-muted-foreground">+0.5 days from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
            <TabsTrigger value="guests">Guests</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Occupancy Trends</CardTitle>
                  <CardDescription>Daily occupancy rates for the past 30 days</CardDescription>
                </CardHeader>
                <CardContent>
                  <OccupancyChart />
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Room Type Performance</CardTitle>
                  <CardDescription>Occupancy and revenue by room type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Deluxe Rooms</span>
                        <span className="text-sm font-medium">92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>PKR 15,000 / night</span>
                        <span>12 rooms</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Standard Rooms</span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>PKR 8,500 / night</span>
                        <span>24 rooms</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Suites</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>PKR 25,000 / night</span>
                        <span>6 rooms</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Family Rooms</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>PKR 18,000 / night</span>
                        <span>8 rooms</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Bookings</CardTitle>
                  <CardDescription>Latest room reservations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                        <div className="rounded-full bg-muted h-10 w-10 flex items-center justify-center">
                          <Users className="h-5 w-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium leading-none">Deluxe Room #{i}</p>
                          <p className="text-sm text-muted-foreground">
                            {i === 1 ? "John Smith" : i === 2 ? "Sarah Johnson" : "Michael Brown"}
                          </p>
                        </div>
                        <div className="text-sm text-right">
                          <p className="font-medium">PKR 15,000</p>
                          <p className="text-muted-foreground">
                            {i === 1 ? "Jun 18-20" : i === 2 ? "Jun 22-25" : "Jun 28-30"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/vendor/dashboard/bookings">
                      View all bookings <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Revenue Sources</CardTitle>
                  <CardDescription>Breakdown of revenue streams</CardDescription>
                </CardHeader>
                <CardContent>
                  <RevenueSourceChart />
                  <div className="space-y-2 mt-4">
                    <div className="flex justify-between">
                      <span className="text-sm">Room Bookings</span>
                      <span className="text-sm font-medium">72%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Restaurant</span>
                      <span className="text-sm font-medium">15%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Spa & Wellness</span>
                      <span className="text-sm font-medium">8%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Other Services</span>
                      <span className="text-sm font-medium">5%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Maintenance Alerts</CardTitle>
                  <CardDescription>Rooms requiring attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 border-b pb-4">
                      <div className="rounded-full bg-red-100 dark:bg-red-900/30 h-10 w-10 flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-400 font-medium">205</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium leading-none">AC Maintenance</p>
                        <p className="text-sm text-muted-foreground">Reported 2 days ago</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Resolve
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 border-b pb-4">
                      <div className="rounded-full bg-amber-100 dark:bg-amber-900/30 h-10 w-10 flex items-center justify-center">
                        <span className="text-amber-600 dark:text-amber-400 font-medium">118</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium leading-none">Plumbing Issue</p>
                        <p className="text-sm text-muted-foreground">Reported yesterday</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Resolve
                      </Button>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="rounded-full bg-amber-100 dark:bg-amber-900/30 h-10 w-10 flex items-center justify-center">
                        <span className="text-amber-600 dark:text-amber-400 font-medium">302</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="font-medium leading-none">TV Not Working</p>
                        <p className="text-sm text-muted-foreground">Reported today</p>
                      </div>
                      <Button size="sm" variant="outline">
                        Resolve
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    View all maintenance issues
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="rooms" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Room Inventory</CardTitle>
                <CardDescription>Current status of all rooms</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {Array.from({ length: 24 }).map((_, i) => {
                    const status = i % 5 === 0 ? "vacant" : i % 7 === 0 ? "maintenance" : "occupied"
                    return (
                      <div
                        key={i}
                        className={`p-3 rounded-md text-center ${
                          status === "vacant"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400"
                            : status === "maintenance"
                              ? "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-400"
                              : "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400"
                        }`}
                      >
                        <div className="font-medium">{100 + i}</div>
                        <div className="text-xs capitalize">{status}</div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                    <span>Vacant</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
                    <span>Occupied</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-amber-500 mr-1"></div>
                    <span>Maintenance</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <Link href="/vendor/dashboard/rooms">Manage Rooms</Link>
                </Button>
              </CardFooter>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Room Type Distribution</CardTitle>
                  <CardDescription>Breakdown of room types</CardDescription>
                </CardHeader>
                <CardContent>
                  <RoomDistributionChart />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Room Pricing</CardTitle>
                  <CardDescription>Current and suggested pricing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">Standard Room</p>
                        <p className="text-sm text-muted-foreground">Current: PKR 8,500</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-emerald-600 font-medium">Suggested: PKR 9,200</p>
                        <p className="text-xs text-muted-foreground">Based on 85% occupancy</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">Deluxe Room</p>
                        <p className="text-sm text-muted-foreground">Current: PKR 15,000</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-emerald-600 font-medium">Suggested: PKR 16,500</p>
                        <p className="text-xs text-muted-foreground">Based on 92% occupancy</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">Family Room</p>
                        <p className="text-sm text-muted-foreground">Current: PKR 18,000</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-emerald-600 font-medium">Suggested: PKR 19,000</p>
                        <p className="text-xs text-muted-foreground">Based on 85% occupancy</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Suite</p>
                        <p className="text-sm text-muted-foreground">Current: PKR 25,000</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-red-600 font-medium">Suggested: PKR 22,500</p>
                        <p className="text-xs text-muted-foreground">Based on 65% occupancy</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Update Pricing
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="guests" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Guest Demographics</CardTitle>
                <CardDescription>Understanding your customer base</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2">
                  <AgeDistributionChart />
                  <GeographicDistributionChart />
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Top Guests</CardTitle>
                  <CardDescription>Your most frequent visitors</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                          <Image src={`/images/guides/g${i}.jpeg`} alt="Guest" fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">
                            {i === 1 ? "Ahmed Khan" : i === 2 ? "Fatima Ali" : "Zainab Malik"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {i === 1 ? "12 stays" : i === 2 ? "8 stays" : "7 stays"}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Profile
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Guest Satisfaction</CardTitle>
                  <CardDescription>Based on reviews and feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col items-center">
                    <div className="text-5xl font-bold text-emerald-600">4.7</div>
                    <div className="text-sm text-muted-foreground mb-4">Average Rating</div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`h-6 w-6 fill-current ${star <= 4 ? "text-yellow-500" : "text-yellow-300"}`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <div className="text-sm text-muted-foreground mt-2">Based on 128 reviews</div>

                    <div className="w-full mt-6 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm">5</span>
                        <Progress value={75} className="h-2 flex-1" />
                        <span className="text-sm">75%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">4</span>
                        <Progress value={20} className="h-2 flex-1" />
                        <span className="text-sm">20%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">3</span>
                        <Progress value={5} className="h-2 flex-1" />
                        <span className="text-sm">5%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">2</span>
                        <Progress value={0} className="h-2 flex-1" />
                        <span className="text-sm">0%</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm">1</span>
                        <Progress value={0} className="h-2 flex-1" />
                        <span className="text-sm">0%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Reviews</CardTitle>
                  <CardDescription>Latest guest feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                            <Image src="/images/guides/g1.jpeg" alt="Guest" fill className="object-cover" />
                          </div>
                          <span className="font-medium">Sarah Johnson</span>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="h-4 w-4 fill-current text-yellow-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm mt-2">
                        "Excellent service and beautiful rooms. The staff was very attentive and the location is
                        perfect."
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">2 days ago</p>
                    </div>

                    <div className="border-b pb-4">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                            <Image src="/images/guides/g2.jpeg" alt="Guest" fill className="object-cover" />
                          </div>
                          <span className="font-medium">Ahmed Khan</span>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4].map((star) => (
                            <svg
                              key={star}
                              className="h-4 w-4 fill-current text-yellow-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                          <svg
                            className="h-4 w-4 fill-current text-gray-300"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        </div>
                      </div>
                      <p className="text-sm mt-2">
                        "Great hotel with comfortable beds. The breakfast could have more variety, but overall a good
                        stay."
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">1 week ago</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                            <Image src="/images/guides/g3.jpeg" alt="Guest" fill className="object-cover" />
                          </div>
                          <span className="font-medium">Fatima Ali</span>
                        </div>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="h-4 w-4 fill-current text-yellow-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                      <p className="text-sm mt-2">
                        "Absolutely loved my stay! The spa services were exceptional and the room had an amazing view."
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">2 weeks ago</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    View all reviews
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
