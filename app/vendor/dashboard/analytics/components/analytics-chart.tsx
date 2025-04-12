"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

import { Chart, ChartContainer, ChartTooltipContent, ChartLegend, ChartLegendItem } from "@/components/ui/chart"

const data = [
  {
    name: "Jan",
    bookings: 65,
    revenue: 4000,
  },
  {
    name: "Feb",
    bookings: 59,
    revenue: 3500,
  },
  {
    name: "Mar",
    bookings: 80,
    revenue: 5000,
  },
  {
    name: "Apr",
    bookings: 81,
    revenue: 5100,
  },
  {
    name: "May",
    bookings: 56,
    revenue: 3200,
  },
  {
    name: "Jun",
    bookings: 55,
    revenue: 3100,
  },
  {
    name: "Jul",
    bookings: 40,
    revenue: 2400,
  },
  {
    name: "Aug",
    bookings: 70,
    revenue: 4300,
  },
  {
    name: "Sep",
    bookings: 90,
    revenue: 5800,
  },
  {
    name: "Oct",
    bookings: 110,
    revenue: 7000,
  },
  {
    name: "Nov",
    bookings: 85,
    revenue: 5400,
  },
  {
    name: "Dec",
    bookings: 120,
    revenue: 8000,
  },
]

export function AnalyticsChart() {
  return (
    <ChartContainer className="h-[350px]">
      <Chart>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
            <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
            <Tooltip content={<ChartTooltipContent />} />
            <Legend />
            <Bar yAxisId="left" dataKey="bookings" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            <Bar yAxisId="right" dataKey="revenue" fill="#82ca9d" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Chart>
      <ChartLegend className="mt-4">
        <ChartLegendItem name="Bookings" color="hsl(var(--primary))" />
        <ChartLegendItem name="Revenue ($)" color="#82ca9d" />
      </ChartLegend>
    </ChartContainer>
  )
}
