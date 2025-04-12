import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Building, Calendar, Globe, Hotel, Map, ShoppingBag, TrendingUp, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VendorNav } from "./vendor-nav"
import { RevenueTrendsChart } from "./revenue-trends-chart"
import { PackageCalendar } from "./package-calendar"
import { PartnerDistributionChart } from "./partner-distribution-chart"
import { PartnerLocationsMap } from "./partner-locations-map"
import { PartnerPerformanceChart } from "./partner-performance-chart"

export default function AgencyDashboard() {
  return (
    <div className="container grid flex-1 gap-12 md:grid-cols-[200px_1fr] lg:grid-cols-[250px_1fr] pb-10">
      <aside className="hidden md:block">
        <VendorNav />
      </aside>

      <main className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Travel Agency Dashboard</h1>
          <p className="text-muted-foreground">Welcome back to your travel agency management dashboard.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Packages</CardTitle>
              <ShoppingBag className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">+3 from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
              <Calendar className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">+22% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Partner Network</CardTitle>
              <Building className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">Hotels, guides & services</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-emerald-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">PKR 1.2M</div>
              <p className="text-xs text-muted-foreground">+18% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="packages">Packages</TabsTrigger>
            <TabsTrigger value="partners">Partners</TabsTrigger>
          </TabsList>
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
              <Card className="lg:col-span-4">
                <CardHeader>
                  <CardTitle>Revenue Trends</CardTitle>
                  <CardDescription>Monthly revenue for the past year</CardDescription>
                </CardHeader>
                <CardContent>
                  <RevenueTrendsChart />
                </CardContent>
              </Card>
              <Card className="lg:col-span-3">
                <CardHeader>
                  <CardTitle>Package Performance</CardTitle>
                  <CardDescription>Bookings by package type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Northern Pakistan Explorer</span>
                        <span className="text-sm font-medium">35%</span>
                      </div>
                      <Progress value={35} className="h-2" />
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>54 bookings</span>
                        <span>PKR 5.1M</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Cultural Heritage Tour</span>
                        <span className="text-sm font-medium">28%</span>
                      </div>
                      <Progress value={28} className="h-2" />
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>43 bookings</span>
                        <span>PKR 2.8M</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Adventure Pakistan</span>
                        <span className="text-sm font-medium">22%</span>
                      </div>
                      <Progress value={22} className="h-2" />
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>34 bookings</span>
                        <span>PKR 3.7M</span>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium">Coastal Getaway</span>
                        <span className="text-sm font-medium">15%</span>
                      </div>
                      <Progress value={15} className="h-2" />
                      <div className="flex justify-between mt-1 text-xs text-muted-foreground">
                        <span>25 bookings</span>
                        <span>PKR 1.9M</span>
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
                  <CardDescription>Latest package reservations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4 border-b pb-4 last:border-0 last:pb-0">
                        <div className="relative h-12 w-12 rounded-md overflow-hidden">
                          <Image src={`/images/destinations/d${i}.jpg`} alt="Package" fill className="object-cover" />
                        </div>
                        <div className="flex-1 space-y-1">
                          <p className="font-medium leading-none">
                            {i === 1
                              ? "Northern Pakistan Explorer"
                              : i === 2
                                ? "Cultural Heritage Tour"
                                : "Adventure Pakistan"}
                          </p>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="mr-1 h-3.5 w-3.5" />
                            {i === 1 ? "Family of 4" : i === 2 ? "Couple" : "Group of 6"}
                          </div>
                        </div>
                        <div className="text-sm text-right">
                          <p className="font-medium">
                            {i === 1 ? "PKR 380,000" : i === 2 ? "PKR 130,000" : "PKR 660,000"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {i === 1 ? "Jun 18-25" : i === 2 ? "Jul 5-10" : "Jul 15-23"}
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
                  <CardTitle>Top Destinations</CardTitle>
                  <CardDescription>Most popular locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 border-b pb-4">
                      <div className="relative h-12 w-12 rounded-md overflow-hidden">
                        <Image src="/images/destinations/d1.jpg" alt="Destination" fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Hunza Valley</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Globe className="mr-1 h-3.5 w-3.5" /> Northern Areas
                        </div>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">65 bookings</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 border-b pb-4">
                      <div className="relative h-12 w-12 rounded-md overflow-hidden">
                        <Image src="/images/destinations/d2.jpg" alt="Destination" fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Lahore</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Globe className="mr-1 h-3.5 w-3.5" /> Punjab
                        </div>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">48 bookings</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12 rounded-md overflow-hidden">
                        <Image src="/images/destinations/d3.jpg" alt="Destination" fill className="object-cover" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">Swat Valley</p>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Globe className="mr-1 h-3.5 w-3.5" /> Khyber Pakhtunkhwa
                        </div>
                      </div>
                      <div className="text-sm">
                        <p className="font-medium">32 bookings</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Customer Insights</CardTitle>
                  <CardDescription>Understanding your travelers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium mb-2">Traveler Types</p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <span className="w-24 text-sm">Families</span>
                          <div className="h-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex-1 mr-2">
                            <div className="h-2 bg-emerald-600 rounded-full" style={{ width: "35%" }}></div>
                          </div>
                          <span className="w-10 text-sm text-right">35%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-24 text-sm">Couples</span>
                          <div className="h-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex-1 mr-2">
                            <div className="h-2 bg-emerald-600 rounded-full" style={{ width: "28%" }}></div>
                          </div>
                          <span className="w-10 text-sm text-right">28%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-24 text-sm">Groups</span>
                          <div className="h-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex-1 mr-2">
                            <div className="h-2 bg-emerald-600 rounded-full" style={{ width: "22%" }}></div>
                          </div>
                          <span className="w-10 text-sm text-right">22%</span>
                        </div>
                        <div className="flex items-center">
                          <span className="w-24 text-sm">Solo</span>
                          <div className="h-2 bg-emerald-100 dark:bg-emerald-900/30 rounded-full flex-1 mr-2">
                            <div className="h-2 bg-emerald-600 rounded-full" style={{ width: "15%" }}></div>
                          </div>
                          <span className="w-10 text-sm text-right">15%</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <p className="text-sm font-medium mb-2">Booking Lead Time</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm">1-2 weeks</span>
                          <span className="text-sm font-medium">15%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">3-4 weeks</span>
                          <span className="text-sm font-medium">35%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">1-2 months</span>
                          <span className="text-sm font-medium">40%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm">3+ months</span>
                          <span className="text-sm font-medium">10%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="packages" className="space-y-4">
            <PackageCalendar />

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Package Pricing Analysis</CardTitle>
                  <CardDescription>Optimize your package pricing</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">Northern Pakistan Explorer</p>
                        <p className="text-sm text-muted-foreground">7 days package</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Current: PKR 95,000</p>
                        <p className="text-xs text-emerald-600">Suggested: PKR 105,000</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">Cultural Heritage Tour</p>
                        <p className="text-sm text-muted-foreground">5 days package</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Current: PKR 65,000</p>
                        <p className="text-xs text-emerald-600">Suggested: PKR 68,000</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <div>
                        <p className="font-medium">Adventure Pakistan</p>
                        <p className="text-sm text-muted-foreground">8 days package</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Current: PKR 110,000</p>
                        <p className="text-xs text-emerald-600">Suggested: PKR 120,000</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium">Coastal Getaway</p>
                        <p className="text-sm text-muted-foreground">6 days package</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">Current: PKR 75,000</p>
                        <p className="text-xs text-red-600">Suggested: PKR 70,000</p>
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

              <Card>
                <CardHeader>
                  <CardTitle>Package Components</CardTitle>
                  <CardDescription>Breakdown of package elements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center border-b pb-2">
                      <div className="flex items-center">
                        <Hotel className="h-5 w-5 mr-2 text-emerald-600" />
                        <div>
                          <p className="font-medium">Accommodation</p>
                          <p className="text-xs text-muted-foreground">42 partner hotels</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">PKR 45M</p>
                        <p className="text-xs text-muted-foreground">40% of costs</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <div className="flex items-center">
                        <Map className="h-5 w-5 mr-2 text-emerald-600" />
                        <div>
                          <p className="font-medium">Tours & Activities</p>
                          <p className="text-xs text-muted-foreground">28 partner guides</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">PKR 30M</p>
                        <p className="text-xs text-muted-foreground">25% of costs</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center border-b pb-2">
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 mr-2 text-emerald-600" />
                        <div>
                          <p className="font-medium">Transportation</p>
                          <p className="text-xs text-muted-foreground">15 transport providers</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">PKR 25M</p>
                        <p className="text-xs text-muted-foreground">20% of costs</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 mr-2 text-emerald-600" />
                        <div>
                          <p className="font-medium">Other Services</p>
                          <p className="text-xs text-muted-foreground">22 service providers</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium">PKR 18M</p>
                        <p className="text-xs text-muted-foreground">15% of costs</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/vendor/dashboard/packages">
                      Manage all packages <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="partners" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Partner Network</CardTitle>
                <CardDescription>Your business partners and service providers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-3">
                  <PartnerDistributionChart />
                  <PartnerLocationsMap />
                  <PartnerPerformanceChart />
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Top Hotel Partners</CardTitle>
                  <CardDescription>Best performing accommodations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="relative h-12 w-12 rounded-md overflow-hidden">
                          <Image src={`/images/hotels/h${i}.jpeg`} alt="Hotel" fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">
                            {i === 1 ? "Serena Hotel" : i === 2 ? "Pearl Continental" : "Marriott Hotel"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {i === 1 ? "Islamabad" : i === 2 ? "Lahore" : "Karachi"}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">
                            {i === 1 ? "85 bookings" : i === 2 ? "72 bookings" : "64 bookings"}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/vendor/dashboard/hotels">View all hotel partners</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Guide Partners</CardTitle>
                  <CardDescription>Best performing tour guides</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4">
                        <div className="relative h-12 w-12 rounded-full overflow-hidden">
                          <Image src={`/images/guides/g${i}.jpeg`} alt="Guide" fill className="object-cover" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">
                            {i === 1 ? "Ahmed Khan" : i === 2 ? "Fatima Ali" : "Zainab Malik"}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {i === 1 ? "Northern Areas" : i === 2 ? "Punjab" : "Sindh"}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{i === 1 ? "4.9 ★" : i === 2 ? "4.8 ★" : "4.7 ★"}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full">
                    View all guide partners
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Partner Opportunities</CardTitle>
                  <CardDescription>Potential new partnerships</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="border-b pb-4">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <Hotel className="h-5 w-5 mr-2 text-emerald-600" />
                          <span className="font-medium">Avari Hotel</span>
                        </div>
                        <span className="text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400 px-2 py-1 rounded-full">
                          New
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Lahore, Punjab</p>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline">
                          Contact
                        </Button>
                      </div>
                    </div>

                    <div className="border-b pb-4">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <Map className="h-5 w-5 mr-2 text-emerald-600" />
                          <span className="font-medium">Karakoram Adventures</span>
                        </div>
                        <span className="text-xs bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400 px-2 py-1 rounded-full">
                          Recommended
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Gilgit, Northern Areas</p>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline">
                          Contact
                        </Button>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center">
                          <Globe className="h-5 w-5 mr-2 text-emerald-600" />
                          <span className="font-medium">Sindh Transport Services</span>
                        </div>
                        <span className="text-xs bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400 px-2 py-1 rounded-full">
                          Pending
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">Karachi, Sindh</p>
                      <div className="flex justify-end">
                        <Button size="sm" variant="outline">
                          Follow up
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button size="sm" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Find New Partners
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
