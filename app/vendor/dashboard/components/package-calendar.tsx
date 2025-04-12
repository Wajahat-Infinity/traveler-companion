"use client"

import { useState } from "react"
import { Calendar, ChevronLeft, ChevronRight, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

// Sample data for package departures
const packageDepartures = [
  { id: 1, name: "Northern Pakistan Explorer", date: "2025-06-15", guests: 12, status: "confirmed" },
  { id: 2, name: "Cultural Heritage Tour", date: "2025-06-18", guests: 8, status: "confirmed" },
  { id: 3, name: "Adventure Pakistan", date: "2025-06-22", guests: 6, status: "pending" },
  { id: 4, name: "Coastal Getaway", date: "2025-06-25", guests: 10, status: "confirmed" },
  { id: 5, name: "Northern Pakistan Explorer", date: "2025-07-05", guests: 14, status: "confirmed" },
  { id: 6, name: "Cultural Heritage Tour", date: "2025-07-12", guests: 9, status: "pending" },
  { id: 7, name: "Adventure Pakistan", date: "2025-07-18", guests: 7, status: "confirmed" },
  { id: 8, name: "Coastal Getaway", date: "2025-07-25", guests: 11, status: "pending" },
]

export function PackageCalendar() {
  const currentDate = new Date()
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth())
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear())
  const [selectedPackage, setSelectedPackage] = useState("all")

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay()
  }

  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11)
      setCurrentYear(currentYear - 1)
    } else {
      setCurrentMonth(currentMonth - 1)
    }
  }

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1)
    } else {
      setCurrentMonth(currentMonth + 1)
    }
  }

  const daysInMonth = getDaysInMonth(currentMonth, currentYear)
  const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear)

  // Filter departures for the current month and selected package
  const filteredDepartures = packageDepartures.filter((departure) => {
    const departureDate = new Date(departure.date)
    const isCurrentMonth = departureDate.getMonth() === currentMonth && departureDate.getFullYear() === currentYear
    return isCurrentMonth && (selectedPackage === "all" || departure.name === selectedPackage)
  })

  // Get unique package names for the filter
  const uniquePackages = Array.from(new Set(packageDepartures.map((departure) => departure.name)))

  // Generate calendar days
  const calendarDays = []
  // Add empty cells for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(<div key={`empty-${i}`} className="h-24 border border-muted bg-muted/20"></div>)
  }

  // Add cells for each day of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentYear, currentMonth, day)
    const dateString = date.toISOString().split("T")[0]
    const dayDepartures = filteredDepartures.filter((departure) => departure.date === dateString)

    calendarDays.push(
      <div
        key={`day-${day}`}
        className={`h-24 border border-muted p-1 ${
          dayDepartures.length > 0 ? "bg-emerald-50 dark:bg-emerald-950/20" : ""
        }`}
      >
        <div className="flex justify-between items-start">
          <span className="font-medium">{day}</span>
          {dayDepartures.length > 0 && (
            <Badge
              variant="outline"
              className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
            >
              {dayDepartures.length}
            </Badge>
          )}
        </div>
        <div className="mt-1 space-y-1 overflow-y-auto max-h-[70px]">
          {dayDepartures.map((departure) => (
            <div
              key={departure.id}
              className={`text-xs p-1 rounded ${
                departure.status === "confirmed"
                  ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400"
                  : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
              }`}
            >
              <div className="truncate font-medium">{departure.name}</div>
              <div className="flex items-center">
                <Users className="h-3 w-3 mr-1" />
                {departure.guests}
              </div>
            </div>
          ))}
        </div>
      </div>,
    )
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Package Calendar</CardTitle>
            <CardDescription>Scheduled departures and bookings</CardDescription>
          </div>
          <div className="flex items-center space-x-2">
            <Select value={selectedPackage} onValueChange={setSelectedPackage}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter by package" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Packages</SelectItem>
                {uniquePackages.map((packageName) => (
                  <SelectItem key={packageName} value={packageName}>
                    {packageName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-4">
          <Button variant="outline" size="sm" onClick={goToPreviousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-lg font-semibold">
            {MONTHS[currentMonth]} {currentYear}
          </h2>
          <Button variant="outline" size="sm" onClick={goToNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {DAYS.map((day) => (
            <div key={day} className="text-center font-medium py-2 bg-muted/20">
              {day}
            </div>
          ))}
          {calendarDays}
        </div>

        <div className="mt-4 flex items-center space-x-4">
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-emerald-500 mr-1"></div>
            <span className="text-sm">Confirmed</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-amber-500 mr-1"></div>
            <span className="text-sm">Pending</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm">
          <Calendar className="mr-2 h-4 w-4" /> Schedule New Departure
        </Button>
        <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
          View All Departures
        </Button>
      </CardFooter>
    </Card>
  )
}
