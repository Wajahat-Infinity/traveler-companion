import type { Metadata } from "next"
import Image from "next/image"
import { Edit, Plus, Trash } from "lucide-react"

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
  title: "Manage Rooms | Hotel Dashboard",
  description: "Manage your hotel rooms, pricing, and availability.",
}

// Sample room data
const rooms = [
  {
    id: "room-1",
    name: "Deluxe Room",
    type: "Double",
    capacity: "2 Adults",
    price: "PKR 25,000",
    status: "Available",
    image: "/images/hotels/h1.jpeg",
    description: "Spacious room with a king-size bed and city views.",
    amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar"],
    bookings: 12,
  },
  {
    id: "room-2",
    name: "Executive Suite",
    type: "Suite",
    capacity: "2 Adults, 2 Children",
    price: "PKR 40,000",
    status: "Available",
    image: "/images/hotels/h2.jpeg",
    description: "Luxurious suite with separate living area and mountain views.",
    amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Jacuzzi"],
    bookings: 8,
  },
  {
    id: "room-3",
    name: "Presidential Suite",
    type: "Suite",
    capacity: "4 Adults",
    price: "PKR 75,000",
    status: "Booked",
    image: "/images/hotels/h3.jpeg",
    description: "Our most luxurious accommodation with panoramic views and butler service.",
    amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Jacuzzi", "Butler Service"],
    bookings: 5,
  },
  {
    id: "room-4",
    name: "Standard Twin Room",
    type: "Twin",
    capacity: "2 Adults",
    price: "PKR 18,000",
    status: "Available",
    image: "/images/hotels/h1.jpeg",
    description: "Comfortable room with two single beds and city views.",
    amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV"],
    bookings: 15,
  },
  {
    id: "room-5",
    name: "Family Room",
    type: "Family",
    capacity: "2 Adults, 3 Children",
    price: "PKR 35,000",
    status: "Maintenance",
    image: "/images/hotels/h2.jpeg",
    description: "Spacious room designed for families with children.",
    amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV", "Mini Bar", "Game Console"],
    bookings: 10,
  },
  {
    id: "room-6",
    name: "Economy Single",
    type: "Single",
    capacity: "1 Adult",
    price: "PKR 15,000",
    status: "Available",
    image: "/images/hotels/h3.jpeg",
    description: "Cozy room with a single bed, perfect for solo travelers.",
    amenities: ["Free WiFi", "Air Conditioning", "Flat-screen TV"],
    bookings: 20,
  },
]

export default function RoomsPage() {
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
              <h1 className="text-3xl font-bold tracking-tight">Rooms</h1>
              <p className="text-muted-foreground">Manage your hotel rooms, pricing, and availability.</p>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">
              <Plus className="mr-2 h-4 w-4" /> Add New Room
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-4 items-end">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="search">Search</Label>
              <Input type="search" id="search" placeholder="Search by room name or type..." />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="room-type">Room Type</Label>
              <Select defaultValue="all">
                <SelectTrigger id="room-type">
                  <SelectValue placeholder="Select room type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="single">Single</SelectItem>
                  <SelectItem value="double">Double</SelectItem>
                  <SelectItem value="twin">Twin</SelectItem>
                  <SelectItem value="suite">Suite</SelectItem>
                  <SelectItem value="family">Family</SelectItem>
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
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="booked">Booked</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="secondary">Filter</Button>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <Card key={room.id} className="overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
                  <div
                    className={`absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full ${
                      room.status === "Available"
                        ? "bg-green-100 text-green-800"
                        : room.status === "Booked"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-orange-100 text-orange-800"
                    }`}
                  >
                    {room.status}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle>{room.name}</CardTitle>
                  <CardDescription>
                    {room.type} • {room.capacity}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{room.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.amenities.slice(0, 3).map((amenity) => (
                      <span
                        key={amenity}
                        className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                    {room.amenities.length > 3 && (
                      <span className="inline-flex items-center rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium">
                        +{room.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">{room.bookings} bookings</div>
                    <div className="font-semibold">{room.price} / night</div>
                  </div>
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
                      <DropdownMenuLabel>Room Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Update Pricing</DropdownMenuItem>
                      <DropdownMenuItem>Manage Availability</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-red-600">
                        <Trash className="mr-2 h-4 w-4" /> Delete Room
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
