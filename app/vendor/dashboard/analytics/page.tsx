import type { Metadata } from "next"
import { BarChart3, LineChart, PieChart, TrendingUp } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VendorHeader } from "../components/vendor-header"
import { VendorNav } from "../components/vendor-nav"
import { AnalyticsChart } from "./components/analytics-chart"
import { BookingSourceChart } from "./components/booking-source-chart"
import { CustomerDemographicsChart } from "./components/customer-demographics-chart"
import { RevenueChart } from "./components/revenue-chart"

export const metadata: Metadata = {
  title: "Analytics | Vendor Dashboard",
  description: "View and analyze your business performance metrics.",
}

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <VendorHeader />

      <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] py-10">
        <aside className="hidden md:block">
          <VendorNav />
        </aside>

        <main className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
              <p className="text-muted-foreground">Track and analyze your business performance.</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Export
              </Button>
              <Button variant="outline" size="sm">
                Print
              </Button>
              <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                Generate Report
              </Button>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$24,563</div>
                <p className="text-xs text-muted-foreground">+18% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Bookings</CardTitle>
                <BarChart3 className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">245</div>
                <p className="text-xs text-muted-foreground">+12% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                <PieChart className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <p className="text-xs text-muted-foreground">+0.5% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Booking Value</CardTitle>
                <LineChart className="h-4 w-4 text-emerald-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$102</div>
                <p className="text-xs text-muted-foreground">+5% from last month</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Overview</CardTitle>
                  <CardDescription>View your business performance over time</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <AnalyticsChart />
                </CardContent>
              </Card>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Booking Sources</CardTitle>
                    <CardDescription>Where your bookings are coming from</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <BookingSourceChart />
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Demographics</CardTitle>
                    <CardDescription>Breakdown of your customer base</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <CustomerDemographicsChart />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="revenue" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Revenue Analysis</CardTitle>
                  <CardDescription>Track your revenue performance over time</CardDescription>
                </CardHeader>
                <CardContent className="pl-2">
                  <RevenueChart />
                </CardContent>
              </Card>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Revenue by Service</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Accommodations</span>
                        <span className="font-medium">$12,450</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tours</span>
                        <span className="font-medium">$8,320</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Experiences</span>
                        <span className="font-medium">$3,793</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Revenue by Season</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Summer</span>
                        <span className="font-medium">$9,845</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Winter</span>
                        <span className="font-medium">$5,280</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Spring/Fall</span>
                        <span className="font-medium">$9,438</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Revenue Growth</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">YoY Growth</span>
                        <span className="font-medium text-emerald-600">+24.8%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">MoM Growth</span>
                        <span className="font-medium text-emerald-600">+3.2%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Projected Annual</span>
                        <span className="font-medium">$295,000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="bookings" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Booking Trends</CardTitle>
                  <CardDescription>Analyze your booking patterns</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                    <p className="text-muted-foreground">Booking trends chart will appear here</p>
                  </div>
                </CardContent>
              </Card>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Booking Lead Time</CardTitle>
                    <CardDescription>How far in advance customers book</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span>Same day</span>
                        <div className="w-2/3 bg-muted rounded-full h-2.5">
                          <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "10%" }}></div>
                        </div>
                        <span className="text-sm">10%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>1-7 days</span>
                        <div className="w-2/3 bg-muted rounded-full h-2.5">
                          <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                        <span className="text-sm">25%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>8-30 days</span>
                        <div className="w-2/3 bg-muted rounded-full h-2.5">
                          <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "40%" }}></div>
                        </div>
                        <span className="text-sm">40%</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>31+ days</span>
                        <div className="w-2/3 bg-muted rounded-full h-2.5">
                          <div className="bg-emerald-600 h-2.5 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                        <span className="text-sm">25%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Cancellation Rate</CardTitle>
                    <CardDescription>Booking cancellations over time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[200px] flex items-center justify-center bg-muted/20 rounded-md">
                      <p className="text-muted-foreground">Cancellation rate chart will appear here</p>
                    </div>
                    <div className="mt-4 flex justify-between text-sm">
                      <div>
                        <p className="text-muted-foreground">Current Rate</p>
                        <p className="text-xl font-bold">4.2%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Previous Period</p>
                        <p className="text-xl font-bold">5.8%</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Change</p>
                        <p className="text-xl font-bold text-emerald-600">-1.6%</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="customers" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Demographics</CardTitle>
                  <CardDescription>Understand your customer base</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] flex items-center justify-center bg-muted/20 rounded-md">
                    <p className="text-muted-foreground">Customer demographics chart will appear here</p>
                  </div>
                </CardContent>
              </Card>
              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Satisfaction</CardTitle>
                    <CardDescription>Based on reviews and feedback</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-5xl font-bold text-emerald-600">4.8</div>
                        <div className="text-sm text-muted-foreground">Average Rating</div>
                        <div className="mt-4 flex justify-center">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <svg
                              key={star}
                              className="h-6 w-6 fill-current text-yellow-500"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">Based on 245 reviews</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>Customer Retention</CardTitle>
                    <CardDescription>Returning vs. new customers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center">
                      <div className="relative h-40 w-40">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xl font-bold">32%</div>
                            <div className="text-xs text-muted-foreground">Return Rate</div>
                          </div>
                        </div>
                        <svg className="h-40 w-40" viewBox="0 0 100 100">
                          <circle className="fill-none stroke-muted stroke-2" cx="50" cy="50" r="40" pathLength="100" />
                          <circle
                            className="fill-none stroke-emerald-600 stroke-2"
                            cx="50"
                            cy="50"
                            r="40"
                            pathLength="100"
                            strokeDasharray="100"
                            strokeDashoffset="68"
                            transform="rotate(-90 50 50)"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-center text-sm">
                      <div>
                        <div className="font-medium">New Customers</div>
                        <div className="text-muted-foreground">68%</div>
                      </div>
                      <div>
                        <div className="font-medium">Returning</div>
                        <div className="text-muted-foreground">32%</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
