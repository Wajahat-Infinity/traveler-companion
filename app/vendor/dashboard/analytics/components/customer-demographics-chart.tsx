"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  {
    name: "18-24",
    male: 10,
    female: 15,
  },
  {
    name: "25-34",
    male: 25,
    female: 30,
  },
  {
    name: "35-44",
    male: 20,
    female: 25,
  },
  {
    name: "45-54",
    male: 15,
    female: 10,
  },
  {
    name: "55+",
    male: 10,
    female: 5,
  },
]

export function CustomerDemographicsChart() {
  return (
    <div className="h-[300px] w-full">
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
          <Bar dataKey="male" stackId="a" fill="#8884d8" />
          <Bar dataKey="female" stackId="a" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
