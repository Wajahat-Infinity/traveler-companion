import type { Metadata } from "next"
import Image from "next/image"
import { Calendar, Edit, MapPin, Plus, Trash } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { VendorHeader } from "../components/vendor-header"
import { VendorNav } from "../components/vendor-nav"

export const metadata: Metadata = {
  title: "Manage Packages | Agency Dashboard",
  description: "Manage your travel packages, pricing, and availability.",
}

// Sample package data
const packages = [
  {
    id: "package-1",
    name: "Northern Pakistan Explorer",
    destinations: ["Hunza Valley", "Skardu", "Fairy Meadows"],
    duration: "7 days",
    price: "PKR 95,000",
    status: "Active",
    image: "/images/destinations/d1.jpg",
    description: "Explore the breathtaking landscapes of Northern Pakistan with this comprehensive 7-day package.",
    inclusions: ["Accommodation", "Transportation", "Meals", "Guide", "Activities"],
    departures: "Weekly",
    bookings: 15,
  },
  {
    id: "package-2",
    name: "Cultural Heritage Tour",
    destinations: ["Lahore", "Islamabad", "Peshawar"],
    duration: "5 days",
    price: "PKR 65,000",
    status: "Active",
    image: "/images/destinations/d2.jpg",
    description:
      "Discover the rich cultural heritage of Pakistan's major cities with visits to historical sites and museums.",
    inclusions: ["Accommodation", "Transportation", "Breakfast", "Guide"],
    departures: "Bi-weekly",
    bookings: 22,
  },
  {
    id: "package-3",
    name: "Coastal Getaway",
    destinations: ["Karachi", "Gwadar", "Kund Malir"],
    duration: "6 days",
    price: "PKR 75,000",
    status: "Seasonal",
    image: "/images/destinations/d3.jpg",
    description: "Experience the beautiful coastal areas of Pakistan with beach stays and water activities.",
    inclusions: ["Accommodation", "Transportation", "Meals", "Activities"],
    departures: "Monthly",
    bookings: 8,
  },
  {
    id: "package-4",
    name: "Adventure Pakistan",
    destinations: ["Swat Valley", "Chitral", "Kalash Valley"],
    duration: "8 days",
    price: "PKR 110,000",
    status: "Active",
    image: "/images/slides/s1.jpg",
    description:
      "An action-packed adventure through some of Pakistan's most exciting destinations with trekking and rafting.",
    inclusions: ["Accommodation", "Transportation", "Meals", "Guide", "Activities", "Equipment"],
    departures: "Monthly",
    bookings: 12,
  },
  {
    id: "package-5",
    name: "Luxury Pakistan",
    destinations: ["Islamabad", "Murree", "Nathiagali"],
    duration: "4 days",
    price: "PKR 150,000",
    status: "Active",
    image: "/images/slides/s2.jpg",
    description:
      "Experience Pakistan in luxury with 5-star accommodations, private transportation, and exclusive experiences.",
    inclusions: ["Luxury Accommodation", "Private Transportation", "All Meals", "Private Guide", "Premium Activities"],
    departures: "On Demand",
    bookings: 6,
  },
  {
    id: "package-6",
    name: "Budget Explorer",
    destinations: ["Islamabad", "Naran", "Kaghan"],
    duration: "5 days",
    price: "PKR 45,000",
    status: "Inactive",
    image: "/images/slides/s3.jpg",
    description: "An affordable way to explore Pakistan's beautiful northern areas with comfortable accommodations.",
    inclusions: ["Accommodation", "Transportation", "Breakfast", "Guide"],
    departures: "Weekly",
    bookings: 0,
  },
]

export default function PackagesPage() {
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
              <h1 className="text-3xl font-bold tracking-tight">Travel Packages</h1>
              <p className="text-muted-foreground">Manage your travel packages, pricing, and availability.</p>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="mr-2 h-4 w-4" /> Create New Package
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="search">Search</Label>
              <Input type="search" id="search" placeholder="Search by package name or destination..." />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="duration">Duration</Label>
              <Select defaultValue="all">
                <SelectTrigger id="duration">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="1-3">1-3 days</SelectItem>
                  <SelectItem value="4-7">4-7 days</SelectItem>
                  <SelectItem value="8+">8+ days</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="status">Status</Label>
              <Select defaultValue="all">
                <SelectTrigger id="status">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="seasonal">Seasonal</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="secondary">Filter</Button>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <Card key={pkg.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                  <div
                    className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full ${
                      pkg.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : pkg.status === "Seasonal"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {pkg.status}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{pkg.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    {pkg.destinations.join(", ")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-medium">{pkg.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Departures</p>
                      <p className="font-medium">{pkg.departures}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Inclusions</p>
                      <p className="font-medium text-xs">{pkg.inclusions.slice(0, 3).join(", ")}...</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Bookings</p>
                      <p className="font-medium">{pkg.bookings}</p>
                    </div>
                  </div>
                  <div className="font-semibold text-right">{pkg.price} / person</div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Edit className="mr-2 h-4 w-4" /> Edit
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        Actions
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Package Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Update Pricing</DropdownMenuItem>
                      <DropdownMenuItem>
                        <Calendar className="mr-2 h-4 w-4" /> Manage Departures
                      </DropdownMenuItem>
                      <DropdownMenuItem>View Bookings</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" /> Delete Package
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CardFooter>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
