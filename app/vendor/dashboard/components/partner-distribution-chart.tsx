"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Hotels", value: 42 },
  { name: "Tour Guides", value: 28 },
  { name: "Transport", value: 15 },
  { name: "Restaurants", value: 10 },
  { name: "Other Services", value: 5 },
]

const COLORS = ["#10b981", "#3b82f6", "#f59e0b", "#ec4899", "#6366f1"]

export function PartnerDistributionChart() {
  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `${value} partners`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
