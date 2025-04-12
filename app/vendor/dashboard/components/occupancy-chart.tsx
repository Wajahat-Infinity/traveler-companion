"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { day: "1", occupancy: 65 },
  { day: "2", occupancy: 68 },
  { day: "3", occupancy: 70 },
  { day: "4", occupancy: 72 },
  { day: "5", occupancy: 75 },
  { day: "6", occupancy: 80 },
  { day: "7", occupancy: 85 },
  { day: "8", occupancy: 90 },
  { day: "9", occupancy: 92 },
  { day: "10", occupancy: 88 },
  { day: "11", occupancy: 85 },
  { day: "12", occupancy: 82 },
  { day: "13", occupancy: 80 },
  { day: "14", occupancy: 78 },
  { day: "15", occupancy: 75 },
  { day: "16", occupancy: 72 },
  { day: "17", occupancy: 70 },
  { day: "18", occupancy: 68 },
  { day: "19", occupancy: 65 },
  { day: "20", occupancy: 70 },
  { day: "21", occupancy: 75 },
  { day: "22", occupancy: 80 },
  { day: "23", occupancy: 85 },
  { day: "24", occupancy: 88 },
  { day: "25", occupancy: 90 },
  { day: "26", occupancy: 92 },
  { day: "27", occupancy: 88 },
  { day: "28", occupancy: 85 },
  { day: "29", occupancy: 82 },
  { day: "30", occupancy: 80 },
]

export function OccupancyChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis domain={[0, 100]} />
          <Tooltip formatter={(value) => [`${value}%`, "Occupancy"]} />
          <Legend />
          <Line type="monotone" dataKey="occupancy" stroke="#10b981" activeDot={{ r: 8 }} strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
