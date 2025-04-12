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
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

export function CompanionMatchForm() {
  const router = useRouter()
  const [startDate, setStartDate] = useState<Date>()
  const [endDate, setEndDate] = useState<Date>()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call for matching
    setTimeout(() => {
      setIsLoading(false)

      // In a real app, this would redirect to filtered results
      // For now, we'll just scroll to the results
      window.scrollTo({
        top: document.getElementById("find-matches")?.offsetTop || 0,
        behavior: "smooth",
      })
    }, 1500)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="destination">Where are you traveling?</Label>
        <Select>
          <SelectTrigger id="destination">
            <SelectValue placeholder="Select destination" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="hunza">Hunza Valley</SelectItem>
            <SelectItem value="skardu">Skardu</SelectItem>
            <SelectItem value="swat">Swat Valley</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label>When are you traveling?</Label>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="start-date" className="text-xs text-muted-foreground">
              Start Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="start-date"
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal mt-1",
                    !startDate && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : "Select"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>

          <div>
            <Label htmlFor="end-date" className="text-xs text-muted-foreground">
              End Date
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="end-date"
                  variant="outline"
                  className={cn("w-full justify-start text-left font-normal mt-1", !endDate && "text-muted-foreground")}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : "Select"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                  disabled={(date) => date < (startDate || new Date())}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="interests">What are your interests?</Label>
        <Select required>
          <SelectTrigger id="interests">
            <SelectValue placeholder="Select interests" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="trekking">Trekking</SelectItem>
            <SelectItem value="hiking">Hiking</SelectItem>
            <SelectItem value="photography">Photography</SelectItem>
            <SelectItem value="cultural">Cultural Experiences</SelectItem>
            <SelectItem value="camping">Camping</SelectItem>
            <SelectItem value="nature">Nature</SelectItem>
            <SelectItem value="food">Local Cuisine</SelectItem>
            <SelectItem value="adventure">Adventure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="age">Your Age</Label>
        <Input id="age" type="number" min="18" placeholder="Enter your age" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="gender">Gender</Label>
        <Select required>
          <SelectTrigger id="gender">
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="non-binary">Non-binary</SelectItem>
            <SelectItem value="prefer-not">Prefer not to say</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Tell us about yourself</Label>
        <Textarea
          id="bio"
          placeholder="Share a bit about yourself, your travel style, and what you're looking for in a travel companion"
          className="resize-none"
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Finding Matches...
          </>
        ) : (
          "Find Matches"
        )}
      </Button>
    </form>
  )
}
