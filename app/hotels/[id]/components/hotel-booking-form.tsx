"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CalendarIcon, Loader2 } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface HotelBookingFormProps {
  hotelName: string
  price: string
}

export function HotelBookingForm({ hotelName, price }: HotelBookingFormProps) {
  const router = useRouter()
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)

      // Redirect to checkout page
      router.push(
        `/checkout?hotel=${encodeURIComponent(hotelName)}&checkIn=${checkIn?.toISOString()}&checkOut=${checkOut?.toISOString()}`,
      )
    }, 1500)
  }

  // Calculate number of nights
  const nights = checkIn && checkOut ? Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)) : 0

  // Calculate total price
  const numericPrice = Number.parseInt(price.replace(/[^0-9]/g, ""))
  const totalPrice = numericPrice * (nights || 1)

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="check-in">Check-in Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="check-in"
              variant="outline"
              className={cn("w-full justify-start text-left font-normal", !checkIn && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkIn ? format(checkIn, "PPP") : "Select check-in date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkIn}
              onSelect={setCheckIn}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label htmlFor="check-out">Check-out Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="check-out"
              variant="outline"
              className={cn("w-full justify-start text-left font-normal", !checkOut && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {checkOut ? format(checkOut, "PPP") : "Select check-out date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={checkOut}
              onSelect={setCheckOut}
              initialFocus
              disabled={(date) => date < (checkIn || new Date())}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label htmlFor="guests">Guests</Label>
        <Select defaultValue="2">
          <SelectTrigger id="guests">
            <SelectValue placeholder="Number of guests" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? "guest" : "guests"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="rooms">Rooms</Label>
        <Select defaultValue="1">
          <SelectTrigger id="rooms">
            <SelectValue placeholder="Number of rooms" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? "room" : "rooms"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="special-requests">Special Requests</Label>
        <Textarea
          id="special-requests"
          placeholder="Any special requests or preferences?"
          className="resize-none"
          rows={3}
        />
      </div>

      <div className="pt-4 border-t">
        <div className="flex justify-between mb-2">
          <span>Price per night</span>
          <span>{price}</span>
        </div>
        {nights > 0 && (
          <div className="flex justify-between mb-2">
            <span>Stay duration</span>
            <span>
              {nights} {nights === 1 ? "night" : "nights"}
            </span>
          </div>
        )}
        <div className="flex justify-between font-bold text-lg">
          <span>Total Price</span>
          <span className="text-emerald-600">PKR {totalPrice.toLocaleString()}</span>
        </div>
      </div>

      <Button
        type="submit"
        className="w-full bg-emerald-600 hover:bg-emerald-700"
        disabled={!checkIn || !checkOut || isLoading}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          "Book Now"
        )}
      </Button>
    </form>
  )
}
