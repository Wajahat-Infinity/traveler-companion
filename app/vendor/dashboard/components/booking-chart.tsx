"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Chart,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendItem,
} from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Jan",
    bookings: 12,
    revenue: 480,
  },
  {
    name: "Feb",
    bookings: 18,
    revenue: 720,
  },
  {
    name: "Mar",
    bookings: 24,
    revenue: 960,
  },
  {
    name: "Apr",
    bookings: 32,
    revenue: 1280,
  },
  {
    name: "May",
    bookings: 28,
    revenue: 1120,
  },
  {
    name: "Jun",
    bookings: 28,
    revenue: 1120,
  },
]

export function BookingChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Overview</CardTitle>
        <CardDescription>Monthly booking trends for the current year</CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <ChartContainer className="h-[300px]">
          <Chart>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <XAxis dataKey="name" />
                <YAxis />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="bookings" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Chart>
          <ChartLegend className="mt-4">
            <ChartLegendItem name="Bookings" color="hsl(var(--primary))" />
          </ChartLegend>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
