"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Hotels",
    bookings: 120,
    revenue: 6000000,
  },
  {
    name: "Guides",
    bookings: 85,
    revenue: 2500000,
  },
  {
    name: "Transport",
    bookings: 65,
    revenue: 1800000,
  },
  {
    name: "Restaurants",
    bookings: 45,
    revenue: 900000,
  },
  {
    name: "Other",
    bookings: 30,
    revenue: 600000,
  },
]

export function PartnerPerformanceChart() {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis yAxisId="left" orientation="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip
            formatter={(value, name) => {
              if (name === "bookings") return [value, "Bookings"]
              if (name === "revenue") return [`PKR ${(value as number).toLocaleString()}`, "Revenue"]
              return [value, name]
            }}
          />
          <Legend />
          <Bar yAxisId="left" name="Bookings" dataKey="bookings" fill="#3b82f6" />
          <Bar yAxisId="right" name="Revenue (PKR)" dataKey="revenue" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
