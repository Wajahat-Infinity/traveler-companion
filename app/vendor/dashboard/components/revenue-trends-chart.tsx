"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Jan",
    revenue: 400000,
  },
  {
    name: "Feb",
    revenue: 350000,
  },
  {
    name: "Mar",
    revenue: 500000,
  },
  {
    name: "Apr",
    revenue: 510000,
  },
  {
    name: "May",
    revenue: 320000,
  },
  {
    name: "Jun",
    revenue: 310000,
  },
  {
    name: "Jul",
    revenue: 240000,
  },
  {
    name: "Aug",
    revenue: 430000,
  },
  {
    name: "Sep",
    revenue: 580000,
  },
  {
    name: "Oct",
    revenue: 700000,
  },
  {
    name: "Nov",
    revenue: 540000,
  },
  {
    name: "Dec",
    revenue: 800000,
  },
]

export function RevenueTrendsChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={(value) => [`PKR ${value.toLocaleString()}`, "Revenue"]} />
          <Area type="monotone" dataKey="revenue" stroke="#10b981" fill="#10b98133" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
