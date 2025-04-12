"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CalendarIcon, Loader2 } from "lucide-react"
import { format } from "date-fns"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"

interface BookingFormProps {
  destinationName: string
  price: string
}

export function BookingForm({ destinationName, price }: BookingFormProps) {
  const router = useRouter()
  const [date, setDate] = useState<Date>()
  const [travelers, setTravelers] = useState("2")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)

      // Redirect to checkout page
      router.push(
        `/checkout?destination=${encodeURIComponent(destinationName)}&date=${date?.toISOString()}&travelers=${travelers}`,
      )
    }, 1500)
  }

  const numericPrice = Number.parseInt(price.replace(/[^0-9]/g, ""))
  const totalPrice = numericPrice * Number.parseInt(travelers)

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="date">Select Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select your travel date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              disabled={(date) => date < new Date()}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label htmlFor="travelers">Number of Travelers</Label>
        <Select value={travelers} onValueChange={setTravelers}>
          <SelectTrigger id="travelers">
            <SelectValue placeholder="Select number of travelers" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? "traveler" : "travelers"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Enter your full name" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email Address</Label>
        <Input id="email" type="email" placeholder="Enter your email address" required />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone Number</Label>
        <Input id="phone" placeholder="Enter your phone number" required />
      </div>

      <div className="pt-4 border-t">
        <div className="flex justify-between mb-2">
          <span>Price per person</span>
          <span>{price}</span>
        </div>
        <div className="flex justify-between font-bold text-lg">
          <span>Total Price</span>
          <span className="text-emerald-600">PKR {totalPrice.toLocaleString()}</span>
        </div>
      </div>

      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={!date || isLoading}>
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
