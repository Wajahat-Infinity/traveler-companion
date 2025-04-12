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

interface GuideBookingFormProps {
  guideName: string
  price: string
}

export function GuideBookingForm({ guideName, price }: GuideBookingFormProps) {
  const router = useRouter()
  const [date, setDate] = useState<Date>()
  const [days, setDays] = useState("1")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)

      // Redirect to checkout page
      router.push(`/checkout?guide=${encodeURIComponent(guideName)}&date=${date?.toISOString()}&days=${days}`)
    }, 1500)
  }

  const numericPrice = Number.parseInt(price.replace(/[^0-9]/g, ""))
  const totalPrice = numericPrice * Number.parseInt(days)

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="date">Select Start Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Select your start date"}
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
        <Label htmlFor="days">Number of Days</Label>
        <Select value={days} onValueChange={setDays}>
          <SelectTrigger id="days">
            <SelectValue placeholder="Select number of days" />
          </SelectTrigger>
          <SelectContent>
            {[1, 2, 3, 4, 5, 6, 7, 10, 14].map((num) => (
              <SelectItem key={num} value={num.toString()}>
                {num} {num === 1 ? "day" : "days"}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="travelers">Number of Travelers</Label>
        <Select defaultValue="2">
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
        <Label htmlFor="requirements">Special Requirements</Label>
        <Textarea
          id="requirements"
          placeholder="Tell us about any special requirements or interests"
          className="resize-none"
          rows={3}
        />
      </div>

      <div className="pt-4 border-t">
        <div className="flex justify-between mb-2">
          <span>Price per day</span>
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
