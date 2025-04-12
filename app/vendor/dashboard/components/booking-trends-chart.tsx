"use client"

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Jan",
    bookings: 65,
  },
  {
    name: "Feb",
    bookings: 59,
  },
  {
    name: "Mar",
    bookings: 80,
  },
  {
    name: "Apr",
    bookings: 81,
  },
  {
    name: "May",
    bookings: 56,
  },
  {
    name: "Jun",
    bookings: 55,
  },
]

export function BookingTrendsChart() {
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
          <Tooltip />
          <Area type="monotone" dataKey="bookings" stroke="#10b981" fill="#10b98133" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
