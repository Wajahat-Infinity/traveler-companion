"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "Jan",
    revenue: 4000,
    expenses: 2400,
    profit: 1600,
  },
  {
    name: "Feb",
    revenue: 3500,
    expenses: 2100,
    profit: 1400,
  },
  {
    name: "Mar",
    revenue: 5000,
    expenses: 3000,
    profit: 2000,
  },
  {
    name: "Apr",
    revenue: 5100,
    expenses: 3100,
    profit: 2000,
  },
  {
    name: "May",
    revenue: 3200,
    expenses: 2000,
    profit: 1200,
  },
  {
    name: "Jun",
    revenue: 3100,
    expenses: 1900,
    profit: 1200,
  },
  {
    name: "Jul",
    revenue: 2400,
    expenses: 1600,
    profit: 800,
  },
  {
    name: "Aug",
    revenue: 4300,
    expenses: 2600,
    profit: 1700,
  },
  {
    name: "Sep",
    revenue: 5800,
    expenses: 3500,
    profit: 2300,
  },
  {
    name: "Oct",
    revenue: 7000,
    expenses: 4200,
    profit: 2800,
  },
  {
    name: "Nov",
    revenue: 5400,
    expenses: 3200,
    profit: 2200,
  },
  {
    name: "Dec",
    revenue: 8000,
    expenses: 4800,
    profit: 3200,
  },
]

export function RevenueChart() {
  return (
    <div className="h-[350px] w-full">
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="expenses" stroke="#ff7300" />
          <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
