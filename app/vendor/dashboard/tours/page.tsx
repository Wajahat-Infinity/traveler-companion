import type { Metadata } from "next"
import Image from "next/image"
import { Edit, MapPin, Plus, Trash } from "lucide-react"

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
  title: "Manage Tours | Guide Dashboard",
  description: "Manage your tours, pricing, and availability.",
}

// Sample tour data
const tours = [
  {
    id: "tour-1",
    name: "Hunza Valley Cultural Experience",
    location: "Hunza Valley, Gilgit-Baltistan",
    duration: "3 days",
    price: "PKR 15,000",
    status: "Active",
    image: "/images/destinations/d1.jpg",
    description:
      "Immerse yourself in the rich culture of Hunza Valley with visits to traditional villages, ancient forts, and local homes.",
    category: "Cultural",
    groupSize: "2-10 people",
    bookings: 8,
  },
  {
    id: "tour-2",
    name: "Rakaposhi Base Camp Trek",
    location: "Gilgit-Baltistan",
    duration: "5 days",
    price: "PKR 25,000",
    status: "Active",
    image: "/images/destinations/d2.jpg",
    description:
      "Trek to the base camp of the majestic Rakaposhi mountain, enjoying stunning views and camping in beautiful locations.",
    category: "Trekking",
    groupSize: "4-8 people",
    bookings: 5,
  },
  {
    id: "tour-3",
    name: "Photography Tour of Hunza",
    location: "Hunza Valley, Gilgit-Baltistan",
    duration: "4 days",
    price: "PKR 20,000",
    status: "Seasonal",
    image: "/images/destinations/d3.jpg",
    description:
      "Capture the breathtaking landscapes, traditional architecture, and daily life in Hunza Valley with expert guidance.",
    category: "Photography",
    groupSize: "2-6 people",
    bookings: 12,
  },
  {
    id: "tour-4",
    name: "Lahore Historical Tour",
    location: "Lahore, Punjab",
    duration: "1 day",
    price: "PKR 5,000",
    status: "Active",
    image: "/images/slides/s1.jpg",
    description:
      "Explore the rich history of Lahore with visits to the Lahore Fort, Badshahi Mosque, and other historical sites.",
    category: "Historical",
    groupSize: "1-15 people",
    bookings: 25,
  },
  {
    id: "tour-5",
    name: "Swat Valley Adventure",
    location: "Swat Valley, Khyber Pakhtunkhwa",
    duration: "4 days",
    price: "PKR 18,000",
    status: "Inactive",
    image: "/images/slides/s2.jpg",
    description:
      "Experience the natural beauty of Swat Valley with hiking, river rafting, and visits to local villages.",
    category: "Adventure",
    groupSize: "4-12 people",
    bookings: 0,
  },
  {
    id: "tour-6",
    name: "Karachi Coastal Tour",
    location: "Karachi, Sindh",
    duration: "2 days",
    price: "PKR 8,000",
    status: "Active",
    image: "/images/slides/s3.jpg",
    description: "Explore the coastal areas of Karachi, including beaches, mangrove forests, and historical sites.",
    category: "Coastal",
    groupSize: "2-10 people",
    bookings: 15,
  },
]

export default function ToursPage() {
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
              <h1 className="text-3xl font-bold tracking-tight">Tours</h1>
              <p className="text-muted-foreground">Manage your tours, pricing, and availability.</p>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="mr-2 h-4 w-4" /> Create New Tour
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="search">Search</Label>
              <Input type="search" id="search" placeholder="Search by tour name or location..." />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="category">Category</Label>
              <Select defaultValue="all">
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="trekking">Trekking</SelectItem>
                  <SelectItem value="photography">Photography</SelectItem>
                  <SelectItem value="historical">Historical</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="coastal">Coastal</SelectItem>
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
            {tours.map((tour) => (
              <Card key={tour.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={tour.image || "/placeholder.svg"} alt={tour.name} fill className="object-cover" />
                  <div
                    className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full ${
                      tour.status === "Active"
                        ? "bg-green-100 text-green-800"
                        : tour.status === "Seasonal"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {tour.status}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{tour.name}</CardTitle>
                  <CardDescription className="flex items-center">
                    <MapPin className="h-3.5 w-3.5 mr-1" />
                    {tour.location}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{tour.description}</p>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs text-muted-foreground">Duration</p>
                      <p className="font-medium">{tour.duration}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Category</p>
                      <p className="font-medium">{tour.category}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Group Size</p>
                      <p className="font-medium">{tour.groupSize}</p>
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Bookings</p>
                      <p className="font-medium">{tour.bookings}</p>
                    </div>
                  </div>
                  <div className="font-semibold text-right">{tour.price} / person</div>
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
                      <DropdownMenuLabel>Tour Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Update Pricing</DropdownMenuItem>
                      <DropdownMenuItem>Manage Dates</DropdownMenuItem>
                      <DropdownMenuItem>View Bookings</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" /> Delete Tour
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
