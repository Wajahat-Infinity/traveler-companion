import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock, Map, Star, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VendorNav } from "./vendor-nav"
import { BookingTrendsChart } from "./booking-trends-chart"
import { AgeDistributionChart } from "./age-distribution-chart"
import { GeographicDistributionChart } from "./geographic-distribution-chart"
import { PackageCalendar } from "./package-calendar"

export default function GuideDashboard() {
  return (
    <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] pb-10">
      <aside className="hidden md:block">
        <VendorNav />
      </aside>

      <main className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Guide Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your tour guide management dashboard.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Tours</CardTitle>
              <Map className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Upcoming Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">Next 30 days</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Client Satisfaction</CardTitle>
              <Star className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8/5</div>
              <p className="text-xs text-muted-foreground">Based on 156 reviews</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">PKR 285,000</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="tours">Tours</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Booking Trends</CardTitle>
                  <CardDescription>Tour bookings over the past 6 months</CardDescription>
                </CardHeader>
                <CardContent>
                  <BookingTrendsChart />
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Tour Performance</CardTitle>
                  <CardDescription>Bookings by tour type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Cultural Tours</span>
                        <span className="text-sm font-medium">42%</span>
                      </div>
                      <Progress value={42} className="h-2" />
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>48 bookings</span>
                        <span>PKR 120,000</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Adventure Tours</span>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                      <Progress value={35} className="h-2" />
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>40 bookings</span>
                        <span>PKR 100,000</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Photography Tours</span>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>17 bookings</span>
                        <span>PKR 42,500</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Historical Tours</span>
                        <span className="text-sm font-medium">8%</span>
                      </div>
                      <Progress value={8} className="h-2" />
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>9 bookings</span>
                        <span>PKR 22,500</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Tours</CardTitle>
                  <CardDescription>Your scheduled tours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                        <div className="relative h-12 w-12 rounded-md overflow-hidden">
                          <Image src={`/images/destinations/d${i}.jpg`} alt="Tour" fill className="object-cover" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium leading-none">
                            {i === 1
                              ? "Hunza Valley Cultural Tour"
                              : i === 2
                                ? "Lahore Historical Tour"
                                : "Swat Valley Adventure"}
                          </p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-3.5 w-3.5" />
                            {i === 1 ? "Jun 18-20" : i === 2 ? "Jun 25" : "Jul 2-5"}
                          </div>
                        </div>
                        <div className="text-sm text-right">
                          <p className="font-medium">{i === 1 ? "5 guests" : i === 2 ? "12 guests" : "8 guests"}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/vendor/dashboard/tours">
                      View all tours <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Popular Destinations</CardTitle>
                  <CardDescription>Most booked locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 border-b pb-4">
                      <div className="relative h-12 w-12 rounded-md overflow-hidden">
                        <Image src="/images/destinations/d1.jpg" alt="Destination" fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Hunza Valley</p>
                        <p className="text-sm text-muted-foreground">42 bookings</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium text-emerald-600">+18%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 border-b pb-4">
                      <div className="relative h-12 w-12 rounded-md overflow-hidden">
                        <Image src="/images/destinations/d2.jpg" alt="Destination" fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Lahore</p>
                        <p className="text-sm text-muted-foreground">35 bookings</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium text-emerald-600">+12%</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 rounded-md overflow-hidden">
                        <Image src="/images/destinations/d3.jpg" alt="Destination" fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Swat Valley</p>
                        <p className="text-sm text-muted-foreground">28 bookings</p>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium text-emerald-600">+8%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Client Feedback</CardTitle>
                  <CardDescription>Recent reviews from clients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                            <Image src="/images/guides/g1.jpeg" alt="Client" fill className="object-cover" />
                          </div>
                          <span className="font-medium">John Smith</span>
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
                        "Amazing tour guide! Very knowledgeable about the history and culture of the region."
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Hunza Valley Cultural Tour • 3 days ago</p>
                    </div>

                    <div className="border-b pb-4">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                            <Image src="/images/guides/g2.jpeg" alt="Client" fill className="object-cover" />
                          </div>
                          <span className="font-medium">Sarah Johnson</span>
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
                        "Great tour with beautiful sights. Would have liked more time at some locations."
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Lahore Historical Tour • 1 week ago</p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                            <Image src="/images/guides/g3.jpeg" alt="Client" fill className="object-cover" />
                          </div>
                          <span className="font-medium">Michael Brown</span>
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
                        "The adventure tour was incredible! Our guide was professional and made the experience
                        unforgettable."
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">Swat Valley Adventure • 2 weeks ago</p>
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

          <TabsContent value="tours" className="space-y-4">
            <PackageCalendar />

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Tour Duration Analysis</CardTitle>
                  <CardDescription>Popularity by tour length</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">Day Tours (1 day)</p>
                        <p className="text-sm text-muted-foreground">35 bookings</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">PKR 175,000</p>
                        <p className="text-xs text-muted-foreground">30% of revenue</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">Short Tours (2-3 days)</p>
                        <p className="text-sm text-muted-foreground">42 bookings</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">PKR 252,000</p>
                        <p className="text-xs text-muted-foreground">45% of revenue</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">Medium Tours (4-6 days)</p>
                        <p className="text-sm text-muted-foreground">18 bookings</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">PKR 126,000</p>
                        <p className="text-xs text-muted-foreground">20% of revenue</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Long Tours (7+ days)</p>
                        <p className="text-sm text-muted-foreground">5 bookings</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">PKR 75,000</p>
                        <p className="text-xs text-muted-foreground">5% of revenue</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tour Availability</CardTitle>
                  <CardDescription>Manage your tour slots</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 rounded-md overflow-hidden mr-3">
                          <Image src="/images/destinations/d1.jpg" alt="Tour" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">Hunza Valley Cultural Tour</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" /> 3 days
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        2 slots left
                      </Button>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 rounded-md overflow-hidden mr-3">
                          <Image src="/images/destinations/d2.jpg" alt="Tour" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">Lahore Historical Tour</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" /> 1 day
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        8 slots left
                      </Button>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 rounded-md overflow-hidden mr-3">
                          <Image src="/images/destinations/d3.jpg" alt="Tour" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">Swat Valley Adventure</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" /> 4 days
                          </div>
                        </div>
                      </div>
                      <Button size="sm" variant="outline">
                        5 slots left
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="relative h-10 w-10 rounded-md overflow-hidden mr-3">
                          <Image src="/images/slides/s1.jpg" alt="Tour" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">Karachi Coastal Tour</p>
                          <div className="flex items-center text-xs text-muted-foreground">
                            <Clock className="mr-1 h-3 w-3" /> 2 days
                          </div>
                        </div>
                      </div>
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                        Add slots
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/vendor/dashboard/tours">
                      Manage all tours <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="clients" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Client Demographics</CardTitle>
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
                  <CardTitle>Repeat Clients</CardTitle>
                  <CardDescription>Clients who have booked multiple tours</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
                          <Image src={`/images/guides/g${i}.jpeg`} alt="Client" fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">
                            {i === 1 ? "John Smith" : i === 2 ? "Sarah Johnson" : "Michael Brown"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {i === 1 ? "5 tours" : i === 2 ? "4 tours" : "3 tours"}
                          </p>
                        </div>
                        <Button variant="ghost" size="sm">
                          Profile
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    View all repeat clients
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Client Preferences</CardTitle>
                  <CardDescription>Most requested tour features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Photography Opportunities</span>
                        <span className="text-sm font-medium">85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Cultural Experiences</span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Local Cuisine</span>
                        <span className="text-sm font-medium">72%</span>
                      </div>
                      <Progress value={72} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Adventure Activities</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Historical Sites</span>
                        <span className="text-sm font-medium">60%</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Client Communication</CardTitle>
                  <CardDescription>Recent messages from clients</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex items-center mb-2">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                          <Image src="/images/guides/g1.jpeg" alt="Client" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">Sarah Johnson</p>
                          <p className="text-xs text-muted-foreground">2 hours ago</p>
                        </div>
                      </div>
                      <p className="text-sm">
                        "Hi, I'm interested in the Hunza Valley tour next month. Do you have any availability?"
                      </p>
                    </div>

                    <div className="border-b pb-4">
                      <div className="flex items-center mb-2">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                          <Image src="/images/guides/g2.jpeg" alt="Client" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">John Smith</p>
                          <p className="text-xs text-muted-foreground">Yesterday</p>
                        </div>
                      </div>
                      <p className="text-sm">
                        "Thank you for the amazing tour! I've recommended you to all my friends."
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden mr-2">
                          <Image src="/images/guides/g3.jpeg" alt="Client" fill className="object-cover" />
                        </div>
                        <div>
                          <p className="font-medium">Michael Brown</p>
                          <p className="text-xs text-muted-foreground">3 days ago</p>
                        </div>
                      </div>
                      <p className="text-sm">"Can you customize the Lahore tour to include more historical sites?"</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    View all messages
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
