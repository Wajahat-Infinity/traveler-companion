"use client"

import Image from "next/image"
import { Check } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface Room {
  id: string
  name: string
  description: string
  price: string
  capacity: string
  amenities: string[]
  image: string
}

interface HotelRoomsProps {
  rooms: Room[]
}

export function HotelRooms({ rooms }: HotelRoomsProps) {
  return (
    <div className="space-y-6">
      {rooms.map((room) => (
        <Card key={room.id} className="overflow-hidden border-2 hover:border-emerald-500 transition-colors">
          <div className="flex flex-col md:flex-row">
            <div className="relative h-64 md:h-auto md:w-1/3">
              <Image src={room.image || "/placeholder.svg"} alt={room.name} fill className="object-cover" />
            </div>
            <div className="flex-1 p-6">
              <CardHeader className="p-0 pb-4">
                <CardTitle>{room.name}</CardTitle>
                <CardDescription>{room.capacity}</CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <p className="text-muted-foreground">{room.description}</p>

                <div>
                  <h4 className="text-sm font-medium mb-2">Room Amenities</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {room.amenities.map((amenity) => (
                      <div key={amenity} className="flex items-center">
                        <Check className="h-4 w-4 text-emerald-600 mr-2" />
                        <span className="text-sm">{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-0 pt-4 flex justify-between items-center mt-4">
                <div className="font-semibold text-lg">
                  {room.price} <span className="text-sm font-normal text-muted-foreground">/ night</span>
                </div>
                <Button className="bg-emerald-600 hover:bg-emerald-700">Select Room</Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}
