"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Globe, MapPin, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FeaturedDestinations } from "./components/featured-destinations"
import { HeroSection } from "./components/hero-section"
import { TestimonialsSection } from "./components/testimonials-section"
import { SubscriberSidebar } from "./components/subscriber-sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HomePage() {
  const [showSubscriberPanel, setShowSubscriberPanel] = useState(false)
  const [subscriberType, setSubscriberType] = useState<"hotel" | "guide" | "agency">("hotel")
  // Add this state to track the selected dashboard section
  const [activeSection, setActiveSection] = useState("dashboard")

  return (
    <div className="flex min-h-screen flex-col">
      {/* Subscriber Dashboard Access Panel */}
      <div className="bg-muted py-2">
        <div className="container flex justify-between items-center">
          <p className="text-sm">Welcome to Traveler Companion Platform</p>
          <Button variant="outline" size="sm" onClick={() => setShowSubscriberPanel(!showSubscriberPanel)}>
            {showSubscriberPanel ? "Hide Subscriber Panel" : "Subscriber Dashboard Access"}
          </Button>
        </div>
      </div>

      {showSubscriberPanel && (
        <div className="border-b">
          <div className="container py-4">
            <h2 className="text-xl font-bold mb-4">Subscriber Dashboard Access</h2>
            <p className="text-muted-foreground mb-4">
              Access your business dashboard to manage your listings, bookings, and analytics.
            </p>

            <Tabs
              defaultValue="hotel"
              onValueChange={(value) => setSubscriberType(value as "hotel" | "guide" | "agency")}
            >
              <TabsList className="mb-4">
                <TabsTrigger value="hotel">Hotel Dashboard</TabsTrigger>
                <TabsTrigger value="guide">Guide Dashboard</TabsTrigger>
                <TabsTrigger value="agency">Agency Dashboard</TabsTrigger>
              </TabsList>

              <TabsContent value="hotel" className="flex">
                <SubscriberSidebar
                  subscriberType="hotel"
                  subscriberName="Serena Hotel"
                  onNavigate={(section) => setActiveSection(section)}
                />
                <div className="flex-1 p-4">
                  {activeSection === "dashboard" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                          </CardHeader>
                          <CardFooter>
                            <p className="text-2xl font-bold">142</p>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Revenue</CardTitle>
                          </CardHeader>
                          <CardFooter>
                            <p className="text-2xl font-bold">$4,235</p>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Occupancy Rate</CardTitle>
                          </CardHeader>
                          <CardFooter>
                            <p className="text-2xl font-bold">78%</p>
                          </CardFooter>
                        </Card>
                      </div>
                    </>
                  )}

                  {activeSection === "bookings" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Recent Bookings</h3>
                      <div className="border rounded-md p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">Deluxe Room</p>
                              <p className="text-sm text-muted-foreground">John Smith • June 18-22, 2025</p>
                            </div>
                            <p className="font-medium">$580</p>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">Executive Suite</p>
                              <p className="text-sm text-muted-foreground">Sarah Johnson • July 3-5, 2025</p>
                            </div>
                            <p className="font-medium">$420</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Standard Room</p>
                              <p className="text-sm text-muted-foreground">Michael Brown • June 28-30, 2025</p>
                            </div>
                            <p className="font-medium">$320</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "analytics" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Performance Analytics</h3>
                      <div className="border rounded-md p-4 h-64 flex items-center justify-center bg-muted/50">
                        <p className="text-muted-foreground">Analytics dashboard preview</p>
                      </div>
                    </div>
                  )}

                  {activeSection === "payments" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Recent Payments</h3>
                      <div className="border rounded-md p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">Booking #1234</p>
                              <p className="text-sm text-muted-foreground">Processed on June 10, 2025</p>
                            </div>
                            <p className="font-medium">$580</p>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">Booking #1235</p>
                              <p className="text-sm text-muted-foreground">Processed on June 8, 2025</p>
                            </div>
                            <p className="font-medium">$420</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Booking #1236</p>
                              <p className="text-sm text-muted-foreground">Processed on June 5, 2025</p>
                            </div>
                            <p className="font-medium">$320</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {(activeSection === "rooms" || activeSection === "tours" || activeSection === "packages") && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        {activeSection === "rooms"
                          ? "Hotel Rooms"
                          : activeSection === "tours"
                            ? "Available Tours"
                            : "Travel Packages"}
                      </h3>
                      <div className="border rounded-md p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">
                                {activeSection === "rooms"
                                  ? "Deluxe Room"
                                  : activeSection === "tours"
                                    ? "Hunza Valley Tour"
                                    : "Northern Pakistan Package"}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {activeSection === "rooms"
                                  ? "2 Adults • King Bed"
                                  : activeSection === "tours"
                                    ? "5 Days • Guided Trek"
                                    : "7 Days • All Inclusive"}
                              </p>
                            </div>
                            <p className="font-medium">
                              {activeSection === "rooms"
                                ? "$120/night"
                                : activeSection === "tours"
                                  ? "$450/person"
                                  : "$950/person"}
                            </p>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">
                                {activeSection === "rooms"
                                  ? "Executive Suite"
                                  : activeSection === "tours"
                                    ? "Lahore City Tour"
                                    : "Southern Coastal Package"}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {activeSection === "rooms"
                                  ? "2 Adults, 2 Children • Suite"
                                  : activeSection === "tours"
                                    ? "1 Day • Historical Sites"
                                    : "5 Days • Beach & Culture"}
                              </p>
                            </div>
                            <p className="font-medium">
                              {activeSection === "rooms"
                                ? "$220/night"
                                : activeSection === "tours"
                                  ? "$85/person"
                                  : "$650/person"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "settings" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Account Settings</h3>
                      <div className="border rounded-md p-4">
                        <p className="text-muted-foreground mb-4">Account settings preview</p>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <p>Profile Visibility</p>
                            <p className="font-medium">Public</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <p>Email Notifications</p>
                            <p className="font-medium">Enabled</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <p>Subscription Plan</p>
                            <p className="font-medium">Premium</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-4">
                    <Button className="w-full" asChild>
                      <Link href="/vendor/dashboard">Go to Full Dashboard</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="guide" className="flex">
                <SubscriberSidebar
                  subscriberType="guide"
                  subscriberName="Ali Hassan"
                  onNavigate={(section) => setActiveSection(section)}
                />
                <div className="flex-1 p-4">
                  {activeSection === "dashboard" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Active Tours</CardTitle>
                          </CardHeader>
                          <CardFooter>
                            <p className="text-2xl font-bold">8</p>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Upcoming Bookings</CardTitle>
                          </CardHeader>
                          <CardFooter>
                            <p className="text-2xl font-bold">12</p>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Rating</CardTitle>
                          </CardHeader>
                          <CardFooter>
                            <p className="text-2xl font-bold">4.8/5</p>
                          </CardFooter>
                        </Card>
                      </div>
                    </>
                  )}

                  {activeSection === "bookings" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Recent Bookings</h3>
                      <div className="border rounded-md p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">Deluxe Room</p>
                              <p className="text-sm text-muted-foreground">John Smith • June 18-22, 2025</p>
                            </div>
                            <p className="font-medium">$580</p>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">Executive Suite</p>
                              <p className="text-sm text-muted-foreground">Sarah Johnson • July 3-5, 2025</p>
                            </div>
                            <p className="font-medium">$420</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Standard Room</p>
                              <p className="text-sm text-muted-foreground">Michael Brown • June 28-30, 2025</p>
                            </div>
                            <p className="font-medium">$320</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "analytics" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Performance Analytics</h3>
                      <div className="border rounded-md p-4 h-64 flex items-center justify-center bg-muted/50">
                        <p className="text-muted-foreground">Analytics dashboard preview</p>
                      </div>
                    </div>
                  )}

                  {activeSection === "payments" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Recent Payments</h3>
                      <div className="border rounded-md p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">Booking #1234</p>
                              <p className="text-sm text-muted-foreground">Processed on June 10, 2025</p>
                            </div>
                            <p className="font-medium">$580</p>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">Booking #1235</p>
                              <p className="text-sm text-muted-foreground">Processed on June 8, 2025</p>
                            </div>
                            <p className="font-medium">$420</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Booking #1236</p>
                              <p className="text-sm text-muted-foreground">Processed on June 5, 2025</p>
                            </div>
                            <p className="font-medium">$320</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {(activeSection === "rooms" || activeSection === "tours" || activeSection === "packages") && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        {activeSection === "rooms"
                          ? "Hotel Rooms"
                          : activeSection === "tours"
                            ? "Available Tours"
                            : "Travel Packages"}
                      </h3>
                      <div className="border rounded-md p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">
                                {activeSection === "rooms"
                                  ? "Deluxe Room"
                                  : activeSection === "tours"
                                    ? "Hunza Valley Tour"
                                    : "Northern Pakistan Package"}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {activeSection === "rooms"
                                  ? "2 Adults • King Bed"
                                  : activeSection === "tours"
                                    ? "5 Days • Guided Trek"
                                    : "7 Days • All Inclusive"}
                              </p>
                            </div>
                            <p className="font-medium">
                              {activeSection === "rooms"
                                ? "$120/night"
                                : activeSection === "tours"
                                  ? "$450/person"
                                  : "$950/person"}
                            </p>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">
                                {activeSection === "rooms"
                                  ? "Executive Suite"
                                  : activeSection === "tours"
                                    ? "Lahore City Tour"
                                    : "Southern Coastal Package"}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {activeSection === "rooms"
                                  ? "2 Adults, 2 Children • Suite"
                                  : activeSection === "tours"
                                    ? "1 Day • Historical Sites"
                                    : "5 Days • Beach & Culture"}
                              </p>
                            </div>
                            <p className="font-medium">
                              {activeSection === "rooms"
                                ? "$220/night"
                                : activeSection === "tours"
                                  ? "$85/person"
                                  : "$650/person"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "settings" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Account Settings</h3>
                      <div className="border rounded-md p-4">
                        <p className="text-muted-foreground mb-4">Account settings preview</p>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <p>Profile Visibility</p>
                            <p className="font-medium">Public</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <p>Email Notifications</p>
                            <p className="font-medium">Enabled</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <p>Subscription Plan</p>
                            <p className="font-medium">Premium</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-4">
                    <Button className="w-full" asChild>
                      <Link href="/vendor/dashboard">Go to Full Dashboard</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="agency" className="flex">
                <SubscriberSidebar
                  subscriberType="agency"
                  subscriberName="Pakistan Tours & Travels"
                  onNavigate={(section) => setActiveSection(section)}
                />
                <div className="flex-1 p-4">
                  {activeSection === "dashboard" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Active Packages</CardTitle>
                          </CardHeader>
                          <CardFooter>
                            <p className="text-2xl font-bold">15</p>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
                          </CardHeader>
                          <CardFooter>
                            <p className="text-2xl font-bold">$8,750</p>
                          </CardFooter>
                        </Card>
                        <Card>
                          <CardHeader className="pb-2">
                            <CardTitle className="text-sm font-medium">Customer Inquiries</CardTitle>
                          </CardHeader>
                          <CardFooter>
                            <p className="text-2xl font-bold">24</p>
                          </CardFooter>
                        </Card>
                      </div>
                    </>
                  )}

                  {activeSection === "bookings" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Recent Bookings</h3>
                      <div className="border rounded-md p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">Deluxe Room</p>
                              <p className="text-sm text-muted-foreground">John Smith • June 18-22, 2025</p>
                            </div>
                            <p className="font-medium">$580</p>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">Executive Suite</p>
                              <p className="text-sm text-muted-foreground">Sarah Johnson • July 3-5, 2025</p>
                            </div>
                            <p className="font-medium">$420</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Standard Room</p>
                              <p className="text-sm text-muted-foreground">Michael Brown • June 28-30, 2025</p>
                            </div>
                            <p className="font-medium">$320</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "analytics" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Performance Analytics</h3>
                      <div className="border rounded-md p-4 h-64 flex items-center justify-center bg-muted/50">
                        <p className="text-muted-foreground">Analytics dashboard preview</p>
                      </div>
                    </div>
                  )}

                  {activeSection === "payments" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Recent Payments</h3>
                      <div className="border rounded-md p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">Booking #1234</p>
                              <p className="text-sm text-muted-foreground">Processed on June 10, 2025</p>
                            </div>
                            <p className="font-medium">$580</p>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">Booking #1235</p>
                              <p className="text-sm text-muted-foreground">Processed on June 8, 2025</p>
                            </div>
                            <p className="font-medium">$420</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">Booking #1236</p>
                              <p className="text-sm text-muted-foreground">Processed on June 5, 2025</p>
                            </div>
                            <p className="font-medium">$320</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {(activeSection === "rooms" || activeSection === "tours" || activeSection === "packages") && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">
                        {activeSection === "rooms"
                          ? "Hotel Rooms"
                          : activeSection === "tours"
                            ? "Available Tours"
                            : "Travel Packages"}
                      </h3>
                      <div className="border rounded-md p-4">
                        <div className="space-y-3">
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">
                                {activeSection === "rooms"
                                  ? "Deluxe Room"
                                  : activeSection === "tours"
                                    ? "Hunza Valley Tour"
                                    : "Northern Pakistan Package"}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {activeSection === "rooms"
                                  ? "2 Adults • King Bed"
                                  : activeSection === "tours"
                                    ? "5 Days • Guided Trek"
                                    : "7 Days • All Inclusive"}
                              </p>
                            </div>
                            <p className="font-medium">
                              {activeSection === "rooms"
                                ? "$120/night"
                                : activeSection === "tours"
                                  ? "$450/person"
                                  : "$950/person"}
                            </p>
                          </div>
                          <div className="flex justify-between items-center pb-2 border-b">
                            <div>
                              <p className="font-medium">
                                {activeSection === "rooms"
                                  ? "Executive Suite"
                                  : activeSection === "tours"
                                    ? "Lahore City Tour"
                                    : "Southern Coastal Package"}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {activeSection === "rooms"
                                  ? "2 Adults, 2 Children • Suite"
                                  : activeSection === "tours"
                                    ? "1 Day • Historical Sites"
                                    : "5 Days • Beach & Culture"}
                              </p>
                            </div>
                            <p className="font-medium">
                              {activeSection === "rooms"
                                ? "$220/night"
                                : activeSection === "tours"
                                  ? "$85/person"
                                  : "$650/person"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === "settings" && (
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Account Settings</h3>
                      <div className="border rounded-md p-4">
                        <p className="text-muted-foreground mb-4">Account settings preview</p>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <p>Profile Visibility</p>
                            <p className="font-medium">Public</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <p>Email Notifications</p>
                            <p className="font-medium">Enabled</p>
                          </div>
                          <div className="flex justify-between items-center">
                            <p>Subscription Plan</p>
                            <p className="font-medium">Premium</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="mt-4">
                    <Button className="w-full" asChild>
                      <Link href="/vendor/dashboard">Go to Full Dashboard</Link>
                    </Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      )}

      <HeroSection />

      {/* Features Section */}
      <section className="container py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Discover the perfect Pakistani travel experience
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Connect with local guides, find travel companions, and get personalized recommendations for your next
            adventure in Pakistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-2 hover:border-emerald-500 hover:shadow-lg transition-all">
            <CardHeader className="space-y-1">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 w-12 h-12 flex items-center justify-center rounded-full mb-2">
                <MapPin className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <CardTitle>AI-Powered Recommendations</CardTitle>
              <CardDescription>
                Get personalized destination suggestions based on your preferences and travel history.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="ghost" className="gap-1 p-0 text-emerald-600 hover:text-emerald-700" asChild>
                <Link href="/recommendations">
                  Explore destinations <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-2 hover:border-emerald-500 hover:shadow-lg transition-all">
            <CardHeader className="space-y-1">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 w-12 h-12 flex items-center justify-center rounded-full mb-2">
                <Users className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <CardTitle>Traveler Pairing</CardTitle>
              <CardDescription>
                Find like-minded travelers to share experiences and create memories together.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="ghost" className="gap-1 p-0 text-emerald-600 hover:text-emerald-700" asChild>
                <Link href="/traveler-pairing">
                  Find companions <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-2 hover:border-emerald-500 hover:shadow-lg transition-all">
            <CardHeader className="space-y-1">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 w-12 h-12 flex items-center justify-center rounded-full mb-2">
                <Globe className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <CardTitle>Local Experiences</CardTitle>
              <CardDescription>
                Connect with verified local guides and discover authentic Pakistani experiences.
              </CardDescription>
            </CardHeader>
            <CardFooter>
              <Button variant="ghost" className="gap-1 p-0 text-emerald-600 hover:text-emerald-700" asChild>
                <Link href="/local-guides">
                  Meet guides <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Featured Destinations */}
      <FeaturedDestinations />

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA Section */}
      <section className="bg-emerald-50 dark:bg-emerald-950/10 py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to explore Pakistan?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join thousands of travelers who have discovered the beauty of Pakistan with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
              <Link href="/auth/signup">Sign up as traveler</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/vendor/signup">Join as guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
