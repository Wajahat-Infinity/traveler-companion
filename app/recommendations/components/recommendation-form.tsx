"use client"

import type React from "react"

import { useState } from "react"
import { Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Slider } from "@/components/ui/slider"
import { Textarea } from "@/components/ui/textarea"

export function RecommendationForm() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call to AI recommendation engine
    setTimeout(() => {
      setIsLoading(false)

      // In a real app, this would update the recommendations
      // For now, we'll just scroll to the results
      window.scrollTo({
        top: document.getElementById("recommendation-results")?.offsetTop || 0,
        behavior: "smooth",
      })
    }, 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Travel Style</h3>
        <RadioGroup defaultValue="balanced">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="adventure" id="adventure" />
            <Label htmlFor="adventure">Adventure Seeker</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="relaxation" id="relaxation" />
            <Label htmlFor="relaxation">Relaxation & Leisure</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="cultural" id="cultural" />
            <Label htmlFor="cultural">Cultural Explorer</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="nature" id="nature" />
            <Label htmlFor="nature">Nature Lover</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="balanced" id="balanced" />
            <Label htmlFor="balanced">Balanced Mix</Label>
          </div>
        </RadioGroup>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Travel Season</h3>
        <Select defaultValue="summer">
          <SelectTrigger>
            <SelectValue placeholder="Select season" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="spring">Spring (Mar-May)</SelectItem>
            <SelectItem value="summer">Summer (Jun-Aug)</SelectItem>
            <SelectItem value="autumn">Autumn (Sep-Nov)</SelectItem>
            <SelectItem value="winter">Winter (Dec-Feb)</SelectItem>
            <SelectItem value="flexible">Flexible</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Trip Duration</h3>
        <Select defaultValue="medium">
          <SelectTrigger>
            <SelectValue placeholder="Select duration" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="short">Short Trip (1-3 days)</SelectItem>
            <SelectItem value="medium">Medium Trip (4-7 days)</SelectItem>
            <SelectItem value="long">Long Trip (8-14 days)</SelectItem>
            <SelectItem value="extended">Extended Trip (15+ days)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Budget Range (PKR per day)</h3>
        <Slider defaultValue={[5000]} max={20000} step={1000} className="py-4" />
        <div className="flex items-center justify-between text-sm">
          <span>Budget</span>
          <span>Mid-range</span>
          <span>Luxury</span>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Interests</h3>
        <div className="grid grid-cols-2 gap-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="mountains" />
            <Label htmlFor="mountains">Mountains</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="beaches" />
            <Label htmlFor="beaches">Beaches</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="history" />
            <Label htmlFor="history">Historical Sites</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="food" />
            <Label htmlFor="food">Food & Cuisine</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="wildlife" />
            <Label htmlFor="wildlife">Wildlife</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="photography" />
            <Label htmlFor="photography">Photography</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="trekking" />
            <Label htmlFor="trekking">Trekking</Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="shopping" />
            <Label htmlFor="shopping">Shopping</Label>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium">Additional Preferences</h3>
        <Textarea
          placeholder="Tell us more about what you're looking for in a destination..."
          className="resize-none"
          rows={3}
        />
      </div>

      <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Generating Recommendations...
          </>
        ) : (
          "Get Recommendations"
        )}
      </Button>
    </form>
  )
}
