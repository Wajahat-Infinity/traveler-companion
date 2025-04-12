"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Standard",
    rooms: 24,
    occupied: 18,
  },
  {
    name: "Deluxe",
    rooms: 12,
    occupied: 11,
  },
  {
    name: "Suite",
    rooms: 6,
    occupied: 4,
  },
  {
    name: "Family",
    rooms: 8,
    occupied: 7,
  },
]

export function RoomDistributionChart() {
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
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar name="Total Rooms" dataKey="rooms" fill="#94a3b8" />
          <Bar name="Occupied Rooms" dataKey="occupied" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
